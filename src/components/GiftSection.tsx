import React from 'react';
import { Gift, ArrowLeft } from 'lucide-react';
import { Product } from '../types';

interface GiftSectionProps {
  onSelectGift: (product: Product) => void;
  giftProduct?: Product;
}

export const GiftSection: React.FC<GiftSectionProps> = ({ onSelectGift, giftProduct }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-[#1B1512] via-[#241B17] to-[#120E0C] text-[#F7F2EA] rounded-3xl p-8 sm:p-12 md:p-16 border border-[#D7AE63]/40 shadow-2xl relative overflow-hidden">
        
        {/* Background Decorative Lighting */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#D7AE63]/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#9B6B3A]/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Content Column */}
          <div className="lg:col-span-7 text-right space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2C211C] text-[#F3E2BE] border border-[#D7AE63]/40 text-xs font-bold shadow-sm">
              <Gift className="w-3.5 h-3.5 text-[#F3E2BE]" />
              <span>مجموعات الهدايا والتوزيعات الملكية VIP</span>
            </div>

            <h2 className="font-alexandria text-3xl sm:text-5xl font-black text-[#F7F2EA] leading-tight">
              هدية تليق بقدْر من تحب <br className="hidden sm:inline" />
              <span className="gold-gradient-bright">بلمسات الضيافة السامية</span>
            </h2>

            <p className="text-sm sm:text-base text-[#E8DCCB] font-medium leading-relaxed max-w-2xl">
              ابتكرنا صناديق هدايا فاخرة مغلفة بنسيج المخمل والحرير، تتزين بالحفر الذهبي للنقوش العمانية التاريخية، وتضم أواني ضيافة نحاسية معتقة مع أنقى خلطات البن العماني والتمور الفاخرة.
            </p>

            {/* Included Box Features */}
            <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#E8DCCB] font-medium">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#D7AE63] text-[#120E0C] flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                  ✓
                </div>
                <span>صناديق خشبية ومخملية مصممة خصيصاً للمناسبات الرسمية وكبار الشخصيات</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#D7AE63] text-[#120E0C] flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                  ✓
                </div>
                <span>طباعة بطاقات إهداء ملكية مخصصة بحروف بارزة بماء الذهب</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#D7AE63] text-[#120E0C] flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                  ✓
                </div>
                <span>خدمة التسليم الشخصي المباشر للمهدَى إليه برُقي واحترام</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              {giftProduct && (
                <button
                  onClick={() => onSelectGift(giftProduct)}
                  aria-label="عرض تفاصيل صندوق الهدايا الملكي"
                  className="px-8 py-4 rounded-full btn-champagne-primary text-[#120E0C] font-black text-sm hover:shadow-xl transition-all flex items-center gap-2 border border-[#F3E2BE]/60 min-h-[48px]"
                >
                  <span>عرض صندوق الهدايا الملكي</span>
                  <ArrowLeft className="w-4 h-4 text-[#120E0C]" />
                </button>
              )}
            </div>
          </div>

          {/* Image Showcase Column */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border-2 border-[#D7AE63]/50 shadow-2xl group">
              <img
                src="/assets/images/luxury_gift_box_1785262908848.jpg"
                alt="صندوق هدايا القهوة العمانية الفاخر"
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1512] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 right-6 left-6 text-right">
                <span className="text-[10px] text-[#F3E2BE] uppercase tracking-widest font-sans font-bold">
                  LIMITED ROYAL EDITION
                </span>
                <h3 className="font-amiri text-2xl font-bold text-[#F7F2EA]">
                  صندوق الهدايا الفاخر
                </h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
