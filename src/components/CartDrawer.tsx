import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, ShoppingBag, ArrowLeft, CheckCircle2, ShieldCheck, Truck, Sparkles, Tag, CreditCard, Zap, Check, MapPin, MessageCircle, Send } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (index: number, qty: number) => void;
  onRemoveItem: (index: number) => void;
  currency: 'OMR' | 'USD';
  onClearCart: () => void;
  initialStep?: 'cart' | 'address';
}

const STORE_WHATSAPP_NUMBER = '96876923072';

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  currency,
  onClearCart,
  initialStep = 'cart',
}) => {
  if (!isOpen) return null;

  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'address' | 'success'>(initialStep);
  
  // Customer & Shipping Info
  const [customerName, setCustomerName] = useState('');
  const [customerCity, setCustomerCity] = useState('مسقط');
  const [customerPhone, setCustomerPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'bank_transfer' | 'apple_pay'>('cod');
  const [lastOrderMessage, setLastOrderMessage] = useState<string>('');

  // Coupon Code State
  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discountPercent: number } | null>({
    code: 'ASALAH10',
    discountPercent: 10, // Pre-applied welcome discount
  });
  const [couponError, setCouponError] = useState('');

  // Subtotal Calculations
  const subtotalOmr = cartItems.reduce((acc, item) => acc + item.unitPriceOmr * item.quantity, 0);
  
  // Discount
  const discountOmr = appliedCoupon ? (subtotalOmr * appliedCoupon.discountPercent) / 100 : 0;
  const discountedSubtotalOmr = Math.max(0, subtotalOmr - discountOmr);

  // Free shipping threshold: 20 OMR
  const freeShippingThresholdOmr = 20.0;
  const progressPercent = Math.min(100, (subtotalOmr / freeShippingThresholdOmr) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThresholdOmr - subtotalOmr);

  const shippingFeeOmr = subtotalOmr >= freeShippingThresholdOmr || appliedCoupon?.code === 'FREESHIP' ? 0 : 2.0;
  const totalOmr = discountedSubtotalOmr + shippingFeeOmr;
  const totalUsd = totalOmr * 2.6;

  const handleApplyCoupon = (codeToApply?: string) => {
    const code = (codeToApply || couponInput).trim().toUpperCase();
    if (!code) return;

    if (code === 'ASALAH10') {
      setAppliedCoupon({ code: 'ASALAH10', discountPercent: 10 });
      setCouponError('');
    } else if (code === 'VIP15') {
      setAppliedCoupon({ code: 'VIP15', discountPercent: 15 });
      setCouponError('');
    } else if (code === 'FREESHIP') {
      setAppliedCoupon({ code: 'FREESHIP', discountPercent: 0 });
      setCouponError('');
    } else {
      setCouponError('كود الخصم غير صالحة');
    }
  };

  const handleQuickAddressPreset = (presetName: string, city: string, phone: string) => {
    setCustomerName(presetName);
    setCustomerCity(city);
    setCustomerPhone(phone);
  };

  // Build formatted WhatsApp message
  const generateWhatsAppOrderText = (name: string, city: string, phone: string, method: string) => {
    const orderNum = Math.floor(10000 + Math.random() * 90000);
    const payLabel =
      method === 'cod'
        ? 'الدفع نقداً عند الاستلام'
        : method === 'bank_transfer'
        ? 'تحويل بنكي آمن (بنك مسقط / أوفق)'
        : 'الدفع عند الاستلام / تحويل آمن';

    const itemsSummary = cartItems
      .map(
        (item, idx) =>
          `${idx + 1}. *${item.product.nameAr}*\n   • الوزن: ${item.selectedWeight}\n   • الطحنة: ${item.selectedGrind}\n   • الكمية: ${item.quantity} × ${item.unitPriceOmr.toFixed(3)} ر.ع = ${(item.unitPriceOmr * item.quantity).toFixed(3)} ر.ع`
      )
      .join('\n\n');

    const discountText =
      appliedCoupon && discountOmr > 0
        ? `\n• *الخصم (${appliedCoupon.code}):* -${discountOmr.toFixed(3)} ر.ع`
        : '';

    const shippingText = shippingFeeOmr === 0 ? 'مجاني بالكامل ⚡' : `${shippingFeeOmr.toFixed(3)} ر.ع`;

    return `☕ *طلب جديد من متجر محامص الأصالة (#ASALAH-${orderNum})*
---------------------------------------
👤 *بيانات المستلم:*
• *الاسم الكريم:* ${name || 'عميل المحمصة'}
• *المدينة / الولاية:* ${city}
• *رقم التواصل:* ${phone || 'غير محدد'}

📦 *تفاصيل المحاصيل والمنتجات:*
${itemsSummary}

---------------------------------------
💰 *الفاتورة الإجمالية:*
• *المجموع الفرعي:* ${subtotalOmr.toFixed(3)} ر.ع${discountText}
• *رسوم الشحن:* ${shippingText}
• *الإجمالي الكلي المستحق:* *${totalOmr.toFixed(3)} ر.ع*
---------------------------------------
💳 *طريقة الدفع:*
• ${payLabel}

أرجو تأكيد تجهيز الطلب والتوصيل. شكراً جزيلاً! ✨`;
  };

  const executeWhatsAppRedirect = (messageText: string) => {
    setLastOrderMessage(messageText);
    const encoded = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encoded}`;
    
    // Open WhatsApp directly
    window.open(whatsappUrl, '_blank');
    setCheckoutStep('success');

    setTimeout(() => {
      onClearCart();
    }, 7000);
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;

    const msg = generateWhatsAppOrderText(customerName, customerCity, customerPhone, paymentMethod);
    executeWhatsAppRedirect(msg);
  };

  const handleInstantExpressPay = () => {
    const name = customerName || 'طلب سريع عبر الواتساب';
    const city = customerCity || 'مسقط';
    const phone = customerPhone || '+968 76923072';

    const msg = generateWhatsAppOrderText(name, city, phone, paymentMethod);
    executeWhatsAppRedirect(msg);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#2B211B]/80 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 left-0 max-w-full flex pl-0 sm:pl-10 text-right">
        <div className="w-screen max-w-md bg-[#F8F3EC] text-[#2B211B] shadow-2xl border-r border-[#C9A76A]/40 flex flex-col justify-between relative z-10">
          
          {/* Drawer Top Header */}
          <div className="p-4 sm:p-5 bg-[#2B211B] text-[#F8F3EC] border-b border-[#C9A76A]/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C9A76A]" />
              <h3 className="font-amiri text-xl font-bold">سلة الشراء المباشر</h3>
              <span className="text-xs bg-[#C9A76A] text-[#2B211B] px-2 py-0.5 rounded-full font-bold">
                {cartItems.reduce((acc, i) => acc + i.quantity, 0)} منتج
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Body */}
          <div className="flex-grow overflow-y-auto p-4 sm:p-5 space-y-4">
            
            {/* Express 1-Click Buy Header (Apple Pay / Instant) */}
            {cartItems.length > 0 && checkoutStep === 'cart' && (
              <div className="p-3 bg-gradient-to-r from-[#2B211B] to-[#4A3326] rounded-2xl border border-[#C9A76A]/40 text-white space-y-2">
                <div className="flex items-center justify-between text-xs text-[#C9A76A] font-bold">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4 fill-current" />
                    <span>الدفع السريع المباشر (1-Click Buy)</span>
                  </span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    جاهز للتنفيذ
                  </span>
                </div>
                <button
                  onClick={handleInstantExpressPay}
                  className="w-full py-2.5 bg-black hover:bg-gray-900 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95 border border-white/20"
                >
                  <span className="text-sm font-sans font-bold"> Apple Pay</span>
                  <span className="text-white/60">|</span>
                  <span>دفع نقرة واحدة ({currency === 'OMR' ? `${totalOmr.toFixed(3)} ر.ع` : `$${totalUsd.toFixed(2)}`})</span>
                </button>
              </div>
            )}

            {/* Free Shipping Progress Bar */}
            {cartItems.length > 0 && checkoutStep === 'cart' && (
              <div className="bg-[#EFE8DE] p-3.5 rounded-2xl border border-[#B78A5C]/20 text-xs">
                <div className="flex items-center justify-between font-bold text-[#2B211B] mb-1.5">
                  <span className="flex items-center gap-1">
                    <Truck className="w-4 h-4 text-[#B78A5C]" />
                    <span>التوصيل المجاني المباشر</span>
                  </span>
                  <span>
                    {remainingForFreeShipping === 0
                      ? 'مؤهل للتوصيل المجاني!'
                      : `متبقي ${remainingForFreeShipping.toFixed(3)} ر.ع`}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-[#2B211B]/10 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#B78A5C] to-[#C9A76A] transition-all duration-500 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}

            {/* Cart Items List */}
            {checkoutStep === 'cart' && (
              <>
                {cartItems.length === 0 ? (
                  <div className="py-16 text-center space-y-3">
                    <ShoppingBag className="w-16 h-16 text-[#B78A5C]/40 mx-auto" />
                    <h4 className="font-amiri text-xl font-bold text-[#2B211B]">سلتك فارغة حالياً</h4>
                    <p className="text-xs text-[#4A3326]/70 max-w-xs mx-auto">
                      اختر حبوب القهوة العمانية الفاخرة أو المحاصيل المختصة وأضفها بنقرة واحدة.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {cartItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-white/90 rounded-2xl border border-[#EFE8DE] flex gap-3 items-center justify-between hover:border-[#B78A5C]/40 transition-colors shadow-sm"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.nameAr}
                          referrerPolicy="no-referrer"
                          className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[#EFE8DE]"
                        />

                        <div className="flex-grow text-xs">
                          <h4 className="font-bold text-[#2B211B] font-amiri text-sm line-clamp-1">
                            {item.product.nameAr}
                          </h4>
                          <div className="text-[11px] text-[#4A3326]/70 mt-0.5">
                            الوزن: {item.selectedWeight} | {item.selectedGrind.split(' ')[0]}
                          </div>
                          <div className="font-bold text-[#2B211B] mt-1 text-sm">
                            {currency === 'OMR'
                              ? `${(item.unitPriceOmr * item.quantity).toFixed(3)} ر.ع`
                              : `$${(item.unitPriceOmr * 2.6 * item.quantity).toFixed(2)}`}
                          </div>
                        </div>

                        {/* Modifiers */}
                        <div className="flex flex-col items-end gap-2">
                          <button
                            onClick={() => onRemoveItem(idx)}
                            className="text-red-500 hover:text-red-700 p-1"
                            title="حذف"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <div className="flex items-center border border-[#EFE8DE] bg-[#EFE8DE]/60 rounded-lg overflow-hidden text-xs">
                            <button
                              onClick={() => onUpdateQuantity(idx, Math.max(1, item.quantity - 1))}
                              className="px-2 py-0.5 font-bold hover:bg-[#B78A5C]/20"
                            >
                              -
                            </button>
                            <span className="px-2.5 font-bold">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                              className="px-2 py-0.5 font-bold hover:bg-[#B78A5C]/20"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Promo Coupon Section */}
                    <div className="p-3.5 bg-white/70 rounded-2xl border border-[#EFE8DE] space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold text-[#2B211B]">
                        <span className="flex items-center gap-1.5">
                          <Tag className="w-4 h-4 text-[#B78A5C]" />
                          <span>كوبون الخصم الترحيبي</span>
                        </span>
                        {appliedCoupon && (
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                            تم تطبيق {appliedCoupon.code} ({appliedCoupon.discountPercent}%)
                          </span>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value)}
                          placeholder="أدخل الكود (مثال: ASALAH10)"
                          className="flex-grow p-2 text-xs bg-white border border-[#EFE8DE] rounded-xl focus:outline-none focus:border-[#B78A5C] uppercase font-mono"
                        />
                        <button
                          onClick={() => handleApplyCoupon()}
                          className="px-4 py-2 bg-[#2B211B] text-[#C9A76A] rounded-xl text-xs font-bold hover:bg-[#B78A5C] hover:text-white transition-colors shrink-0"
                        >
                          تطبيق
                        </button>
                      </div>

                      {/* Quick Coupon Buttons */}
                      <div className="flex gap-1.5 pt-1">
                        <button
                          onClick={() => handleApplyCoupon('ASALAH10')}
                          className="text-[10px] px-2.5 py-1 bg-[#EFE8DE] hover:bg-[#B78A5C] hover:text-white rounded-lg transition-colors font-mono"
                        >
                          ASALAH10 (10% خصم)
                        </button>
                        <button
                          onClick={() => handleApplyCoupon('FREESHIP')}
                          className="text-[10px] px-2.5 py-1 bg-[#EFE8DE] hover:bg-[#B78A5C] hover:text-white rounded-lg transition-colors font-mono"
                        >
                          FREESHIP (شحن مجاني)
                        </button>
                      </div>

                      {couponError && <p className="text-[11px] text-red-500 font-medium">{couponError}</p>}
                    </div>

                  </div>
                )}
              </>
            )}

            {/* Step 2: Address & Payment Quick Form */}
            {checkoutStep === 'address' && (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4 text-xs animate-fadeIn">
                
                {/* Back to Cart */}
                <button
                  type="button"
                  onClick={() => setCheckoutStep('cart')}
                  className="flex items-center gap-1 text-[#B78A5C] font-bold hover:underline mb-1"
                >
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                  <span>تعديل السلة والمنتجات</span>
                </button>

                <h4 className="font-amiri text-xl font-bold text-[#2B211B] border-b border-[#EFE8DE] pb-2">
                  بيانات التوصيل السريع والدفع
                </h4>

                {/* Quick Presets for Frictionless Address */}
                <div className="space-y-1.5">
                  <label className="block text-[#4A3326] font-bold text-[11px] flex items-center justify-between">
                    <span>اختيار موقع سريع (تعبئة فورية):</span>
                    <span className="text-[#B78A5C]">نقرة واحدة</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleQuickAddressPreset('عبدالله المعمري (مسقط)', 'مسقط', '+968 92345678')}
                      className="p-2 bg-white border border-[#EFE8DE] rounded-xl hover:border-[#B78A5C] text-right transition-colors"
                    >
                      <span className="font-bold block text-[#2B211B] text-[11px]">مسقط - الخوض</span>
                      <span className="text-[10px] text-[#4A3326]/60">توصيل خلال ساعتين</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleQuickAddressPreset('مريم البوسعيدية (صلالة)', 'صلالة', '+968 98765432')}
                      className="p-2 bg-white border border-[#EFE8DE] rounded-xl hover:border-[#B78A5C] text-right transition-colors"
                    >
                      <span className="font-bold block text-[#2B211B] text-[11px]">صلالة - المعتزة</span>
                      <span className="text-[10px] text-[#4A3326]/60">توصيل خلال 24 ساعة</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[#4A3326] mb-1 font-bold">اسم المستلم:</label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="أدخل الاسم الكامل"
                    className="w-full p-3 bg-white border border-[#EFE8DE] rounded-xl focus:outline-none focus:border-[#B78A5C]"
                  />
                </div>

                <div>
                  <label className="block text-[#4A3326] mb-1 font-bold">المدينة / الولاية العمانية:</label>
                  <select
                    value={customerCity}
                    onChange={(e) => setCustomerCity(e.target.value)}
                    className="w-full p-3 bg-white border border-[#EFE8DE] rounded-xl focus:outline-none focus:border-[#B78A5C]"
                  >
                    <option value="مسقط">مسقط (توصيل نفس اليوم - خلال 3 ساعات)</option>
                    <option value="صلالة">صلالة (ظفار - توصيل 24 ساعة)</option>
                    <option value="نزوى">نزوى (الداخلية - توصيل 24 ساعة)</option>
                    <option value="صحار">صحار (الباطنة - توصيل 24 ساعة)</option>
                    <option value="صور">صور (الشرقية - توصيل 24 ساعة)</option>
                    <option value="دبي / الرياض (الخليج)">دبي / الرياض (دول الخليج - شحن جوي)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#4A3326] mb-1 font-bold">رقم الهاتف للواتساب والاتصال:</label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="+968 9XXXXXXX"
                    className="w-full p-3 bg-white border border-[#EFE8DE] rounded-xl focus:outline-none focus:border-[#B78A5C]"
                  />
                </div>

                {/* Payment Selection */}
                <div className="space-y-2 pt-2">
                  <label className="block text-[#4A3326] font-bold">طريقة الدفع والتأكيد:</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('cod')}
                      className={`p-2.5 rounded-xl border text-center font-bold flex flex-col items-center justify-center gap-1 transition-all ${
                        paymentMethod === 'cod'
                          ? 'border-[#B78A5C] bg-[#2B211B] text-[#C9A76A]'
                          : 'border-[#EFE8DE] bg-white text-[#4A3326]'
                      }`}
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span className="text-[11px]">الدفع عند الاستلام</span>
                      <span className="text-[9px] opacity-70">نقداً أو ببطاقة المندوب</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('bank_transfer')}
                      className={`p-2.5 rounded-xl border text-center font-bold flex flex-col items-center justify-center gap-1 transition-all ${
                        paymentMethod === 'bank_transfer'
                          ? 'border-[#B78A5C] bg-[#2B211B] text-[#C9A76A]'
                          : 'border-[#EFE8DE] bg-white text-[#4A3326]'
                      }`}
                    >
                      <CreditCard className="w-4 h-4" />
                      <span className="text-[11px]">تحويل بنكي مباشر</span>
                      <span className="text-[9px] opacity-70">بنك مسقط / أوفق</span>
                    </button>
                  </div>
                </div>

                <div className="p-3 bg.emerald-50 bg-emerald-900/10 rounded-xl text-[11px] text-emerald-900 border border-emerald-500/30 space-y-1">
                  <div className="flex items-center gap-1.5 font-bold">
                    <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                    <span>طلب مباشر وسريع عبر الواتساب (+968 76923072)</span>
                  </div>
                  <p className="text-[10px] text-emerald-800/80">
                    عند الضغط على إرسال، سيتم فتح الواتساب تلقائياً برسالة منظمة تحوي جميع المنتجات والفاتورة لإتمام الطلب بدون تعقيدات.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 active:scale-98 mt-3"
                >
                  <Send className="w-5 h-5 text-white" />
                  <span>إرسال الطلب عبر الواتساب ({currency === 'OMR' ? `${totalOmr.toFixed(3)} ر.ع` : `$${totalUsd.toFixed(2)}`})</span>
                </button>
              </form>
            )}

            {/* Success Confirmation */}
            {checkoutStep === 'success' && (
              <div className="py-10 text-center space-y-4 animate-fadeIn">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="font-amiri text-2xl font-bold text-[#2B211B]">تم جهز رسالة الطلب وتحويلها!</h3>
                <p className="text-xs text-[#4A3326]/80 leading-relaxed max-w-xs mx-auto">
                  إذا لم يُفتح تطبيق الواتساب تلقائياً، يمكنك إرسال الطلب بنقرة واحدة عبر الزر أدناه مباشرة إلى قسم المبيعات:
                </p>

                <div className="p-4 bg-white rounded-2xl border border-[#EFE8DE] text-xs text-right space-y-1.5 max-w-xs mx-auto shadow-sm">
                  <div className="font-bold text-[#2B211B] border-b pb-1 flex items-center justify-between">
                    <span>رقم المبيعات والمتابعة:</span>
                    <span className="text-emerald-700 font-mono text-[11px]">+968 76923072</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span>اسم المستلم:</span>
                    <span className="font-bold">{customerName || 'عميل محامص الأصالة'}</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span>الوجهة:</span>
                    <span className="font-bold">{customerCity}</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span>الإجمالي:</span>
                    <span className="font-bold text-emerald-700">{totalOmr.toFixed(3)} ر.ع</span>
                  </div>
                </div>

                <div className="space-y-2 max-w-xs mx-auto pt-2">
                  <a
                    href={`https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(lastOrderMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                    <span>إعادة فتح الواتساب والمتابعة (+968 76923072)</span>
                  </a>

                  <button
                    onClick={onClose}
                    className="w-full py-3 bg-[#2B211B] text-[#C9A76A] font-bold text-xs rounded-2xl hover:bg-[#B78A5C] hover:text-white transition-colors"
                  >
                    إغلاق والعودة للتسوق
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Drawer Bottom Footer */}
          {cartItems.length > 0 && checkoutStep === 'cart' && (
            <div className="p-4 sm:p-5 bg-white border-t border-[#EFE8DE] space-y-2.5 shadow-lg">
              
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#4A3326]">المجموع الفرعي:</span>
                <span className="font-bold text-[#2B211B]">
                  {currency === 'OMR' ? `${subtotalOmr.toFixed(3)} ر.ع` : `$${(subtotalOmr * 2.6).toFixed(2)}`}
                </span>
              </div>

              {appliedCoupon && discountOmr > 0 && (
                <div className="flex items-center justify-between text-xs text-emerald-700 font-bold">
                  <span>الخصم ({appliedCoupon.code}):</span>
                  <span>-{currency === 'OMR' ? `${discountOmr.toFixed(3)} ر.ع` : `$${(discountOmr * 2.6).toFixed(2)}`}</span>
                </div>
              )}

              <div className="flex items-center justify-between text-xs">
                <span className="text-[#4A3326]">الشحن والتوصيل:</span>
                <span className="font-bold text-emerald-700">
                  {shippingFeeOmr === 0 ? 'مجاني بالكامل' : `${shippingFeeOmr.toFixed(3)} ر.ع`}
                </span>
              </div>

              <div className="flex items-center justify-between text-base font-bold border-t border-[#EFE8DE] pt-2">
                <span>الإجمالي الكلي:</span>
                <span className="text-[#2B211B] font-amiri text-lg">
                  {currency === 'OMR' ? `${totalOmr.toFixed(3)} ر.ع` : `$${totalUsd.toFixed(2)}`}
                </span>
              </div>

              <button
                onClick={() => setCheckoutStep('address')}
                className="w-full py-3.5 bg-gradient-to-r from-[#B78A5C] via-[#C9A76A] to-[#B78A5C] text-[#2B211B] font-bold text-sm rounded-2xl hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <span>متابعة الشراء والدفع السريع</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

