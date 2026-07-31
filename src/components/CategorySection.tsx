import React from 'react';
import { CategoryId } from '../types';
import { Coffee, Flame, Sparkles, Gift, Wrench, PackageCheck } from 'lucide-react';

interface CategorySectionProps {
  activeCategory: CategoryId;
  onSelectCategory: (id: CategoryId) => void;
}

export const CATEGORIES = [
  {
    id: 'specialty' as CategoryId,
    titleAr: 'القهوة المختصة',
    subtitleAr: 'محاصيل نادرة بدرجات تقييم عالية',
    icon: Sparkles,
    count: '12 محصول',
    image: '/assets/images/specialty_coffee_bag_1785262894947.jpg'
  },
  {
    id: 'arabic-omani' as CategoryId,
    titleAr: 'القهوة العربية والعمانية',
    subtitleAr: 'خلطات الأصالة بالهيل والزعفران',
    icon: Coffee,
    count: '6 خلطات',
    image: '/assets/images/omani_dallah_set_1785262881798.jpg'
  },
  {
    id: 'beans' as CategoryId,
    titleAr: 'حبوب البن المحمصة',
    subtitleAr: 'سلالات محمصة بدرجة احترافية',
    icon: Flame,
    count: '15 خيار',
    image: '/assets/images/hero_coffee_beans_1785262866653.jpg'
  },
  {
    id: 'nuts-dates' as CategoryId,
    titleAr: 'المكسرات والتمور العمانية',
    subtitleAr: 'مكسرات محمصة وتمور خلاص محشوة',
    icon: PackageCheck,
    count: '8 تشكيلات',
    image: '/assets/images/nuts_and_dates_1785262922164.jpg'
  },
  {
    id: 'gifts' as CategoryId,
    titleAr: 'الهدايا والتوزيعات الفاخرة',
    subtitleAr: 'صناديق الضيافة والأطقم الملكية',
    icon: Gift,
    count: '10 صناديق',
    image: '/assets/images/luxury_gift_box_1785262908848.jpg'
  },
  {
    id: 'tools' as CategoryId,
    titleAr: 'أدوات القهوة والتحضير',
    subtitleAr: 'دلات نحاسية وأدوات V60',
    icon: Wrench,
    count: '14 أداة',
    image: '/assets/images/omani_dallah_set_1785262881798.jpg'
  }
];

export const CategorySection: React.FC<CategorySectionProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-[#F3E2BE] bg-[#241B17] px-4 py-1.5 rounded-full border border-[#D7AE63]/40 inline-block mb-3 shadow-sm">
          تشكيلة الأصالة
        </span>
        <h2 className="font-amiri text-3xl sm:text-4xl font-bold text-[#1B1512] mb-3">
          تصفح الأقسام الفاخرة
        </h2>
        <p className="text-[#4E382A] text-sm sm:text-base font-normal">
          صُممت تشكيلاتنا لتلبي شغف عشاق القهوة العمانية الأصيلة والقهوة المختصة العالمية.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
        {CATEGORIES.map((cat) => {
          const IconComponent = cat.icon;
          const isSelected = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              aria-label={`تصفح قسم ${cat.titleAr}`}
              className={`group relative rounded-2xl p-5 text-right transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[220px] ${
                isSelected
                  ? 'bg-[#1B1512] text-[#F7F2EA] shadow-2xl ring-2 ring-[#D7AE63] scale-[1.02]'
                  : 'bg-white text-[#1B1512] border border-[#D7AE63]/25 hover:border-[#D7AE63]/60 hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {/* Card Background Subtle Image */}
              <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.titleAr}
                  loading="lazy"
                  decoding="async"
                  width="200"
                  height="200"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Top Row: Icon & Count Badge */}
              <div className="relative z-10 flex items-center justify-between mb-4">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#F3E2BE] to-[#D7AE63] text-[#120E0C] shadow-md'
                      : 'bg-[#241B17] text-[#F3E2BE] group-hover:bg-gradient-to-r group-hover:from-[#F3E2BE] group-hover:to-[#D7AE63] group-hover:text-[#120E0C]'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <span
                  className={`text-[10px] px-2.5 py-1 rounded-full font-bold ${
                    isSelected ? 'bg-[#241B17] text-[#F3E2BE] border border-[#D7AE63]/30' : 'bg-[#FAF6F0] text-[#6C4C35] border border-[#D7AE63]/20'
                  }`}
                >
                  {cat.count}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10">
                <h3
                  className={`font-amiri text-lg font-bold mb-1 transition-colors ${
                    isSelected ? 'text-[#F3E2BE]' : 'text-[#1B1512] group-hover:text-[#9B6B3A]'
                  }`}
                >
                  {cat.titleAr}
                </h3>
                <p
                  className={`text-xs line-clamp-2 leading-relaxed font-normal ${
                    isSelected ? 'text-[#E8DCCB]' : 'text-[#4E382A]'
                  }`}
                >
                  {cat.subtitleAr}
                </p>
              </div>

              {/* Active Golden Bar */}
              {isSelected && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F3E2BE] via-[#D7AE63] to-[#C99A52]" />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
};
