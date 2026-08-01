import React, { useState } from 'react';
import { BRANCHES } from '../data/products';
import { MapPin, Phone, Clock, Check, Coffee } from 'lucide-react';

interface LocationSectionProps {
  theme?: 'light' | 'dark';
}

export const LocationSection: React.FC<LocationSectionProps> = React.memo(({ theme = 'light' }) => {
  const isLight = theme === 'light';
  const [selectedBranch, setSelectedBranch] = useState(BRANCHES[0]);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestDate, setGuestDate] = useState('2026-07-30');

  const handleBookTasting = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestPhone) return;
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setGuestName('');
      setGuestPhone('');
    }, 4000);
  };

  return (
    <section id="location-section" className={`py-20 sm:py-24 relative overflow-hidden transition-colors duration-300 ${
      isLight ? 'bg-[#FAF8F5] text-[#1D1D1F]' : 'bg-[#181310] text-[#F7F2EA]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className={`text-xs sm:text-sm font-extrabold uppercase tracking-widest px-4 py-2 rounded-full border inline-block mb-3 shadow-sm font-alexandria ${
            isLight
              ? 'bg-white text-[#8A5A2B] border-[#EFE7DD]'
              : 'bg-[#241B17] text-[#F3E2BE] border-[#D7AE63]/50'
          }`}>
            فروعنا وجلسات التذوق
          </span>
          <h2 className={`font-alexandria text-2xl sm:text-4xl lg:text-5xl font-black mb-3 ${
            isLight ? 'text-[#1D1D1F]' : 'text-[#F7F2EA]'
          }`}>
            زوروا فروع محامص الأصالة في سلطنة عمان
          </h2>
          <p className={`text-sm sm:text-base md:text-lg font-semibold ${
            isLight ? 'text-[#3A3A3C]' : 'text-[#E8DCCB]'
          }`}>
            استمتعوا بتجربة تذوق حيّة للبن المحمص طازجاً في صالات العرض المخصصة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Branch List & Cards */}
          <div className="lg:col-span-6 space-y-4">
            {BRANCHES.map((b) => (
              <div
                key={b.id}
                onClick={() => setSelectedBranch(b)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-right ${
                  selectedBranch.id === b.id
                    ? isLight
                      ? 'bg-white border-[#9B6B3A] shadow-xl ring-2 ring-[#9B6B3A]/20'
                      : 'bg-[#241B17] border-[#D7AE63] shadow-2xl ring-1 ring-[#D7AE63]/50'
                    : isLight
                      ? 'bg-white/80 border-[#EFE7DD] hover:border-[#9B6B3A]/40 hover:bg-white'
                      : 'bg-[#241B17]/50 border-[#D7AE63]/20 hover:border-[#D7AE63]/60 hover:bg-[#241B17]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`font-alexandria text-xl font-bold ${
                    isLight ? 'text-[#1D1D1F]' : 'text-[#F7F2EA]'
                  }`}>
                    {b.nameAr}
                  </h3>
                  {b.isRoastery && (
                    <span className={`text-[10px] font-black px-3 py-1 rounded-full shadow-sm ${
                      isLight
                        ? 'bg-[#1D1D1F] text-white'
                        : 'bg-gradient-to-r from-[#F3E2BE] to-[#D7AE63] text-[#120E0C]'
                    }`}>
                      المحمصة الرئيسية
                    </span>
                  )}
                </div>

                <div className={`space-y-2 text-xs sm:text-sm font-semibold ${
                  isLight ? 'text-[#3A3A3C]' : 'text-[#E8DCCB]'
                }`}>
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-4 h-4 shrink-0 ${isLight ? 'text-[#9B6B3A]' : 'text-[#F3E2BE]'}`} />
                    <span>{b.addressAr}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className={`w-4 h-4 shrink-0 ${isLight ? 'text-[#9B6B3A]' : 'text-[#F3E2BE]'}`} />
                    <span>{b.hoursAr}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className={`w-4 h-4 shrink-0 ${isLight ? 'text-[#9B6B3A]' : 'text-[#F3E2BE]'}`} />
                    <span dir="ltr">{b.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tasting Appointment Booking Form */}
          <div className={`lg:col-span-6 rounded-3xl p-6 sm:p-8 border text-right shadow-xl transition-colors ${
            isLight
              ? 'bg-white border-[#EFE7DD]'
              : 'bg-[#241B17] border-[#D7AE63]/40 shadow-2xl'
          }`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-full border flex items-center justify-center shadow-sm ${
                isLight ? 'bg-[#FAF6F0] border-[#9B6B3A]/30 text-[#9B6B3A]' : 'bg-[#1B1512] border-[#D7AE63]/50 text-[#F3E2BE]'
              }`}>
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`font-alexandria text-xl font-bold ${isLight ? 'text-[#1D1D1F]' : 'text-[#F7F2EA]'}`}>
                  حجز جلسة تذوق خاصة (Tasting Session)
                </h3>
                <p className={`text-xs font-medium ${isLight ? 'text-[#5C554E]' : 'text-[#E8DCCB]'}`}>
                  احجز وقتك الخاص مع خبير التحميص لتقييم المحاصيل وإعداد القهوة العمانية
                </p>
              </div>
            </div>

            {bookingSuccess ? (
              <div className="p-6 bg-emerald-950/90 border border-emerald-500/60 rounded-2xl text-center text-emerald-200 animate-fadeIn">
                <Check className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h4 className="font-alexandria text-xl font-bold mb-1">تم تأكيد الحجز بنجاح!</h4>
                <p className="text-xs font-normal">
                  سيتواصل معك فريق الضيافة في فرع ({selectedBranch.nameAr}) لتأكيد الموعد. أهلاً وسهلاً بكم.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookTasting} className="space-y-4 text-xs">
                <div>
                  <label htmlFor="tasting-branch" className={`block font-semibold mb-1.5 ${isLight ? 'text-[#1D1D1F]' : 'text-[#F7F2EA]'}`}>الفرع المختار:</label>
                  <input
                    id="tasting-branch"
                    type="text"
                    disabled
                    value={selectedBranch.nameAr}
                    className={`w-full p-3 border rounded-xl font-bold ${
                      isLight ? 'bg-[#FAF6F0] border-[#EFE7DD] text-[#9B6B3A]' : 'bg-[#1B1512] border-[#D7AE63]/40 text-[#F3E2BE]'
                    }`}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="tasting-name" className={`block font-semibold mb-1.5 ${isLight ? 'text-[#1D1D1F]' : 'text-[#F7F2EA]'}`}>الاسم الكريم:</label>
                    <input
                      id="tasting-name"
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="أدخل اسمك الكريـم"
                      className={`w-full p-3 border rounded-xl focus:outline-none ${
                        isLight
                          ? 'bg-white border-[#EFE7DD] text-[#1D1D1F] placeholder-[#8E8E93] focus:border-[#9B6B3A]'
                          : 'bg-[#1B1512] border-[#D7AE63]/30 text-white placeholder-[#E8DCCB]/40 focus:border-[#D7AE63]'
                      }`}
                    />
                  </div>
                  <div>
                    <label htmlFor="tasting-phone" className={`block font-semibold mb-1.5 ${isLight ? 'text-[#1D1D1F]' : 'text-[#F7F2EA]'}`}>رقم الهاتف / الواتساب:</label>
                    <input
                      id="tasting-phone"
                      type="tel"
                      required
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      placeholder="+968 9XXXXXXX"
                      className={`w-full p-3 border rounded-xl focus:outline-none ${
                        isLight
                          ? 'bg-white border-[#EFE7DD] text-[#1D1D1F] placeholder-[#8E8E93] focus:border-[#9B6B3A]'
                          : 'bg-[#1B1512] border-[#D7AE63]/30 text-white placeholder-[#E8DCCB]/40 focus:border-[#D7AE63]'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="tasting-date" className={`block font-semibold mb-1.5 ${isLight ? 'text-[#1D1D1F]' : 'text-[#F7F2EA]'}`}>التاريخ المقترح للجلسة:</label>
                  <input
                    id="tasting-date"
                    type="date"
                    required
                    value={guestDate}
                    onChange={(e) => setGuestDate(e.target.value)}
                    className={`w-full p-3 border rounded-xl focus:outline-none ${
                      isLight
                        ? 'bg-white border-[#EFE7DD] text-[#1D1D1F] focus:border-[#9B6B3A]'
                        : 'bg-[#1B1512] border-[#D7AE63]/30 text-white focus:border-[#D7AE63]'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  aria-label="تأكيد حجز جلسة التذوق"
                  className="w-full py-4 rounded-xl btn-champagne-primary text-[#120E0C] font-black text-sm hover:shadow-xl transition-all mt-4 min-h-[48px] border border-[#F3E2BE]/60"
                >
                  تأكيد حجز جلسة التذوق
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
});
