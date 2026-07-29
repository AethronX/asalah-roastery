import React, { useState } from 'react';
import { Product } from '../types';
import { Search, X, Star, ArrowLeft, Coffee } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (p: Product) => void;
  currency: 'OMR' | 'USD';
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
  currency,
}) => {
  if (!isOpen) return null;

  const [searchTerm, setSearchTerm] = useState('');

  const filtered = products.filter(
    (p) =>
      p.nameAr.includes(searchTerm) ||
      p.subtitleAr.includes(searchTerm) ||
      p.originCountry.includes(searchTerm) ||
      p.flavorNotes.some((n) => n.includes(searchTerm))
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2B211B]/85 backdrop-blur-md flex items-start justify-center pt-20 p-4 animate-fadeIn">
      <div className="bg-[#F8F3EC] text-[#2B211B] rounded-3xl max-w-2xl w-full border border-[#C9A76A]/40 shadow-2xl overflow-hidden relative text-right">
        
        {/* Search Bar Top Header */}
        <div className="p-4 sm:p-6 bg-[#2B211B] text-[#F8F3EC] flex items-center gap-3 border-b border-[#C9A76A]/30">
          <Search className="w-6 h-6 text-[#C9A76A]" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="ابحث عن بن حرازي، خلطة الأصالة، هيل، تمور، V60..."
            className="w-full bg-transparent text-sm sm:text-base font-medium text-white placeholder-white/50 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-3">
          {searchTerm === '' ? (
            <div className="py-8 text-center text-xs text-[#4A3326]/70 space-y-2">
              <Coffee className="w-8 h-8 text-[#B78A5C]/40 mx-auto" />
              <p className="font-amiri text-base font-bold text-[#2B211B]">البحث السريع في محامص الأصالة</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['خلطة الأصالة', 'بن حرازي', 'إثيوبيا', 'صندوق الهدايا', 'تمور وخلاص'].map((tag, i) => (
                  <button
                    key={i}
                    onClick={() => setSearchTerm(tag)}
                    className="px-3 py-1 bg-[#EFE8DE] rounded-full text-xs hover:bg-[#B78A5C] hover:text-white transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-12 text-center text-xs text-[#4A3326]/70">
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
                className="p-3 bg-white/80 rounded-2xl border border-[#EFE8DE] hover:border-[#B78A5C] transition-all cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.nameAr}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-xl object-cover border border-[#EFE8DE]"
                  />
                  <div className="text-xs">
                    <h4 className="font-bold font-amiri text-sm text-[#2B211B] group-hover:text-[#B78A5C] transition-colors">
                      {product.nameAr}
                    </h4>
                    <p className="text-[#4A3326]/70 line-clamp-1">{product.originCountry} • {product.roastLevel}</p>
                    <span className="font-bold text-[#2B211B] text-xs mt-0.5 block">
                      {currency === 'OMR' ? `${product.priceOmr.toFixed(3)} ر.ع` : `$${product.priceUsd.toFixed(2)}`}
                    </span>
                  </div>
                </div>

                <div className="p-2 rounded-full bg-[#EFE8DE] group-hover:bg-[#B78A5C] group-hover:text-white transition-colors">
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
