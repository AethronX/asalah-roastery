import React, { useState } from 'react';
import { Product, GrindType } from '../types';
import { X, Star, ShoppingBag, Flame, MapPin, Mountain, Layers, Coffee, Check, ShieldCheck, Heart, Share2, ThumbsUp, Zap } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, weightGrams: number, grind: GrindType, qty: number) => void;
  onExpressBuy?: (product: Product, weightGrams: number, grind: GrindType, qty: number) => void;
  currency: 'OMR' | 'USD';
  onToggleWishlist: (p: Product) => void;
  isWishlisted: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onExpressBuy,
  currency,
  onToggleWishlist,
  isWishlisted,
}) => {
  if (!product) return null;

  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedWeight, setSelectedWeight] = useState(product.weights[0] || { label: '250 جرام', grams: 250, priceMultiplier: 1 });
  const [selectedGrind, setSelectedGrind] = useState<GrindType>('حبوب كاملة (Whole Beans)');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'story' | 'reviews'>('details');
  const [addedSuccess, setAddedSuccess] = useState(false);

  // New review form state
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [reviewsList, setReviewsList] = useState([
    { name: 'علي الريامي', city: 'مسقط', comment: 'من أفضل المحاصيل المعتمدة في مجلسنا. نكهة الهيل متوازنة جداً مع البن الزكي.', rating: 5, date: 'قبل يومين' },
    { name: 'سارة الهنائية', city: 'نزوى', comment: 'التغليف فاخر للغاية والبن طازج جداً برائحة التحميص الممتازة.', rating: 5, date: 'قبل أسبوع' }
  ]);

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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2B211B]/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      <div className="bg-[#F8F3EC] text-[#2B211B] rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-y-auto border border-[#C9A76A]/40 shadow-2xl relative text-right">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-[#2B211B] hover:bg-[#4A3326] text-[#F8F3EC] transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
          aria-label="إغلاق نافذة تفاصيل المنتج"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8">
          
          {/* Left Column: Image Gallery & Zoom */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="relative aspect-square rounded-2xl bg-[#EFE8DE] overflow-hidden border border-[#EFE8DE]">
              <img
                src={selectedImage}
                alt={product.nameAr}
                loading="lazy"
                decoding="async"
                width="600"
                height="600"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-110"
              />
              <button
                onClick={() => onToggleWishlist(product)}
                aria-label={`إضافة ${product.nameAr} للمفضلة`}
                className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md transition-all min-w-[44px] min-h-[44px] flex items-center justify-center ${
                  isWishlisted ? 'bg-red-500 text-white' : 'bg-black/60 text-white hover:bg-black/80'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
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
                  <img src={img} alt={`صورة معروضة ${idx + 1}`} loading="lazy" decoding="async" width="80" height="80" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Flavor Profile Visualization */}
            <div className="bg-[#EFE8DE]/60 rounded-2xl p-5 border border-[#B78A5C]/20">
              <h4 className="font-amiri text-lg font-bold text-[#2B211B] mb-3 flex items-center justify-between">
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
                <span className="bg-[#B78A5C]/15 text-[#B78A5C] px-3 py-1 rounded-full font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {product.originCountry}
                </span>
                <span className="bg-[#2B211B]/5 text-[#4A3326] px-3 py-1 rounded-full font-medium flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-[#B78A5C]" />
                  {product.roastLevel}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h1 className="font-alexandria text-2xl sm:text-3xl font-black text-[#2B211B] mb-2 leading-tight">
                {product.nameAr}
              </h1>
              <p className="text-sm text-[#4A3326]/80 mb-4 font-light leading-relaxed">
                {product.subtitleAr}
              </p>

              {/* Rating Bar */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#EFE8DE]">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-sm text-[#2B211B]">{product.rating.toFixed(1)}/10</span>
                <span className="text-xs text-[#4A3326]/60">({product.reviewsCount} تقييم معتمد)</span>
              </div>

              {/* Price Display */}
              <div className="mb-6">
                <div className="text-xs text-[#4A3326]/70 mb-1">السعر الإجمالي (شامل الضريبة)</div>
                <div className="font-bold text-3xl text-[#2B211B]">{displayPrice}</div>
              </div>

              {/* Weight Selector */}
              <div className="mb-5">
                <label className="block text-xs font-bold text-[#2B211B] mb-2">اختر الوزن:</label>
                <div className="flex flex-wrap gap-2">
                  {product.weights.map((w, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedWeight(w)}
                      className={`px-4 py-2 rounded-xl text-xs font-medium border transition-all ${
                        selectedWeight.grams === w.grams
                          ? 'bg-[#2B211B] text-[#F8F3EC] border-[#C9A76A] shadow-md'
                          : 'bg-[#EFE8DE]/50 text-[#4A3326] border-[#EFE8DE] hover:border-[#B78A5C]'
                      }`}
                    >
                      {w.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grind Selector */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-[#2B211B] mb-2">درجة الطحن الفاخرة:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {grindOptions.map((g, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedGrind(g)}
                      className={`px-3 py-2.5 rounded-xl text-xs text-right border transition-all flex items-center justify-between ${
                        selectedGrind === g
                          ? 'bg-[#B78A5C]/20 text-[#2B211B] border-[#B78A5C] font-semibold'
                          : 'bg-white/50 text-[#4A3326]/80 border-[#EFE8DE] hover:bg-[#EFE8DE]'
                      }`}
                    >
                      <span>{g}</span>
                      {selectedGrind === g && <Check className="w-4 h-4 text-[#B78A5C]" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector & Action Buttons */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-[#EFE8DE] bg-[#EFE8DE]/50 rounded-2xl overflow-hidden shrink-0">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3.5 py-3 text-lg font-bold text-[#2B211B] hover:bg-[#B78A5C]/20 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-3.5 py-3 font-bold text-sm">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3.5 py-3 text-lg font-bold text-[#2B211B] hover:bg-[#B78A5C]/20 transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleAdd}
                    className={`flex-grow py-3.5 px-4 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 border border-[#B78A5C]/40 ${
                      addedSuccess
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-[#EFE8DE] text-[#2B211B] hover:bg-[#B78A5C] hover:text-white'
                    }`}
                  >
                    {addedSuccess ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>تمت الإضافة!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4 text-[#B78A5C]" />
                        <span>إضافة للسلة ({displayPrice})</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Instant Express Purchase Button */}
                <button
                  onClick={handleInstantBuy}
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-[#2B211B] via-[#4A3326] to-[#2B211B] text-[#C9A76A] rounded-2xl font-bold text-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 border border-[#C9A76A]/40 active:scale-98"
                >
                  <Zap className="w-4 h-4 fill-current text-[#C9A76A]" />
                  <span>شراء سريع ومباشر الآن ({displayPrice})</span>
                </button>
              </div>

              {/* Guarantees List */}
              <div className="grid grid-cols-2 gap-3 text-xs text-[#4A3326] bg-[#EFE8DE]/40 p-3.5 rounded-xl border border-[#EFE8DE]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B78A5C]" />
                  <span>ضمان جودة الأصالة 100%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-[#B78A5C]" />
                  <span>تحميص طازج برعاية الخبراء</span>
                </div>
              </div>
            </div>

            {/* Information Tabs */}
            <div className="mt-8 border-t border-[#EFE8DE] pt-6">
              <div className="flex gap-4 border-b border-[#EFE8DE] mb-4 text-sm font-medium">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`pb-2 transition-colors relative ${
                    activeTab === 'details' ? 'text-[#B78A5C] font-bold border-b-2 border-[#B78A5C]' : 'text-[#2B211B]'
                  }`}
                >
                  التفاصيل والمنشأ
                </button>
                <button
                  onClick={() => setActiveTab('story')}
                  className={`pb-2 transition-colors relative ${
                    activeTab === 'story' ? 'text-[#B78A5C] font-bold border-b-2 border-[#B78A5C]' : 'text-[#2B211B]'
                  }`}
                >
                  قصة المحصول
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`pb-2 transition-colors relative ${
                    activeTab === 'reviews' ? 'text-[#B78A5C] font-bold border-b-2 border-[#B78A5C]' : 'text-[#2B211B]'
                  }`}
                >
                  آراء المتذوقين ({reviewsList.length})
                </button>
              </div>

              {activeTab === 'details' && (
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-[#EFE8DE]">
                    <span className="text-[#2B211B] font-bold block mb-1">الارتفاع عن سطح البحر:</span>
                    <span className="font-bold text-[#2B211B]">{product.altitude}</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-[#EFE8DE]">
                    <span className="text-[#2B211B] font-bold block mb-1">طريقة المعالجة:</span>
                    <span className="font-bold text-[#2B211B]">{product.process}</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-[#EFE8DE]">
                    <span className="text-[#2B211B] font-bold block mb-1">طرق التحضير المقترحة:</span>
                    <span className="font-bold text-[#2B211B]">{product.brewingMethods.join(' • ')}</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-[#EFE8DE]">
                    <span className="text-[#2B211B] font-bold block mb-1">المنطقة والاقليم:</span>
                    <span className="font-bold text-[#2B211B]">{product.originRegion}</span>
                  </div>
                </div>
              )}

              {activeTab === 'story' && (
                <p className="text-xs text-[#2B211B] font-medium leading-relaxed">
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
                      className="w-full p-3 text-xs bg-white text-[#2B211B] border border-[#EFE8DE] rounded-xl focus:outline-none focus:border-[#B78A5C]"
                      rows={2}
                    />
                    <button
                      type="submit"
                      className="mt-2 px-4 py-2 bg-[#B78A5C] text-white rounded-lg text-xs font-bold hover:bg-[#2B211B] transition-colors min-h-[38px]"
                    >
                      إرسال التقييم
                    </button>
                  </form>

                  <div className="space-y-2.5 max-h-40 overflow-y-auto pr-1">
                    {reviewsList.map((rev, idx) => (
                      <div key={idx} className="p-3 bg-white rounded-xl border border-[#EFE8DE] text-xs">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-[#2B211B]">{rev.name} ({rev.city})</span>
                          <span className="text-[#2B211B] text-[10px] font-bold">{rev.date}</span>
                        </div>
                        <p className="text-[#2B211B]">{rev.comment}</p>
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
