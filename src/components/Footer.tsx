import React from 'react';
import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

interface FooterProps {
  theme?: 'light' | 'dark';
}

export const Footer: React.FC<FooterProps> = ({ theme = 'light' }) => {
  const isLight = theme === 'light';

  return (
    <footer className={`border-t pt-16 pb-12 text-right transition-colors ${
      isLight
        ? 'bg-[#F5F5F7] text-[#1D1D1F] border-[#000000]/10'
        : 'bg-[#120E0C] text-[#F7F2EA] border-[#D7AE63]/25'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Branding & Links Row */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b ${
          isLight ? 'border-[#000000]/10' : 'border-[#D7AE63]/20'
        }`}>
          
          {/* Brand Info */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full border flex items-center justify-center shadow-md ${
                isLight ? 'bg-white border-[#000000]/10' : 'bg-[#241B17] border-[#D7AE63]/50'
              }`}>
                <Coffee className={`w-5 h-5 ${isLight ? 'text-[#9B6B3A]' : 'text-[#F3E2BE]'}`} />
              </div>
              <span className={`font-alexandria text-2xl font-bold ${isLight ? 'text-[#1D1D1F]' : 'text-[#F7F2EA]'}`}>
                محامص الأصالة - Al Asalah Roastery
              </span>
            </div>
            <p className={`text-xs leading-relaxed font-medium max-w-md ${isLight ? 'text-[#424245]' : 'text-[#E8DCCB]'}`}>
              علامة عمانية فاخرة رائدة في صناعة وتحميص القهوة العمانية الملكية والقهوة المختصة. نمتزج بالتقاليد ونرتقي بحرفية التحميص لتقديم رشفة فريدة.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="حساب محامص الأصالة على إنستغرام" className={`p-2.5 rounded-full border transition-all min-w-[40px] min-h-[40px] flex items-center justify-center ${
                isLight ? 'bg-white border-[#000000]/10 text-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white' : 'bg-[#241B17] border-[#D7AE63]/30 text-[#F3E2BE] hover:bg-gradient-to-r hover:from-[#F3E2BE] hover:to-[#D7AE63] hover:text-[#120E0C]'
              }`}>
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="حساب محامص الأصالة على منصة إكس (تويتر)" className={`p-2.5 rounded-full border transition-all min-w-[40px] min-h-[40px] flex items-center justify-center ${
                isLight ? 'bg-white border-[#000000]/10 text-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white' : 'bg-[#241B17] border-[#D7AE63]/30 text-[#F3E2BE] hover:bg-gradient-to-r hover:from-[#F3E2BE] hover:to-[#D7AE63] hover:text-[#120E0C]'
              }`}>
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="حساب محامص الأصالة على فيسبوك" className={`p-2.5 rounded-full border transition-all min-w-[40px] min-h-[40px] flex items-center justify-center ${
                isLight ? 'bg-white border-[#000000]/10 text-[#1D1D1F] hover:bg-[#1D1D1F] hover:text-white' : 'bg-[#241B17] border-[#D7AE63]/30 text-[#F3E2BE] hover:bg-gradient-to-r hover:from-[#F3E2BE] hover:to-[#D7AE63] hover:text-[#120E0C]'
              }`}>
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 text-xs">
            <div>
              <h3 className={`font-alexandria text-base font-bold mb-3 ${isLight ? 'text-[#1D1D1F]' : 'text-[#F3E2BE]'}`}>التسوق السريع</h3>
              <ul className={`space-y-2 font-medium ${isLight ? 'text-[#424245]' : 'text-[#E8DCCB]'}`}>
                <li><a href="#shop-catalog" className="hover:text-[#9B6B3A] transition-colors">القهوة العمانية</a></li>
                <li><a href="#shop-catalog" className="hover:text-[#9B6B3A] transition-colors">القهوة المختصة</a></li>
                <li><a href="#shop-catalog" className="hover:text-[#9B6B3A] transition-colors">المكسرات والتمور</a></li>
                <li><a href="#shop-catalog" className="hover:text-[#9B6B3A] transition-colors">صناديق الهدايا</a></li>
              </ul>
            </div>
            <div>
              <h3 className={`font-alexandria text-base font-bold mb-3 ${isLight ? 'text-[#1D1D1F]' : 'text-[#F3E2BE]'}`}>عن الأصالة</h3>
              <ul className={`space-y-2 font-medium ${isLight ? 'text-[#424245]' : 'text-[#E8DCCB]'}`}>
                <li><a href="#our-story" className="hover:text-[#9B6B3A] transition-colors">قصتنا وحرفيتنا</a></li>
                <li><a href="#location-section" className="hover:text-[#9B6B3A] transition-colors">فروعنا في عمان</a></li>
                <li><a href="#location-section" className="hover:text-[#9B6B3A] transition-colors">جلسات التذوق</a></li>
                <li><a href="#" className="hover:text-[#9B6B3A] transition-colors">سياسة الجودة</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8DCCB]/70 font-medium">
          <p>© {new Date().getFullYear()} محامص الأصالة - Al Asalah Roastery. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-4">
            <span className="font-serif text-[#F3E2BE]">صُنعت بشغف في سلطنة عمان 🇴🇲</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
