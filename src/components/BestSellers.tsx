import React, { useState } from 'react';
import { Product, CategoryId } from '../types';
import { Star, Plus, Eye, Flame, MapPin, Heart, Sparkles, Check, Zap } from 'lucide-react';

interface BestSellersProps {
  products: Product[];
  activeCategory: CategoryId;
  onCategoryChange: (cat: CategoryId) => void;
  onAddToCart: (product: Product, weightGrams: number) => void;
  onExpressBuy?: (product: Product, weightGrams: number) => void;
  onQuickView: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  currency: 'OMR' | 'USD';
}

export const BestSellers: React.FC<BestSellersProps> = ({
  products,
  activeCategory,
  onCategoryChange,
  onAddToCart,
  onExpressBuy,
  onQuickView,
  onToggleWishlist,
  wishlistIds,
  currency,
}) => {
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);

  const filteredProducts = products.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.categoryId === activeCategory;
  });

  const handleAddToCartClick = (e: React.MouseEvent, p: Product) => {
    e.stopPropagation();
    onAddToCart(p, 250);
    setAddedAnimationId(p.id);
    setTimeout(() => setAddedAnimationId(null), 1500);
  };

  const handleExpressBuyClick = (e: React.MouseEvent, p: Product) => {
    e.stopPropagation();
    if (onExpressBuy) {
      onExpressBuy(p, 250);
    } else {
      onAddToCart(p, 250);
    }
  };

  return (
    <section id="shop-catalog" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header and Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#EFE8DE] pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#B78A5C] bg-[#B78A5C]/10 px-3.5 py-1.5 rounded-full border border-[#B78A5C]/20 inline-block mb-3 font-alexandria">
            المحتوى المختار
          </span>
          <h2 className="font-alexandria text-3xl sm:text-4xl font-black text-[#2B211B] leading-tight">
            الأكثر مبيعاً والمنتجات المميزة
          </h2>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'all' as CategoryId, label: 'الكل' },
            { id: 'arabic-omani' as CategoryId, label: 'القهوة العمانية' },
            { id: 'specialty' as CategoryId, label: 'المختصة' },
            { id: 'beans' as CategoryId, label: 'حبوب البن' },
            { id: 'nuts-dates' as CategoryId, label: 'المكسرات والتمور' },
            { id: 'gifts' as CategoryId, label: 'الهدايا' },
            { id: 'tools' as CategoryId, label: 'الأدوات' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => onCategoryChange(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                activeCategory === tab.id
                  ? 'bg-[#2B211B] text-[#F8F3EC] shadow-md ring-1 ring-[#C9A76A]'
                  : 'bg-[#F8F3EC] text-[#4A3326] border border-[#EFE8DE] hover:border-[#B78A5C]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product) => {
          const isWishlisted = wishlistIds.includes(product.id);
          const displayPrice = currency === 'OMR' ? `${product.priceOmr.toFixed(3)} ر.ع` : `$${product.priceUsd.toFixed(2)}`;
          const origPrice = product.originalPriceOmr
            ? currency === 'OMR'
              ? `${product.originalPriceOmr.toFixed(3)} ر.ع`
              : `$${(product.originalPriceOmr * 2.6).toFixed(2)}`
            : null;

          return (
            <div
              key={product.id}
              onClick={() => onQuickView(product)}
              className="group bg-[#F8F3EC] rounded-3xl border border-[#EFE8DE] hover:border-[#C9A76A]/50 hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer flex flex-col justify-between relative"
            >
              {/* Product Top Image Badge Container */}
              <div className="relative aspect-[4/3] bg-[#EFE8DE]/50 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.nameAr}
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="300"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Floating Badges */}
                <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10">
                  {product.isBestSeller && (
                    <span className="bg-[#2B211B] text-[#C9A76A] text-[10px] font-bold px-3 py-1 rounded-full border border-[#C9A76A]/40 backdrop-blur-md shadow-sm">
                      الأكثر مبيعاً
                    </span>
                  )}
                  {product.isLimited && (
                    <span className="bg-[#4A3326] text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20 backdrop-blur-md shadow-sm">
                      إصدار محدود
                    </span>
                  )}
                  {product.isNew && (
                    <span className="bg-[#B78A5C] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                      وصل حديثاً
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleWishlist(product);
                  }}
                  className={`absolute top-3 left-3 p-2.5 rounded-full transition-all duration-300 z-10 min-w-[40px] min-h-[40px] flex items-center justify-center ${
                    isWishlisted
                      ? 'bg-red-500 text-white shadow-md'
                      : 'bg-[#2B211B]/60 hover:bg-[#2B211B] text-white backdrop-blur-md'
                  }`}
                  aria-label={`إضافة ${product.nameAr} للمفضلة`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>

                {/* Quick View Hover Overlay */}
                <div className="absolute inset-0 bg-[#2B211B]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickView(product);
                    }}
                    aria-label={`عرض تفاصيل ${product.nameAr}`}
                    className="px-4 py-2.5 rounded-full bg-[#F8F3EC] text-[#2B211B] text-xs font-bold flex items-center gap-2 hover:bg-[#C9A76A] hover:text-[#2B211B] transition-colors shadow-lg min-h-[40px]"
                  >
                    <Eye className="w-4 h-4" />
                    <span>عرض التفاصيل</span>
                  </button>
                </div>
              </div>

              {/* Product Information Body */}
              <div className="p-6 flex flex-col flex-grow justify-between text-right">
                <div>
                  {/* Origin & Roast Level Bar */}
                  <div className="flex items-center justify-between text-xs text-[#4A3326] mb-2 font-medium">
                    <span className="flex items-center gap-1 font-bold text-[#8C5D2C]">
                      <MapPin className="w-3.5 h-3.5" />
                      {product.originCountry}
                    </span>
                    <span className="flex items-center gap-1 bg-[#B78A5C]/20 text-[#2B211B] px-2 py-0.5 rounded text-[11px] font-bold">
                      <Flame className="w-3 h-3 text-[#B78A5C]" />
                      {product.roastLevel}
                    </span>
                  </div>

                  {/* Product Title */}
                  <h3 className="font-alexandria text-lg font-bold text-[#2B211B] group-hover:text-[#8C5D2C] transition-colors mb-1.5 leading-snug">
                    {product.nameAr}
                  </h3>

                  {/* Subtitle / Description excerpt */}
                  <p className="text-xs text-[#4A3326] line-clamp-2 mb-3 leading-relaxed font-normal">
                    {product.subtitleAr}
                  </p>

                  {/* Flavor Notes Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.flavorNotes.slice(0, 3).map((note, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-[#EFE8DE] text-[#2B211B] font-bold px-2 py-0.5 rounded-full border border-[#B78A5C]/30"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Rating & Pricing Bottom Bar */}
                <div className="pt-4 border-t border-[#EFE8DE] flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-xs mb-1">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span className="font-bold text-[#2B211B]">{product.rating.toFixed(1)}/10</span>
                      <span className="text-[#4A3326] font-semibold text-[10px]">({product.reviewsCount})</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-lg text-[#2B211B]">{displayPrice}</span>
                      {origPrice && (
                        <span className="text-xs text-[#4A3326]/70 line-through font-medium">{origPrice}</span>
                      )}
                    </div>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={(e) => handleExpressBuyClick(e, product)}
                      className="px-3.5 py-2.5 bg-[#2B211B] text-[#C9A76A] hover:bg-[#4A3326] hover:text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1 border border-[#C9A76A]/40 active:scale-95 min-h-[40px]"
                      title="شراء سريع فوري"
                      aria-label={`شراء سريع لمنتج ${product.nameAr}`}
                    >
                      <Zap className="w-3.5 h-3.5 fill-current" />
                      <span>شراء</span>
                    </button>

                    <button
                      onClick={(e) => handleAddToCartClick(e, product)}
                      className={`p-2.5 rounded-xl transition-all duration-300 shadow-sm min-w-[40px] min-h-[40px] flex items-center justify-center ${
                        addedAnimationId === product.id
                          ? 'bg-emerald-600 text-white scale-110'
                          : 'bg-[#EFE8DE] text-[#2B211B] hover:bg-[#B78A5C] hover:text-white'
                      }`}
                      title="أضف إلى السلة"
                      aria-label={`أضف ${product.nameAr} إلى سلة التسوق`}
                    >
                      {addedAnimationId === product.id ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
