import React, { useState } from 'react';
import { BRANCHES } from '../data/products';
import { MapPin, Phone, Clock, Calendar, Check, Coffee } from 'lucide-react';

export const LocationSection: React.FC = () => {
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
    <section id="location-section" className="py-24 bg-[#1B1512] text-[#F7F2EA] relative overflow-hidden border-t border-[#D7AE63]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F3E2BE] bg-[#241B17] px-4 py-1.5 rounded-full border border-[#D7AE63]/40 inline-block mb-3 shadow-sm font-alexandria">
            فروعنا وجلسات التذوق
          </span>
          <h2 className="font-alexandria text-3xl sm:text-4xl font-black text-[#F7F2EA] mb-3">
            زوروا فروع محامص الأصالة في سلطنة عمان
          </h2>
          <p className="text-[#E8DCCB] text-sm font-medium">
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
                    ? 'bg-[#241B17] border-[#D7AE63] shadow-2xl ring-1 ring-[#D7AE63]/50'
                    : 'bg-[#241B17]/50 border-[#D7AE63]/20 hover:border-[#D7AE63]/60 hover:bg-[#241B17]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-alexandria text-xl font-bold text-[#F7F2EA]">
                    {b.nameAr}
                  </h3>
                  {b.isRoastery && (
                    <span className="bg-gradient-to-r from-[#F3E2BE] to-[#D7AE63] text-[#120E0C] text-[10px] font-black px-3 py-1 rounded-full shadow-sm">
                      المحمصة الرئيسية
                    </span>
                  )}
                </div>

                <div className="space-y-2 text-xs text-[#E8DCCB] font-medium">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#F3E2BE] shrink-0" />
                    <span>{b.addressAr}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#F3E2BE] shrink-0" />
                    <span>{b.hoursAr}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#F3E2BE] shrink-0" />
                    <span dir="ltr">{b.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tasting Appointment Booking Form */}
          <div className="lg:col-span-6 bg-[#241B17] rounded-3xl p-6 sm:p-8 border border-[#D7AE63]/40 text-right shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#1B1512] border border-[#D7AE63]/50 flex items-center justify-center text-[#F3E2BE] shadow-sm">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-alexandria text-xl font-bold text-[#F7F2EA]">
                  حجز جلسة تذوق خاصة (Tasting Session)
                </h3>
                <p className="text-xs text-[#E8DCCB] font-medium">
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
                  <label htmlFor="tasting-branch" className="block text-[#F7F2EA] font-semibold mb-1.5">الفرع المختار:</label>
                  <input
                    id="tasting-branch"
                    type="text"
                    disabled
                    value={selectedBranch.nameAr}
                    className="w-full p-3 bg-[#1B1512] border border-[#D7AE63]/40 rounded-xl text-[#F3E2BE] font-bold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="tasting-name" className="block text-[#F7F2EA] font-semibold mb-1.5">الاسم الكريم:</label>
                    <input
                      id="tasting-name"
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="أدخل اسمك الكريـم"
                      className="w-full p-3 bg-[#1B1512] border border-[#D7AE63]/30 rounded-xl text-white placeholder-[#E8DCCB]/40 focus:outline-none focus:border-[#D7AE63]"
                    />
                  </div>
                  <div>
                    <label htmlFor="tasting-phone" className="block text-[#F7F2EA] font-semibold mb-1.5">رقم الهاتف / الواتساب:</label>
                    <input
                      id="tasting-phone"
                      type="tel"
                      required
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      placeholder="+968 9XXXXXXX"
                      className="w-full p-3 bg-[#1B1512] border border-[#D7AE63]/30 rounded-xl text-white placeholder-[#E8DCCB]/40 focus:outline-none focus:border-[#D7AE63]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="tasting-date" className="block text-[#F7F2EA] font-semibold mb-1.5">التاريخ المقترح للجلسة:</label>
                  <input
                    id="tasting-date"
                    type="date"
                    required
                    value={guestDate}
                    onChange={(e) => setGuestDate(e.target.value)}
                    className="w-full p-3 bg-[#1B1512] border border-[#D7AE63]/30 rounded-xl text-white focus:outline-none focus:border-[#D7AE63]"
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
};
