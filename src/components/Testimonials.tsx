import React from 'react';
import { TESTIMONIALS } from '../data/products';
import { Star, Quote, CheckCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#EFE8DE]/40 border-t border-[#EFE8DE] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#B78A5C] bg-[#B78A5C]/10 px-3.5 py-1.5 rounded-full border border-[#B78A5C]/20 inline-block mb-3">
          ثقة المتذوقين
        </span>
        <h2 className="font-amiri text-3xl sm:text-4xl font-bold text-[#2B211B] mb-3">
          ماذا يقول كبار المتذوقين عن تجربة الأصالة؟
        </h2>
        <p className="text-[#2B211B] text-sm font-medium">
          نعتز بثقة عملائنا في سلطنة عمان ودول مجلس التعاون الخليجي.
        </p>
      </div>

      {/* Testimonials Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="bg-[#F8F3EC] rounded-3xl p-8 border border-[#EFE8DE] hover:border-[#C9A76A]/60 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-right relative group"
          >
            <div>
              {/* Quote & Rating Bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-amber-500">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold text-xs text-[#2B211B] bg-[#C9A76A]/20 px-2 py-0.5 rounded-full">{t.rating}/10</span>
                </div>
                <Quote className="w-8 h-8 text-[#B78A5C]/30 group-hover:text-[#B78A5C] transition-colors" />
              </div>

              {/* Review Comment */}
              <p className="font-amiri text-lg text-[#2B211B] leading-relaxed mb-6 italic">
                "{t.commentAr}"
              </p>
            </div>

            {/* Author Info */}
            <div className="pt-6 border-t border-[#EFE8DE] flex items-center gap-4">
              <img
                src={t.avatar}
                alt={t.nameAr}
                loading="lazy"
                decoding="async"
                width="48"
                height="48"
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#C9A76A]"
              />
              <div>
                <h4 className="font-bold text-sm text-[#2B211B] flex items-center gap-1.5">
                  <span>{t.nameAr}</span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 inline" title="مشتري معتمد" />
                </h4>
                <p className="text-xs text-[#2B211B] font-medium">{t.titleAr} • {t.cityAr}</p>
                <span className="text-[10px] text-[#B78A5C] font-mono mt-0.5 block font-bold">
                  المنتج: {t.productBought}
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};
