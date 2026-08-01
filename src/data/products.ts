import { Product, Testimonial, BranchLocation } from '../types';

export const PRODUCTS: Product[] = [
  // 1
  {
    id: 'asalah-omani-special',
    nameAr: 'خلطة الأصالة العمانية بالهيل والزعفران',
    nameEn: 'Al Asalah Special Omani Royal Blend',
    subtitleAr: 'خلطة ملكية محاطة بعبق الهيل الهندي النقي والزعفران السوبر نيل',
    categoryId: 'arabic-omani',
    priceOmr: 8.500,
    priceUsd: 22.00,
    originalPriceOmr: 9.800,
    rating: 10.0,
    reviewsCount: 148,
    image: '/assets/images/omani_dallah_set_1785262881798.jpg',
    gallery: [
      '/assets/images/omani_dallah_set_1785262881798.jpg',
      '/assets/images/specialty_coffee_bag_1785262894947.jpg',
      '/assets/images/hero_coffee_beans_1785262866653.jpg'
    ],
    roastLevel: 'محمص خفيف بالهيل (Omani Traditional)',
    roastValue: 2,
    originCountry: 'سلطنة عمان (تجميعه وحمص مسقط)',
    originRegion: 'جبال اليمن وحرار مع هيل غواتيمالي ممتاز',
    altitude: '1,950م فوق سطح البحر',
    process: 'مجففة طبيعياً بالشمس',
    flavorNotes: ['هيل أخضر فاخر', 'خيوط الزعفران', 'لمسة ماء الورد', 'مكسرات محمصة'],
    descriptionAr: 'القهوة العمانية الأصيلة المعدة وفق أعرق تقاليد الضيافة العمانية. يتم تحميص حبوب البن الذهبية بدرجة دقيقة لتتمازج مع أجود أنواع الهيل الأخضر وجواهر الزعفران الملكي، لتوفر لك تجربة رشفة استثنائية تعكس الكرم العماني.',
    flavorProfile: {
      acidity: 4,
      body: 8,
      sweetness: 9,
      aroma: 10,
      aftertaste: 9
    },
    weights: [
      { label: '250 جرام', grams: 250, priceMultiplier: 1.0 },
      { label: '500 جرام', grams: 500, priceMultiplier: 1.9 },
      { label: '1000 جرام (1 كجم)', grams: 1000, priceMultiplier: 3.6 }
    ],
    isBestSeller: true,
    brewingMethods: ['دلة القهوة العمانية', 'الركوة والغلّاية', 'إبريق الضيافة']
  },
  // 2
  {
    id: 'yemen-harazi-reserve',
    nameAr: 'بن حرازي يمني - المحمية الفاخرة',
    nameEn: 'Yemeni Harazi Special Reserve',
    subtitleAr: 'سلالة تاريخية فريدة من مدرجات جبال حراز اليمنية الشاهقة',
    categoryId: 'specialty',
    priceOmr: 12.000,
    priceUsd: 31.00,
    rating: 10.0,
    reviewsCount: 92,
    image: '/assets/images/specialty_coffee_bag_1785262894947.jpg',
    gallery: [
      '/assets/images/specialty_coffee_bag_1785262894947.jpg',
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800'
    ],
    roastLevel: 'متوسط (Medium)',
    roastValue: 3,
    originCountry: 'اليمن',
    originRegion: 'جبال حراز (شرق حراز)',
    altitude: '2,200م فوق سطح البحر',
    process: 'مجففة على الأسرة المرتفعة',
    flavorNotes: ['توت العليق', 'العسل الجبلي', 'الشوكولاتة الداكنة', 'التوابل الدافئة'],
    descriptionAr: 'من أندر وسلالات البن في العالم، تُزرع في مدرجات حراز اليمنية المرتفعة برعاية مزارعين وراثةً عن الأجداد. تمتاز بتعقيد نكهاتها وإيحاءات العسل والتوت البري مع قوام غني متزن.',
    flavorProfile: {
      acidity: 7,
      body: 9,
      sweetness: 8,
      aroma: 9,
      aftertaste: 9
    },
    weights: [
      { label: '250 جرام', grams: 250, priceMultiplier: 1.0 },
      { label: '500 جرام', grams: 500, priceMultiplier: 1.95 }
    ],
    isBestSeller: true,
    isLimited: true,
    brewingMethods: ['V60', 'Chemex', 'Espresso', 'Aeropress']
  },
  // 3
  {
    id: 'ethiopia-yirgacheffe-gedeb',
    nameAr: 'إثيوبيا يرقاتشيف - جيديب زهور',
    nameEn: 'Ethiopia Yirgacheffe Gedeb Floral',
    subtitleAr: 'إيحاءات الزهور والياسمين مع حلاوة الخوخ الاستوائي',
    categoryId: 'specialty',
    priceOmr: 9.500,
    priceUsd: 24.50,
    rating: 10.0,
    reviewsCount: 115,
    image: '/assets/images/hero_coffee_beans_1785262866653.jpg',
    gallery: [
      '/assets/images/hero_coffee_beans_1785262866653.jpg',
      '/assets/images/specialty_coffee_bag_1785262894947.jpg'
    ],
    roastLevel: 'خفيف (Light)',
    roastValue: 1,
    originCountry: 'إثيوبيا',
    originRegion: 'يرقاتشيف - منطقة جيديب',
    altitude: '2,050م فوق سطح البحر',
    process: 'مغسولة بالطريقة التقليدية',
    flavorNotes: ['زهور الياسمين', 'الخوخ المشرق', 'شاي البرغموت', 'الحمضيات النظيفة'],
    descriptionAr: 'قهوة مختصة أنيقة ذات طابع زهري منعش للغاية. تُحمص بدرجة خفيفة للحفاظ على معالم النكهة الفواحة وتعقيد حموضتها المشرقة كالفاكهة الاستوائية.',
    flavorProfile: {
      acidity: 9,
      body: 5,
      sweetness: 8,
      aroma: 10,
      aftertaste: 8
    },
    weights: [
      { label: '250 جرام', grams: 250, priceMultiplier: 1.0 },
      { label: '500 جرام', grams: 500, priceMultiplier: 1.88 }
    ],
    isNew: true,
    brewingMethods: ['V60', 'Chemex', 'القهوة المثلجة Cold Brew']
  },
  // 4
  {
    id: 'colombia-geisha-huila',
    nameAr: 'كولومبيا غيشا - هويلا إكسترا',
    nameEn: 'Colombia Geisha Huila Special Edition',
    subtitleAr: 'درجة تقييم 91.5 نقطة - أفخر سلالات الجيشا النادرة',
    categoryId: 'beans',
    priceOmr: 16.000,
    priceUsd: 41.50,
    originalPriceOmr: 18.500,
    rating: 10.0,
    reviewsCount: 47,
    image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&q=80&w=800'
    ],
    roastLevel: 'خفيف (Light)',
    roastValue: 1,
    originCountry: 'كولومبيا',
    originRegion: 'هويلا - مزرعة الفيردوا',
    altitude: '1,850م فوق سطح البحر',
    process: 'معالجة بالتخمير الهوائي اللاهوائي (Anaerobic)',
    flavorNotes: ['ثمار المانجو', 'شاي اللافندر', 'الكرز الأحمر', 'حلاوة قصب السكر'],
    descriptionAr: 'محصول استثنائي لخبراء القهوة وعشاق التميز. سلالة الجيشا الكولومبية تحظى باهتمام دقيق في محامص الأصالة لإبراز النكهات المعقدة الحائزة على جوائز عالمية.',
    flavorProfile: {
      acidity: 8,
      body: 6,
      sweetness: 10,
      aroma: 10,
      aftertaste: 10
    },
    weights: [
      { label: '250 جرام', grams: 250, priceMultiplier: 1.0 }
    ],
    isLimited: true,
    brewingMethods: ['V60', 'Chemex', 'Kalita Wave']
  },
  // 5
  {
    id: 'luxury-royal-gift-box',
    nameAr: 'صندوق الهدايا الملكي - الأصالة العمانية',
    nameEn: 'Al Asalah Royal Omani Luxury Gift Box',
    subtitleAr: 'تغليف مخملي مع أواني نحاسية مموهة بماء الذهب وعينات بن نادر',
    categoryId: 'gifts',
    priceOmr: 35.000,
    priceUsd: 91.00,
    rating: 10.0,
    reviewsCount: 64,
    image: '/assets/images/luxury_gift_box_1785262908848.jpg',
    gallery: [
      '/assets/images/luxury_gift_box_1785262908848.jpg',
      '/assets/images/omani_dallah_set_1785262881798.jpg'
    ],
    roastLevel: 'محمص خفيف بالهيل (Omani Traditional)',
    roastValue: 2,
    originCountry: 'سلطنة عمان',
    originRegion: 'مجموعة الضيافة الفاخرة',
    altitude: 'متنوع',
    process: 'اختيار يدوي فرز ملكي',
    flavorNotes: ['هيل غواتيمالي A1', 'زعفران سوبر نيل', 'بن يمني وسوداني ممتاز', 'تمر خلاص فاخر'],
    descriptionAr: 'صندوق الضيافة العمانية الملكي المصمم خصيصاً للمناسبات الرفيعة والهدايا الرسمية. يحتوي على دلة عمانية مطلية، طقم فناجين سيراميك يدوي الصنع، علبة بن الأصالة الملكي 500جرام، وزعفران نقيا.',
    flavorProfile: {
      acidity: 5,
      body: 9,
      sweetness: 9,
      aroma: 10,
      aftertaste: 9
    },
    weights: [
      { label: 'طقم هدية متكامل', grams: 1500, priceMultiplier: 1.0 }
    ],
    isBestSeller: true,
    brewingMethods: ['دلة الضيافة الفاخرة']
  },
  // 6
  {
    id: 'omani-dates-nuts-platter',
    nameAr: 'تشكيلة المكسرات المحمصة والتمور المحشوة',
    nameEn: 'Artisanal Roasted Nuts & Stuffed Omani Dates',
    subtitleAr: 'مكسرات محمصة طازجة مع تمور الخلاص العمانية المحشوة بالفستق واللوز',
    categoryId: 'nuts-dates',
    priceOmr: 10.500,
    priceUsd: 27.20,
    rating: 10.0,
    reviewsCount: 88,
    image: '/assets/images/nuts_and_dates_1785262922164.jpg',
    gallery: [
      '/assets/images/nuts_and_dates_1785262922164.jpg',
      '/assets/images/luxury_gift_box_1785262908848.jpg'
    ],
    roastLevel: 'متوسط (Medium)',
    roastValue: 3,
    originCountry: 'سلطنة عمان',
    originRegion: 'مزارع نخل والباطنة',
    altitude: 'سهول عمانية',
    process: 'تحميص جاف بدون زيوت مع أعشاب عطرية',
    flavorNotes: ['تمور خلاص فاخرة', 'فستق حلبي مدخن', 'لوز مكرمل', 'جوز عين الجمل'],
    descriptionAr: 'المرفق الأجمل لفنجان القهوة العمانية الأصيلة. تشكيلة فاخرة من التمور العمانية المختارة حبّة حبّة، والمحشوة بالكراميل والمكسرات الطازجة المحمصة يومياً في معملنا.',
    flavorProfile: {
      acidity: 1,
      body: 8,
      sweetness: 9,
      aroma: 8,
      aftertaste: 8
    },
    weights: [
      { label: '500 جرام', grams: 500, priceMultiplier: 1.0 },
      { label: '1000 جرام (1 كجم)', grams: 1000, priceMultiplier: 1.85 }
    ],
    isBestSeller: true,
    brewingMethods: ['مرفق مع القهوة العمانية']
  },
  // 7
  {
    id: 'artisanal-dallah-set',
    nameAr: 'دلة الأصالة النحاسية المزخرفة مع 6 فناجين',
    nameEn: 'Artisanal Engraved Brass Dallah Set',
    subtitleAr: 'صناعة يدوية عمانية بتفاصيل محفورة بحرفية عالية للضيافة',
    categoryId: 'tools',
    priceOmr: 28.000,
    priceUsd: 72.80,
    rating: 10.0,
    reviewsCount: 39,
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&q=80&w=800',
      '/assets/images/omani_dallah_set_1785262881798.jpg'
    ],
    roastLevel: 'محمص خفيف بالهيل (Omani Traditional)',
    roastValue: 2,
    originCountry: 'سلطنة عمان (نزوى)',
    originRegion: 'ورش الحرفيين العمانيين',
    altitude: 'صناعة يدوية',
    process: 'نقش يدوي نحاس خالص',
    flavorNotes: ['طابع تراثي', 'حفظ حرارة ممتاز', 'مقبض آمن', 'فناجين بورسلين فاخر'],
    descriptionAr: 'دلة تقديم القهوة العمانية التقليدية المصنوعة يدويًا من النحاس الخالص المقاوم للصدأ ومطعمة بنقوش إسلامية عمانية أصيلة مع طقم فناجين فاخرة.',
    flavorProfile: {
      acidity: 0,
      body: 0,
      sweetness: 0,
      aroma: 0,
      aftertaste: 0
    },
    weights: [
      { label: 'دلة 1.2 لتر + 6 فناجين', grams: 1200, priceMultiplier: 1.0 }
    ],
    brewingMethods: ['تحضير القهوة العمانية']
  },
  // 8
  {
    id: 'panama-geisha-esmeralda',
    nameAr: 'بن بنما قيشا إزميرالدا النادر',
    nameEn: 'Panama Geisha Hacienda La Esmeralda',
    subtitleAr: 'أعظم محصول قهوة في العالم - معالجة تجفيف بطيء',
    categoryId: 'specialty',
    priceOmr: 19.500,
    priceUsd: 50.70,
    rating: 10.0,
    reviewsCount: 31,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800',
      '/assets/images/specialty_coffee_bag_1785262894947.jpg'
    ],
    roastLevel: 'خفيف (Light)',
    roastValue: 1,
    originCountry: 'بنما',
    originRegion: 'بوكيتي - هاسيندا لا إزميرالدا',
    altitude: '1,800م - 2,100م',
    process: 'مجففة طبيعية على الأسرة المرتفعة',
    flavorNotes: ['زهور البابونج', 'المشمش المجفف', 'شاي البرغموت', 'الحلاوة العسلية'],
    descriptionAr: 'المحصول الأيقوني الأشهر عالمياً من مزرعة لا إزميرالدا البنمية. تعقيد عطري لا يُضاهى مع نكهات الأزهار والفواكه المشرقة التي تأخذك في رحلة تذوق استثنائية.',
    flavorProfile: {
      acidity: 9,
      body: 6,
      sweetness: 10,
      aroma: 10,
      aftertaste: 10
    },
    weights: [
      { label: '125 جرام', grams: 125, priceMultiplier: 0.6 },
      { label: '250 جرام', grams: 250, priceMultiplier: 1.0 }
    ],
    isLimited: true,
    isNew: true,
    brewingMethods: ['V60', 'Chemex', 'Kalita Wave']
  },
  // 9
  {
    id: 'guatemala-huehuetenango',
    nameAr: 'جواتيمالا هويهويتينانغو الكلاسيكية',
    nameEn: 'Guatemala Huehuetenango High Altitude',
    subtitleAr: 'قوام مخملي مع نكهات الكاكاو والبندق المكرمل',
    categoryId: 'specialty',
    priceOmr: 8.800,
    priceUsd: 22.80,
    rating: 10.0,
    reviewsCount: 76,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800',
      '/assets/images/hero_coffee_beans_1785262866653.jpg'
    ],
    roastLevel: 'متوسط (Medium)',
    roastValue: 3,
    originCountry: 'جواتيمالا',
    originRegion: 'هويهويتينانغو المرتفعة',
    altitude: '1,900م',
    process: 'مغسولة ونقية',
    flavorNotes: ['الشوكولاتة بالحليب', 'البندق المحمص', 'التفاح الأخضر', 'الكراميل'],
    descriptionAr: 'قهوة متزنة للغاية ومرغوبة جداً لتحضير مشروبات الإسبريسو والتقطير اليومي. يمتاز هذا المحصول بقوام متين ونكهات شوكولاتة غنية تتوج بلمسة فاكهية لطيفة.',
    flavorProfile: {
      acidity: 6,
      body: 8,
      sweetness: 8,
      aroma: 8,
      aftertaste: 8
    },
    weights: [
      { label: '250 جرام', grams: 250, priceMultiplier: 1.0 },
      { label: '500 جرام', grams: 500, priceMultiplier: 1.85 }
    ],
    brewingMethods: ['Espresso', 'V60', 'Aeropress', 'فرنش بريس (French Press)']
  },
  // 10
  {
    id: 'costa-rica-tarrazu-honey',
    nameAr: 'كوستا ريكا تارازو - المعالجة العسلية',
    nameEn: 'Costa Rica Tarrazu Yellow Honey',
    subtitleAr: 'حلاوة عسلية فائقة وحموضة برتقال متزنة',
    categoryId: 'specialty',
    priceOmr: 10.200,
    priceUsd: 26.50,
    rating: 10.0,
    reviewsCount: 52,
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=800'
    ],
    roastLevel: 'متوسط (Medium)',
    roastValue: 3,
    originCountry: 'كوستا ريكا',
    originRegion: 'وادي تارازو الشهير',
    altitude: '1,750م',
    process: 'معالجة عسلية صفراء (Yellow Honey)',
    flavorNotes: ['العسل الصافي', 'حمضيات البرتقال', 'اللوز الحلو', 'كراميل دافئ'],
    descriptionAr: 'معالجة عسلية فريدة تعطي حبوب القهوة حلاوة طبيعية استثنائية وقواماً ناعماً كالحرير. تناسب تماماً من يعشقون القهوة ذات القوام الغني والحلاوة الملحوظة.',
    flavorProfile: {
      acidity: 7,
      body: 7,
      sweetness: 10,
      aroma: 9,
      aftertaste: 8
    },
    weights: [
      { label: '250 جرام', grams: 250, priceMultiplier: 1.0 },
      { label: '500 جرام', grams: 500, priceMultiplier: 1.9 }
    ],
    isNew: true,
    brewingMethods: ['V60', 'Espresso', 'Chemex']
  },
  // 11
  {
    id: 'salalah-frankincense-coffee',
    nameAr: 'خلطة لبان ظفار الملكية بالقهوة الذهبية',
    nameEn: 'Royal Dhofar Frankincense & Gold Coffee',
    subtitleAr: 'ابتكار عماني ممزوج بجواهر اللبان الحوجري النقي من جبال ظفار',
    categoryId: 'arabic-omani',
    priceOmr: 9.200,
    priceUsd: 23.90,
    rating: 10.0,
    reviewsCount: 83,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800',
      '/assets/images/hero_luxury_roast_1785572872948.jpg'
    ],
    roastLevel: 'محمص خفيف بالهيل (Omani Traditional)',
    roastValue: 2,
    originCountry: 'سلطنة عمان',
    originRegion: 'جبال ظفار (صلالة) وحمص مسقط',
    altitude: '1,200م',
    process: 'تعتيق مع اللبان الحوجري الذكر',
    flavorNotes: ['لبان حوجري ظفاري', 'هيل أخضر', 'نفحات عطرية ملكية', 'شوكولاتة خفيفة'],
    descriptionAr: 'ابتكار حصري بامتياز من محامص الأصالة. يمزج البن الذهبي مع حبوب اللبان الحوجري العماني الذكر النادر ليمنح القهوة شذى عاطراً وفوائد منعشة تحاكي مجالس الشيوخ والأعيان.',
    flavorProfile: {
      acidity: 3,
      body: 8,
      sweetness: 8,
      aroma: 10,
      aftertaste: 10
    },
    weights: [
      { label: '250 جرام', grams: 250, priceMultiplier: 1.0 },
      { label: '500 جرام', grams: 500, priceMultiplier: 1.88 }
    ],
    isBestSeller: true,
    brewingMethods: ['دلة القهوة العمانية', 'الركوة']
  },
  // 12
  {
    id: 'saudi-khawlani-dark',
    nameAr: 'بن خولاني صعدي فاخر - تحميص أصالة',
    nameEn: 'Premium Khawlani Coffee - Heritage Roast',
    subtitleAr: 'البن الخولاني العريق المعترف به عالمياً في اليونسكو',
    categoryId: 'arabic-omani',
    priceOmr: 11.000,
    priceUsd: 28.60,
    rating: 10.0,
    reviewsCount: 61,
    image: 'https://images.unsplash.com/photo-1610632380989-680fe40816c6?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1610632380989-680fe40816c6?auto=format&fit=crop&q=80&w=800'
    ],
    roastLevel: 'متوسط-داكن (Medium-Dark)',
    roastValue: 4,
    originCountry: 'الجزيرة العربية / اليمن',
    originRegion: 'جبال خولان العريقة',
    altitude: '2,000م',
    process: 'تجفيف طبيعي تقليدي',
    flavorNotes: ['هيل نقي', 'مكسرات محمصة', 'طابع عربي أصيل', 'شوكولاتة دافئة'],
    descriptionAr: 'البن الخولاني الفريد والمصنف ضمن التراث الثقافي الإنساني. حبوب صغيرة الحجم مكتنزة بالنكهات الزكية وتتميز بقوامها المخملي الذي يلائم تحضير القهوة العربية والخليجية الاصيلة.',
    flavorProfile: {
      acidity: 4,
      body: 9,
      sweetness: 8,
      aroma: 9,
      aftertaste: 9
    },
    weights: [
      { label: '250 جرام', grams: 250, priceMultiplier: 1.0 },
      { label: '500 جرام', grams: 500, priceMultiplier: 1.9 }
    ],
    brewingMethods: ['القهوة العربية والخليجية', 'الدلة العمانية']
  },
  // 13
  {
    id: 'brazil-cerrado-chocolate',
    nameAr: 'برازيل سيرادو - الشوكولاتة والجوز',
    nameEn: 'Brazil Cerrado Mineiro Chocolate Roast',
    subtitleAr: 'حلاوة الشوكولاتة الداكنة والمكسرات المحمصة - مثالية للإسبريسو',
    categoryId: 'beans',
    priceOmr: 7.500,
    priceUsd: 19.50,
    rating: 10.0,
    reviewsCount: 132,
    image: 'https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?auto=format&fit=crop&q=80&w=800'
    ],
    roastLevel: 'متوسط-داكن (Medium-Dark)',
    roastValue: 4,
    originCountry: 'البرازيل',
    originRegion: 'سيرادو مينيرو',
    altitude: '1,100م',
    process: 'مجففة طبيعية (Natural)',
    flavorNotes: ['شوكولاتة داكنة', 'جوز البكان', 'حلاوة الكراميل', 'قوام كريمي'],
    descriptionAr: 'الخيار المفضل لعشاق المشروبات بالحليب مثل اللاتيه والكابتشينو. تمتاز بحموضة منخفضة جداً وقوام كثيف يبرز طعم الشوكولاتة والجوز المحمص بشكل رائع.',
    flavorProfile: {
      acidity: 3,
      body: 10,
      sweetness: 8,
      aroma: 8,
      aftertaste: 8
    },
    weights: [
      { label: '250 جرام', grams: 250, priceMultiplier: 1.0 },
      { label: '500 جرام', grams: 500, priceMultiplier: 1.85 },
      { label: '1000 جرام', grams: 1000, priceMultiplier: 3.4 }
    ],
    isBestSeller: true,
    brewingMethods: ['Espresso', 'لاتيه وكابتشينو', 'Mocha Pot']
  },
  // 14
  {
    id: 'sumatra-mandheling-bold',
    nameAr: 'سومطرة مانديلينج - قوام أرضي عميق',
    nameEn: 'Indonesia Sumatra Mandheling Triple Picked',
    subtitleAr: 'إيحاءات الأعشاب العطرية الشوكولاتة الداكنة الحادة',
    categoryId: 'beans',
    priceOmr: 8.900,
    priceUsd: 23.10,
    rating: 10.0,
    reviewsCount: 41,
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&q=80&w=800'
    ],
    roastLevel: 'داكن (Dark)',
    roastValue: 5,
    originCountry: 'إندونيسيا',
    originRegion: 'جزيرة سومطرة - بحيرة توبا',
    altitude: '1,500م',
    process: 'تقشير رطب تقليدي (Wet-Hulled)',
    flavorNotes: ['توابل أرضية', 'شوكولاتة مرّة', 'أعشاب حارة', 'تمر هندي'],
    descriptionAr: 'قهوة استوائية ذات شخصية فريدة وقوية جداً. المعالجة الإندونيسية الرطبة تمنحها حموضة شبه منعدمة وقواماً ثقيلاً يفضله محبو القهوة القوية والداكنة.',
    flavorProfile: {
      acidity: 2,
      body: 10,
      sweetness: 6,
      aroma: 8,
      aftertaste: 9
    },
    weights: [
      { label: '250 جرام', grams: 250, priceMultiplier: 1.0 },
      { label: '500 جرام', grams: 500, priceMultiplier: 1.88 }
    ],
    brewingMethods: ['فرنش بريس (French Press)', 'Espresso', 'Mocha Pot']
  },
  // 15
  {
    id: 'kenya-aa-kirinyaga',
    nameAr: 'كينيا AA كيرينياغا - تعقيد فاكهي',
    nameEn: 'Kenya AA Kirinyaga Blackcurrant Special',
    subtitleAr: 'درجة فرز كينية AA العليا - حموضة الكركديه والتوت الأسود',
    categoryId: 'beans',
    priceOmr: 11.500,
    priceUsd: 29.90,
    rating: 10.0,
    reviewsCount: 68,
    image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&q=80&w=800'
    ],
    roastLevel: 'خفيف (Light)',
    roastValue: 1,
    originCountry: 'كينيا',
    originRegion: 'منحدرات جبل كينيا - كيرينياغا',
    altitude: '1,800م - 2,000م',
    process: 'معالجة غسيل مزدوج (Double Washed)',
    flavorNotes: ['التوت الأسود', 'الكركديه المشرق', 'الطماطم الناضجة', 'سكر بني'],
    descriptionAr: 'من أنشط وأجرأ المحاصيل الفاكهية في العالم. الحبوب الكبيرة الحجم والمفروزة بدرجة AA توفر كوباً فواراً بالإيحاءات الانتعاشية والشرابية النادرة.',
    flavorProfile: {
      acidity: 10,
      body: 7,
      sweetness: 8,
      aroma: 10,
      aftertaste: 9
    },
    weights: [
      { label: '250 جرام', grams: 250, priceMultiplier: 1.0 },
      { label: '500 جرام', grams: 500, priceMultiplier: 1.9 }
    ],
    isNew: true,
    brewingMethods: ['V60', 'Chemex', 'القهوة المثلجة Cold Brew']
  },
  // 16
  {
    id: 'dates-khalas-royal-box',
    nameAr: 'تمر خلاص عماني ملكي بالهيل والفستق',
    nameEn: 'Royal Stuffed Omani Khalas Dates Box',
    subtitleAr: 'ثمار خلاص نخل نقية محشوة بزبدة الفستق ومغطاة بجوز الهند والهيل',
    categoryId: 'nuts-dates',
    priceOmr: 7.800,
    priceUsd: 20.20,
    rating: 10.0,
    reviewsCount: 104,
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=800'
    ],
    roastLevel: 'متوسط (Medium)',
    roastValue: 3,
    originCountry: 'سلطنة عمان',
    originRegion: 'ولايات نخل والرميس',
    altitude: 'مزارع عمانية',
    process: 'فرز ملكي وتغليف مفرغ من الهواء',
    flavorNotes: ['تمور خلاص ذهبية', 'فستق حلبي فاخر', 'هيل هندي', 'سمسم محمص'],
    descriptionAr: 'تمور الخلاص العمانية الأشهر، منقّاة بعناية محشوة بالخلطات التراثية اليدوية، لتشكل الثنائي المثالي بجانب فنجان القهوة العمانية الفواح.',
    flavorProfile: {
      acidity: 0,
      body: 9,
      sweetness: 10,
      aroma: 9,
      aftertaste: 9
    },
    weights: [
      { label: '500 جرام', grams: 500, priceMultiplier: 1.0 },
      { label: '1000 جرام (1 كجم)', grams: 1000, priceMultiplier: 1.85 }
    ],
    isBestSeller: true,
    brewingMethods: ['تقديم مع القهوة']
  },
  // 17
  {
    id: 'luxury-cashew-almond-mix',
    nameAr: 'كاجو ولوز عماني - حمصة الأصالة الخاصة',
    nameEn: 'Signature Roasted Cashews & Smoked Almonds',
    subtitleAr: 'تحميص جاف بالملح البحري والبهارات العمانية الخفيفة',
    categoryId: 'nuts-dates',
    priceOmr: 6.500,
    priceUsd: 16.90,
    rating: 10.0,
    reviewsCount: 77,
    image: 'https://images.unsplash.com/photo-1536591375315-19895658238f?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1536591375315-19895658238f?auto=format&fit=crop&q=80&w=800'
    ],
    roastLevel: 'متوسط (Medium)',
    roastValue: 3,
    originCountry: 'سلطنة عمان',
    originRegion: 'معامل الأصالة بمسقط',
    altitude: 'تحميص يومي طازج',
    process: 'تحميص بالهواء الساخن بدون زيوت',
    flavorNotes: ['كاجو جامبو', 'لوز أمريكي مدخن', 'ملح بحري نقي', 'زعتر عماني خفيف'],
    descriptionAr: 'مكسرات مقرمشة وطازجة تحمص يومياً فور الطلب. خالية من الزيوت المهدرجة ومبهرة بلمسة خفيفة من الملح البحري والبهارات التراثية.',
    flavorProfile: {
      acidity: 0,
      body: 8,
      sweetness: 6,
      aroma: 8,
      aftertaste: 8
    },
    weights: [
      { label: '400 جرام', grams: 400, priceMultiplier: 1.0 },
      { label: '800 جرام', grams: 800, priceMultiplier: 1.85 }
    ],
    brewingMethods: ['مرفق الضيافة']
  },
  // 18
  {
    id: 'heritage-v60-dripper-set',
    nameAr: 'طقم تقطير V60 السيراميكي التراثي',
    nameEn: 'Omani Heritage Ceramic V60 Brewing Kit',
    subtitleAr: 'قمع سيراميك حراري مع إبريق زجاجي وميزان إلكتروني دقيق',
    categoryId: 'tools',
    priceOmr: 18.000,
    priceUsd: 46.80,
    rating: 10.0,
    reviewsCount: 45,
    image: '/assets/images/coffee_tools_set_1785572885322.jpg',
    gallery: [
      '/assets/images/coffee_tools_set_1785572885322.jpg',
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=800'
    ],
    roastLevel: 'متوسط (Medium)',
    roastValue: 3,
    originCountry: 'سلطنة عمان',
    originRegion: 'تصميم الأصالة الفاخر',
    altitude: 'أدوات تقطير احترافية',
    process: 'سيراميك مصقول حرارياً',
    flavorNotes: ['استخلاص مثالي', 'حفظ درجة الحرارة', 'مظهر أنيق للمجلس'],
    descriptionAr: 'مجموعة تقطير القهوة المختصة V60 الشاملة. تحتوي على قمع سيراميكي رقم 02، سيرفر زجاجي يتسع لـ 600 مل، 100 فلتر ورقي طبيعي وميزان مؤقت احترافي.',
    flavorProfile: {
      acidity: 0,
      body: 0,
      sweetness: 0,
      aroma: 0,
      aftertaste: 0
    },
    weights: [
      { label: 'طقم متكامل V60', grams: 1100, priceMultiplier: 1.0 }
    ],
    isNew: true,
    brewingMethods: ['تحضير V60 المختص']
  },
  // 19
  {
    id: 'hand-grinder-wood-brass',
    nameAr: 'طاحونة القهوة اليدوية من خشب الجوز والنحاس',
    nameEn: 'Walnut & Brass Precision Manual Coffee Grinder',
    subtitleAr: 'تروس مخروطية من الفولاذ الصلب مع 30 درجة تعديل لطحن القهوة العمانية والمختصة',
    categoryId: 'tools',
    priceOmr: 22.500,
    priceUsd: 58.50,
    rating: 10.0,
    reviewsCount: 59,
    image: 'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800'
    ],
    roastLevel: 'متوسط (Medium)',
    roastValue: 3,
    originCountry: 'سلطنة عمان',
    originRegion: 'مجموعات أدوات الأصالة',
    altitude: 'أدوات إعداد القهوة',
    process: 'تروس ستانلس ستيل CNC 42mm',
    flavorNotes: ['طحن متناسق للغاية', 'مناسب للنعومة العمانية والإسبريسو والتقطير'],
    descriptionAr: 'مطحنة يد احترافية فائقة الدقة. تضمن لك طحناً متناسقاً تماماً دون توليد حرارة تؤثر على زيوت البن الفواحة، مع هيكل مريح من خشب الجوز العماني والنحاس.',
    flavorProfile: {
      acidity: 0,
      body: 0,
      sweetness: 0,
      aroma: 0,
      aftertaste: 0
    },
    weights: [
      { label: 'مطحنة يدوية احترافية', grams: 650, priceMultiplier: 1.0 }
    ],
    brewingMethods: ['طحن جميع أنواع القهوة']
  },
  // 20
  {
    id: 'vip-hospitality-hampers',
    nameAr: 'باقة الضيافة السلطانية المكتملة',
    nameEn: 'Sultanate VIP Hospitality Master Hamper',
    subtitleAr: 'تجمع بين القهوة العمانية والبن اليمني النادر ودلة نحاسية وصندوق التمور',
    categoryId: 'gifts',
    priceOmr: 45.000,
    priceUsd: 117.00,
    originalPriceOmr: 52.000,
    rating: 10.0,
    reviewsCount: 89,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800',
      '/assets/images/luxury_gift_box_1785262908848.jpg',
      '/assets/images/omani_dallah_set_1785262881798.jpg'
    ],
    roastLevel: 'محمص خفيف بالهيل (Omani Traditional)',
    roastValue: 2,
    originCountry: 'سلطنة عمان',
    originRegion: 'مكتب الهدايا الملكية بمسقط',
    altitude: 'مجموعة VIP الفاخرة',
    process: 'تغليف ملكي بشعار الذهبي',
    flavorNotes: ['تشكيلة محامص الأصالة الشاملة', 'ضيافة كبار الشخصيات'],
    descriptionAr: 'الهدية الأفخم والأشمل على الإطلاق لتمثيل الأصالة العمانية. تشمل: دلة نحاسية ملكية، 1 كجم قهوة الأصالة بالهيل والزعفران، 250ج بن يمني حرازي، صندوق تمور الخلاص العمانية المحشوة، وعلبة لبان حوجري ظفاري عالي الجودة.',
    flavorProfile: {
      acidity: 5,
      body: 10,
      sweetness: 10,
      aroma: 10,
      aftertaste: 10
    },
    weights: [
      { label: 'صندوق ضيافة VIP ضخم', grams: 3500, priceMultiplier: 1.0 }
    ],
    isBestSeller: true,
    isLimited: true,
    brewingMethods: ['مجالس وضيافة كبار الشخصيات']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    nameAr: 'الشيخ القاسم بن حمود البوسعيدي',
    titleAr: 'تذوق قهوة ومهتم بالضيافة التراثية',
    cityAr: 'مسقط، سلطنة عمان',
    commentAr: 'محامص الأصالة هي العنوان الأول للقهوة العمانية الملكية. عبق الهيل والزعفران في خلطة الأصالة ينقلك إلى أجواء المجالس العمانية الأصيلة، والتغليف يضاهي أفخم الماركات العالمية.',
    rating: 10,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    productBought: 'خلطة الأصالة العمانية بالهيل والزعفران'
  },
  {
    id: 't2',
    nameAr: 'د. مريم بنت ناصر المعمرية',
    titleAr: 'عاشقة القهوة المختصة',
    cityAr: 'صلالة، سلطنة عمان',
    commentAr: 'محصول البن اليمني الحرازي من أروع ما تذوقت. التحميص متزن جداً دون أثر للمرارة، والإيحاءات العسلية واضحة ونظيفة في كوب الـ V60.',
    rating: 10,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    productBought: 'بن حرازي يمني - المحمية الفاخرة'
  },
  {
    id: 't3',
    nameAr: 'المهندس طارق المعولي',
    titleAr: 'عميل دائم وشغوف بالقهوة',
    cityAr: 'صحار، سلطنة عمان',
    commentAr: 'طلبنا صندوق الهدايا الملكي لمكتبنا واحتفاءً بضيوف الشركة. سرعة التوصيل في نفس اليوم واحترافية الخدمة والتغليف الذهبي جعل الجميع يبدون إعجابهم الشديد.',
    rating: 10,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    productBought: 'صندوق الهدايا الملكي'
  }
];

