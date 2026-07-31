import React, { useState } from 'react';
import { Product } from '../types';
import { Sparkles, Check, ArrowLeft, ArrowRight, RefreshCw, ShoppingBag, Coffee, Flame, HeartHandshake, Zap } from 'lucide-react';

interface CoffeeFinderQuizProps {
  products: Product[];
  onAddToCart: (product: Product, grams: number, grind: string) => void;
  onExpressBuy: (product: Product, grams: number, grind: string) => void;
  currency: 'OMR' | 'USD';
}

export const CoffeeFinderQuiz: React.FC<CoffeeFinderQuizProps> = ({
  products,
  onAddToCart,
  onExpressBuy,
  currency,
}) => {
  const [step, setStep] = useState<number>(1);
  const [method, setMethod] = useState<string>('');
  const [flavor, setFlavor] = useState<string>('');
  const [purpose, setPurpose] = useState<string>('');
  const [recommendedProduct, setRecommendedProduct] = useState<Product | null>(null);

  const handleSelectMethod = (val: string) => {
    setMethod(val);
    setStep(2);
  };

  const handleSelectFlavor = (val: string) => {
    setFlavor(val);
    setStep(3);
  };

  const handleSelectPurpose = (val: string) => {
    setPurpose(val);
    calculateRecommendation(method, flavor, val);
    setStep(4);
  };

  const calculateRecommendation = (m: string, f: string, p: string) => {
    let result = products[0];

    if (f === 'omani' || m === 'dallah') {
      result = products.find((prod) => prod.categoryId === 'arabic-omani') || products[0];
    } else if (f === 'fruity' || m === 'filter') {
      result = products.find((prod) => prod.flavorNotes.some((n) => n.includes('زهور') || n.includes('توت') || n.includes('خوخ'))) || products[2];
    } else if (f === 'chocolate' || m === 'espresso') {
      result = products.find((prod) => prod.flavorNotes.some((n) => n.includes('شوكولاتة') || n.includes('بندق') || n.includes('كراميل'))) || products[12];
    } else if (p === 'gift') {
      result = products.find((prod) => prod.categoryId === 'gifts') || products[4];
    }

    setRecommendedProduct(result);
  };

  const resetQuiz = () => {
    setStep(1);
    setMethod('');
    setFlavor('');
    setPurpose('');
    setRecommendedProduct(null);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#1B1512] via-[#241B17] to-[#1B1512] text-[#F7F2EA] relative overflow-hidden border-y border-[#D7AE63]/25">
      {/* Decorative Gold Glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D7AE63]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#9B6B3A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2C211C] border border-[#D7AE63]/40 text-[#F3E2BE] text-xs font-bold mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F3E2BE]" />
            <span>مستشار القهوة التفاعلي (مستوحى من محامص Onyx & Blue Bottle)</span>
          </div>
          <h2 className="font-cairo text-3xl sm:text-4xl font-bold text-[#F7F2EA] leading-relaxed">
            لا تعرف أي محصول تختار؟
          </h2>
          <p className="text-sm sm:text-base text-[#E8DCCB] font-medium mt-2">
            أجب على 3 أسئلة بسيطة وسيقوم مستشار الأصالة الذكي باختيار النكهة المثالية لذوقك الفريد!
          </p>
        </div>

        {/* Quiz Box */}
        <div className="bg-[#2C211C]/95 border border-[#D7AE63]/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl max-w-3xl mx-auto">
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center text-xs font-bold text-[#F3E2BE] mb-2">
              <span>الخطوة {step} من 4</span>
              <span>{step === 4 ? 'النتيجة الموصى بها 🎉' : 'مستشار الذوق الشخصي'}</span>
            </div>
            <div className="h-2 w-full bg-[#1B1512] rounded-full overflow-hidden border border-[#D7AE63]/20">
              <div
                className="h-full bg-gradient-to-r from-[#F3E2BE] via-[#D7AE63] to-[#C99A52] transition-all duration-500 rounded-full"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>

          {/* Step 1: Preparation Method */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-center text-[#F7F2EA] font-alexandria flex items-center justify-center gap-2">
                <Coffee className="w-5 h-5 text-[#F3E2BE]" />
                كيف تحب تحضير قهوتك عادةً؟
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'dallah', title: 'دلة القهوة العمانية والخليجية', desc: 'بالهيل والزعفران والماء الورد الأصيل' },
                  { id: 'filter', title: 'التقطير المفلتر (V60 / Chemex)', desc: 'نكهات صافية وإيحاءات فاكهية وزهرية' },
                  { id: 'espresso', title: 'مشروبات الإسبريسو والحليب', desc: 'لاتيه، كابتشينو، أو إسبريسو ثقيل بكراميل' },
                  { id: 'all', title: 'أحب التغيير ولا ألتزم بأداة واحدة', desc: 'نكهات متوازنة تلائم كافة طرق التحضير' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectMethod(item.id)}
                    className="p-5 rounded-2xl bg-[#1B1512] border border-[#D7AE63]/25 hover:border-[#F3E2BE] text-right transition-all hover:scale-[1.02] hover:shadow-xl group"
                  >
                    <div className="text-base font-bold text-[#F7F2EA] group-hover:text-[#F3E2BE] mb-1">
                      {item.title}
                    </div>
                    <div className="text-xs text-[#E8DCCB]">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Flavor Notes */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-center text-[#F7F2EA] font-alexandria flex items-center justify-center gap-2">
                <Flame className="w-5 h-5 text-[#F3E2BE]" />
                ما هي طعم ونكهة القهوة المفضلة لديك؟
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'omani', title: 'عبق الهيل، الزعفران، والماء الورد', desc: 'الضيافة العمانية التقليدية الملكية' },
                  { id: 'fruity', title: 'إيحاءات الفواكه الاستوائية والتوت والزهور', desc: 'حموضة حيوية ومنعشة ومشرقة' },
                  { id: 'chocolate', title: 'الشوكولاتة الداكنة والمكسرات المحمصة', desc: 'قوام غني، مرارة لطيفة وحلاوة الكراميل' },
                  { id: 'balanced', title: 'نكهات معتدلة ومتوازنة كلاسيكية', desc: 'سهلة الشرب ومناسبة لكل الأوقات' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectFlavor(item.id)}
                    className="p-5 rounded-2xl bg-[#1B1512] border border-[#D7AE63]/25 hover:border-[#F3E2BE] text-right transition-all hover:scale-[1.02] hover:shadow-xl group"
                  >
                    <div className="text-base font-bold text-[#F7F2EA] group-hover:text-[#F3E2BE] mb-1">
                      {item.title}
                    </div>
                    <div className="text-xs text-[#E8DCCB]">{item.desc}</div>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(1)}
                className="text-xs text-[#E8DCCB] hover:text-[#F3E2BE] flex items-center gap-1 mx-auto pt-2"
              >
                <ArrowRight className="w-3.5 h-3.5" /> العودة للخطوة السابقة
              </button>
            </div>
          )}

          {/* Step 3: Purpose */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-center text-[#F7F2EA] font-alexandria flex items-center justify-center gap-2">
                <HeartHandshake className="w-5 h-5 text-[#F3E2BE]" />
                ما هو الغرض الرئيسي لشراء القهوة الآن؟
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'daily', title: 'استخدام يومي للمنزل والعمل', desc: 'قهوة طازجة كل صباح' },
                  { id: 'gift', title: 'هدية فاخرة أو ضيافة رسمية', desc: 'تغليف ملكي مبهر' },
                  { id: 'specialty', title: 'تجربة سلالة نادرة جديدة', desc: 'محاصيل نادرة 90+ نقطة' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectPurpose(item.id)}
                    className="p-5 rounded-2xl bg-[#1B1512] border border-[#D7AE63]/25 hover:border-[#F3E2BE] text-right transition-all hover:scale-[1.02] hover:shadow-xl group"
                  >
                    <div className="text-base font-bold text-[#F7F2EA] group-hover:text-[#F3E2BE] mb-1">
                      {item.title}
                    </div>
                    <div className="text-xs text-[#E8DCCB]">{item.desc}</div>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                className="text-xs text-[#E8DCCB] hover:text-[#F3E2BE] flex items-center gap-1 mx-auto pt-2"
              >
                <ArrowRight className="w-3.5 h-3.5" /> العودة للخطوة السابقة
              </button>
            </div>
          )}

          {/* Step 4: Final Recommendation */}
          {step === 4 && recommendedProduct && (
            <div className="space-y-6 animate-fadeIn text-center">
              <div className="inline-block p-3 rounded-full bg-[#D7AE63]/20 text-[#F3E2BE] mb-2 border border-[#D7AE63]/40">
                <Sparkles className="w-8 h-8 animate-pulse text-[#F3E2BE]" />
              </div>

              <div>
                <span className="text-xs font-bold text-[#F3E2BE] uppercase tracking-wider block mb-1">
                  الخيار المثالي الموصى به لذوقك:
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#F7F2EA] font-alexandria">
                  {recommendedProduct.nameAr}
                </h3>
                <p className="text-xs sm:text-sm text-[#E8DCCB] mt-1 max-w-lg mx-auto font-medium">
                  {recommendedProduct.subtitleAr}
                </p>
              </div>

              {/* Product Card Showcase */}
              <div className="bg-[#1B1512] p-4 rounded-2xl border border-[#D7AE63]/40 max-w-md mx-auto flex items-center gap-4 text-right shadow-2xl">
                <img
                  src={recommendedProduct.image}
                  alt={recommendedProduct.nameAr}
                  loading="lazy"
                  decoding="async"
                  width="96"
                  height="96"
                  referrerPolicy="no-referrer"
                  className="w-24 h-24 rounded-xl object-cover border border-[#D7AE63]/40 shrink-0"
                />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#F3E2BE]">
                      تنسيق: {recommendedProduct.originCountry}
                    </span>
                    <span className="text-[10px] bg-[#D7AE63]/20 text-[#F3E2BE] px-2 py-0.5 rounded-md font-bold border border-[#D7AE63]/30">
                      محموص حديثاً
                    </span>
                  </div>
                  <div className="text-lg font-black text-[#F7F2EA]">
                    {currency === 'OMR' ? `${recommendedProduct.priceOmr.toFixed(3)} ر.ع` : `$${recommendedProduct.priceUsd.toFixed(2)}`}
                  </div>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {recommendedProduct.flavorNotes.slice(0, 3).map((note, idx) => (
                      <span key={idx} className="text-[10px] bg-[#2C211C] text-[#F3E2BE] border border-[#D7AE63]/30 px-2 py-0.5 rounded font-bold">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-2">
                <button
                  onClick={() => onExpressBuy(recommendedProduct, 250, 'حبوب كاملة (Whole Beans)')}
                  className="px-6 py-3.5 btn-champagne-primary text-[#120E0C] font-black text-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group border border-[#F3E2BE]/60"
                >
                  <Zap className="w-4 h-4 fill-current text-[#120E0C]" />
                  <span>إتمام الشراء السريع الآن</span>
                </button>

                <button
                  onClick={() => onAddToCart(recommendedProduct, 250, 'حبوب كاملة (Whole Beans)')}
                  className="px-6 py-3.5 btn-champagne-secondary font-bold text-sm rounded-2xl transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-[#F3E2BE]" />
                  <span>إضافة لسلة التسوق</span>
                </button>
              </div>

              <button
                onClick={resetQuiz}
                className="text-xs text-[#E8DCCB]/70 hover:text-[#F3E2BE] inline-flex items-center gap-1 pt-4"
              >
                <RefreshCw className="w-3.5 h-3.5" /> إعادة الاختبار لاختيار ذوق آخر
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
