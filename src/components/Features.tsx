import React from 'react';
import { Flame, Truck, Package, ShieldCheck, Award } from 'lucide-react';

interface FeaturesProps {
  theme?: 'light' | 'dark';
}

export const Features: React.FC<FeaturesProps> = React.memo(({ theme = 'light' }) => {
  const isLight = theme === 'light';

  const featuresList = [
    {
      icon: Flame,
      titleAr: 'تحميص خاص فور الطلب',
      descAr: 'لا نخزن البن المحمص؛ نحمص دفعاتك صبيحة يوم الشحن لضمان أعلى نسبة زيوت عطريّة طازجة.'
    },
    {
      icon: Truck,
      titleAr: 'توصيل مجاني وسريع جداً',
      descAr: 'توصيل خلال نفس اليوم في مسقط، وخلال 24-48 ساعة لكافة ولايات السلطنة ودول الخليج.'
    },
    {
      icon: Package,
      titleAr: 'تغليف ثلاثي بعازل النيتروجين',
      descAr: 'أكياس فاخرة بصمام اتجاه واحد وتفريغ الأكسجين لتحفظ نكهة وإيحاءات البن طازجة لشهور.'
    },
    {
      icon: ShieldCheck,
      titleAr: 'دفع آمن وسلس 100%',
      descAr: 'دعم Apple Pay، البطاقات العمانية (Omannet)، والبطاقات الائتمانية بتشفير بنكي مشدد.'
    },
    {
      icon: Award,
      titleAr: 'ضمان الذوق والرضا الملكي',
      descAr: 'نضمن لك تجربة مذاق لا تُنسى، وإذا لم تنل القهوة رضاك الكامل نستبدلها لك فوراً دون أسئلة.'
    }
  ];

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isLight ? 'bg-[#FAF8F5]' : 'bg-[#181310]'
    }`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="sr-only">مزايا وضمانات محامص الأصالة</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {featuresList.map((f, idx) => {
            const IconComponent = f.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl border text-right transition-all duration-300 group ${
                  isLight
                    ? 'bg-white border-[#EFE7DD] hover:border-[#9B6B3A]/50 hover:shadow-xl'
                    : 'bg-[#241B17] border-[#D7AE63]/25 hover:border-[#D7AE63]/60 hover:shadow-2xl'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all shadow-sm ${
                  isLight
                    ? 'bg-[#FAF6F0] text-[#9B6B3A] border border-[#9B6B3A]/20 group-hover:bg-[#1D1D1F] group-hover:text-white'
                    : 'bg-[#1B1512] text-[#F3E2BE] border border-[#D7AE63]/40 group-hover:bg-[#D7AE63] group-hover:text-[#120E0C]'
                }`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className={`font-alexandria text-base sm:text-lg font-extrabold mb-2 leading-relaxed ${
                  isLight ? 'text-[#1D1D1F]' : 'text-[#F7F2EA]'
                }`}>
                  {f.titleAr}
                </h3>
                <p className={`text-xs sm:text-sm md:text-base leading-relaxed font-medium ${
                  isLight ? 'text-[#3A3A3C]' : 'text-[#E8DCCB]'
                }`}>
                  {f.descAr}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});
