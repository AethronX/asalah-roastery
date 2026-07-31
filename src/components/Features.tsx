import React from 'react';
import { Flame, Truck, Package, ShieldCheck, Award } from 'lucide-react';

export const Features: React.FC = () => {
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
    <section className="py-16 bg-[#FAF6F0]/70 border-y border-[#D7AE63]/20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {featuresList.map((f, idx) => {
          const IconComponent = f.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#D7AE63]/25 text-right hover:border-[#D7AE63] hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1B1512] text-[#F3E2BE] border border-[#D7AE63]/40 flex items-center justify-center mb-4 group-hover:bg-gradient-to-r group-hover:from-[#F3E2BE] group-hover:to-[#D7AE63] group-hover:text-[#120E0C] transition-colors shadow-sm">
                <IconComponent className="w-6 h-6" />
              </div>
              <h3 className="font-cairo text-base font-bold text-[#1B1512] mb-2 leading-relaxed">
                {f.titleAr}
              </h3>
              <p className="text-xs sm:text-sm text-[#4E382A] leading-relaxed font-normal">
                {f.descAr}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
