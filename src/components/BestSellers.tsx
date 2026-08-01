import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Product, CategoryId } from '../types';
import { Star, Heart, Flame, Zap, ShoppingCart, Check, Clock, Sparkles, Filter } from 'lucide-react';

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
  theme?: 'light' | 'dark';
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
  theme = 'light',
}) => {
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(10);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const isLight = theme === 'light';

  // Live countdown timer for Temu/AliExpress Flash Sale vibe
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 12, seconds: 35 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 6, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Filter products by active category
  const filteredProducts = products.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.categoryId === activeCategory;
  });

  // To simulate Temu/AliExpress infinite scroll seamlessly, we repeat items if category list is small
  const displayProducts = React.useMemo(() => {
    if (filteredProducts.length === 0) return [];
    if (filteredProducts.length >= visibleCount) return filteredProducts.slice(0, visibleCount);
    // Fill up to visibleCount by cycling if needed for infinite scroll test
    const list = [...filteredProducts];
    while (list.length < visibleCount && list.length < 50) {
      list.push(...filteredProducts);
    }
    return list;
  }, [filteredProducts, visibleCount]);

  // Infinite Scroll Observer
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const handleLoadMore = useCallback(() => {
    if (isLoadingMore || visibleCount >= 40) return;
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 6, 40));
      setIsLoadingMore(false);
    }, 600);
  }, [isLoadingMore, visibleCount]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          handleLoadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [handleLoadMore]);

  // Add to cart click
  const handleAddToCartClick = (e: React.MouseEvent, p: Product) => {
    e.stopPropagation();
    onAddToCart(p, 250);
    setAddedAnimationId(p.id);
    setTimeout(() => setAddedAnimationId(null), 1200);
  };

  // Helper to format sales count like Temu (e.g. 4.2K+ Sold / +4.2K مباع)
  const getSalesCountText = (product: Product) => {
    const rawSales = Math.floor(product.reviewsCount * 28 + (product.priceOmr * 30));
    if (rawSales >= 1000) {
      return `${(rawSales / 1000).toFixed(1)}K+ مباع`;
    }
    return `${rawSales}+ مباع`;
  };

  return (
    <section id="shop-catalog" className="py-6 sm:py-10 bg-[#F5F5F7] text-[#1D1D1F]">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        
        {/* Temu/AliExpress Flash Header Bar - Omani Roastery Warm Coffee Identity */}
        <div className="bg-gradient-to-r from-[#120E0C] via-[#241B17] to-[#1B1512] text-white p-3 rounded-2xl shadow-md mb-4 flex flex-col sm:flex-row items-center justify-between gap-2 border border-[#D7AE63]/30">
          <div className="flex items-center gap-2">
            <span className="bg-[#D7AE63]/20 p-1.5 rounded-lg border border-[#D7AE63]/30 backdrop-blur-sm animate-pulse">
              <Zap className="w-5 h-5 text-[#F3E2BE] fill-[#F3E2BE]" />
            </span>
            <div>
              <h2 className="font-cairo text-sm sm:text-base font-extrabold text-[#F3E2BE] leading-tight">
                عروض الخصم الفائق السريعة ⚡
              </h2>
              <p className="text-[11px] text-[#E8DCCB]">
                محاصيل طازجة بأسعار المحمصة التنافسية • توصيل سريع لجميع المحافظات
              </p>
            </div>
          </div>

          {/* Flash Timer */}
          <div className="flex items-center gap-1.5 bg-[#120E0C]/80 px-3 py-1.5 rounded-xl border border-[#D7AE63]/30 backdrop-blur-md">
            <Clock className="w-3.5 h-3.5 text-[#D7AE63]" />
            <span className="text-[11px] font-bold text-[#F3E2BE]">ينتهي خلال:</span>
            <span className="font-mono font-bold text-xs bg-[#241B17] px-1.5 py-0.5 rounded text-[#D7AE63] border border-[#D7AE63]/20">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-xs text-[#D7AE63]">:</span>
            <span className="font-mono font-bold text-xs bg-[#241B17] px-1.5 py-0.5 rounded text-[#D7AE63] border border-[#D7AE63]/20">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-xs text-[#D7AE63]">:</span>
            <span className="font-mono font-bold text-xs bg-[#241B17] px-1.5 py-0.5 rounded text-[#D7AE63] border border-[#D7AE63]/20">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Category Sticky Filters - Horizontal Scrollable Pills */}
        <div className="sticky top-[60px] z-30 bg-[#F5F5F7]/95 backdrop-blur-md py-2.5 mb-2 -mx-2 px-2 overflow-x-auto scrollbar-none flex items-center gap-2 border-b border-gray-200">
          <div className="flex items-center gap-1 pl-2 text-xs font-bold text-gray-500 shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#9B6B3A]" />
            <span>الأقسام:</span>
          </div>
          {[
            { id: 'all' as CategoryId, label: '🔥 الكل', badge: 'الشائع' },
            { id: 'arabic-omani' as CategoryId, label: 'القهوة العمانية', badge: 'ملكي' },
            { id: 'specialty' as CategoryId, label: 'القهوة المختصة', badge: 'SCA' },
            { id: 'beans' as CategoryId, label: 'حبوب البن', badge: 'طازج' },
            { id: 'nuts-dates' as CategoryId, label: 'المكسرات والتمور', badge: 'فاخر' },
            { id: 'gifts' as CategoryId, label: 'الهدايا', badge: 'خصم' },
            { id: 'tools' as CategoryId, label: 'أدوات القهوة', badge: 'جديد' },
          ].map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  onCategoryChange(tab.id);
                  setVisibleCount(10);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 border shrink-0 ${
                  isActive
                    ? 'bg-[#1B1512] text-[#F3E2BE] border-[#D7AE63] shadow-sm'
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-[#F9F6F0] hover:text-[#1B1512]'
                }`}
              >
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-extrabold ${
                    isActive ? 'bg-[#D7AE63] text-[#120E0C]' : 'bg-[#EFE8DE] text-[#9B6B3A]'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Product Mobile-First 2-Column Grid (AliExpress & Temu Exact CSS Specs) */}
        <div className="products-grid">
          {displayProducts.map((product, index) => {
            const isWishlisted = wishlistIds.includes(product.id);
            const displayPrice = currency === 'OMR' ? `${product.priceOmr.toFixed(3)} ر.ع` : `$${product.priceUsd.toFixed(2)}`;
            const origPrice = product.originalPriceOmr
              ? currency === 'OMR'
                ? `${product.originalPriceOmr.toFixed(3)} ر.ع`
                : `$${(product.originalPriceOmr * 2.6).toFixed(2)}`
              : currency === 'OMR'
              ? `${(product.priceOmr * 1.25).toFixed(3)} ر.ع`
              : `$${(product.priceUsd * 1.25).toFixed(2)}`;

            const salesText = getSalesCountText(product);

            return (
              <div
                key={`${product.id}-${index}`}
                onClick={() => onQuickView(product)}
                className="product-card group relative flex flex-col justify-between cursor-pointer select-none h-full"
              >
                {/* Product Image Container - 1:1 Aspect Ratio (Square) */}
                <div className="relative overflow-hidden w-full aspect-square bg-[#F9F6F0]">
                  <img
                    src={product.image}
                    alt={product.nameAr}
                    loading="lazy"
                    decoding="async"
                    className="product-image group-hover:scale-105 transition-transform duration-300 ease-out"
                  />

                  {/* Top Right Promo Badge */}
                  <div className="absolute top-1.5 right-1.5 z-10 flex flex-col gap-1 items-end">
                    {product.isBestSeller ? (
                      <span className="bg-[#1B1512] text-[#F3E2BE] border border-[#D7AE63]/40 text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                        <Flame className="w-2.5 h-2.5 text-[#D7AE63] fill-[#D7AE63]" />
                        الأكثر مبيعاً
                      </span>
                    ) : product.isLimited ? (
                      <span className="bg-[#9B6B3A] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                        <Zap className="w-2.5 h-2.5 fill-current" />
                        عرض اليوم
                      </span>
                    ) : product.isNew ? (
                      <span className="bg-[#241B17] text-[#D7AE63] border border-[#D7AE63]/30 text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 fill-current" />
                        وصل حديثاً
                      </span>
                    ) : (
                      <span className="bg-[#B78A5C] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-sm">
                        تخفيض 20%
                      </span>
                    )}
                  </div>

                  {/* Wishlist Heart Button Top Left */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product);
                    }}
                    className={`absolute top-1.5 left-1.5 w-7 h-7 rounded-full flex items-center justify-center transition-all z-10 ${
                      isWishlisted
                        ? 'bg-[#1B1512] text-[#D7AE63] shadow-md scale-105 border border-[#D7AE63]/50'
                        : 'bg-white/85 hover:bg-white text-gray-700 backdrop-blur-md shadow-sm'
                    }`}
                    aria-label="إضافة للمفضلة"
                  >
                    <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-[#D7AE63] text-[#D7AE63]' : ''}`} />
                  </button>
                </div>

                {/* Product Card Details */}
                <div className="p-2.5 sm:p-3 flex flex-col flex-grow justify-between text-right bg-white">
                  <div>
                    {/* Sales Count & Origin Badge */}
                    <div className="flex items-center justify-between text-[10px] text-gray-500 mb-1 font-medium">
                      <span className="text-[#9B6B3A] font-extrabold flex items-center gap-0.5">
                        <Flame className="w-3 h-3 text-[#9B6B3A] fill-[#9B6B3A]" />
                        {salesText}
                      </span>
                      <span className="truncate max-w-[80px] bg-[#F9F6F0] text-[#4E382A] px-1.5 py-0.2 rounded border border-[#EFE8DE]">
                        {product.originCountry.split(' ')[0]}
                      </span>
                    </div>

                    {/* Product Name (1 or 2 lines ellipsis) */}
                    <h3 className="font-cairo text-xs sm:text-sm font-bold text-[#1D1D1F] line-clamp-2 leading-snug mb-1 group-hover:text-[#9B6B3A] transition-colors">
                      {product.nameAr}
                    </h3>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1 text-[11px] mb-2 text-[#9B6B3A] font-bold">
                      <Star className="w-3 h-3 fill-[#D7AE63] text-[#D7AE63]" />
                      <span>{product.rating.toFixed(1)}</span>
                      <span className="text-gray-400 font-normal text-[10px]">({product.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Price & Add to Cart Circle Button */}
                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between mt-auto">
                    {/* Price Column */}
                    <div className="flex flex-col text-right">
                      <span className="font-extrabold text-sm sm:text-base text-[#9B6B3A] leading-none font-cairo">
                        {displayPrice}
                      </span>
                      {origPrice && (
                        <span className="text-[10px] text-gray-400 line-through leading-none mt-1 font-medium">
                          {origPrice}
                        </span>
                      )}
                    </div>

                    {/* Circular Add-to-Cart Action Button */}
                    <button
                      onClick={(e) => handleAddToCartClick(e, product)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm active:scale-90 ${
                        addedAnimationId === product.id
                          ? 'bg-[#10B981] text-white scale-105'
                          : 'bg-[#1B1512] hover:bg-[#9B6B3A] text-[#F3E2BE]'
                      }`}
                      title="أضف إلى السلة"
                      aria-label={`أضف ${product.nameAr} للسلة`}
                    >
                      {addedAnimationId === product.id ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <ShoppingCart className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Infinite Scroll Trigger Indicator */}
        <div ref={loadMoreRef} className="py-8 text-center flex flex-col items-center justify-center gap-2">
          {isLoadingMore ? (
            <div className="flex items-center gap-2 text-xs text-[#9B6B3A] font-bold animate-pulse">
              <div className="w-4 h-4 border-2 border-[#9B6B3A] border-t-transparent rounded-full animate-spin"></div>
              <span>جاري تحميل المزيد من المحاصيل والعروض...</span>
            </div>
          ) : visibleCount < 40 ? (
            <button
              onClick={handleLoadMore}
              className="px-6 py-2.5 bg-white text-[#1B1512] border border-[#9B6B3A]/40 rounded-full text-xs font-bold hover:bg-[#1B1512] hover:text-[#F3E2BE] transition-all shadow-sm"
            >
              عرض المزيد من المحاصيل 🔥
            </button>
          ) : (
            <span className="text-xs text-gray-400 font-medium">
              وصلت إلى نهاية قائمة المحاصيل والمنتجات المتاحة ✨
            </span>
          )}
        </div>

      </div>
    </section>
  );
};
