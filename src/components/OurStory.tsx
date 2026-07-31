import React from 'react';
import { Flame, Sparkles, Coffee } from 'lucide-react';

export const OurStory: React.FC = () => {
  return (
    <section id="our-story" className="py-24 bg-gradient-to-b from-[#1B1512] via-[#241B17] to-[#1B1512] text-[#F7F2EA] relative overflow-hidden border-y border-[#D7AE63]/25">
      {/* Background Subtle Asset */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none hidden lg:block" aria-hidden="true">
        <img
          src="/assets/images/hero_coffee_beans_1785262866653.jpg"
          alt="محامص الأصالة"
          loading="lazy"
          decoding="async"
          width="800"
          height="800"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter brightness-50"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase (Images Grid) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden border border-[#D7AE63]/40 shadow-2xl group">
                <img
                  src="/assets/images/omani_dallah_set_1785262881798.jpg"
                  alt="الضيافة العمانية الأصيلة"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="400"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 rounded-3xl bg-[#241B17] border border-[#D7AE63]/30 backdrop-blur-md text-right shadow-xl">
                <div className="font-alexandria text-3xl font-black text-[#F3E2BE] mb-1">1988</div>
                <div className="text-xs text-[#E8DCCB] font-medium leading-relaxed">بداية شغف الحرفية في تحميص القهوة - نزوى</div>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-6 rounded-3xl bg-[#241B17] border border-[#D7AE63]/30 backdrop-blur-md text-right shadow-xl">
                <div className="font-alexandria text-3xl font-black text-[#F3E2BE] mb-1">100%</div>
                <div className="text-xs text-[#E8DCCB] font-medium leading-relaxed">فرز يدوي دقيق لحبات البن الذهبي</div>
              </div>
              <div className="rounded-3xl overflow-hidden border border-[#D7AE63]/40 shadow-2xl group">
                <img
                  src="/assets/images/specialty_coffee_bag_1785262894947.jpg"
                  alt="تعبئة وتغليف محامص الأصالة"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="400"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-6 text-right space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2C211C] text-[#F3E2BE] border border-[#D7AE63]/40 text-xs font-bold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#F3E2BE]" />
              <span>قصة محامص الأصالة العمانية</span>
            </div>

            <h2 className="font-alexandria text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.4] text-[#F7F2EA]">
              حرفية تحميص عريقة تجسد <span className="gold-gradient-text inline-block">الضيافة العمانية</span>
            </h2>

            <p className="text-base sm:text-lg text-[#E8DCCB] font-medium leading-[1.8] font-sans">
              تأسست محامص الأصالة من قلب ولاية نزوى وسوقها التراثي العريق، لتكون امتداداً لأعراف الكرم والضيافة التي تتوارثها الأجيال في سلطنة عمان.
            </p>

            <p className="text-sm text-[#E8DCCB] font-normal leading-[1.8]">
              نحن نؤمن بأن فنجان القهوة ليس مجرد مشروب، بل هو حكاية تجمع الشغف والتقاليد. نتنقل بين أرفع مزارع البن في مدرجات جبال اليمن، وإثيوبيا، وكولومبيا لننتقي أرقى الحبوب، ثم نعيد صياغتها في أفران التحميص المصممة خصيصاً بلمسات شيوخ الكار.
            </p>

            {/* Story Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#D7AE63]/25">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#241B17] border border-[#D7AE63]/25">
                <Coffee className="w-6 h-6 text-[#F3E2BE] shrink-0 mt-1" />
                <div>
                  <h3 className="font-alexandria text-base font-bold text-[#F7F2EA] mb-1">الهيل والزعفران الملكي</h3>
                  <p className="text-xs text-[#E8DCCB] font-medium leading-relaxed">
                    نستخدم الهيل الأخضر البكر النقي والزعفران السوبر نيل لخلطاتنا.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#241B17] border border-[#D7AE63]/25">
                <Flame className="w-6 h-6 text-[#F3E2BE] shrink-0 mt-1" />
                <div>
                  <h3 className="font-alexandria text-base font-bold text-[#F7F2EA] mb-1">تحميص بالدفعة الهادئة</h3>
                  <p className="text-xs text-[#E8DCCB] font-medium leading-relaxed">
                    درجات حرارة مضبوطة إلكترونياً للحصول على حلاوة متزنة بدون مرارة.
                  </p>
                </div>
              </div>
            </div>

            {/* Signature Quote */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#241B17] via-[#2C211C] to-[#1B1512] border-r-4 border-[#D7AE63] text-right shadow-2xl">
              <p className="font-amiri text-lg text-[#F3E2BE] italic mb-2">
                "في كل فنجان نسكبه من محامص الأصالة، نهديك روح عمان الأصيلة ودفء مجالسها."
              </p>
              <span className="text-xs text-[#E8DCCB] font-sans font-medium">
                — أسرة محامص الأصالة العمانية
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
