import React from 'react';
import { TESTIMONIALS } from '../data/products';
import { Star, Quote, CheckCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#FAF6F0]/60 border-t border-[#D7AE63]/20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-[#F3E2BE] bg-[#241B17] px-4 py-1.5 rounded-full border border-[#D7AE63]/40 inline-block mb-3 shadow-sm">
          ثقة المتذوقين
        </span>
        <h2 className="font-amiri text-3xl sm:text-4xl font-bold text-[#1B1512] mb-3">
          ماذا يقول كبار المتذوقين عن تجربة الأصالة؟
        </h2>
        <p className="text-[#4E382A] text-sm sm:text-base font-medium">
          نعتز بثقة عملائنا في سلطنة عمان ودول مجلس التعاون الخليجي.
        </p>
      </div>

      {/* Testimonials Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-3xl p-8 border border-[#D7AE63]/25 hover:border-[#D7AE63]/70 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-right relative group"
          >
            <div>
              {/* Quote & Rating Bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-[#D7AE63]">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold text-xs text-[#F3E2BE] bg-[#241B17] px-2.5 py-0.5 rounded-full border border-[#D7AE63]/30">{t.rating}/10</span>
                </div>
                <Quote className="w-8 h-8 text-[#D7AE63]/30 group-hover:text-[#D7AE63] transition-colors" />
              </div>

              {/* Review Comment */}
              <p className="font-amiri text-lg text-[#1B1512] leading-relaxed mb-6 italic font-medium">
                "{t.commentAr}"
              </p>
            </div>

            {/* Author Info */}
            <div className="pt-6 border-t border-[#D7AE63]/20 flex items-center gap-4">
              <img
                src={t.avatar}
                alt={t.nameAr}
                loading="lazy"
                decoding="async"
                width="48"
                height="48"
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#D7AE63]"
              />
              <div>
                <h4 className="font-bold text-sm text-[#1B1512] flex items-center gap-1.5">
                  <span>{t.nameAr}</span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 inline" title="مشتري معتمد" />
                </h4>
                <p className="text-xs text-[#4E382A] font-medium">{t.titleAr} • {t.cityAr}</p>
                <span className="text-[10px] text-[#9B6B3A] font-sans mt-0.5 block font-bold">
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
