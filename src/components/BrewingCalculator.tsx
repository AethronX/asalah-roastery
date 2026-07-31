import React, { useState } from 'react';
import { Coffee, Flame, Scale, Thermometer, Timer, Sparkles, X, ChevronRight } from 'lucide-react';

interface BrewingCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrewingCalculator: React.FC<BrewingCalculatorProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [method, setMethod] = useState<'dallah' | 'v60' | 'espresso' | 'frenchpress'>('dallah');
  const [cups, setCups] = useState(4);

  // Dosage math logic
  const getCalculation = () => {
    switch (method) {
      case 'dallah':
        return {
          coffeeGrams: cups * 12,
          waterMl: cups * 180,
          cardamomGrams: Math.round(cups * 2.5),
          saffronPinches: Math.round(cups * 0.8),
          temp: '96°C - غليان هادئ',
          grind: 'ناعم جداً (طحن القهوة العمانية الذهبية)',
          time: '12 - 15 دقيقة على نار هادئة',
          steps: [
            'اغلِ الماء النقي في دلة التغلي مع البن المحمص.',
            'اترك القهوة تغلي بهدوء لمدة 10 دقائق دون تحريك شديد.',
            'أضف الهيل المطحون حديثاً وجواهر الزعفران في دلة التقديم.',
            'اسكب القهوة فوق الهيل واتركها تركد لمدة دقيقتين قبل التقديم في الفناجين.'
          ]
        };
      case 'v60':
        return {
          coffeeGrams: cups * 15,
          waterMl: cups * 250,
          cardamomGrams: 0,
          saffronPinches: 0,
          temp: '92°C - 94°C',
          grind: 'متوسط النعومة (مثل ملح الطعام)',
          time: '2:30 - 3:00 دقائق',
          steps: [
            'قم بترطيب الفلتر الورقي بماء ساخن لتنظيفه وتدفئة الأداة.',
            'أضف البن المطحون واقطع الصبة الأولى (الترطيب) بـ 50 مل ماء لمدة 45 ثانية.',
            'أكمل صب الماء بحركات دائرية هادئة على 3 صبات متساوية.'
          ]
        };
      case 'espresso':
        return {
          coffeeGrams: cups * 18,
          waterMl: cups * 36,
          cardamomGrams: 0,
          saffronPinches: 0,
          temp: '93°C',
          grind: 'ناعم جداً لمكائن الإسبريسو',
          time: '25 - 30 ثانية',
          steps: [
            'وزّع البن المطحون بالتساوي في البورتَفلتر.',
            'اكبس البن بقوة متزنة (15 كجم كبس).',
            'استخلص الإسبريسو للحصول على طبقة كريما ذهبية غنية.'
          ]
        };
      case 'frenchpress':
        return {
          coffeeGrams: cups * 17,
          waterMl: cups * 250,
          cardamomGrams: 0,
          saffronPinches: 0,
          temp: '95°C',
          grind: 'خشن (مثل الملح الخشن)',
          time: '4 دقائق',
          steps: [
            'أضف القهوة المطحونة خشونة مناسبة.',
            'اسكب الماء الساخن وحرّك المزيج برفق ثم غطّ الأداة.',
            'اتركها لمدة 4 دقائق ثم اضغط المكبس لأسفل ببطء.'
          ]
        };
    }
  };

  const calc = getCalculation();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1B1512]/90 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="bg-[#FAF6F0] text-[#1B1512] rounded-3xl max-w-2xl w-full border border-[#D7AE63]/40 shadow-2xl relative p-6 sm:p-8 text-right">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="إغلاق حاسبة التحضير"
          className="absolute top-4 left-4 p-2.5 rounded-full bg-[#1B1512]/10 hover:bg-[#1B1512] hover:text-[#F3E2BE] transition-all min-w-[40px] min-h-[40px] flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#241B17] border border-[#D7AE63]/50 flex items-center justify-center text-[#F3E2BE] shadow-md">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-amiri text-2xl font-bold text-[#1B1512]">
              دليل وحاسبة تحضير القهوة المثالية
            </h2>
            <p className="text-xs text-[#4E382A] font-medium">
              احسب مقادير البن والماء والحرارة للحصول على أفضل رشفة
            </p>
          </div>
        </div>

        {/* Method Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          {[
            { id: 'dallah', label: 'دلة القهوة العمانية' },
            { id: 'v60', label: 'ترشيح V60' },
            { id: 'espresso', label: 'إسبريسو Espresso' },
            { id: 'frenchpress', label: 'فرنش بريس' },
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => setMethod(m.id as any)}
              className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border min-h-[40px] ${
                method === m.id
                  ? 'bg-[#1B1512] text-[#F3E2BE] border-[#D7AE63] shadow-md'
                  : 'bg-white text-[#1B1512] border-[#D7AE63]/25 hover:bg-[#F3E2BE]/10'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Cups Range Slider */}
        <div className="mb-6 bg-white p-4 rounded-2xl border border-[#D7AE63]/25">
          <div className="flex justify-between items-center mb-2 text-xs font-bold">
            <label htmlFor="brewing-cups-slider" className="text-[#1B1512]">عدد الفناجين / الأكواب المطلوب تحضيرها:</label>
            <span className="text-[#9B6B3A] text-sm font-black">{cups} فناجين</span>
          </div>
          <input
            id="brewing-cups-slider"
            type="range"
            min="1"
            max="12"
            value={cups}
            onChange={(e) => setCups(parseInt(e.target.value))}
            className="w-full accent-[#D7AE63] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-[#4E382A] font-bold mt-1">
            <span>فنجان واحد (شخصي)</span>
            <span>6 فناجين (جلسة)</span>
            <span>12 فنجان (مجلس كامل)</span>
          </div>
        </div>

        {/* Calculations Results Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          <div className="bg-[#1B1512] text-[#F7F2EA] p-4 rounded-2xl border border-[#D7AE63]/30 shadow-md">
            <div className="flex items-center gap-1.5 text-xs text-[#F3E2BE] mb-1">
              <Scale className="w-4 h-4 text-[#D7AE63]" />
              <span>وزن البن المحمص</span>
            </div>
            <div className="text-xl font-bold font-amiri text-[#F7F2EA]">
              {calc.coffeeGrams} جرام
            </div>
          </div>

          <div className="bg-[#1B1512] text-[#F7F2EA] p-4 rounded-2xl border border-[#D7AE63]/30 shadow-md">
            <div className="flex items-center gap-1.5 text-xs text-[#F3E2BE] mb-1">
              <Coffee className="w-4 h-4 text-[#D7AE63]" />
              <span>كمية الماء</span>
            </div>
            <div className="text-xl font-bold font-amiri text-[#F7F2EA]">
              {calc.waterMl} مل
            </div>
          </div>

          <div className="bg-[#1B1512] text-[#F7F2EA] p-4 rounded-2xl border border-[#D7AE63]/30 shadow-md col-span-2 sm:col-span-1">
            <div className="flex items-center gap-1.5 text-xs text-[#F3E2BE] mb-1">
              <Thermometer className="w-4 h-4 text-[#D7AE63]" />
              <span>حرارة الماء والوقت</span>
            </div>
            <div className="text-xs font-bold text-[#F7F2EA]">
              {calc.temp}
            </div>
            <div className="text-[10px] text-[#F3E2BE]/80 mt-0.5">
              {calc.time}
            </div>
          </div>
        </div>

        {/* Omani Cardamom & Saffron Note */}
        {calc.cardamomGrams > 0 && (
          <div className="mb-6 bg-[#241B17] p-3.5 rounded-xl border border-[#D7AE63]/40 text-xs flex items-center justify-between shadow-sm">
            <span className="font-bold text-[#F3E2BE]">مقادير الهيل والزعفران العماني:</span>
            <span className="text-[#E8DCCB] font-medium">
              {calc.cardamomGrams}g هيل أخضرمطحون + {calc.saffronPinches} قرصة زعفران سوبر نيل
            </span>
          </div>
        )}

        {/* Steps Guide */}
        <div className="bg-white p-4 rounded-2xl border border-[#D7AE63]/25 text-xs">
          <h4 className="font-bold text-[#1B1512] mb-2 flex items-center gap-1.5">
            <Timer className="w-4 h-4 text-[#9B6B3A]" />
            <span>خطوات التحضير للحصول على المذاق الملكي:</span>
          </h4>
          <ol className="space-y-2 pr-4 list-decimal text-[#4E382A] font-medium">
            {calc.steps.map((st, i) => (
              <li key={i}>{st}</li>
            ))}
          </ol>
        </div>

      </div>
    </div>
  );
};
