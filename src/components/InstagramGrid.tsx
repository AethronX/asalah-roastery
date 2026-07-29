import React from 'react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

export const InstagramGrid: React.FC = () => {
  const posts = [
    {
      img: '/src/assets/images/hero_coffee_beans_1785262866653.jpg',
      likes: '1,420',
      comments: '88',
      caption: 'لحظات تحميص البن الذهبي في معمل مسقط. الأصالة تبدأ من التفاصيل.'
    },
    {
      img: '/src/assets/images/omani_dallah_set_1785262881798.jpg',
      likes: '2,150',
      comments: '134',
      caption: 'عبق الهيل والزعفران في دلة الأصالة النحاسية. الضيافة العمانية بأرقى صورها.'
    },
    {
      img: '/src/assets/images/specialty_coffee_bag_1785262894947.jpg',
      likes: '980',
      comments: '42',
      caption: 'محصول حراز اليمني الفاخر وصل حديثاً. إيحاءات العسل والتوت.'
    },
    {
      img: '/src/assets/images/luxury_gift_box_1785262908848.jpg',
      likes: '3,110',
      comments: '210',
      caption: 'صناديق الهدايا الملكية الجاهزة للمناسبات الخاصة والشركات.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
        <div className="text-right">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B78A5C] bg-[#B78A5C]/10 px-3.5 py-1.5 rounded-full border border-[#B78A5C]/20 inline-block mb-2">
            مجتمع محامص الأصالة
          </span>
          <h2 className="font-amiri text-3xl font-bold text-[#2B211B]">
            تابعنا على إنستغرام @AlAsalahRoastery
          </h2>
        </div>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-full bg-[#2B211B] text-[#C9A76A] hover:bg-[#B78A5C] hover:text-white transition-all text-xs font-bold flex items-center gap-2 shadow-md"
        >
          <Instagram className="w-4 h-4" />
          <span>متابعة الحساب الرسمية</span>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="group relative aspect-square rounded-2xl overflow-hidden bg-[#2B211B] border border-[#EFE8DE] cursor-pointer"
          >
            <img
              src={post.img}
              alt="صورة إنستغرام محامص الأصالة"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#2B211B]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white text-xs">
              <div className="flex items-center justify-end">
                <Instagram className="w-4 h-4 text-[#C9A76A]" />
              </div>
              <p className="line-clamp-3 text-right font-light leading-relaxed">
                {post.caption}
              </p>
              <div className="flex items-center justify-around font-bold text-[11px] pt-2 border-t border-white/20">
                <span className="flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 fill-current text-red-400" />
                  {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-3.5 h-3.5 text-white" />
                  {post.comments}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
