/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback, useMemo } from 'react';
import { PRODUCTS } from './data/products';
import { Product, CartItem, CategoryId, GrindType } from './types';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { BestSellers } from './components/BestSellers';
import { ProductDetailModal } from './components/ProductDetailModal';
import { BrewingCalculator } from './components/BrewingCalculator';
import { OurStory } from './components/OurStory';
import { Features } from './components/Features';
import { GiftSection } from './components/GiftSection';
import { Testimonials } from './components/Testimonials';
import { InstagramGrid } from './components/InstagramGrid';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { CoffeeFinderQuiz } from './components/CoffeeFinderQuiz';
import { CoffeeSubscriptionBanner } from './components/CoffeeSubscriptionBanner';

import { Check } from 'lucide-react';

export default function App() {
  // App view state
  const [currency, setCurrency] = useState<'OMR' | 'USD'>('OMR');
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Apple-inspired Theme State (light default or stored)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('alasalah_theme');
    return (saved === 'dark' || saved === 'light') ? saved : 'light';
  });

  const handleToggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('alasalah_theme', next);
      return next;
    });
  }, []);

  // E-commerce state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistProducts, setWishlistProducts] = useState<Product[]>([]);
  
  // Modals & Drawers state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartInitialStep, setCartInitialStep] = useState<'cart' | 'address'>('cart');
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBrewingCalcOpen, setIsBrewingCalcOpen] = useState(false);
  const [selectedProductView, setSelectedProductView] = useState<Product | null>(null);

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  }, []);

  // Cart operations
  const handleAddToCart = useCallback((
    product: Product,
    weightGrams: number = 250,
    grind: GrindType = 'حبوب كاملة (Whole Beans)',
    quantity: number = 1
  ) => {
    const weightObj = product.weights.find((w) => w.grams === weightGrams) || product.weights[0];
    const unitPriceOmr = product.priceOmr * weightObj.priceMultiplier;

    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedWeight === weightObj.label &&
          item.selectedGrind === grind
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            product,
            selectedWeight: weightObj.label,
            selectedGrind: grind,
            quantity,
            unitPriceOmr,
          },
        ];
      }
    });

    showToast(`تمت إضافة "${product.nameAr}" إلى السلة`);
  }, [showToast]);

  const handleExpressBuy = useCallback((
    product: Product,
    weightGrams: number = 250,
    grind: GrindType = 'حبوب كاملة (Whole Beans)',
    quantity: number = 1
  ) => {
    handleAddToCart(product, weightGrams, grind, quantity);
    setCartInitialStep('address');
    setIsCartOpen(true);
  }, [handleAddToCart]);

  const handleUpdateCartQuantity = useCallback((index: number, qty: number) => {
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = qty;
      return updated;
    });
  }, []);

  const handleRemoveCartItem = useCallback((index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
    showToast('تمت إزالة المنتج من السلة');
  }, [showToast]);

  const handleClearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  // Wishlist operations
  const handleToggleWishlist = useCallback((product: Product) => {
    setWishlistProducts((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showToast('تمت إزالة المنتج من المفضلة');
        return prev.filter((p) => p.id !== product.id);
      } else {
        showToast('تم حفظ المنتج في المفضلة');
        return [...prev, product];
      }
    });
  }, [showToast]);

  // Navigation handlers
  const handleCategorySelect = useCallback((catId: CategoryId) => {
    setActiveCategory(catId);
    const catalogEl = document.getElementById('shop-catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Memoized Total Cart Computations for Header & Floating Bar
  const cartTotalQuantity = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.quantity, 0),
    [cartItems]
  );

  const cartTotalOmr = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.unitPriceOmr * item.quantity, 0),
    [cartItems]
  );

  const wishlistIds = useMemo(
    () => wishlistProducts.map((p) => p.id),
    [wishlistProducts]
  );

  // Render main website layout content
  const renderStorefrontContent = () => (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'light' ? 'bg-[#FBFBFD] text-[#1D1D1F]' : 'bg-[#120E0C] text-[#F7F2EA]'
    }`}>
      {/* Navigation Header */}
      <Header
        cartCount={cartTotalQuantity}
        wishlistCount={wishlistProducts.length}
        onOpenCart={() => {
          setCartInitialStep('cart');
          setIsCartOpen(true);
        }}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigateCategory={handleCategorySelect}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero
          onShopNow={() => handleCategorySelect('all')}
          onExplore={() => {
            const el = document.getElementById('coffee-quiz');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          theme={theme}
        />

        {/* Category Cards */}
        <CategorySection
          activeCategory={activeCategory}
          onSelectCategory={handleCategorySelect}
          theme={theme}
        />

        {/* Coffee Finder Quiz */}
        <div id="coffee-quiz" className="cv-auto">
          <CoffeeFinderQuiz
            products={PRODUCTS}
            onAddToCart={handleAddToCart}
            onExpressBuy={handleExpressBuy}
            currency={currency}
          />
        </div>

        {/* Best Sellers & Product Catalog */}
        <BestSellers
          products={PRODUCTS}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onAddToCart={handleAddToCart}
          onExpressBuy={handleExpressBuy}
          onQuickView={(p) => setSelectedProductView(p)}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
          currency={currency}
          theme={theme}
        />

        {/* Coffee Autoship Subscription Engine */}
        <div className="cv-auto">
          <CoffeeSubscriptionBanner
            products={PRODUCTS}
            onSubscribe={(product, freq) => {
              handleExpressBuy(product, 250, 'حبوب كاملة (Whole Beans)');
              showToast(`تم بدء طلب اشتراكك (${freq === 'weekly' ? 'أسبوعي' : freq === 'biweekly' ? 'كل أسبوعين' : 'شهري'}) لمنتج ${product.nameAr}`);
            }}
            currency={currency}
          />
        </div>

        {/* Story Section */}
        <div className="cv-auto">
          <OurStory />
        </div>

        {/* Brand Guarantees Features */}
        <div className="cv-auto">
          <Features />
        </div>

        {/* Gift Section */}
        <div className="cv-auto">
          <GiftSection
            onSelectGift={(p) => setSelectedProductView(p)}
            giftProduct={PRODUCTS.find((p) => p.id === 'luxury-royal-gift-box')}
          />
        </div>

        {/* Testimonials */}
        <div className="cv-auto">
          <Testimonials />
        </div>

        {/* Instagram Lifestyle Gallery */}
        <div className="cv-auto">
          <InstagramGrid />
        </div>

        {/* Branch Locations & Tasting Sessions */}
        <div className="cv-auto">
          <LocationSection />
        </div>
      </main>

      {/* Sticky Express Floating Cart Bar for High Conversions */}
      {cartItems.length > 0 && !isCartOpen && (
        <div className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-md p-3 rounded-2xl border shadow-2xl flex items-center justify-between backdrop-blur-md animate-fadeIn gpu-accelerated ${
          theme === 'light'
            ? 'bg-white/90 text-[#1D1D1F] border-[#000000]/10 shadow-[0_15px_30px_rgba(0,0,0,0.12)]'
            : 'bg-[#1B1512] text-[#F7F2EA] border-[#D7AE63]/50 shadow-[0_15px_40px_rgba(0,0,0,0.6)]'
        }`}>
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className={`w-9 h-9 rounded-xl font-black text-xs flex items-center justify-center shadow-md ${
                theme === 'light'
                  ? 'bg-[#1D1D1F] text-white'
                  : 'bg-gradient-to-r from-[#F3E2BE] to-[#D7AE63] text-[#120E0C]'
              }`}>
                {cartTotalQuantity}
              </span>
            </div>
            <div className="text-xs">
              <span className={`block font-bold ${theme === 'light' ? 'text-[#1D1D1F]' : 'text-[#F3E2BE]'}`}>سلة التسوق المباشرة</span>
              <span className={`text-[11px] ${theme === 'light' ? 'text-[#6E6E73]' : 'text-[#E8DCCB]'}`}>
                إجمالي: {currency === 'OMR' ? `${cartTotalOmr.toFixed(3)} ر.ع` : `$${(cartTotalOmr * 2.6).toFixed(2)}`}
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              setCartInitialStep('address');
              setIsCartOpen(true);
            }}
            className={`px-4 py-2 font-black text-xs rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 ${
              theme === 'light'
                ? 'bg-[#1D1D1F] text-white hover:bg-[#3A3A3C]'
                : 'btn-champagne-primary text-[#120E0C]'
            }`}
          >
            <span>إتمام الشراء الآن</span>
            <span>➔</span>
          </button>
        </div>
      )}

      {/* Footer */}
      <Footer theme={theme} />
    </div>
  );

  return (
    <div className={`min-h-screen selection:bg-[#9B6B3A] selection:text-white font-['Cairo','IBM_Plex_Sans_Arabic','Alexandria',sans-serif] relative transition-colors duration-300 ${
      theme === 'light' ? 'bg-[#FBFBFD] text-[#1D1D1F]' : 'bg-[#1B1512] text-[#F7F2EA]'
    }`}>
      
      {/* Toast Notification with Direct Checkout Action */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 z-50 bg-[#1B1512] text-[#F3E2BE] px-5 py-3 rounded-2xl border border-[#D7AE63]/50 shadow-2xl flex items-center gap-3 text-xs font-bold animate-bounce gpu-accelerated">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
          <button
            onClick={() => {
              setCartInitialStep('cart');
              setIsCartOpen(true);
              setToastMessage(null);
            }}
            className="px-2.5 py-1 bg-[#D7AE63] text-[#120E0C] rounded-lg text-[10px] font-bold hover:bg-white transition-colors mr-2"
          >
            عرض السلة والدفع ➔
          </button>
        </div>
      )}

      {/* Main Storefront Content */}
      {renderStorefrontContent()}

      {/* Modals & Drawers - Rendered conditionally to keep DOM lightweight & fast */}
      {selectedProductView && (
        <ProductDetailModal
          product={selectedProductView}
          onClose={() => setSelectedProductView(null)}
          onAddToCart={handleAddToCart}
          onExpressBuy={handleExpressBuy}
          currency={currency}
          onToggleWishlist={handleToggleWishlist}
          isWishlisted={wishlistProducts.some((p) => p.id === selectedProductView.id)}
        />
      )}

      {isBrewingCalcOpen && (
        <BrewingCalculator
          isOpen={isBrewingCalcOpen}
          onClose={() => setIsBrewingCalcOpen(false)}
        />
      )}

      {isCartOpen && (
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateCartQuantity}
          onRemoveItem={handleRemoveCartItem}
          currency={currency}
          onClearCart={handleClearCart}
          initialStep={cartInitialStep}
        />
      )}

      {isWishlistOpen && (
        <WishlistDrawer
          isOpen={isWishlistOpen}
          onClose={() => setIsWishlistOpen(false)}
          wishlistProducts={wishlistProducts}
          onRemoveFromWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
          currency={currency}
        />
      )}

      {isSearchOpen && (
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          products={PRODUCTS}
          onSelectProduct={(p) => setSelectedProductView(p)}
          currency={currency}
        />
      )}

    </div>
  );
}
