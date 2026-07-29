import React from 'react';
import { Product } from '../types';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveFromWishlist: (p: Product) => void;
  onAddToCart: (p: Product) => void;
  currency: 'OMR' | 'USD';
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onAddToCart,
  currency,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#2B211B]/75 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 left-0 max-w-full flex pl-0 sm:pl-10 text-right">
        <div className="w-screen max-w-md bg-[#F8F3EC] text-[#2B211B] shadow-2xl border-r border-[#C9A76A]/40 flex flex-col justify-between relative z-10">
          
          {/* Header */}
          <div className="p-5 bg-[#2B211B] text-[#F8F3EC] border-b border-[#C9A76A]/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-400 fill-current" />
              <h3 className="font-amiri text-xl font-bold">المفضلة والمحفوظات</h3>
              <span className="text-xs bg-[#C9A76A] text-[#2B211B] px-2 py-0.5 rounded-full font-bold">
                {wishlistProducts.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-grow overflow-y-auto p-5 space-y-3">
            {wishlistProducts.length === 0 ? (
              <div className="py-20 text-center space-y-3">
                <Heart className="w-16 h-16 text-[#B78A5C]/40 mx-auto" />
                <h4 className="font-amiri text-xl font-bold text-[#2B211B]">لا توجد عناصر محفوظة</h4>
                <p className="text-xs text-[#4A3326]/70">احفظ منتجاتك المفضلة للعودة إليها بسهولة لاحقاً.</p>
              </div>
            ) : (
              wishlistProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-3.5 bg-white/80 rounded-2xl border border-[#EFE8DE] flex gap-3 items-center justify-between hover:border-[#B78A5C]/40 transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.nameAr}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-xl object-cover border border-[#EFE8DE]"
                  />

                  <div className="flex-grow text-xs">
                    <h4 className="font-bold text-[#2B211B] font-amiri text-sm line-clamp-1">
                      {product.nameAr}
                    </h4>
                    <div className="text-[11px] text-[#4A3326]/70 mt-0.5">
                      {product.originCountry} • {product.roastLevel}
                    </div>
                    <div className="font-bold text-[#2B211B] mt-1">
                      {currency === 'OMR' ? `${product.priceOmr.toFixed(3)} ر.ع` : `$${product.priceUsd.toFixed(2)}`}
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => onRemoveFromWishlist(product)}
                      className="text-red-500 hover:text-red-700 p-1"
                      title="إزالة من المفضلة"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        onAddToCart(product);
                        onRemoveFromWishlist(product);
                      }}
                      className="p-2 bg-[#2B211B] text-[#C9A76A] hover:bg-[#B78A5C] hover:text-white rounded-lg text-xs font-bold transition-colors"
                      title="إضافة للسلة"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
