import React, { useState } from 'react';
import { Product, GrindType } from '../types';
import { X, Star, ShoppingBag, Flame, MapPin, Coffee, Check, ShieldCheck, Zap } from 'lucide-react';
import { Picture } from './Picture';
import { useModalA11y } from '../hooks/useModalA11y';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, weightGrams: number, grind: GrindType, qty: number) => void;
  onExpressBuy?: (product: Product, weightGrams: number, grind: GrindType, qty: number) => void;
  currency: 'OMR' | 'USD';
  theme?: 'light' | 'dark';
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onExpressBuy,
  currency,
  theme = 'light',
}) => {
  const [selectedImage, setSelectedImage] = useState(product?.image ?? '');
  const [selectedWeight, setSelectedWeight] = useState(product?.weights[0] || { label: '250 جرام', grams: 250, priceMultiplier: 1 });
  const [selectedGrind, setSelectedGrind] = useState<GrindType>('حبوب كاملة (Whole Beans)');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'story' | 'reviews'>('details');
  const [addedSuccess, setAddedSuccess] = useState(false);

  // New review form state
  const [newReviewComment, setNewReviewComment] = useState('');
  const newReviewRating = 5;
  const [reviewsList, setReviewsList] = useState([
    { name: 'علي الريامي', city: 'مسقط', comment: 'من أفضل المحاصيل المعتمدة في مجلسنا. نكهة الهيل متوازنة جداً مع البن الزكي.', rating: 5, date: 'قبل يومين' },
    { name: 'سارة الهنائية', city: 'نزوى', comment: 'التغليف فاخر للغاية والبن طازج جداً برائحة التحميص الممتازة.', rating: 5, date: 'قبل أسبوع' }
  ]);
  const panelRef = useModalA11y<HTMLDivElement>(true);

  if (!product) return null;

  const isLight = theme === 'light';

  const currentPriceOmr = product.priceOmr * selectedWeight.priceMultiplier * quantity;
  const currentPriceUsd = product.priceUsd * selectedWeight.priceMultiplier * quantity;
  const displayPrice = currency === 'OMR' ? `${currentPriceOmr.toFixed(3)} ر.ع` : `$${currentPriceUsd.toFixed(2)}`;

  const grindOptions: GrindType[] = [
    'حبوب كاملة (Whole Beans)',
    'ناعم للقهوة العمانية (Omani Fine)',
    'ترشيح V60 (Filter V60)',
    'إسبريسو (Espresso)',
    'فرنش بريس (French Press)',
  ];

  const handleAdd = () => {
    onAddToCart(product, selectedWeight.grams, selectedGrind, quantity);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  const handleInstantBuy = () => {
    if (onExpressBuy) {
      onExpressBuy(product, selectedWeight.grams, selectedGrind, quantity);
    } else {
      handleAdd();
    }
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewComment.trim()) return;
    setReviewsList([
      { name: 'زائر الأصالة العمانية', city: 'سلطنة عمان', comment: newReviewComment, rating: newReviewRating, date: 'الآن' },
      ...reviewsList
    ]);
    setNewReviewComment('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={product.nameAr}
        tabIndex={-1}
        className={`outline-none rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-y-auto border shadow-2xl relative text-right transition-colors ${
        isLight
          ? 'bg-white text-[#1D1D1F] border-[#EFE7DD]'
          : 'bg-[#1D1613] text-[#F7F2EA] border-[#D7AE63]/40'
      }`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 left-4 z-20 p-2.5 rounded-full transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center ${
            isLight
              ? 'bg-[#F5F5F7] hover:bg-[#E5E5EA] text-[#1D1D1F]'
              : 'bg-[#241B17] hover:bg-[#2C211C] text-[#F3E2BE] border border-[#D7AE63]/40'
          }`}
          aria-label="إغلاق نافذة تفاصيل المنتج"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8">
          
          {/* Left Column: Image Gallery & Zoom */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="relative aspect-square rounded-2xl bg-[#EFE8DE] overflow-hidden border border-[#EFE8DE]">
              <Picture
                src={selectedImage}
                alt={product.nameAr}
                loading="lazy"
                decoding="async"
                width="600"
                height="600"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-110"
              />
            </div>

            {/* Thumbnails Row */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  aria-label={`عرض الصورة المصغرة ${idx + 1}`}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 min-w-[64px] min-h-[64px] ${
                    selectedImage === img ? 'border-[#C9A76A] ring-2 ring-[#C9A76A]/30 scale-105' : 'border-transparent opacity-80 hover:opacity-100'
                  }`}
                >
                  <Picture src={img} alt={`صورة معروضة ${idx + 1}`} loading="lazy" decoding="async" width="80" height="80" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Flavor Profile Visualization */}
            <div className="bg-[#EFE8DE]/60 rounded-2xl p-5 border border-[#B78A5C]/20">
              <h4 className="font-cairo text-base font-bold text-[#2B211B] mb-3 flex items-center justify-between">
                <span>مؤشرات الإيحاءات والطعم</span>
                <span className="text-xs font-sans text-[#B78A5C]">تقييم المحمصة</span>
              </h4>

              <div className="space-y-2.5 text-xs">
                {[
                  { label: 'الحموضة (Acidity)', val: product.flavorProfile.acidity },
                  { label: 'القوام والجسد (Body)', val: product.flavorProfile.body },
                  { label: 'الحلاوة (Sweetness)', val: product.flavorProfile.sweetness },
                  { label: 'العبير والحدّة (Aroma)', val: product.flavorProfile.aroma },
                  { label: 'مرارة الرشفة (Aftertaste)', val: product.flavorProfile.aftertaste },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="w-28 text-[#4A3326] font-medium">{item.label}</span>
                    <div className="flex-grow h-2 rounded-full bg-[#2B211B]/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#B78A5C] to-[#C9A76A] rounded-full transition-all duration-700"
                        style={{ width: `${(item.val / 10) * 100}%` }}
                      />
                    </div>
                    <span className="w-6 text-left font-bold text-[#2B211B]">{item.val}/10</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Product Options & Configuration */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Country & Category Badges */}
              <div className="flex items-center gap-2 mb-2 text-xs">
                <span className={`px-3 py-1 rounded-full font-bold flex items-center gap-1 ${
                  isLight ? 'bg-[#FAF6F0] text-[#9B6B3A] border border-[#EFE7DD]' : 'bg-[#241B17] text-[#F3E2BE] border border-[#D7AE63]/40'
                }`}>
                  <MapPin className="w-3.5 h-3.5" />
                  {product.originCountry}
                </span>
                <span className={`px-3 py-1 rounded-full font-bold flex items-center gap-1 ${
                  isLight ? 'bg-[#F5F5F7] text-[#1D1D1F] border border-[#000000]/10' : 'bg-[#241B17] text-[#F7F2EA] border border-[#D7AE63]/30'
                }`}>
                  <Flame className="w-3.5 h-3.5 text-[#9B6B3A]" />
                  {product.roastLevel}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h1 className={`font-alexandria text-2xl sm:text-3xl font-black mb-2 leading-snug ${
                isLight ? 'text-[#1D1D1F]' : 'text-[#F7F2EA]'
              }`}>
                {product.nameAr}
              </h1>
              <p className={`text-sm sm:text-base font-semibold mb-4 leading-relaxed ${
                isLight ? 'text-[#3A3A3C]' : 'text-[#E8DCCB]'
              }`}>
                {product.subtitleAr}
              </p>

              {/* Rating Bar */}
              <div className={`flex items-center gap-2 mb-6 pb-4 border-b ${
                isLight ? 'border-[#EFE7DD]' : 'border-[#D7AE63]/20'
              }`}>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className={`font-bold text-sm ${isLight ? 'text-[#1D1D1F]' : 'text-[#F7F2EA]'}`}>{product.rating.toFixed(1)}/10</span>
                <span className={`text-xs font-medium ${isLight ? 'text-[#5C554E]' : 'text-[#E8DCCB]'}`}>({product.reviewsCount} تقييم معتمد)</span>
              </div>

              {/* Price Display */}
              <div className="mb-6">
                <div className={`text-xs font-bold mb-1 ${isLight ? 'text-[#5C554E]' : 'text-[#E8DCCB]'}`}>السعر الإجمالي (شامل الضريبة)</div>
                <div className={`font-black text-3xl sm:text-4xl ${isLight ? 'text-[#1D1D1F]' : 'text-[#F3E2BE]'}`}>{displayPrice}</div>
              </div>

              {/* Weight Selector */}
              <div className="mb-5">
                <label className={`block text-xs font-bold mb-2 ${isLight ? 'text-[#1D1D1F]' : 'text-[#F7F2EA]'}`}>
                  اختر الوزن:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.weights.map((w, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedWeight(w)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                        selectedWeight.grams === w.grams
                          ? isLight
                            ? 'bg-[#1D1D1F] text-white border-[#1D1D1F] shadow-md'
                            : 'bg-[#F3E2BE] text-[#120E0C] border-[#F3E2BE] shadow-md'
                          : isLight
                            ? 'bg-[#F5F5F7] text-[#3A3A3C] border-[#000000]/10 hover:border-[#9B6B3A]'
                            : 'bg-[#241B17] text-[#E8DCCB] border-[#D7AE63]/30 hover:border-[#F3E2BE]'
                      }`}
                    >
                      {w.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grind Selector */}
              <div className="mb-6">
                <label className={`block text-xs font-bold mb-2 ${isLight ? 'text-[#1D1D1F]' : 'text-[#F7F2EA]'}`}>
                  درجة الطحن الفاخرة:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {grindOptions.map((g, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedGrind(g)}
                      className={`px-3 py-2.5 rounded-xl text-xs text-right border transition-all flex items-center justify-between font-bold ${
                        selectedGrind === g
                          ? isLight
                            ? 'bg-[#9B6B3A]/15 text-[#1D1D1F] border-[#9B6B3A]'
                            : 'bg-[#241B17] text-[#F3E2BE] border-[#D7AE63]'
                          : isLight
                            ? 'bg-[#F5F5F7] text-[#3A3A3C] border-[#000000]/10 hover:bg-[#E5E5EA]'
                            : 'bg-[#18120F] text-[#E8DCCB] border-[#D7AE63]/20 hover:bg-[#241B17]'
                      }`}
                    >
                      <span>{g}</span>
                      {selectedGrind === g && <Check className={`w-4 h-4 ${isLight ? 'text-[#9B6B3A]' : 'text-[#F3E2BE]'}`} />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector & Action Buttons */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className={`flex items-center border rounded-2xl overflow-hidden shrink-0 ${
                    isLight ? 'border-[#000000]/10 bg-[#F5F5F7]' : 'border-[#D7AE63]/30 bg-[#241B17]'
                  }`}>
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className={`px-3.5 py-3 text-lg font-bold transition-colors ${
                        isLight ? 'text-[#1D1D1F] hover:bg-[#000000]/05' : 'text-[#F7F2EA] hover:bg-white/10'
                      }`}
                    >
                      -
                    </button>
                    <span className={`px-3.5 py-3 font-bold text-sm ${isLight ? 'text-[#1D1D1F]' : 'text-[#F7F2EA]'}`}>{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className={`px-3.5 py-3 text-lg font-bold transition-colors ${
                        isLight ? 'text-[#1D1D1F] hover:bg-[#000000]/05' : 'text-[#F7F2EA] hover:bg-white/10'
                      }`}
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleAdd}
                    className={`flex-grow py-3.5 px-4 rounded-2xl font-black text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 border ${
                      addedSuccess
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : isLight
                          ? 'bg-[#1D1D1F] text-white hover:bg-[#3A3A3C] border-[#1D1D1F]'
                          : 'bg-[#241B17] text-[#F3E2BE] hover:bg-[#2C211C] border-[#D7AE63]/50'
                    }`}
                  >
                    {addedSuccess ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>تمت الإضافة!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className={`w-4 h-4 ${isLight ? 'text-amber-400' : 'text-[#F3E2BE]'}`} />
                        <span>إضافة للسلة ({displayPrice})</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Instant Express Purchase Button */}
                <button
                  onClick={handleInstantBuy}
                  className={`w-full py-3.5 px-6 rounded-2xl font-extrabold text-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 border active:scale-98 ${
                    isLight
                      ? 'bg-gradient-to-r from-[#1D1D1F] via-[#3A3A3C] to-[#1D1D1F] text-[#F3E2BE] border-[#1D1D1F]'
                      : 'btn-champagne-primary text-[#120E0C] border-[#F3E2BE]/60'
                  }`}
                >
                  <Zap className="w-4 h-4 fill-current text-amber-400" />
                  <span>شراء سريع ومباشر الآن ({displayPrice})</span>
                </button>
              </div>

              {/* Guarantees List */}
              <div className={`grid grid-cols-2 gap-3 text-xs p-3.5 rounded-xl border ${
                isLight
                  ? 'text-[#3A3A3C] bg-[#F5F5F7] border-[#000000]/08 font-semibold'
                  : 'text-[#E8DCCB] bg-[#241B17] border-[#D7AE63]/30 font-semibold'
              }`}>
                <div className="flex items-center gap-2">
                  <ShieldCheck className={`w-4 h-4 ${isLight ? 'text-[#9B6B3A]' : 'text-[#F3E2BE]'}`} />
                  <span>ضمان جودة الأصالة 100%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Coffee className={`w-4 h-4 ${isLight ? 'text-[#9B6B3A]' : 'text-[#F3E2BE]'}`} />
                  <span>تحميص طازج برعاية الخبراء</span>
                </div>
              </div>
            </div>

            {/* Information Tabs */}
            <div className={`mt-8 border-t pt-6 ${isLight ? 'border-[#000000]/10' : 'border-[#D7AE63]/25'}`}>
              <div className={`flex gap-4 border-b mb-4 text-sm font-medium ${isLight ? 'border-[#000000]/10' : 'border-[#D7AE63]/25'}`}>
                <button
                  onClick={() => setActiveTab('details')}
                  className={`pb-2 transition-colors relative ${
                    activeTab === 'details'
                      ? isLight ? 'text-[#9B6B3A] font-extrabold border-b-2 border-[#9B6B3A]' : 'text-[#F3E2BE] font-extrabold border-b-2 border-[#F3E2BE]'
                      : isLight ? 'text-[#3A3A3C] font-semibold' : 'text-[#E8DCCB]'
                  }`}
                >
                  التفاصيل والمنشأ
                </button>
                <button
                  onClick={() => setActiveTab('story')}
                  className={`pb-2 transition-colors relative ${
                    activeTab === 'story'
                      ? isLight ? 'text-[#9B6B3A] font-extrabold border-b-2 border-[#9B6B3A]' : 'text-[#F3E2BE] font-extrabold border-b-2 border-[#F3E2BE]'
                      : isLight ? 'text-[#3A3A3C] font-semibold' : 'text-[#E8DCCB]'
                  }`}
                >
                  قصة المحصول
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`pb-2 transition-colors relative ${
                    activeTab === 'reviews'
                      ? isLight ? 'text-[#9B6B3A] font-extrabold border-b-2 border-[#9B6B3A]' : 'text-[#F3E2BE] font-extrabold border-b-2 border-[#F3E2BE]'
                      : isLight ? 'text-[#3A3A3C] font-semibold' : 'text-[#E8DCCB]'
                  }`}
                >
                  آراء المتذوقين ({reviewsList.length})
                </button>
              </div>

              {activeTab === 'details' && (
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className={`p-3 rounded-xl border ${isLight ? 'bg-[#F5F5F7] border-[#000000]/10 text-[#1D1D1F]' : 'bg-[#241B17] border-[#D7AE63]/30 text-[#F7F2EA]'}`}>
                    <span className={`font-bold block mb-1 ${isLight ? 'text-[#5C554E]' : 'text-[#E8DCCB]'}`}>الارتفاع عن سطح البحر:</span>
                    <span className="font-extrabold">{product.altitude}</span>
                  </div>
                  <div className={`p-3 rounded-xl border ${isLight ? 'bg-[#F5F5F7] border-[#000000]/10 text-[#1D1D1F]' : 'bg-[#241B17] border-[#D7AE63]/30 text-[#F7F2EA]'}`}>
                    <span className={`font-bold block mb-1 ${isLight ? 'text-[#5C554E]' : 'text-[#E8DCCB]'}`}>طريقة المعالجة:</span>
                    <span className="font-extrabold">{product.process}</span>
                  </div>
                  <div className={`p-3 rounded-xl border ${isLight ? 'bg-[#F5F5F7] border-[#000000]/10 text-[#1D1D1F]' : 'bg-[#241B17] border-[#D7AE63]/30 text-[#F7F2EA]'}`}>
                    <span className={`font-bold block mb-1 ${isLight ? 'text-[#5C554E]' : 'text-[#E8DCCB]'}`}>طرق التحضير المقترحة:</span>
                    <span className="font-extrabold">{product.brewingMethods.join(' • ')}</span>
                  </div>
                  <div className={`p-3 rounded-xl border ${isLight ? 'bg-[#F5F5F7] border-[#000000]/10 text-[#1D1D1F]' : 'bg-[#241B17] border-[#D7AE63]/30 text-[#F7F2EA]'}`}>
                    <span className={`font-bold block mb-1 ${isLight ? 'text-[#5C554E]' : 'text-[#E8DCCB]'}`}>المنطقة والاقليم:</span>
                    <span className="font-extrabold">{product.originRegion}</span>
                  </div>
                </div>
              )}

              {activeTab === 'story' && (
                <p className={`text-xs sm:text-sm font-semibold leading-relaxed ${isLight ? 'text-[#2C2C2E]' : 'text-[#E8DCCB]'}`}>
                  {product.descriptionAr}
                </p>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-4">
                  <form onSubmit={handleAddReview} className="mb-4">
                    <label htmlFor="product-review-textarea" className="sr-only">أضف انطباعك وتقييمك عن هذه القهوة</label>
                    <textarea
                      id="product-review-textarea"
                      value={newReviewComment}
                      onChange={(e) => setNewReviewComment(e.target.value)}
                      placeholder="أضف انطباعك وتقييمك عن هذه القهوة..."
                      className={`w-full p-3 text-xs rounded-xl focus:outline-none border ${
                        isLight
                          ? 'bg-[#F5F5F7] text-[#1D1D1F] border-[#000000]/10 focus:border-[#9B6B3A]'
                          : 'bg-[#241B17] text-[#F7F2EA] border-[#D7AE63]/30 focus:border-[#F3E2BE]'
                      }`}
                      rows={2}
                    />
                    <button
                      type="submit"
                      className={`mt-2 px-4 py-2 rounded-lg text-xs font-bold transition-colors min-h-[38px] ${
                        isLight
                          ? 'bg-[#1D1D1F] text-white hover:bg-[#3A3A3C]'
                          : 'bg-[#F3E2BE] text-[#120E0C] hover:bg-white'
                      }`}
                    >
                      إرسال التقييم
                    </button>
                  </form>

                  <div className="space-y-2.5 max-h-40 overflow-y-auto pr-1">
                    {reviewsList.map((rev, idx) => (
                      <div key={idx} className={`p-3 rounded-xl border text-xs ${
                        isLight
                          ? 'bg-[#F5F5F7] border-[#000000]/08 text-[#1D1D1F]'
                          : 'bg-[#241B17] border-[#D7AE63]/30 text-[#F7F2EA]'
                      }`}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-extrabold">{rev.name} ({rev.city})</span>
                          <span className={`text-[10px] font-bold ${isLight ? 'text-[#5C554E]' : 'text-[#E8DCCB]'}`}>{rev.date}</span>
                        </div>
                        <p className={`font-medium ${isLight ? 'text-[#2C2C2E]' : 'text-[#E8DCCB]'}`}>{rev.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
