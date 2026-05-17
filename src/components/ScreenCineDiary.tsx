import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Check, Flame } from 'lucide-react';
import { ScreenState } from '../App';

export default function ScreenCineDiary({ onNav }: { onNav: (s: ScreenState) => void }) {
  const [saved, setSaved] = useState(false);
  const [text, setText] = useState('');

  return (
    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="flex-1 flex flex-col bg-white overflow-hidden relative">
      <div className="h-[44px] bg-white border-b border-momo-pink-minus-1 flex items-center px-4 shrink-0 z-10 relative">
        <button onClick={() => onNav('HOME')} className="p-2 -ml-2 active:scale-95">
          <ArrowLeft size={20} className="text-momo-primary" />
        </button>
        <div className="flex-1 text-center font-bold text-[16px] text-momo-primary pr-8">
          Vibe Nhật Ký
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-[100px]">
        <div className="pt-6 px-5 pb-5">
           <div className="text-[11px] text-momo-pink-1 tracking-[0.5px] font-bold uppercase mb-1">Tổng kết cuối ngày</div>
           <h1 className="text-[20px] font-bold text-gray-900 leading-[1.3]">Đóng máy! Năng lượng hôm nay của bạn?</h1>
        </div>

        <div className="px-5">
           <div className="bg-momo-pink-minus-2 rounded-[16px] border border-momo-pink-minus-1 p-4 flex items-center gap-4">
              <div className="w-[48px] h-[64px] bg-white border border-momo-pink-minus-1 rounded-[8px] flex items-center justify-center shrink-0 shadow-sm">
                 <span className="text-[28px]">🕯️</span>
              </div>
              <div className="flex-1">
                 <div className="text-[15px] font-bold text-momo-primary flex items-center flex-wrap">
                   The Hermit
                   <div className="bg-orange-100 text-orange-600 px-2.5 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 ml-2">
                     <Flame size={12} className="fill-current" /> 12 ngày
                   </div>
                 </div>
                 <div className="text-[12px] text-gray-600 mt-1 font-medium leading-[1.4]">
                    Lá bài này cho thấy bạn đang tận hưởng khoảng lặng.
                 </div>
              </div>
           </div>
        </div>

        <div className="mt-5 px-5">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Viết vài dòng về một bộ phim hay cảm xúc hôm nay nhé..."
            className="w-full min-h-[140px] bg-white border border-gray-200 rounded-[16px] p-4 text-[14px] text-gray-800 leading-[1.6] placeholder:text-gray-400 focus:outline-none focus:border-momo-primary focus:ring-1 focus:ring-momo-primary resize-none shadow-sm"
          />
        </div>

        <div className="mt-4 px-5">
          <button 
            onClick={() => {
              if(text.trim()) setSaved(true);
            }}
            className="w-full h-[52px] bg-momo-primary text-white rounded-[16px] font-bold text-[15px] active:scale-[0.98] transition-transform shadow-[0_6px_16px_rgba(165,0,100,0.25)]"
          >
            Lưu nhật ký
          </button>
        </div>

        <AnimatePresence>
          {saved && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }} 
              animate={{ height: 'auto', opacity: 1 }} 
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="overflow-hidden px-5 mt-4 mb-8"
            >
               <div className="bg-white rounded-[16px] border border-momo-pink-1 p-4 shadow-[0_4px_24px_rgba(165,0,100,0.1)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-momo-pink-minus-2 rounded-full -mr-12 -mt-12 opacity-50"></div>
                  
                  <div className="flex items-center gap-2 mb-3 relative z-10">
                     <div className="w-6 h-6 rounded-full bg-momo-primary flex items-center justify-center">
                       <Check size={14} className="text-white" strokeWidth={3} />
                     </div>
                     <span className="text-[14px] font-bold text-momo-primary">Đã lưu nhật ký!</span>
                  </div>
                  <p className="text-[13px] text-gray-700 leading-[1.6] mb-4 font-medium relative z-10">
                    Có vẻ bạn vừa trải qua một ngày dài. Cuối tuần này ghé rạp xem <span className="font-bold text-momo-primary">Phim Tâm Lý Chọn Lọc</span> để nạp lại năng lượng nhé.
                  </p>
                  <button onClick={() => onNav('CINEMA')} className="w-full h-[46px] bg-momo-pink-minus-2 text-momo-primary rounded-[12px] text-[13px] font-bold active:scale-[0.98] transition-transform flex items-center justify-center border border-momo-pink-minus-1 relative z-10 shadow-sm">
                    Đặt vé ngay — Ưu đãi 20%
                  </button>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
