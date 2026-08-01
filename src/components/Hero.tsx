import React from 'react';
import { ArrowLeft, Award, Flame, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
  onExplore: () => void;
  theme?: 'light' | 'dark';
}

export const Hero: React.FC<HeroProps> = ({ onShopNow, onExplore, theme = 'light' }) => {
  const isLight = theme === 'light';

  return (
    <section className={`relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-36 sm:pt-40 lg:pt-44 pb-16 transition-colors duration-300 ${
      isLight ? 'bg-[#FBFBFD]' : 'bg-[#1B1512]'
    }`}>
      {/* Background Image Container with Soft Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero_luxury_roast_1785572872948.jpg"
          alt="محامص الأصالة - بن فاخر محمص في نزوى"
          referrerPolicy="no-referrer"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width="1200"
          height="800"
          className={`w-full h-full object-cover object-center filter scale-105 transition-all duration-700 ${
            isLight
              ? 'brightness-[0.88] contrast-[1.05] opacity-80'
              : 'brightness-[0.55] contrast-[1.12] opacity-100'
          }`}
        />
        {/* Cinematic Vignette Overlay */}
        <div className={`absolute inset-0 transition-all duration-300 ${
          isLight
            ? 'bg-gradient-to-t from-[#FBFBFD] via-[#FBFBFD]/70 to-transparent opacity-90'
            : 'bg-gradient-to-t from-[#1B1512] via-[#1B1512]/60 to-transparent opacity-95'
        }`} />
        {!isLight && <div className="absolute inset-0 bg-radial-vignette opacity-50 pointer-events-none" />}
      </div>

      {/* Floating Steam Micro-Animations */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-40" aria-hidden="true">
        <div className={`w-16 h-32 blur-xl rounded-full animate-steam-1 ${isLight ? 'bg-[#9B6B3A]/20' : 'bg-[#F3E2BE]/10'}`} />
        <div className={`w-24 h-40 blur-2xl rounded-full animate-steam-2 ${isLight ? 'bg-[#D7AE63]/25' : 'bg-[#D7AE63]/15'}`} />
      </div>

      {/* Hero Content Block */}
      <div className={`relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-colors ${
        isLight ? 'text-[#1D1D1F]' : 'text-[#F7F2EA]'
      }`}>
        
        {/* Psychological Trust & Social Proof Badge */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase shadow-sm backdrop-blur-md border transition-all ${
            isLight
              ? 'bg-white/95 border-[#000000]/12 text-[#1D1D1F]'
              : 'bg-[#241B17]/95 border-[#D7AE63]/60 text-[#F3E2BE]'
          }`}>
            <Sparkles className={`w-4 h-4 ${isLight ? 'text-[#9B6B3A]' : 'text-[#F3E2BE]'}`} />
            <span>عراقة الضيافة العُمانية • محمصة مختصة في نزوى</span>
          </div>

          <div className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold border ${
            isLight
              ? 'bg-[#F5F5F7] text-[#1D1D1F] border-[#000000]/10'
              : 'bg-[#120E0C]/90 text-[#F7F2EA] border-[#D7AE63]/40'
          }`}>
            <span className="text-amber-500">★★★★★</span>
            <span>4.98/5 ثقة أكثر من 15,000 من عشاق القهوة</span>
          </div>
        </div>

        {/* Emotionally-Driven Color Psychology Headline */}
        <h1 className={`font-ibm text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-normal leading-[1.35] sm:leading-[1.3] mb-8 drop-shadow-sm ${
          isLight ? 'text-[#1D1D1F]' : 'text-[#F7F2EA]'
        }`}>
          <span className="block mb-3 sm:mb-4">عبق التحميص الطازج..</span>
          <span className="block">
            وفخامة{' '}
            <span className={isLight ? 'text-[#9B6B3A] font-black inline-block border-b-3 border-[#9B6B3A]/50 pb-1' : 'gold-gradient-bright font-black inline-block border-b-3 border-[#D7AE63]/50 pb-1'}>
              الضيافة العُمانية
            </span>
          </span>
        </h1>

        {/* Subheadline centered on Sensory Experience & Comfort */}
        <p className={`text-base sm:text-lg md:text-xl lg:text-2xl font-semibold max-w-3xl mx-auto leading-relaxed sm:leading-[1.8] mb-10 font-alexandria tracking-wide ${
          isLight ? 'text-[#2C2C2E]' : 'text-[#F7F2EA]'
        }`}>
          نحمُص لك أنقى سلالات البن العالمي وشغف الخلطات العمانية الملكية{' '}
          <span className="font-extrabold border-b border-amber-500/70 pb-0.5">فور طلبك</span>
          ، لتصلك بطعمها الطازج وعطرها الساحر الذي يملأ المكان دفئاً.
        </p>

        {/* CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
          <button
            onClick={onShopNow}
            aria-label="تصفح محاصيل القهوة والمجموعات"
            className={`w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-3 group min-h-[50px] shadow-lg transition-all active:scale-98 ${
              isLight
                ? 'bg-[#1D1D1F] text-white hover:bg-[#3A3A3C] hover:shadow-xl'
                : 'btn-champagne-primary text-[#120E0C] border border-[#F3E2BE]/60'
            }`}
          >
            <span>تسوق المحاصيل الفاخرة</span>
            <ArrowLeft className={`w-5 h-5 group-hover:-translate-x-1.5 transition-transform ${
              isLight ? 'text-white' : 'text-[#120E0C]'
            }`} />
          </button>

          <button
            onClick={onExplore}
            aria-label="تصفح كافة الأقسام والمنتجات"
            className={`w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base flex items-center justify-center gap-2.5 group min-h-[50px] border transition-all active:scale-98 ${
              isLight
                ? 'bg-white text-[#1D1D1F] border-[#EFE7DD] hover:bg-[#FAF6F0] hover:border-[#9B6B3A]/30 shadow-sm'
                : 'btn-champagne-secondary text-[#F3E2BE]'
            }`}
          >
            <Sparkles className={`w-4 h-4 group-hover:rotate-12 transition-transform ${
              isLight ? 'text-[#9B6B3A]' : 'text-[#F3E2BE]'
            }`} />
            <span>تصفح كافة الأقسام</span>
          </button>
        </div>

        {/* Trust & Craftsmanship Highlights - Enhanced Visual Hierarchy & Psychology */}
        <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 border-t max-w-4xl mx-auto text-right sm:text-center ${
          isLight ? 'border-[#000000]/10' : 'border-[#D7AE63]/25'
        }`}>
          <div className={`flex items-center sm:justify-center gap-3 p-4 rounded-2xl backdrop-blur-md border shadow-sm transition-transform hover:-translate-y-0.5 ${
            isLight
              ? 'bg-white/95 border-[#000000]/08 text-[#1D1D1F]'
              : 'bg-[#241B17]/80 border-[#D7AE63]/25 text-[#F7F2EA]'
          }`}>
            <div className={`p-2.5 rounded-xl ${isLight ? 'bg-[#9B6B3A]/10 text-[#9B6B3A]' : 'bg-[#D7AE63]/15 text-[#F3E2BE]'}`}>
              <Flame className="w-5 h-5 shrink-0" />
            </div>
            <div className="text-right">
              <h2 className={`text-sm sm:text-base font-extrabold ${isLight ? 'text-[#1D1D1F]' : 'text-[#F7F2EA]'}`}>تحميص طازج عند الطلب</h2>
              <p className={`text-xs sm:text-sm font-medium ${isLight ? 'text-[#3A3A3C]' : 'text-[#E8DCCB]'}`}>محموصة خصيصاً واسمك على الكيس</p>
            </div>
          </div>

          <div className={`flex items-center sm:justify-center gap-3 p-4 rounded-2xl backdrop-blur-md border shadow-sm transition-transform hover:-translate-y-0.5 ${
            isLight
              ? 'bg-white/95 border-[#000000]/08 text-[#1D1D1F]'
              : 'bg-[#241B17]/80 border-[#D7AE63]/25 text-[#F7F2EA]'
          }`}>
            <div className={`p-2.5 rounded-xl ${isLight ? 'bg-[#9B6B3A]/10 text-[#9B6B3A]' : 'bg-[#D7AE63]/15 text-[#F3E2BE]'}`}>
              <Award className="w-5 h-5 shrink-0" />
            </div>
            <div className="text-right">
              <h2 className={`text-sm sm:text-base font-extrabold ${isLight ? 'text-[#1D1D1F]' : 'text-[#F7F2EA]'}`}>سلالات نادرة (SCA 90+)</h2>
              <p className={`text-xs sm:text-sm font-medium ${isLight ? 'text-[#3A3A3C]' : 'text-[#E8DCCB]'}`}>محاصيل مختصة تنقيط وحيد</p>
            </div>
          </div>

          <div className={`col-span-2 md:col-span-1 flex items-center sm:justify-center gap-3 p-4 rounded-2xl backdrop-blur-md border shadow-sm transition-transform hover:-translate-y-0.5 ${
            isLight
              ? 'bg-white/95 border-[#000000]/08 text-[#1D1D1F]'
              : 'bg-[#241B17]/80 border-[#D7AE63]/25 text-[#F7F2EA]'
          }`}>
            <div className={`p-2.5 rounded-xl ${isLight ? 'bg-[#9B6B3A]/10 text-[#9B6B3A]' : 'bg-[#D7AE63]/15 text-[#F3E2BE]'}`}>
              <ShieldCheck className="w-5 h-5 shrink-0" />
            </div>
            <div className="text-right">
              <h2 className={`text-sm sm:text-base font-extrabold ${isLight ? 'text-[#1D1D1F]' : 'text-[#F7F2EA]'}`}>خلطات سلطانية فاخرة</h2>
              <p className={`text-xs sm:text-sm font-medium ${isLight ? 'text-[#3A3A3C]' : 'text-[#E8DCCB]'}`}>بالهيل والزعفران السوبر نيل</p>
            </div>
          </div>
        </div>

      </div>

      {/* Down Scroll Indicator */}
      <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce ${
        isLight ? 'text-[#9B6B3A]' : 'text-[#D7AE63]'
      }`} aria-hidden="true">
        <span className={`text-[11px] font-sans tracking-widest uppercase ${isLight ? 'text-[#1D1D1F]' : 'text-[#F3E2BE]'}`}>التفاصيل</span>
        <div className={`w-0.5 h-6 rounded-full ${isLight ? 'bg-gradient-to-b from-[#9B6B3A] to-transparent' : 'bg-gradient-to-b from-[#D7AE63] to-transparent'}`} />
      </div>
    </section>
  );
};

