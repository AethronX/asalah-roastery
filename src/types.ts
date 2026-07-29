export type CategoryId = 'all' | 'specialty' | 'arabic-omani' | 'beans' | 'nuts-dates' | 'gifts' | 'tools';

export type RoastLevel = 'خفيف (Light)' | 'متوسط (Medium)' | 'متوسط-داكن (Medium-Dark)' | 'داكن (Dark)' | 'محمص خفيف بالهيل (Omani Traditional)';

export type GrindType = 'حبوب كاملة (Whole Beans)' | 'ناعم للقهوة العمانية (Omani Fine)' | 'ترشيح V60 (Filter V60)' | 'إسبريسو (Espresso)' | 'فرنش بريس (French Press)';

export interface Product {
  id: string;
  nameAr: string;
  nameEn: string;
  subtitleAr: string;
  categoryId: CategoryId;
  priceOmr: number;
  priceUsd: number;
  originalPriceOmr?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  gallery: string[];
  roastLevel: RoastLevel;
  roastValue: number; // 1 to 5
  originCountry: string;
  originRegion: string;
  altitude: string;
  process: string;
  flavorNotes: string[];
  descriptionAr: string;
  flavorProfile: {
    acidity: number; // 1 to 10
    body: number;
    sweetness: number;
    aroma: number;
    aftertaste: number;
  };
  weights: { label: string; grams: number; priceMultiplier: number }[];
  isBestSeller?: boolean;
  isNew?: boolean;
  isLimited?: boolean;
  brewingMethods: string[];
}

export interface CartItem {
  product: Product;
  selectedWeight: string;
  selectedGrind: GrindType;
  quantity: number;
  unitPriceOmr: number;
}

export interface Testimonial {
  id: string;
  nameAr: string;
  titleAr: string;
  cityAr: string;
  commentAr: string;
  rating: number;
  avatar: string;
  productBought: string;
}

export interface BranchLocation {
  id: string;
  nameAr: string;
  cityAr: string;
  addressAr: string;
  phone: string;
  hoursAr: string;
  image: string;
  isRoastery: boolean;
}

export type ViewMode = 'live' | 'desktop-2560' | 'mobile-view' | 'product-modal' | 'brewing-calc';
