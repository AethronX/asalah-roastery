import React, { useState } from 'react';
import { Product } from '../types';
import { Search, X, Star, ArrowLeft, Coffee } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (p: Product) => void;
  currency: 'OMR' | 'USD';
  theme?: 'light' | 'dark';
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
  currency,
  theme = 'light',
}) => {
  if (!isOpen) return null;

  const isLight = theme === 'light';
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = products.filter(
    (p) =>
      p.nameAr.includes(searchTerm) ||
      p.subtitleAr.includes(searchTerm) ||
      p.originCountry.includes(searchTerm) ||
      p.flavorNotes.some((n) => n.includes(searchTerm))
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-20 p-3 sm:p-4 animate-fadeIn">
      <div className={`rounded-3xl max-w-2xl w-full border shadow-2xl overflow-hidden relative text-right transition-colors ${
        isLight
          ? 'bg-white text-[#1D1D1F] border-[#EFE7DD]'
          : 'bg-[#1D1613] text-[#F7F2EA] border-[#D7AE63]/40'
      }`}>
        
        {/* Search Bar Top Header */}
        <div className={`p-4 sm:p-6 flex items-center gap-3 border-b ${
          isLight
            ? 'bg-[#1D1D1F] text-white border-[#000000]/10'
            : 'bg-[#18120F] text-[#F7F2EA] border-[#D7AE63]/30'
        }`}>
          <Search className="w-6 h-6 text-amber-400 shrink-0" />
          <label htmlFor="modal-search-input" className="sr-only">بحث في منتجات المحامص</label>
          <input
            id="modal-search-input"
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="ابحث عن بن حرازي، خلطة الأصالة، هيل، تمور، V60..."
            className="w-full bg-transparent text-sm sm:text-base font-semibold text-white placeholder-white/70 focus:outline-none"
          />
          <button
            onClick={onClose}
            aria-label="إغلاق نافذة البحث"
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-3">
          {searchTerm === '' ? (
            <div className="py-8 text-center space-y-3">
              <Coffee className={`w-8 h-8 mx-auto ${isLight ? 'text-[#9B6B3A]' : 'text-[#F3E2BE]'}`} />
              <p className={`font-alexandria text-base font-bold ${isLight ? 'text-[#1D1D1F]' : 'text-[#F7F2EA]'}`}>البحث السريع في محامص الأصالة</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['خلطة الأصالة', 'بن حرازي', 'إثيوبيا', 'صندوق الهدايا', 'تمور وخلاص'].map((tag, i) => (
                  <button
                    key={i}
                    onClick={() => setSearchTerm(tag)}
                    className={`px-3.5 py-1.5 font-bold rounded-full text-xs transition-colors min-h-[36px] border ${
                      isLight
                        ? 'bg-[#F5F5F7] text-[#1D1D1F] border-[#000000]/10 hover:bg-[#1D1D1F] hover:text-white'
                        : 'bg-[#241B17] text-[#F3E2BE] border-[#D7AE63]/40 hover:bg-[#F3E2BE] hover:text-[#120E0C]'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className={`py-12 text-center text-sm font-semibold ${isLight ? 'text-[#5C554E]' : 'text-[#E8DCCB]'}`}>
              لم نجد نتائج تطابق "{searchTerm}"
            </div>
          ) : (
            filtered.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group shadow-sm ${
                  isLight
                    ? 'bg-white border-[#EFE7DD] hover:border-[#9B6B3A]'
                    : 'bg-[#241B17] border-[#D7AE63]/30 hover:border-[#F3E2BE]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.nameAr}
                    loading="lazy"
                    decoding="async"
                    width="56"
                    height="56"
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-xl object-cover border border-amber-500/20"
                  />
                  <div className="text-xs">
                    <h4 className={`font-bold font-alexandria text-sm transition-colors ${
                      isLight ? 'text-[#1D1D1F] group-hover:text-[#9B6B3A]' : 'text-[#F7F2EA] group-hover:text-[#F3E2BE]'
                    }`}>
                      {product.nameAr}
                    </h4>
                    <p className={`font-semibold line-clamp-1 ${isLight ? 'text-[#5C554E]' : 'text-[#E8DCCB]'}`}>
                      {product.originCountry} • {product.roastLevel}
                    </p>
                    <span className={`font-black text-xs mt-0.5 block ${isLight ? 'text-[#1D1D1F]' : 'text-[#F3E2BE]'}`}>
                      {currency === 'OMR' ? `${product.priceOmr.toFixed(3)} ر.ع` : `$${product.priceUsd.toFixed(2)}`}
                    </span>
                  </div>
                </div>

                <div className={`p-2 rounded-full transition-colors ${
                  isLight ? 'bg-[#F5F5F7] group-hover:bg-[#1D1D1F] group-hover:text-white' : 'bg-[#18120F] group-hover:bg-[#F3E2BE] group-hover:text-[#120E0C]'
                }`}>
                  <ArrowLeft className="w-4 h-4" />
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
