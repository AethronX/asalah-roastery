import React from 'react';
import { ArrowLeft, Award, Flame, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopNow, onExplore }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-36 sm:pt-40 lg:pt-44 pb-16 bg-[#2B211B]">
      {/* Background Image Container with Soft Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_coffee_beans_1785262866653.jpg"
          alt="محامص الأصالة - بن فاخر محمص"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.08] scale-105 animate-pulse-slow"
        />
        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B211B] via-[#2B211B]/50 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-radial-vignette opacity-40 pointer-events-none" />
      </div>

      {/* Floating Steam Micro-Animations */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-40">
        <div className="w-16 h-32 bg-white/10 blur-xl rounded-full animate-steam-1" />
        <div className="w-24 h-40 bg-[#C9A76A]/10 blur-2xl rounded-full animate-steam-2" />
      </div>

      {/* Hero Content Block */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#F8F3EC]">
        
        {/* Luxury Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4A3326]/80 border border-[#C9A76A]/40 text-[#C9A76A] text-xs font-medium tracking-widest uppercase mb-8 shadow-2xl backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A76A]" />
          <span>عراقة الضيافة العمانية • محمصة مختصة في نزوى</span>
        </div>

        {/* Headline */}
        <h1 className="font-alexandria text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#F8F3EC] leading-[1.18] mb-6 drop-shadow-lg">
          أصالة الفخامة في <span className="gold-gradient-bright font-black">كل فنجان</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#F8F3EC]/95 font-medium max-w-3xl mx-auto leading-relaxed mb-10 font-alexandria">
          نحمُص لك أنقى سلالات البن العالمي وشغف الخلطات العمانية فور طلبك، لتصلك بطعمها الطازج وعطرها الساحر.
        </p>

        {/* CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
          <button
            onClick={onShopNow}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#B78A5C] via-[#C9A76A] to-[#B78A5C] text-[#2B211B] font-extrabold text-base hover:shadow-2xl hover:shadow-[#C9A76A]/30 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group border border-[#C9A76A]/50"
          >
            <span>تصفح المحاصيل الآن</span>
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExplore}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#4A3326]/80 hover:bg-[#4A3326] text-[#F8F3EC] font-bold text-base border border-[#C9A76A]/40 hover:border-[#C9A76A] backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-4 h-4 text-[#C9A76A] group-hover:rotate-12 transition-transform" />
            <span>مستشار الذوق الذكي (اختبر ذوقك)</span>
          </button>
        </div>

        {/* Trust & Craftsmanship Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 border-t border-[#C9A76A]/20 max-w-4xl mx-auto text-right sm:text-center">
          <div className="flex items-center sm:justify-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
            <Flame className="w-6 h-6 text-[#C9A76A] shrink-0" />
            <div className="text-right">
              <h4 className="text-sm font-semibold text-[#F8F3EC]">تحميص طازج عند الطلب</h4>
              <p className="text-xs text-[#F8F3EC]/60">محموصة خصيصاً واسمك على الكيس</p>
            </div>
          </div>

          <div className="flex items-center sm:justify-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
            <Award className="w-6 h-6 text-[#C9A76A] shrink-0" />
            <div className="text-right">
              <h4 className="text-sm font-semibold text-[#F8F3EC]">سلالات نادرة (SCA 90+)</h4>
              <p className="text-xs text-[#F8F3EC]/60">محاصيل مختصة تنقيط وحيد</p>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 flex items-center sm:justify-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
            <ShieldCheck className="w-6 h-6 text-[#C9A76A] shrink-0" />
            <div className="text-right">
              <h4 className="text-sm font-semibold text-[#F8F3EC]">خلطات سلطانية فاخرة</h4>
              <p className="text-xs text-[#F8F3EC]/60">بالهيل والزعفران السوبر نيل</p>
            </div>
          </div>
        </div>

      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-[#C9A76A]/70 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[11px] font-sans tracking-widest uppercase">التفاصيل</span>
        <div className="w-0.5 h-6 bg-gradient-to-b from-[#C9A76A] to-transparent rounded-full" />
      </div>
    </section>
  );
};
