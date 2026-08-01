import { Coffee, Flame, Sparkles, Gift, Wrench, PackageCheck } from 'lucide-react';
import { CategoryId } from '../types';

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
    image: '/assets/images/coffee_tools_set_1785572885322.jpg'
  }
];
