import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, Coffee, Sparkles, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onNavigateCategory: (catId: string) => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onNavigateCategory,
  activeSection,
  setActiveSection,
  theme,
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLight = theme === 'light';

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
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isLight
            ? isScrolled
              ? 'bg-white/85 backdrop-blur-xl text-[#1D1D1F] py-2.5 shadow-[0_4px_25px_rgba(0,0,0,0.06)] border-b border-[#000000]/08'
              : 'bg-[#FBFBFD]/80 backdrop-blur-md text-[#1D1D1F] py-3.5 border-b border-[#000000]/05'
            : isScrolled
              ? 'bg-[#1B1512]/95 backdrop-blur-xl text-[#F7F2EA] py-2.5 shadow-[0_10px_30px_rgba(18,14,12,0.6)] border-b border-[#D7AE63]/25'
              : 'bg-gradient-to-b from-[#1B1512]/95 via-[#1B1512]/70 to-transparent text-[#F7F2EA] py-3.5'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => { setActiveSection('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="group flex items-center gap-2 text-right focus:outline-none"
          >
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 shadow-inner ${
              isLight
                ? 'bg-[#F5F5F7] border-[#000000]/10 group-hover:border-[#9B6B3A] group-hover:bg-[#9B6B3A]/10'
                : 'bg-[#241B17] border-[#D7AE63]/40 group-hover:border-[#F3E2BE] group-hover:bg-[#D7AE63]/20'
            }`}>
              <Coffee className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                isLight ? 'text-[#9B6B3A] group-hover:text-[#1D1D1F]' : 'text-[#F3E2BE] group-hover:text-white'
              }`} />
            </div>
            <div className="flex flex-col text-right">
              <span className={`font-alexandria text-lg sm:text-2xl font-black tracking-wide leading-tight transition-colors ${
                isLight
                  ? 'text-[#1D1D1F] group-hover:text-[#9B6B3A]'
                  : 'text-[#F7F2EA] group-hover:text-[#F3E2BE]'
              }`}>
                محامص الأصالة
              </span>
              <span className={`text-[8px] sm:text-[10px] font-bold tracking-widest uppercase font-alexandria hidden sm:block ${
                isLight ? 'text-[#9B6B3A]' : 'text-[#D7AE63]'
              }`}>
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
              className={`text-sm sm:text-base font-bold relative py-1 transition-colors group font-alexandria ${
                isLight
                  ? 'text-[#2C2C2E] hover:text-[#1D1D1F]'
                  : 'text-[#F7F2EA] hover:text-[#F3E2BE]'
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-300 rounded-full ${
                isLight
                  ? 'bg-[#1D1D1F]'
                  : 'bg-gradient-to-r from-[#F3E2BE] to-[#D7AE63]'
              }`} />
            </button>
          ))}
        </nav>

        {/* Action Icons & Theme Switcher & Premium CTA Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Switcher Toggle - Apple Inspired Segmented Pill */}
          <button
            onClick={onToggleTheme}
            className={`w-10 h-10 rounded-full border transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm active:scale-95 ${
              isLight
                ? 'bg-[#F5F5F7] border-[#000000]/10 text-[#1D1D1F] hover:bg-[#E5E5EA]'
                : 'bg-[#241B17] border-[#D7AE63]/40 text-[#F3E2BE] hover:border-[#D7AE63]'
            }`}
            title={isLight ? 'الانتقال إلى المظهر الداكن' : 'الانتقال إلى المظهر الفاتح'}
            aria-label="تبديل مظهر الموقع"
          >
            {isLight ? (
              <Moon className="w-5 h-5 text-[#1D1D1F]" />
            ) : (
              <Sun className="w-5 h-5 text-[#F3E2BE]" />
            )}
          </button>

          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            className={`w-10 h-10 rounded-full transition-colors relative flex items-center justify-center ${
              isLight ? 'hover:bg-[#000000]/06 text-[#1D1D1F]' : 'hover:bg-[#D7AE63]/15 text-[#F7F2EA]'
            }`}
            title="بحث في المحامص"
            aria-label="البحث عن منتجات القهوة"
          >
            <Search className={`w-5 h-5 ${isLight ? 'text-[#1D1D1F]' : 'text-[#E8C98D]'}`} />
          </button>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className={`w-10 h-10 rounded-full transition-colors relative flex items-center justify-center ${
              isLight ? 'hover:bg-[#000000]/06 text-[#1D1D1F]' : 'hover:bg-[#D7AE63]/15 text-[#F7F2EA]'
            }`}
            title="سلة التسوق"
            aria-label="عرض سلة التسوق"
          >
            <ShoppingBag className={`w-5 h-5 ${isLight ? 'text-[#1D1D1F]' : 'text-[#E8C98D]'}`} />
            {cartCount > 0 && (
              <span className={`absolute top-0 right-0 text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-sm ${
                isLight ? 'bg-[#9B6B3A] text-white' : 'bg-gradient-to-r from-[#F3E2BE] to-[#D7AE63] text-[#120E0C] border border-[#120E0C]'
              }`}>
                {cartCount}
              </span>
            )}
          </button>

          {/* Premium CTA Button */}
          <button
            onClick={() => onNavigateCategory('all')}
            className={`hidden sm:inline-flex items-center gap-2 px-4.5 py-2 rounded-full font-bold text-xs tracking-wider uppercase border min-h-[38px] shadow-sm transition-all ${
              isLight
                ? 'bg-[#1D1D1F] text-white hover:bg-[#3A3A3C] border-[#1D1D1F]'
                : 'btn-champagne-primary border-[#F3E2BE]/50 text-[#120E0C]'
            }`}
            aria-label="تسوق الآن في متجر محامص الأصالة"
          >
            <Sparkles className={`w-3.5 h-3.5 ${isLight ? 'text-amber-400' : 'text-[#120E0C]'}`} />
            <span>تسوق الآن</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg lg:hidden min-w-[40px] min-h-[40px] flex items-center justify-center ${
              isLight ? 'text-[#1D1D1F] hover:bg-[#000000]/05' : 'text-[#F7F2EA] hover:bg-[#D7AE63]/15'
            }`}
            aria-label="فتح أو إغلاق القائمة الرئيسية"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className={`lg:hidden backdrop-blur-2xl border-b px-6 py-6 shadow-2xl animate-fadeIn ${
          isLight
            ? 'bg-white/98 border-[#000000]/10 text-[#1D1D1F]'
            : 'bg-[#1B1512]/98 border-[#D7AE63]/30 text-[#F7F2EA]'
        }`}>
          <nav className="flex flex-col gap-4 text-right">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  item.action();
                  setMobileMenuOpen(false);
                }}
                className={`text-base font-medium py-2 border-b text-right transition-colors font-cairo ${
                  isLight
                    ? 'border-[#000000]/08 text-[#1D1D1F] hover:text-[#9B6B3A]'
                    : 'border-[#D7AE63]/15 text-[#F7F2EA] hover:text-[#F3E2BE]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={onToggleTheme}
                className={`w-full py-3 rounded-full border font-bold text-center text-xs flex items-center justify-center gap-2 ${
                  isLight
                    ? 'bg-[#F5F5F7] border-[#000000]/10 text-[#1D1D1F]'
                    : 'bg-[#241B17] border-[#D7AE63]/40 text-[#F3E2BE]'
                }`}
              >
                {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                <span>{isLight ? 'الانتقال إلى المظهر الداكن' : 'الانتقال إلى المظهر الفاتح'}</span>
              </button>
              <button
                onClick={() => {
                  onNavigateCategory('all');
                  setMobileMenuOpen(false);
                }}
                className={`w-full py-3 rounded-full font-bold text-center text-sm ${
                  isLight ? 'bg-[#1D1D1F] text-white' : 'btn-champagne-primary'
                }`}
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

