import React, { useState } from 'react';
import { Coffee, Instagram, Facebook, Twitter, Phone, Mail, MapPin, Check, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-[#120E0C] text-[#F7F2EA] border-t border-[#D7AE63]/25 pt-16 pb-12 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Branding Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-[#D7AE63]/20">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#241B17] border border-[#D7AE63]/50 flex items-center justify-center shadow-md">
                <Coffee className="w-5 h-5 text-[#F3E2BE]" />
              </div>
              <span className="font-alexandria text-2xl font-bold text-[#F7F2EA]">
                محامص الأصالة - Al Asalah Roastery
              </span>
            </div>
            <p className="text-xs text-[#E8DCCB] leading-relaxed font-medium max-w-md">
              علامة عمانية فاخرة رائدة في صناعة وتحميص القهوة العمانية الملكية والقهوة المختصة. نمتزج بالتقاليد ونرتقي بحرفية التحميص لتقديم رشفة فريدة.
            </p>
            <div className="flex items-center gap-3 text-[#F3E2BE]">
              <a href="#" aria-label="حساب محامص الأصالة على إنستغرام" className="p-2.5 rounded-full bg-[#241B17] border border-[#D7AE63]/30 hover:bg-gradient-to-r hover:from-[#F3E2BE] hover:to-[#D7AE63] hover:text-[#120E0C] transition-all min-w-[40px] min-h-[40px] flex items-center justify-center">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="حساب محامص الأصالة على منصة إكس (تويتر)" className="p-2.5 rounded-full bg-[#241B17] border border-[#D7AE63]/30 hover:bg-gradient-to-r hover:from-[#F3E2BE] hover:to-[#D7AE63] hover:text-[#120E0C] transition-all min-w-[40px] min-h-[40px] flex items-center justify-center">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="حساب محامص الأصالة على فيسبوك" className="p-2.5 rounded-full bg-[#241B17] border border-[#D7AE63]/30 hover:bg-gradient-to-r hover:from-[#F3E2BE] hover:to-[#D7AE63] hover:text-[#120E0C] transition-all min-w-[40px] min-h-[40px] flex items-center justify-center">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-4 text-xs">
            <div>
              <h3 className="font-alexandria text-base font-bold text-[#F3E2BE] mb-3">التسوق السريع</h3>
              <ul className="space-y-2 text-[#E8DCCB] font-medium">
                <li><a href="#shop-catalog" className="hover:text-[#F3E2BE] transition-colors">القهوة العمانية</a></li>
                <li><a href="#shop-catalog" className="hover:text-[#F3E2BE] transition-colors">القهوة المختصة</a></li>
                <li><a href="#shop-catalog" className="hover:text-[#F3E2BE] transition-colors">المكسرات والتمور</a></li>
                <li><a href="#shop-catalog" className="hover:text-[#F3E2BE] transition-colors">صناديق الهدايا</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-alexandria text-base font-bold text-[#F3E2BE] mb-3">عن الأصالة</h3>
              <ul className="space-y-2 text-[#E8DCCB] font-medium">
                <li><a href="#our-story" className="hover:text-[#F3E2BE] transition-colors">قصتنا وحرفيتنا</a></li>
                <li><a href="#location-section" className="hover:text-[#F3E2BE] transition-colors">فروعنا في عمان</a></li>
                <li><a href="#location-section" className="hover:text-[#F3E2BE] transition-colors">جلسات التذوق</a></li>
                <li><a href="#" className="hover:text-[#F3E2BE] transition-colors">سياسة الجودة</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-4 bg-[#241B17] p-6 rounded-2xl border border-[#D7AE63]/30 shadow-xl">
            <h3 className="font-alexandria text-lg font-bold text-[#F7F2EA] mb-1">
              النشرة البريدية الحصرية
            </h3>
            <p className="text-xs text-[#E8DCCB] mb-4 font-medium">
              انضم لنادي متذوقي الأصالة واحصل على خلطات خاصة ودعوات لجلسات التذوق.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/90 border border-emerald-500/60 rounded-xl text-emerald-200 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>شكراً لانضمامك إلى مجتمع محامص الأصالة!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <label htmlFor="footer-newsletter-email" className="sr-only">البريد الإلكتروني للنشرة البريدية</label>
                <input
                  id="footer-newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="بريدك الإلكتروني..."
                  className="w-full px-3.5 py-2.5 bg-[#1B1512] border border-[#D7AE63]/30 rounded-xl text-xs text-[#F7F2EA] placeholder-[#E8DCCB]/50 focus:outline-none focus:border-[#D7AE63]"
                />
                <button
                  type="submit"
                  aria-label="اشتراك في النشرة البريدية"
                  className="px-4 py-2.5 btn-champagne-primary text-[#120E0C] font-bold text-xs rounded-xl hover:shadow-md transition-all shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <Send className="w-4 h-4 text-[#120E0C]" />
                </button>
              </form>
            )}
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
