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
    <footer className="bg-[#2B211B] text-[#F8F3EC] border-t border-[#C9A76A]/20 pt-16 pb-12 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Branding Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-[#C9A76A]/20">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#B78A5C]/20 border border-[#C9A76A]/50 flex items-center justify-center">
                <Coffee className="w-5 h-5 text-[#C9A76A]" />
              </div>
              <span className="font-amiri text-2xl font-bold text-[#F8F3EC]">
                محامص الأصالة - Al Asalah Roastery
              </span>
            </div>
            <p className="text-xs text-[#F8F3EC]/70 leading-relaxed font-light max-w-md">
              علامة عمانية فاخرة رائدة في صناعة وتحميص القهوة العمانية الملكية والقهوة المختصة. نمتزج بالتقاليد ونرتقي بحرفية التحميص لتقديم رشفة فريدة.
            </p>
            <div className="flex items-center gap-3 text-[#C9A76A]">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-[#B78A5C] hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-[#B78A5C] hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-[#B78A5C] hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-4 text-xs">
            <div>
              <h4 className="font-amiri text-base font-bold text-[#C9A76A] mb-3">التسوق السريع</h4>
              <ul className="space-y-2 text-[#F8F3EC]/80 font-light">
                <li><a href="#shop-catalog" className="hover:text-[#C9A76A] transition-colors">القهوة العمانية</a></li>
                <li><a href="#shop-catalog" className="hover:text-[#C9A76A] transition-colors">القهوة المختصة</a></li>
                <li><a href="#shop-catalog" className="hover:text-[#C9A76A] transition-colors">المكسرات والتمور</a></li>
                <li><a href="#shop-catalog" className="hover:text-[#C9A76A] transition-colors">صناديق الهدايا</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-amiri text-base font-bold text-[#C9A76A] mb-3">عن الأصالة</h4>
              <ul className="space-y-2 text-[#F8F3EC]/80 font-light">
                <li><a href="#our-story" className="hover:text-[#C9A76A] transition-colors">قصتنا وحرفيتنا</a></li>
                <li><a href="#location-section" className="hover:text-[#C9A76A] transition-colors">فروعنا في عمان</a></li>
                <li><a href="#location-section" className="hover:text-[#C9A76A] transition-colors">جلسات التذوق</a></li>
                <li><a href="#" className="hover:text-[#C9A76A] transition-colors">سياسة الجودة</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-4 bg-[#4A3326]/50 p-6 rounded-2xl border border-[#C9A76A]/20">
            <h4 className="font-amiri text-lg font-bold text-[#F8F3EC] mb-1">
              النشرة البريدية الحصرية
            </h4>
            <p className="text-xs text-[#F8F3EC]/70 mb-4 font-light">
              انضم لنادي متذوقي الأصالة واحصل على خلطات خاصة ودعوات لجلسات التذوق.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-900/60 border border-emerald-500/40 rounded-xl text-emerald-200 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>شكراً لانضمامك إلى مجتمع محامص الأصالة!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="بريدك الإلكتروني..."
                  className="w-full px-3.5 py-2.5 bg-white/10 border border-white/20 rounded-xl text-xs text-white placeholder-white/50 focus:outline-none focus:border-[#C9A76A]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#C9A76A] text-[#2B211B] font-bold text-xs rounded-xl hover:bg-[#B78A5C] hover:text-white transition-colors shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8F3EC]/60">
          <p>© {new Date().getFullYear()} محامص الأصالة - Al Asalah Roastery. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-4">
            <span className="font-serif text-[#C9A76A]">صُنعت بشغف في سلطنة عمان 🇴🇲</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