export const BRANCHES: BranchLocation[] = [
  {
    id: 'b-nizwa',
    nameAr: 'المحمصة الرئيسية - سوق نزوى التاريخي',
    cityAr: 'نزوى',
    addressAr: 'السوق التراثي، بالقرب من قلعة نزوى، محافظة الداخلية',
    phone: '+968 2541 3344',
    hoursAr: 'يومياً: 7:30 صباحاً - 10:30 مساءً',
    image: '/assets/images/boutique_roastery_1785572898074.jpg',
    isRoastery: true
  },
  {
    id: 'b-muscat',
    nameAr: 'فرع العاصمة - القرم، مسقط',
    cityAr: 'مسقط',
    addressAr: 'مجمع القرم التجاري، شارع السلطان قابوس، مسقط',
    phone: '+968 2456 7890',
    hoursAr: 'يومياً: 7:00 صباحاً - 11:00 مساءً',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
    isRoastery: false
  },
  {
    id: 'b-salalah',
    nameAr: 'فرع صلالة الفاخر - الحافة',
    cityAr: 'صلالة',
    addressAr: 'طريق شاطئ الحافة، صلالة، محافظة ظفار',
    phone: '+968 2329 1122',
    hoursAr: 'يومياً: 8:00 صباحاً - 12:00 منتصف الليل',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800',
    isRoastery: false
  }
];
