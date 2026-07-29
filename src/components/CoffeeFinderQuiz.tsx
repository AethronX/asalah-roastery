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
    <section className="py-16 bg-gradient-to-b from-[#2B211B] via-[#211813] to-[#2B211B] text-[#F8F3EC] relative overflow-hidden border-y border-[#C9A76A]/20">
      {/* Decorative Gold Glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C9A76A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#B78A5C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A76A]/10 border border-[#C9A76A]/30 text-[#C9A76A] text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>مستشار القهوة التفاعلي (مستوحى من محامص Onyx & Blue Bottle)</span>
          </div>
          <h2 className="font-alexandria text-3xl sm:text-4xl font-black text-white leading-tight">
            لا تعرف أي محصول تختار؟
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-light mt-2">
            أجب على 3 أسئلة بسيطة وسيقوم مستشار الأصالة الذكي باختيار النكهة المثالية لذوقك الفريد!
          </p>
        </div>

        {/* Quiz Box */}
        <div className="bg-[#211813]/90 border border-[#C9A76A]/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md max-w-3xl mx-auto">
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center text-xs font-bold text-[#C9A76A] mb-2">
              <span>الخطوة {step} من 4</span>
              <span>{step === 4 ? 'النتيجة الموصى بها 🎉' : 'مستشار الذوق الشخصي'}</span>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#B78A5C] to-[#C9A76A] transition-all duration-500 rounded-full"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>

          {/* Step 1: Preparation Method */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-center text-white font-alexandria flex items-center justify-center gap-2">
                <Coffee className="w-5 h-5 text-[#C9A76A]" />
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
                    className="p-5 rounded-2xl bg-[#2B211B] border border-[#C9A76A]/20 hover:border-[#C9A76A] text-right transition-all hover:scale-[1.02] hover:shadow-lg group"
                  >
                    <div className="text-base font-bold text-white group-hover:text-[#C9A76A] mb-1">
                      {item.title}
                    </div>
                    <div className="text-xs text-white/60">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Flavor Notes */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-center text-white font-alexandria flex items-center justify-center gap-2">
                <Flame className="w-5 h-5 text-[#C9A76A]" />
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
                    className="p-5 rounded-2xl bg-[#2B211B] border border-[#C9A76A]/20 hover:border-[#C9A76A] text-right transition-all hover:scale-[1.02] hover:shadow-lg group"
                  >
                    <div className="text-base font-bold text-white group-hover:text-[#C9A76A] mb-1">
                      {item.title}
                    </div>
                    <div className="text-xs text-white/60">{item.desc}</div>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(1)}
                className="text-xs text-white/60 hover:text-[#C9A76A] flex items-center gap-1 mx-auto pt-2"
              >
                <ArrowRight className="w-3.5 h-3.5" /> العودة للخطوة السابقة
              </button>
            </div>
          )}

          {/* Step 3: Purpose */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-xl font-bold text-center text-white font-alexandria flex items-center justify-center gap-2">
                <HeartHandshake className="w-5 h-5 text-[#C9A76A]" />
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
                    className="p-5 rounded-2xl bg-[#2B211B] border border-[#C9A76A]/20 hover:border-[#C9A76A] text-right transition-all hover:scale-[1.02] hover:shadow-lg group"
                  >
                    <div className="text-base font-bold text-white group-hover:text-[#C9A76A] mb-1">
                      {item.title}
                    </div>
                    <div className="text-xs text-white/60">{item.desc}</div>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                className="text-xs text-white/60 hover:text-[#C9A76A] flex items-center gap-1 mx-auto pt-2"
              >
                <ArrowRight className="w-3.5 h-3.5" /> العودة للخطوة السابقة
              </button>
            </div>
          )}

          {/* Step 4: Final Recommendation */}
          {step === 4 && recommendedProduct && (
            <div className="space-y-6 animate-fadeIn text-center">
              <div className="inline-block p-3 rounded-full bg-[#C9A76A]/20 text-[#C9A76A] mb-2 border border-[#C9A76A]/40">
                <Sparkles className="w-8 h-8 animate-pulse" />
              </div>

              <div>
                <span className="text-xs font-bold text-[#C9A76A] uppercase tracking-wider block mb-1">
                  الخيار المثالي الموصى به لذوقك:
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-alexandria">
                  {recommendedProduct.nameAr}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 mt-1 max-w-lg mx-auto">
                  {recommendedProduct.subtitleAr}
                </p>
              </div>

              {/* Product Card Showcase */}
              <div className="bg-[#2B211B] p-4 rounded-2xl border border-[#C9A76A]/40 max-w-md mx-auto flex items-center gap-4 text-right shadow-xl">
                <img
                  src={recommendedProduct.image}
                  alt={recommendedProduct.nameAr}
                  referrerPolicy="no-referrer"
                  className="w-24 h-24 rounded-xl object-cover border border-[#C9A76A]/30 shrink-0"
                />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#C9A76A]">
                      تنسيق: {recommendedProduct.originCountry}
                    </span>
                    <span className="text-[10px] bg-[#C9A76A]/20 text-[#C9A76A] px-2 py-0.5 rounded-md font-bold">
                      محموص حديثاً
                    </span>
                  </div>
                  <div className="text-lg font-black text-white">
                    {currency === 'OMR' ? `${recommendedProduct.priceOmr.toFixed(3)} ر.ع` : `$${recommendedProduct.priceUsd.toFixed(2)}`}
                  </div>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {recommendedProduct.flavorNotes.slice(0, 3).map((note, idx) => (
                      <span key={idx} className="text-[10px] bg-white/10 text-white/80 px-2 py-0.5 rounded">
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
                  className="px-6 py-3.5 bg-gradient-to-r from-[#B78A5C] via-[#C9A76A] to-[#B78A5C] text-[#2B211B] font-black text-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
                >
                  <Zap className="w-4 h-4 fill-current" />
                  <span>إتمام الشراء السريع الآن</span>
                </button>

                <button
                  onClick={() => onAddToCart(recommendedProduct, 250, 'حبوب كاملة (Whole Beans)')}
                  className="px-6 py-3.5 bg-white/10 text-white font-bold text-sm rounded-2xl hover:bg-white/20 border border-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>إضافة لسلة التسوق</span>
                </button>
              </div>

              <button
                onClick={resetQuiz}
                className="text-xs text-white/50 hover:text-[#C9A76A] inline-flex items-center gap-1 pt-4"
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
