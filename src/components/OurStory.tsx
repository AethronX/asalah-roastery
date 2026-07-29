import React from 'react';
import { Award, Flame, Heart, Sparkles, MapPin, Coffee } from 'lucide-react';

export const OurStory: React.FC = () => {
  return (
    <section id="our-story" className="py-24 bg-[#2B211B] text-[#F8F3EC] relative overflow-hidden">
      {/* Background Subtle Asset */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none hidden lg:block">
        <img
          src="/src/assets/images/hero_coffee_beans_1785262866653.jpg"
          alt="محامص الأصالة"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter brightness-50"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase (Images Grid) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden border border-[#C9A76A]/30 shadow-2xl group">
                <img
                  src="/src/assets/images/omani_dallah_set_1785262881798.jpg"
                  alt="الضيافة العمانية الأصيلة"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 rounded-3xl bg-[#4A3326]/60 border border-[#C9A76A]/20 backdrop-blur-md text-right">
                <div className="font-amiri text-3xl font-bold text-[#C9A76A] mb-1">1988</div>
                <div className="text-xs text-[#F8F3EC]/80">بداية شغف الحرفية في تحميص القهوة - نزوى</div>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-6 rounded-3xl bg-[#4A3326]/60 border border-[#C9A76A]/20 backdrop-blur-md text-right">
                <div className="font-amiri text-3xl font-bold text-[#C9A76A] mb-1">100%</div>
                <div className="text-xs text-[#F8F3EC]/80">فرز يدوي دقيق لحبات البن الذهبي</div>
              </div>
              <div className="rounded-3xl overflow-hidden border border-[#C9A76A]/30 shadow-2xl group">
                <img
                  src="/src/assets/images/specialty_coffee_bag_1785262894947.jpg"
                  alt="تعبئة وتغليف محامص الأصالة"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-6 text-right space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A76A]/20 text-[#C9A76A] border border-[#C9A76A]/40 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A76A]" />
              <span>قصة محامص الأصالة العمانية</span>
            </div>

            <h2 className="font-amiri text-4xl sm:text-5xl font-bold leading-tight text-[#F8F3EC]">
              حرفية تحميص عريقة تجسد <span className="gold-gradient-text">الضيافة العمانية</span>
            </h2>

            <p className="text-base sm:text-lg text-[#F8F3EC]/80 font-light leading-relaxed font-sans">
              تأسست محامص الأصالة من قلب العاصمة العمانية مسقط، لتكون امتداداً عريقاً لأعراف الكرم والضيافة التي تتوارثها الأجيال في سلطنة عمان.
            </p>

            <p className="text-sm text-[#F8F3EC]/70 font-light leading-relaxed">
              نحن نؤمن بأن فنجان القهوة ليس مجرد مشروب، بل هو حكاية تجمع الشغف والتقاليد. نتنقل بين أرفع مزارع البن في مدرجات جبال اليمن، وإثيوبيا، وكولومبيا لننتقي أرقى الحبوب، ثم نعيد صياغتها في أفران التحميص المصممة خصيصاً بلمسات شيوخ الكار.
            </p>

            {/* Story Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#C9A76A]/20">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                <Coffee className="w-6 h-6 text-[#C9A76A] shrink-0 mt-1" />
                <div>
                  <h4 className="font-amiri text-base font-bold text-[#F8F3EC]">الهيل والزعفران الملكي</h4>
                  <p className="text-xs text-[#F8F3EC]/60 leading-relaxed">
                    نستخدم الهيل الأخضر البكر النقي والزعفران السوبر نيل لخلطاتنا.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                <Flame className="w-6 h-6 text-[#C9A76A] shrink-0 mt-1" />
                <div>
                  <h4 className="font-amiri text-base font-bold text-[#F8F3EC]">تحميص بالدفعة الهادئة</h4>
                  <p className="text-xs text-[#F8F3EC]/60 leading-relaxed">
                    درجات حرارة مضبوطة إلكترونياً للحصول على حلاوة متزنة بدون مرارة.
                  </p>
                </div>
              </div>
            </div>

            {/* Signature Quote */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#4A3326] to-[#2B211B] border-r-4 border-[#C9A76A] text-right">
              <p className="font-amiri text-lg text-[#C9A76A] italic mb-2">
                "في كل فنجان نسكبه من محامص الأصالة، نهديك روح عمان الأصيلة ودفء مجالسها."
              </p>
              <span className="text-xs text-[#F8F3EC]/60 font-sans">
                — أسرة محامص الأصالة العمانية
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
