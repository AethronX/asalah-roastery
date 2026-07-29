import React, { useState } from 'react';
import { Calendar, ShieldCheck, Truck, RefreshCw, Zap, CheckCircle2, Star } from 'lucide-react';
import { Product } from '../types';

interface CoffeeSubscriptionBannerProps {
  products: Product[];
  onSubscribe: (product: Product, frequency: string) => void;
  currency: 'OMR' | 'USD';
}

export const CoffeeSubscriptionBanner: React.FC<CoffeeSubscriptionBannerProps> = ({
  products,
  onSubscribe,
  currency,
}) => {
  const omaniProducts = products.filter((p) => p.categoryId === 'arabic-omani' || p.categoryId === 'specialty');
  const [selectedProduct, setSelectedProduct] = useState<Product>(omaniProducts[0] || products[0]);
  const [frequency, setFrequency] = useState<string>('monthly');

  const discountPercentage = 15;
  const originalPrice = selectedProduct.priceOmr;
  const subscriptionPriceOmr = originalPrice * (1 - discountPercentage / 100);

  return (
    <section className="py-16 bg-[#2B211B] text-[#F8F3EC] relative overflow-hidden">
      {/* Background Subtle Image overlay */}
      <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#2B211B] via-[#2B211B]/95 to-[#2B211B]/80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#211813] border border-[#C9A76A]/40 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Offer Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A76A]/20 border border-[#C9A76A]/40 text-[#C9A76A] text-xs font-bold">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
              <span>خدمة الاشتراك الدوري الفاخر • خصم 15% دائم</span>
            </div>

            <h2 className="font-alexandria text-3xl sm:text-5xl font-black text-white leading-tight">
              لا تنفد القهوة طازجة من بيتك أبداً! <br />
              <span className="gold-gradient-bright">اشتراك الأصالة الدوري</span>
            </h2>

            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
              احصل على محاصيلك المفضلة محموصة طازجة خصيصاً لك فور الطلب، مع توصيل تلقائي لباب بيتك بانتظام بدون عناء إعادة الطلب وبخصم خاص دائم.
            </p>

            {/* Value Props Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-white/90">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>خصم 15% على كل طلبية</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-white/90">
                <Truck className="w-4 h-4 text-[#C9A76A] shrink-0" />
                <span>توصيل مجاني لأي مكان بالسلطنة</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-white/90">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>إلغاء أو إيقاف مؤقت بأي وقت</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Subscription Selector */}
          <div className="lg:col-span-5 bg-[#2B211B] p-6 rounded-2xl border border-[#C9A76A]/30 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-bold text-[#C9A76A]">اختر المحصول والتواتر:</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                وفر 15% تلقائياً
              </span>
            </div>

            {/* Product Select */}
            <div>
              <label className="block text-xs font-bold text-white/80 mb-2">اختر القهوة:</label>
              <select
                value={selectedProduct.id}
                onChange={(e) => {
                  const p = products.find((prod) => prod.id === e.target.value);
                  if (p) setSelectedProduct(p);
                }}
                className="w-full bg-[#211813] border border-[#C9A76A]/40 text-white rounded-xl py-2.5 px-3 text-xs font-bold focus:outline-none focus:border-[#C9A76A]"
              >
                {products.map((p) => (
                  <option key={p.id} value={p.id} className="bg-[#211813] text-white">
                    {p.nameAr}
                  </option>
                ))}
              </select>
            </div>

            {/* Frequency Selector */}
            <div>
              <label className="block text-xs font-bold text-white/80 mb-2">معدل التوصيل التلقائي:</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'weekly', label: 'أسبوعياً' },
                  { id: 'biweekly', label: 'كل أسبوعين' },
                  { id: 'monthly', label: 'شهرياً' },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFrequency(f.id)}
                    className={`py-2 px-2 text-xs font-bold rounded-xl border transition-all text-center ${
                      frequency === f.id
                        ? 'bg-[#C9A76A] text-[#2B211B] border-[#C9A76A]'
                        : 'bg-[#211813] text-white/80 border-white/10 hover:border-[#C9A76A]/50'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Preview */}
            <div className="bg-[#211813] p-3.5 rounded-xl border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-white/60 block">سعر الاشتراك الدوري:</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-black text-[#C9A76A]">
                    {currency === 'OMR' ? `${subscriptionPriceOmr.toFixed(3)} ر.ع` : `$${(subscriptionPriceOmr * 2.6).toFixed(2)}`}
                  </span>
                  <span className="text-xs text-white/40 line-through">
                    {currency === 'OMR' ? `${originalPrice.toFixed(3)} ر.ع` : `$${(originalPrice * 2.6).toFixed(2)}`}
                  </span>
                </div>
              </div>
              <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-2 py-1 rounded-md">
                وفرت {currency === 'OMR' ? `${(originalPrice - subscriptionPriceOmr).toFixed(3)} ر.ع` : `$${((originalPrice - subscriptionPriceOmr) * 2.6).toFixed(2)}`}
              </span>
            </div>

            {/* Action CTA */}
            <button
              onClick={() => onSubscribe(selectedProduct, frequency)}
              className="w-full py-3.5 bg-gradient-to-r from-[#B78A5C] via-[#C9A76A] to-[#B78A5C] text-[#2B211B] font-black text-xs rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>بدء الاشتراك الفوري بخصم 15% ➔</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
