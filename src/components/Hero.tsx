import React from 'react';
import { ArrowLeft, Award, Flame, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopNow, onExplore }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-36 sm:pt-40 lg:pt-44 pb-16 bg-[#1B1512]">
      {/* Background Image Container with Soft Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero_coffee_beans_1785262866653.jpg"
          alt="محامص الأصالة - بن فاخر محمص في نزوى"
          referrerPolicy="no-referrer"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width="1200"
          height="800"
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.12] scale-105"
        />
        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1512] via-[#1B1512]/60 to-transparent opacity-95" />
        <div className="absolute inset-0 bg-radial-vignette opacity-50 pointer-events-none" />
      </div>

      {/* Floating Steam Micro-Animations */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-40" aria-hidden="true">
        <div className="w-16 h-32 bg-[#F3E2BE]/10 blur-xl rounded-full animate-steam-1" />
        <div className="w-24 h-40 bg-[#D7AE63]/15 blur-2xl rounded-full animate-steam-2" />
      </div>

      {/* Hero Content Block */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#F7F2EA]">
        
        {/* Luxury Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#241B17]/90 border border-[#D7AE63]/50 text-[#F3E2BE] text-xs font-semibold tracking-widest uppercase mb-8 shadow-2xl backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#F3E2BE]" />
          <span>عراقة الضيافة العمانية • محمصة مختصة في نزوى</span>
        </div>

        {/* Headline */}
        <h1 className="font-alexandria text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#F7F2EA] leading-[1.18] mb-6 drop-shadow-xl">
          أصالة الفخامة في <span className="gold-gradient-bright font-black">كل فنجان</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#E8DCCB] font-medium max-w-3xl mx-auto leading-relaxed mb-10 font-alexandria">
          نحمُص لك أنقى سلالات البن العالمي وشغف الخلطات العمانية فور طلبك، لتصلك بطعمها الطازج وعطرها الساحر.
        </p>

        {/* CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
          <button
            onClick={onShopNow}
            aria-label="تصفح محاصيل القهوة والمجموعات"
            className="w-full sm:w-auto px-8 py-4 rounded-full btn-champagne-primary text-[#120E0C] font-black text-base flex items-center justify-center gap-3 group border border-[#F3E2BE]/60 min-h-[48px]"
          >
            <span>تصفح المحاصيل الآن</span>
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-[#120E0C]" />
          </button>

          <button
            onClick={onExplore}
            aria-label="اختبر ذوقك عبر مستشار القهوة الذكي"
            className="w-full sm:w-auto px-8 py-4 rounded-full btn-champagne-secondary font-bold text-base flex items-center justify-center gap-2 group min-h-[48px]"
          >
            <Sparkles className="w-4 h-4 text-[#F3E2BE] group-hover:rotate-12 transition-transform" />
            <span>مستشار الذوق الذكي (اختبر ذوقك)</span>
          </button>
        </div>

        {/* Trust & Craftsmanship Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 border-t border-[#D7AE63]/25 max-w-4xl mx-auto text-right sm:text-center">
          <div className="flex items-center sm:justify-center gap-3 p-3.5 rounded-2xl bg-[#241B17]/80 backdrop-blur-md border border-[#D7AE63]/25 shadow-sm">
            <Flame className="w-6 h-6 text-[#F3E2BE] shrink-0" />
            <div className="text-right">
              <h2 className="text-sm font-bold text-[#F7F2EA]">تحميص طازج عند الطلب</h2>
              <p className="text-xs text-[#E8DCCB]">محموصة خصيصاً واسمك على الكيس</p>
            </div>
          </div>

          <div className="flex items-center sm:justify-center gap-3 p-3.5 rounded-2xl bg-[#241B17]/80 backdrop-blur-md border border-[#D7AE63]/25 shadow-sm">
            <Award className="w-6 h-6 text-[#F3E2BE] shrink-0" />
            <div className="text-right">
              <h2 className="text-sm font-bold text-[#F7F2EA]">سلالات نادرة (SCA 90+)</h2>
              <p className="text-xs text-[#E8DCCB]">محاصيل مختصة تنقيط وحيد</p>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 flex items-center sm:justify-center gap-3 p-3.5 rounded-2xl bg-[#241B17]/80 backdrop-blur-md border border-[#D7AE63]/25 shadow-sm">
            <ShieldCheck className="w-6 h-6 text-[#F3E2BE] shrink-0" />
            <div className="text-right">
              <h2 className="text-sm font-bold text-[#F7F2EA]">خلطات سلطانية فاخرة</h2>
              <p className="text-xs text-[#E8DCCB]">بالهيل والزعفران السوبر نيل</p>
            </div>
          </div>
        </div>

      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-[#D7AE63] flex flex-col items-center gap-2 animate-bounce" aria-hidden="true">
        <span className="text-[11px] font-sans tracking-widest uppercase text-[#F3E2BE]">التفاصيل</span>
        <div className="w-0.5 h-6 bg-gradient-to-b from-[#D7AE63] to-transparent rounded-full" />
      </div>
    </section>
  );
};
