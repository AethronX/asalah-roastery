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
    <section id="location-section" className="py-24 bg-[#2B211B] text-[#F8F3EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A76A] bg-[#C9A76A]/10 px-3.5 py-1.5 rounded-full border border-[#C9A76A]/20 inline-block mb-3">
            فروعنا وجلسات التذوق
          </span>
          <h2 className="font-amiri text-3xl sm:text-4xl font-bold text-[#F8F3EC] mb-3">
            زوروا فروع محامص الأصالة في سلطنة عمان
          </h2>
          <p className="text-[#F8F3EC]/70 text-sm font-light">
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
                    ? 'bg-[#4A3326] border-[#C9A76A] shadow-2xl'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-amiri text-xl font-bold text-[#F8F3EC]">
                    {b.nameAr}
                  </h3>
                  {b.isRoastery && (
                    <span className="bg-[#C9A76A] text-[#2B211B] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                      المحمصة الرئيسية
                    </span>
                  )}
                </div>

                <div className="space-y-2 text-xs text-[#F8F3EC]/80 font-light">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C9A76A] shrink-0" />
                    <span>{b.addressAr}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#C9A76A] shrink-0" />
                    <span>{b.hoursAr}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#C9A76A] shrink-0" />
                    <span dir="ltr">{b.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tasting Appointment Booking Form */}
          <div className="lg:col-span-6 bg-[#4A3326]/60 rounded-3xl p-6 sm:p-8 border border-[#C9A76A]/30 backdrop-blur-md text-right">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#C9A76A]/20 border border-[#C9A76A] flex items-center justify-center text-[#C9A76A]">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-amiri text-2xl font-bold text-[#F8F3EC]">
                  حجز جلسة تذوق خاصة (Tasting Session)
                </h3>
                <p className="text-xs text-[#F8F3EC]/70">
                  احجز وقتك الخاص مع خبير التحميص لتقييم المحاصيل وإعداد القهوة العمانية
                </p>
              </div>
            </div>

            {bookingSuccess ? (
              <div className="p-6 bg-emerald-950/80 border border-emerald-500/50 rounded-2xl text-center text-emerald-200 animate-fadeIn">
                <Check className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h4 className="font-amiri text-xl font-bold mb-1">تم تأكيد الحجز بنجاح!</h4>
                <p className="text-xs font-light">
                  سيتواصل معك فريق الضيافة في فرع ({selectedBranch.nameAr}) لتأكيد الموعد. أهلاً وسهلاً بكم.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookTasting} className="space-y-4 text-xs">
                <div>
                  <label className="block text-[#F8F3EC]/80 mb-1.5">الفرع المختار:</label>
                  <input
                    type="text"
                    disabled
                    value={selectedBranch.nameAr}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-[#C9A76A] font-bold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#F8F3EC]/80 mb-1.5">الاسم الكريم:</label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="أدخل اسمك الكريـم"
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-[#C9A76A]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#F8F3EC]/80 mb-1.5">رقم الهاتف / الواتساب:</label>
                    <input
                      type="tel"
                      required
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      placeholder="+968 9XXXXXXX"
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-[#C9A76A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#F8F3EC]/80 mb-1.5">التاريخ المقترح للجلسة:</label>
                  <input
                    type="date"
                    required
                    value={guestDate}
                    onChange={(e) => setGuestDate(e.target.value)}
                    className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-[#C9A76A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#B78A5C] to-[#C9A76A] text-[#2B211B] font-bold text-sm hover:shadow-xl hover:shadow-[#C9A76A]/20 transition-all mt-4"
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
