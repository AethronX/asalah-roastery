import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, Coffee, Sparkles } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onNavigateCategory: (catId: string) => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onNavigateCategory,
  activeSection,
  setActiveSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'الرئيسية', action: () => { setActiveSection('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
    { label: 'المتجر', action: () => { onNavigateCategory('all'); } },
    { label: 'القهوة', action: () => { onNavigateCategory('specialty'); } },
    { label: 'المكسرات', action: () => { onNavigateCategory('nuts-dates'); } },
    { label: 'الهدايا', action: () => { onNavigateCategory('gifts'); } },
    { label: 'من نحن', action: () => { setActiveSection('story'); const el = document.getElementById('our-story'); if(el) el.scrollIntoView({ behavior: 'smooth' }); } },
    { label: 'تواصل', action: () => { setActiveSection('contact'); const el = document.getElementById('location-section'); if(el) el.scrollIntoView({ behavior: 'smooth' }); } },
  ];

  return (
    <>
      {/* High Conversion Top Ribbon Bar */}
      <div className="bg-[#120E0C] text-[#F3E2BE] py-1.5 px-3 text-center text-[11px] font-bold border-b border-[#D7AE63]/25 flex items-center justify-center gap-2 fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center gap-2 mx-auto truncate">
          <span className="bg-[#D7AE63] text-[#120E0C] px-2.5 py-0.5 rounded-full text-[10px] font-extrabold shrink-0 shadow-sm">
            خصم 10%
          </span>
          <span className="truncate text-[11px] text-[#F7F2EA]">
            كود <span className="font-mono text-[#F3E2BE] font-black underline decoration-[#D7AE63]">ASALAH10</span> • توصيل مجاني فوق 20 ر.ع ⚡
          </span>
        </div>
      </div>

      <header
        className={`fixed top-[28px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1B1512]/95 backdrop-blur-xl text-[#F7F2EA] py-2.5 shadow-[0_10px_30px_rgba(18,14,12,0.6)] border-b border-[#D7AE63]/25'
            : 'bg-gradient-to-b from-[#1B1512]/95 via-[#1B1512]/70 to-transparent text-[#F7F2EA] py-3.5'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => { setActiveSection('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="group flex items-center gap-2 text-right text-[#F7F2EA] focus:outline-none"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#241B17] border border-[#D7AE63]/40 flex items-center justify-center group-hover:border-[#F3E2BE] group-hover:bg-[#D7AE63]/20 transition-all duration-300 shrink-0 shadow-inner">
              <Coffee className="w-4 h-4 sm:w-5 sm:h-5 text-[#F3E2BE] group-hover:text-white transition-colors" />
            </div>
            <div className="flex flex-col text-right">
              <span className="font-alexandria text-lg sm:text-2xl font-black tracking-wide text-[#F7F2EA] group-hover:text-[#F3E2BE] transition-colors leading-tight">
                محامص الأصالة
              </span>
              <span className="text-[8px] sm:text-[10px] font-bold tracking-widest text-[#D7AE63] uppercase font-alexandria hidden sm:block">
                AL ASALAH ROASTERY • OMAN
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={item.action}
              className="text-sm font-bold text-[#E8DCCB] hover:text-[#F3E2BE] relative py-1 transition-colors group font-alexandria"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F3E2BE] to-[#D7AE63] scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-300 rounded-full" />
            </button>
          ))}
        </nav>

        {/* Action Icons & Premium CTA Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            className="p-2.5 rounded-full hover:bg-[#D7AE63]/15 text-[#F7F2EA] hover:text-[#F3E2BE] transition-colors relative min-w-[40px] min-h-[40px] flex items-center justify-center"
            title="بحث في المحامص"
            aria-label="البحث عن منتجات القهوة"
          >
            <Search className="w-5 h-5 text-[#E8C98D]" />
          </button>

          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            className="p-2.5 rounded-full hover:bg-[#D7AE63]/15 text-[#F7F2EA] hover:text-[#F3E2BE] transition-colors relative min-w-[40px] min-h-[40px] flex items-center justify-center"
            title="المفضلة"
            aria-label="عرض قائمة المنتجات المفضلة"
          >
            <Heart className="w-5 h-5 text-[#E8C98D]" />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#D7AE63] text-[#120E0C] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="p-2.5 rounded-full hover:bg-[#D7AE63]/15 text-[#F7F2EA] hover:text-[#F3E2BE] transition-colors relative min-w-[40px] min-h-[40px] flex items-center justify-center"
            title="سلة التسوق"
            aria-label="عرض سلة التسوق"
          >
            <ShoppingBag className="w-5 h-5 text-[#E8C98D]" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-gradient-to-r from-[#F3E2BE] to-[#D7AE63] text-[#120E0C] text-[10px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center border border-[#120E0C] shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          {/* Premium CTA Button */}
          <button
            onClick={() => onNavigateCategory('all')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-champagne-primary font-bold text-xs tracking-wider uppercase border border-[#F3E2BE]/50 min-h-[40px]"
            aria-label="تسوق الآن في متجر محامص الأصالة"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#120E0C]" />
            <span>تسوق الآن</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg lg:hidden text-[#F7F2EA] hover:bg-[#D7AE63]/15 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="فتح أو إغلاق القائمة الرئيسية"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#F3E2BE]" /> : <Menu className="w-6 h-6 text-[#F3E2BE]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1B1512]/98 backdrop-blur-2xl border-b border-[#D7AE63]/30 px-6 py-6 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col gap-4 text-right">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  item.action();
                  setMobileMenuOpen(false);
                }}
                className="text-base font-medium text-[#F7F2EA] hover:text-[#F3E2BE] py-2 border-b border-[#D7AE63]/15 text-right transition-colors font-alexandria"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  onNavigateCategory('all');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 rounded-full btn-champagne-primary font-bold text-center text-sm"
              >
                تسوق الآن
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
    </>
  );
};
