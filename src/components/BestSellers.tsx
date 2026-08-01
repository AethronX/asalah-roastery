import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Product, CategoryId } from '../types';
import { ShoppingCart, Check, Sparkles, Filter } from 'lucide-react';

interface BestSellersProps {
  products: Product[];
  activeCategory: CategoryId;
  onCategoryChange: (cat: CategoryId) => void;
  onAddToCart: (product: Product, weightGrams: number) => void;
  onExpressBuy?: (product: Product, weightGrams: number) => void;
  onQuickView: (product: Product) => void;
  currency: 'OMR' | 'USD';
  theme?: 'light' | 'dark';
}

export const BestSellers: React.FC<BestSellersProps> = ({
  products,
  activeCategory,
  onCategoryChange,
  onAddToCart,
  onQuickView,
  currency,
  theme = 'light',
}) => {
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(10);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const isLight = theme === 'light';

  // Filter products by active category
  const filteredProducts = products.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.categoryId === activeCategory;
  });

  const displayProducts = React.useMemo(() => {
    return filteredProducts.slice(0, visibleCount);
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

  return (
    <section id="shop-catalog" className={`py-12 sm:py-16 transition-colors duration-300 ${
      isLight ? 'bg-[#FAF8F5] text-[#1D1D1F]' : 'bg-[#181310] text-[#F7F2EA]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Roastery Collection Header Bar */}
        <div className={`p-4 sm:p-6 rounded-2xl shadow-sm mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border transition-colors ${
          isLight
            ? 'bg-white border-[#EFE7DD] text-[#1D1D1F]'
            : 'bg-[#241B17] border-[#D7AE63]/30 text-[#F7F2EA]'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl border flex items-center justify-center shrink-0 ${
              isLight ? 'bg-[#FAF6F0] border-[#9B6B3A]/20 text-[#9B6B3A]' : 'bg-[#1B1512] border-[#D7AE63]/40 text-[#F3E2BE]'
            }`}>
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className={`font-alexandria text-lg sm:text-2xl font-black leading-tight ${
                isLight ? 'text-[#1D1D1F]' : 'text-[#F3E2BE]'
              }`}>
                تشكيلة محاصيل ومنتجات الأصالة ☕
              </h2>
              <p className={`text-xs sm:text-base font-semibold mt-1 ${
                isLight ? 'text-[#3A3A3C]' : 'text-[#E8DCCB]'
              }`}>
                تصفح المحاصيل الفاخرة والطازجة المسجلة مباشرة من المحمصة
              </p>
            </div>
          </div>
        </div>

        {/* Category Sticky Filters - Horizontal Scrollable Pills */}
        <div className={`sticky top-[60px] z-30 py-3 mb-6 -mx-4 px-4 sm:-mx-6 sm:px-6 overflow-x-auto scrollbar-none flex items-center gap-2 border-b transition-colors backdrop-blur-md ${
          isLight
            ? 'bg-[#FAF8F5]/90 border-[#EFE7DD]'
            : 'bg-[#181310]/90 border-[#D7AE63]/20'
        }`}>
          <div className={`flex items-center gap-1.5 pl-2 text-xs font-bold shrink-0 ${
            isLight ? 'text-[#734726]' : 'text-[#D7AE63]'
          }`}>
            <Filter className="w-3.5 h-3.5" />
            <span>الأقسام:</span>
          </div>
          {[
            { id: 'all' as CategoryId, label: 'الكل' },
            { id: 'arabic-omani' as CategoryId, label: 'القهوة العمانية' },
            { id: 'specialty' as CategoryId, label: 'القهوة المختصة' },
            { id: 'beans' as CategoryId, label: 'حبوب البن' },
            { id: 'nuts-dates' as CategoryId, label: 'المكسرات والتمور' },
            { id: 'gifts' as CategoryId, label: 'الهدايا' },
            { id: 'tools' as CategoryId, label: 'أدوات القهوة' },
          ].map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  onCategoryChange(tab.id);
                  setVisibleCount(10);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-1.5 border shrink-0 min-h-[38px] ${
                  isActive
                    ? isLight
                      ? 'bg-[#1D1D1F] text-white border-[#1D1D1F] shadow-md'
                      : 'bg-[#D7AE63] text-[#120E0C] border-[#D7AE63] shadow-md'
                    : isLight
                      ? 'bg-white text-[#424245] border-[#EFE7DD] hover:bg-[#FAF6F0] hover:text-[#1D1D1F]'
                      : 'bg-[#241B17] text-[#E8DCCB] border-[#D7AE63]/20 hover:bg-[#2C211C] hover:text-[#F3E2BE]'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Product Mobile-First 2-Column Grid */}
        <div className="products-grid">
          {displayProducts.map((product, index) => {
            const displayPrice = currency === 'OMR' ? `${product.priceOmr.toFixed(3)} ر.ع` : `$${product.priceUsd.toFixed(2)}`;

            return (
              <div
                key={`${product.id}-${index}`}
                onClick={() => onQuickView(product)}
                className={`product-card group relative flex flex-col justify-between cursor-pointer select-none h-full transition-all duration-300 rounded-2xl overflow-hidden border ${
                  isLight
                    ? 'bg-white border-[#EFE7DD] hover:border-[#9B6B3A]/40 hover:shadow-xl'
                    : 'bg-[#241B17] border-[#D7AE63]/20 hover:border-[#D7AE63]/50 hover:shadow-2xl'
                }`}
              >
                {/* Product Image Container - 1:1 Aspect Ratio (Square) */}
                <div className={`relative overflow-hidden w-full aspect-square ${
                  isLight ? 'bg-[#FAF6F0]' : 'bg-[#1D1613]'
                }`}>
                  <img
                    src={product.image}
                    alt={product.nameAr}
                    loading="lazy"
                    decoding="async"
                    className="product-image group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Product Card Details */}
                <div className={`p-3 sm:p-4 flex flex-col flex-grow justify-between text-right transition-colors ${
                  isLight ? 'bg-white' : 'bg-[#241B17]'
                }`}>
                  <div>
                    {/* Origin Badge */}
                    <div className="flex items-center justify-between text-xs mb-2 font-bold">
                      <span className={`px-2.5 py-0.5 rounded-full border text-[11px] sm:text-xs font-extrabold ${
                        isLight
                          ? 'bg-[#FAF6F0] text-[#8A5A2B] border-[#EFE7DD]'
                          : 'bg-[#1B1512] text-[#F3E2BE] border-[#D7AE63]/40'
                      }`}>
                        {product.originCountry}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className={`font-alexandria text-xs sm:text-base font-extrabold line-clamp-2 leading-snug sm:leading-relaxed mb-3 transition-colors ${
                      isLight
                        ? 'text-[#1D1D1F] group-hover:text-[#9B6B3A]'
                        : 'text-[#F7F2EA] group-hover:text-[#F3E2BE]'
                    }`}>
                      {product.nameAr}
                    </h3>
                  </div>

                  {/* Price & Add to Cart Circle Button */}
                  <div className={`pt-2.5 border-t flex items-center justify-between mt-auto ${
                    isLight ? 'border-[#EFE7DD]' : 'border-[#D7AE63]/15'
                  }`}>
                    {/* Price Column */}
                    <div className="flex flex-col text-right">
                      <span className={`font-black text-sm sm:text-lg font-alexandria leading-none ${
                        isLight ? 'text-[#1D1D1F]' : 'text-[#F3E2BE]'
                      }`}>
                        {displayPrice}
                      </span>
                    </div>

                    {/* Circular Add-to-Cart Action Button */}
                    <button
                      onClick={(e) => handleAddToCartClick(e, product)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 ${
                        addedAnimationId === product.id
                          ? 'bg-emerald-600 text-white scale-105'
                          : isLight
                            ? 'bg-[#1D1D1F] hover:bg-[#9B6B3A] text-white'
                            : 'bg-[#D7AE63] hover:bg-[#F3E2BE] text-[#120E0C]'
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
              <span>جاري تحميل المزيد من المحاصيل...</span>
            </div>
          ) : visibleCount < 40 ? (
            <button
              onClick={handleLoadMore}
              className="px-6 py-2.5 bg-white text-[#1B1512] border border-[#9B6B3A]/40 rounded-full text-xs font-bold hover:bg-[#1B1512] hover:text-[#F3E2BE] transition-all shadow-sm"
            >
              عرض المزيد من المحاصيل ✨
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
