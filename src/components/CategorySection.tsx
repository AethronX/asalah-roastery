import React from 'react';
import { CategoryId } from '../types';
import { Coffee, Flame, Sparkles, Gift, Wrench, PackageCheck, Award } from 'lucide-react';

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
    image: '/src/assets/images/specialty_coffee_bag_1785262894947.jpg'
  },
  {
    id: 'arabic-omani' as CategoryId,
    titleAr: 'القهوة العربية والعمانية',
    subtitleAr: 'خلطات الأصالة بالهيل والزعفران',
    icon: Coffee,
    count: '6 خلطات',
    image: '/src/assets/images/omani_dallah_set_1785262881798.jpg'
  },
  {
    id: 'beans' as CategoryId,
    titleAr: 'حبوب البن المحمصة',
    subtitleAr: 'سلالات محمصة بدرجة احترافية',
    icon: Flame,
    count: '15 خيار',
    image: '/src/assets/images/hero_coffee_beans_1785262866653.jpg'
  },
  {
    id: 'nuts-dates' as CategoryId,
    titleAr: 'المكسرات والتمور العمانية',
    subtitleAr: 'مكسرات محمصة وتمور خلاص محشوة',
    icon: PackageCheck,
    count: '8 تشكيلات',
    image: '/src/assets/images/nuts_and_dates_1785262922164.jpg'
  },
  {
    id: 'gifts' as CategoryId,
    titleAr: 'الهدايا والتوزيعات الفاخرة',
    subtitleAr: 'صناديق الضيافة والأطقم الملكية',
    icon: Gift,
    count: '10 صناديق',
    image: '/src/assets/images/luxury_gift_box_1785262908848.jpg'
  },
  {
    id: 'tools' as CategoryId,
    titleAr: 'أدوات القهوة والتحضير',
    subtitleAr: 'دلات نحاسية وأدوات V60',
    icon: Wrench,
    count: '14 أداة',
    image: '/src/assets/images/omani_dallah_set_1785262881798.jpg'
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
        <span className="text-xs font-semibold uppercase tracking-widest text-[#B78A5C] bg-[#B78A5C]/10 px-3.5 py-1.5 rounded-full border border-[#B78A5C]/20 inline-block mb-3">
          تشكيلة الأصالة
        </span>
        <h2 className="font-amiri text-3xl sm:text-4xl font-bold text-[#2B211B] mb-3">
          تصفح الأقسام الفاخرة
        </h2>
        <p className="text-[#4A3326]/80 text-sm sm:text-base font-light">
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
              className={`group relative rounded-2xl p-5 text-right transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[220px] ${
                isSelected
                  ? 'bg-[#2B211B] text-[#F8F3EC] shadow-xl ring-2 ring-[#C9A76A] scale-[1.02]'
                  : 'bg-[#F8F3EC] text-[#2B211B] border border-[#EFE8DE] hover:border-[#C9A76A]/60 hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              {/* Card Background Subtle Image */}
              <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.titleAr}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Top Row: Icon & Count Badge */}
              <div className="relative z-10 flex items-center justify-between mb-4">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'bg-[#C9A76A] text-[#2B211B]'
                      : 'bg-[#B78A5C]/15 text-[#B78A5C] group-hover:bg-[#B78A5C] group-hover:text-white'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-sans ${
                    isSelected ? 'bg-white/10 text-[#C9A76A]' : 'bg-[#2B211B]/5 text-[#4A3326]/70'
                  }`}
                >
                  {cat.count}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10">
                <h3
                  className={`font-amiri text-lg font-bold mb-1 transition-colors ${
                    isSelected ? 'text-[#F8F3EC]' : 'text-[#2B211B] group-hover:text-[#B78A5C]'
                  }`}
                >
                  {cat.titleAr}
                </h3>
                <p
                  className={`text-xs line-clamp-2 leading-relaxed ${
                    isSelected ? 'text-[#F8F3EC]/70' : 'text-[#4A3326]/70'
                  }`}
                >
                  {cat.subtitleAr}
                </p>
              </div>

              {/* Active Golden Bar */}
              {isSelected && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B78A5C] to-[#C9A76A]" />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
};
