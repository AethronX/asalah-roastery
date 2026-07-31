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
      <div className="bg-gradient-to-br from-[#2B211B] via-[#4A3326] to-[#2B211B] text-[#F8F3EC] rounded-3xl p-8 sm:p-12 md:p-16 border border-[#C9A76A]/40 shadow-2xl relative overflow-hidden">
        
        {/* Background Decorative Lighting */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#C9A76A]/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#B78A5C]/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Content Column */}
          <div className="lg:col-span-7 text-right space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A76A]/20 text-[#C9A76A] border border-[#C9A76A]/40 text-xs font-semibold">
              <Gift className="w-3.5 h-3.5 text-[#C9A76A]" />
              <span>مجموعات الهدايا والتوزيعات الملكية VIP</span>
            </div>

            <h2 className="font-alexandria text-3xl sm:text-5xl font-black text-[#F8F3EC] leading-tight">
              هدية تليق بقدْر من تحب <br className="hidden sm:inline" />
              <span className="gold-gradient-bright">بلمسات الضيافة السامية</span>
            </h2>

            <p className="text-sm sm:text-base text-[#F8F3EC] font-normal leading-relaxed max-w-2xl">
              ابتكرنا صناديق هدايا فاخرة مغلفة بنسيج المخمل والحرير، تتزين بالحفر الذهبي للنقوش العمانية التاريخية، وتضم أواني ضيافة نحاسية معتقة مع أنقى خلطات البن العماني والتمور الفاخرة.
            </p>

            {/* Included Box Features */}
            <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#F8F3EC] font-medium">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#C9A76A] text-[#2B211B] flex items-center justify-center font-bold">
                  ✓
                </div>
                <span>صناديق خشبية ومخملية مصممة خصيصاً للمناسبات الرسمية وكبار الشخصيات</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#C9A76A] text-[#2B211B] flex items-center justify-center font-bold">
                  ✓
                </div>
                <span>طباعة بطاقات إهداء ملكية مخصصة بحروف بارزة بماء الذهب</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#C9A76A] text-[#2B211B] flex items-center justify-center font-bold">
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
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#B78A5C] to-[#C9A76A] text-[#2B211B] font-bold text-sm hover:shadow-xl hover:shadow-[#C9A76A]/20 transition-all flex items-center gap-2 min-h-[48px]"
                >
                  <span>عرض صندوق الهدايا الملكي</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Image Showcase Column */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border-2 border-[#C9A76A]/50 shadow-2xl group">
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B211B] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 right-6 left-6 text-right">
                <span className="text-[10px] text-[#C9A76A] uppercase tracking-widest font-sans font-bold">
                  LIMITED ROYAL EDITION
                </span>
                <h3 className="font-amiri text-2xl font-bold text-[#F8F3EC]">
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
