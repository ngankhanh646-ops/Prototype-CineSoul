import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Info, Disc, ArrowLeft } from 'lucide-react';
import { ScreenState, TarotData } from '../App';
import MomoMascotIcon from './MomoMascotIcon';

export default function ScreenReveal({ onNav, mood, tarotData }: { onNav: (s: ScreenState) => void, mood: number, tarotData: TarotData | null }) {
  const [showAI, setShowAI] = useState(false);

  const getEmoji = (val: number) => {
    if(val <= 20) return '🌧️';
    if(val <= 40) return '🌥️';
    if(val <= 60) return '⛅';
    if(val <= 80) return '🌤️';
    return '☀️';
  };

  const currentEmoji = getEmoji(mood);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 flex flex-col bg-white overflow-hidden relative">
      <div className="h-[44px] flex items-center px-4 shrink-0 bg-transparent absolute top-0 left-0 right-0 z-20">
          <button onClick={() => onNav('HOME')} className="p-2 -ml-2 bg-white/50 rounded-full backdrop-blur active:scale-95">
            <ArrowLeft size={20} className="text-momo-primary" />
          </button>
      </div>

      <div className="h-[40%] bg-momo-pink-minus-2 relative flex items-center justify-center shrink-0 rounded-b-[32px] shadow-[0_4px_16px_rgba(165,0,100,0.06)] border-b border-momo-pink-minus-1">
         <motion.div 
           initial={{ rotateY: 180, scale: 1, y: 20 }}
           animate={{ rotateY: 0, scale: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="w-[140px] h-[210px] rounded-[16px] border-[2px] border-white flex flex-col items-center justify-between p-2 shadow-[0_12px_40px_rgba(165,0,100,0.2)] relative bg-[#FFF3F8] overflow-hidden"
         >
            {tarotData?.imagePrompt && (
              <img 
                src={`https://image.pollinations.ai/prompt/${encodeURIComponent(tarotData.imagePrompt)}?width=400&height=600&nologo=true&seed=42`} 
                alt="Tarot Card"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            
            <div className="relative z-10 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-momo-pink-1 tracking-[2px] shadow-sm border border-momo-pink-minus-1">
              {tarotData?.numeral || "IX"}
            </div>
            
            {!tarotData?.imagePrompt && <div className="text-[44px] relative z-10">{tarotData?.emoji || "🕯️"}</div>}
            
            <div className="relative z-10 w-full bg-white/95 backdrop-blur-xl py-2 rounded-[8px] text-[11px] font-bold text-momo-primary tracking-[1px] uppercase text-center shadow-sm border border-momo-pink-minus-1">
              {tarotData?.cardName || "THE HERMIT"}
            </div>
            
            <button 
              onClick={() => setShowAI(!showAI)}
              className="absolute -right-3 -top-3 bg-white border border-momo-pink-minus-1 rounded-full px-3 py-1.5 flex items-center gap-1.5 active:scale-95 shadow-md z-20"
            >
              <Info size={14} className="text-momo-primary" />
              <span className="text-[10px] font-bold text-momo-primary">Vì sao lá này?</span>
            </button>
         </motion.div>
      </div>

      <div className="h-[60%] flex flex-col p-5 overflow-y-auto pb-[100px]">
         <div className="inline-flex items-center gap-1.5 bg-momo-pink-minus-2 text-momo-primary rounded-full px-4 py-1.5 mb-3 self-start shrink-0 font-medium border border-momo-pink-minus-1">
             <span className="text-[14px]">{currentEmoji}</span>
             <span className="text-[12px] font-bold">Mức năng lượng: {mood}%</span>
         </div>

         <p className="text-[14px] text-gray-800 leading-[1.6] shrink-0 mb-4 font-medium">
           {tarotData?.reasoning || "Lá bài The Hermit xuất hiện báo hiệu một khoảng lặng. Dành thời gian suy ngẫm với những bộ phim Tâm lý sâu sắc."}
         </p>

          {/* Mascot Streak */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex bg-orange-50 border border-orange-100 rounded-[16px] p-3 gap-3 mb-4 items-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-300/30 to-transparent rounded-full blur-[10px] -translate-y-8 translate-x-8"></div>
            
            <div className="w-[50px] h-[50px] shrink-0 relative z-10 flex items-center justify-center">
              <MomoMascotIcon className="w-[42px] h-[42px] drop-shadow-sm" />
            </div>
            
            <div className="flex-1 relative z-10">
              <div className="text-[13px] font-bold text-orange-600 mb-0.5">Tuyệt vời!</div>
              <div className="text-[11px] text-gray-600 font-medium leading-[1.3]">
                Bạn đã check-in ngày <span className="font-bold text-orange-600 text-[12px]">3</span>. Đủ 30 ngày nhận quà!
              </div>
            </div>

            <div className="flex gap-1.5 relative z-10 shrink-0">
               <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-[10px]">✓</div>
               <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-[10px]">✓</div>
               <div className="w-6 h-6 rounded-full border-2 border-orange-500 text-orange-600 bg-white shadow-sm flex items-center justify-center font-bold text-[12px]">3</div>
            </div>
          </motion.div>

         <div className="flex bg-white shadow-sm border border-momo-pink-minus-1 rounded-[16px] p-3.5 gap-4 mb-4 items-center">
            <div className="w-[64px] h-[86px] rounded-[10px] bg-momo-pink-minus-2 flex items-center justify-center shrink-0 border border-momo-pink-minus-1">
              <span className="text-[32px]">{tarotData?.emoji || "🎭"}</span>
            </div>
            <div className="flex flex-col gap-1 justify-center flex-1">
              <div className="text-[11px] font-bold text-momo-pink-1 uppercase tracking-[0.5px]">AI Gợi Ý Cho Bạn</div>
              <div className="text-[16px] font-bold text-momo-primary leading-tight">{tarotData?.recommendationTitle || "Her (2013)"}</div>
              <div className="text-[12px] text-gray-500 font-medium">{tarotData?.recommendationGenre || "Drama · Tâm lý · 126 phút"}</div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-[12px]">{tarotData?.recommendationRating || "⭐⭐⭐⭐"}</span>
                <span className="text-[11px] text-gray-400 font-medium">{tarotData?.recommendationReviews || "4.2 từ 847 review"}</span>
              </div>
            </div>
         </div>

         <AnimatePresence>
           {showAI && (
             <motion.div 
               initial={{ height: 0, opacity: 0 }} 
               animate={{ height: 'auto', opacity: 1 }} 
               exit={{ height: 0, opacity: 0 }}
               transition={{ duration: 0.3, ease: 'easeOut' }}
               className="overflow-hidden shrink-0 mb-4"
             >
                <div className="bg-momo-pink-minus-2 rounded-[16px] border border-momo-pink-minus-1 p-4 shadow-sm">
                  <div className="flex items-center gap-1.5 mb-3">
                    <Disc size={14} className="text-momo-primary" />
                    <span className="text-[12px] font-bold text-momo-primary uppercase tracking-[0.5px]">Giải mã từ AI</span>
                  </div>
                  
                  <div className="flex flex-col gap-2.5">
                    <div className="flex gap-2.5 items-start">
                      <div className="text-[16px] leading-none shrink-0 mt-0.5">{currentEmoji}</div>
                      <div className="text-[13px] text-gray-800 font-medium">Khớp với tần số năng lượng {mood}% của bạn sáng nay.</div>
                    </div>
                    <div className="flex gap-2.5 items-start">
                      <div className="text-[16px] leading-none shrink-0 mt-0.5">🍿</div>
                      <div className="text-[13px] text-gray-800 font-medium">Dựa trên lịch sử xem phim và cảm xúc, đây là tựa phim hoàn hảo cho bạn.</div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-5">
                    <button onClick={() => setShowAI(false)} className="flex-1 h-[40px] rounded-full bg-momo-primary text-white text-[13px] font-bold active:scale-95 shadow-md shadow-momo-primary/30">Hợp lý</button>
                    <button onClick={() => setShowAI(false)} className="flex-1 h-[40px] rounded-full bg-white text-momo-primary border border-momo-primary text-[13px] font-bold active:scale-95">Không hợp</button>
                  </div>
                </div>
             </motion.div>
           )}
         </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white/100 to-transparent pt-10">
        <button onClick={() => onNav('CINEMA')} className="w-full h-[54px] bg-momo-primary text-white rounded-[16px] text-[15px] font-bold active:scale-[0.98] transition-transform shadow-[0_8px_20px_rgba(165,0,100,0.3)]">
          Khám phá phim ngay
        </button>
      </div>
    </motion.div>
  )
}
