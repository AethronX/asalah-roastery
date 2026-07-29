/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Cart operations
  const handleAddToCart = (
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
  };

  const handleExpressBuy = (
    product: Product,
    weightGrams: number = 250,
    grind: GrindType = 'حبوب كاملة (Whole Beans)',
    quantity: number = 1
  ) => {
    handleAddToCart(product, weightGrams, grind, quantity);
    setCartInitialStep('address');
    setIsCartOpen(true);
  };

  const handleUpdateCartQuantity = (index: number, qty: number) => {
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = qty;
      return updated;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
    showToast('تمت إزالة المنتج من السلة');
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Wishlist operations
  const handleToggleWishlist = (product: Product) => {
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
  };

  // Navigation handlers
  const handleCategorySelect = (catId: CategoryId) => {
    setActiveCategory(catId);
    const catalogEl = document.getElementById('shop-catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Render main website layout content
  const renderStorefrontContent = () => (
    <div className="min-h-screen bg-[#F8F3EC] text-[#2B211B]">
      {/* Navigation Header */}
      <Header
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
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
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onShopNow={() => handleCategorySelect('all')}
          onExplore={() => {
            const el = document.getElementById('coffee-quiz');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Category Cards */}
        <CategorySection
          activeCategory={activeCategory}
          onSelectCategory={handleCategorySelect}
        />

        {/* Coffee Finder Quiz (Inspired by Blue Bottle & Onyx) */}
        <div id="coffee-quiz">
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
          wishlistIds={wishlistProducts.map((p) => p.id)}
          currency={currency}
        />

        {/* Coffee Autoship Subscription Engine */}
        <CoffeeSubscriptionBanner
          products={PRODUCTS}
          onSubscribe={(product, freq) => {
            handleExpressBuy(product, 250, 'حبوب كاملة (Whole Beans)');
            setToastMessage(`تم بدء طلب اشتراكك (${freq === 'weekly' ? 'أسبوعي' : freq === 'biweekly' ? 'كل أسبوعين' : 'شهري'}) لمنتج ${product.nameAr}`);
          }}
          currency={currency}
        />

        {/* Story Section */}
        <OurStory />

        {/* Brand Guarantees Features */}
        <Features />

        {/* Gift Section */}
        <GiftSection
          onSelectGift={(p) => setSelectedProductView(p)}
          giftProduct={PRODUCTS.find((p) => p.id === 'luxury-royal-gift-box')}
        />

        {/* Testimonials */}
        <Testimonials />

        {/* Instagram Lifestyle Gallery */}
        <InstagramGrid />

        {/* Branch Locations & Tasting Sessions */}
        <LocationSection />
      </main>

      {/* Sticky Express Floating Cart Bar for High Conversions */}
      {cartItems.length > 0 && !isCartOpen && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-md bg-[#2B211B] text-[#F8F3EC] p-3 rounded-2xl border border-[#C9A76A]/50 shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex items-center justify-between backdrop-blur-md animate-fadeIn">
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="w-9 h-9 rounded-xl bg-[#C9A76A] text-[#2B211B] font-bold text-xs flex items-center justify-center">
                {cartItems.reduce((acc, i) => acc + i.quantity, 0)}
              </span>
            </div>
            <div className="text-xs">
              <span className="block text-[#C9A76A] font-bold">سلة التسوق المباشرة</span>
              <span className="text-[11px] text-white/70">
                إجمالي: {currency === 'OMR' ? `${cartItems.reduce((acc, item) => acc + item.unitPriceOmr * item.quantity, 0).toFixed(3)} ر.ع` : `$${(cartItems.reduce((acc, item) => acc + item.unitPriceOmr * item.quantity, 0) * 2.6).toFixed(2)}`}
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              setCartInitialStep('address');
              setIsCartOpen(true);
            }}
            className="px-4 py-2 bg-gradient-to-r from-[#B78A5C] to-[#C9A76A] text-[#2B211B] font-bold text-xs rounded-xl hover:shadow-lg transition-all flex items-center gap-1.5"
          >
            <span>إتمام الشراء الآن</span>
            <span>➔</span>
          </button>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#2B211B] text-[#F8F3EC] selection:bg-[#B78A5C] selection:text-white font-['IBM_Plex_Sans_Arabic','Tajawal','Alexandria',sans-serif] relative">
      
      {/* Toast Notification with Direct Checkout Action */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 z-50 bg-[#2B211B] text-[#C9A76A] px-5 py-3 rounded-2xl border border-[#C9A76A]/50 shadow-2xl flex items-center gap-3 text-xs font-bold animate-bounce">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
          <button
            onClick={() => {
              setCartInitialStep('cart');
              setIsCartOpen(true);
              setToastMessage(null);
            }}
            className="px-2.5 py-1 bg-[#C9A76A] text-[#2B211B] rounded-lg text-[10px] font-bold hover:bg-white transition-colors mr-2"
          >
            عرض السلة والدفع ➔
          </button>
        </div>
      )}

      {/* Main Storefront Content */}
      {renderStorefrontContent()}

      {/* Modals & Drawers */}
      <ProductDetailModal
        product={selectedProductView}
        onClose={() => setSelectedProductView(null)}
        onAddToCart={handleAddToCart}
        onExpressBuy={handleExpressBuy}
        currency={currency}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={selectedProductView ? wishlistProducts.some((p) => p.id === selectedProductView.id) : false}
      />

      <BrewingCalculator
        isOpen={isBrewingCalcOpen}
        onClose={() => setIsBrewingCalcOpen(false)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        currency={currency}
        onClearCart={handleClearCart}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        currency={currency}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(p) => setSelectedProductView(p)}
        currency={currency}
      />

    </div>
  );
}
