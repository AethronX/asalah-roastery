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
    <section className="py-16 bg-[#F8F3EC] border-y border-[#EFE8DE] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {featuresList.map((f, idx) => {
          const IconComponent = f.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#EFE8DE]/40 border border-[#EFE8DE] text-right hover:border-[#B78A5C]/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#2B211B] text-[#C9A76A] flex items-center justify-center mb-4 group-hover:bg-[#B78A5C] group-hover:text-white transition-colors">
                <IconComponent className="w-6 h-6" />
              </div>
              <h3 className="font-amiri text-lg font-bold text-[#2B211B] mb-2">
                {f.titleAr}
              </h3>
              <p className="text-xs text-[#4A3326]/80 leading-relaxed font-light">
                {f.descAr}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
