import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, History, MapPin, Users } from 'lucide-react';
import { ScreenState } from '../App';

type ToggleOption = {
  id: string;
  label: string;
};

type CardData = {
  id: string;
  name: string;
  desc: string;
  icon: any;
  options: ToggleOption[];
};

const PRIVACY_CARDS: CardData[] = [
  {
    id: 'history',
    name: 'Lịch sử xem',
    desc: 'Cá nhân hoá gợi ý phim dựa trên những đánh giá và phim bạn từng xem.',
    icon: History,
    options: [
      { id: 'all', label: 'Chia sẻ toàn bộ' },
      { id: 'genre', label: 'Chỉ chia sẻ thể loại' },
      { id: 'none', label: 'Ẩn danh hoàn toàn (Có thể tắt)' }
    ]
  },
  {
    id: 'location',
    name: 'Chia sẻ vị trí',
    desc: 'Gợi ý rạp chiếu gần nhất, suất chiếu phù hợp với vị trí hiện tại của bạn.',
    icon: MapPin,
    options: [
      { id: 'full', label: 'Chia sẻ đầy đủ' },
      { id: 'selective', label: 'Chia sẻ có chọn lọc' },
      { id: 'none', label: 'Xem phim thôi, không chia sẻ gì' }
    ]
  },
  {
    id: 'social',
    name: 'Kết nối bạn bè',
    desc: 'Tìm bạn cùng gu điện ảnh, dễ dàng chia sẻ bill và lập kèo đi xem phim.',
    icon: Users,
    options: [
      { id: 'all', label: 'Kết nối mọi người' },
      { id: 'friends', label: 'Chỉ bạn bè MoMo' },
      { id: 'none', label: 'Chế độ riêng tư' }
    ]
  }
];

export default function ScreenOnboarding({ onNav }: { onNav: (s: ScreenState) => void }) {
  const [selections, setSelections] = useState<Record<string, string>>({
    history: 'all',
    location: 'full',
    social: 'friends'
  });

  const handleSelect = (cardId: string, optionId: string) => {
    setSelections(prev => ({ ...prev, [cardId]: optionId }));
  };

  return (
    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="flex-1 bg-white flex flex-col relative overflow-hidden">
      <div className="h-[44px] flex items-center px-4 shrink-0 border-b-[0.5px] border-momo-pink-minus-1 bg-white">
        <button onClick={() => onNav('HOME')} className="p-2 -ml-2">
          <ArrowLeft size={20} className="text-momo-primary" />
        </button>
        <div className="flex-1 text-center font-bold text-[16px] text-momo-primary pr-8">
          Thiết lập Vibe Passport
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-[134px]">
        <div className="pt-6 pb-2 px-5">
           <div className="text-[11px] text-momo-pink-1 tracking-[1px] uppercase mb-2 font-bold">VIBE PASSPORT</div>
           <h1 className="text-[22px] font-bold text-momo-primary leading-[1.3] mb-2">Bạn muốn AI hiểu bạn<br/>đến đâu?</h1>
        </div>

        <div className="px-4 space-y-3 pb-8 pt-2">
          {PRIVACY_CARDS.map(card => {
            return (
              <div 
                key={card.id}
                className="p-3.5 rounded-[14px] bg-momo-pink-minus-2 border border-momo-pink-minus-1"
              >
                 <div className="flex items-center gap-2.5 mb-2">
                   <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                     <card.icon size={16} className="text-momo-primary" />
                   </div>
                   <div className="flex-1">
                      <span className="text-[13px] font-bold text-momo-primary">{card.name}</span>
                   </div>
                 </div>

                 <div className="mt-1 mb-2.5 text-[12px] text-gray-700 leading-[1.5] font-medium">
                   {card.desc}
                 </div>

                 <div className="flex flex-col gap-1.5 relative">
                   {card.options.map(opt => {
                     const isSelected = selections[card.id] === opt.id;
                     return (
                       <button 
                         key={opt.id}
                         onClick={() => handleSelect(card.id, opt.id)}
                         className={`flex items-center justify-between px-3.5 py-2.5 rounded-[12px] border-[1.5px] transition-all ${
                           isSelected 
                             ? 'bg-momo-primary border-momo-primary text-white' 
                             : 'bg-white border-momo-pink-minus-1 hover:bg-momo-pink-minus-2'
                         }`}
                       >
                         <span className={`text-[13px] ${isSelected ? 'font-bold' : 'font-bold text-[#2A2A37]'}`}>{opt.label}</span>
                         <div className={`w-[18px] h-[18px] rounded-full border-[2px] flex items-center justify-center ${isSelected ? 'border-white' : 'border-[#CBD5E1]'}`}>
                           {isSelected && <div className="w-[8px] h-[8px] bg-white rounded-full"></div>}
                         </div>
                       </button>
                     )
                   })}
                 </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[100px] flex items-end px-4 pb-[34px] bg-gradient-to-t from-white via-white/90 to-transparent">
        <button onClick={() => onNav('HOME')} className="w-full h-[52px] bg-momo-primary text-white rounded-[16px] font-bold text-[15px] active:scale-[0.98] transition-transform shadow-lg shadow-momo-primary/30">
          Xong & Bắt đầu hành trình
        </button>
      </div>
    </motion.div>
  )
}
