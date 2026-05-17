import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowLeft, Loader2 } from 'lucide-react';
import { ScreenState, TarotData } from '../App';

export default function ScreenCheckIn({ onNav, mood, setMood, setTarotData }: { onNav: (s: ScreenState) => void, mood: number, setMood: (m: number) => void, setTarotData: (data: TarotData | null) => void }) {
  const [showCards, setShowCards] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRelease = () => {
    setShowCards(true);
  };

  const getEmoji = (val: number) => {
    if(val <= 20) return '🌧️';
    if(val <= 40) return '🌥️';
    if(val <= 60) return '⛅';
    if(val <= 80) return '🌤️';
    return '☀️';
  };

  const handleSelectCard = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/tarot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mood })
      });
      const data = await response.json();
      setTarotData(data);
    } catch (err) {
      console.error(err);
      // fallback
      setTarotData({
        cardName: "THE FOOL", numeral: "0", emoji: "🤡", reasoning: "Bạn đang bắt đầu hành trình mới.", recommendationTitle: "Forrest Gump (1994)", recommendationGenre: "Drama", recommendationRating: "⭐⭐⭐⭐⭐", recommendationReviews: "4.8",
        imagePrompt: "A cute 3D mascot wearing a pink helmet as The Fool tarot card, standing fearlessly on the edge of a cliff with a small dog, vibrant colors, mystical tarot style"
      });
    }
    setIsLoading(false);
    onNav('REVEAL');
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 bg-white relative flex flex-col">
       <div className="h-[44px] flex items-center px-4 shrink-0 bg-white">

          <button onClick={() => onNav('HOME')} className="p-2 -ml-2 active:scale-95">
            <ArrowLeft size={20} className="text-momo-primary" />
          </button>
       </div>

       <div className="pt-6 px-6">
          <div className="text-[11px] text-momo-pink-1 tracking-[1px] uppercase mb-2 font-bold">CINESOUL · BUỔI SÁNG</div>
          <h1 className="text-[24px] font-bold text-momo-primary leading-[1.3] mb-2">
            Hôm nay bạn đang cảm thấy thế nào?
          </h1>
          <p className="text-[14px] text-gray-500 font-medium">Bày tỏ cảm xúc, khám phá Tarot điện ảnh.</p>
       </div>

       <div className="mt-10 px-6">
          <div className="flex items-center gap-4">
             <span className="text-[24px]">🌧️</span>
             <div className="flex-1 relative flex items-center">
               <input 
                 type="range"
                 min="0" max="100"
                 value={mood}
                 onChange={(e) => setMood(Number(e.target.value))}
                 onMouseUp={handleRelease}
                 onTouchEnd={handleRelease}
                 className="w-full absolute z-10 opacity-0 cursor-pointer h-12"
               />
               <div className="w-full h-3 bg-momo-pink-minus-2 rounded-full overflow-hidden relative">
                 <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-momo-primary to-momo-pink-1" style={{ width: `${mood}%` }}></div>
               </div>
               <div className="absolute w-8 h-8 rounded-full bg-white border-[3px] border-momo-primary pointer-events-none shadow-md" style={{ left: `calc(${mood}% - 16px)` }}></div>
             </div>
             <span className="text-[24px]">☀️</span>
          </div>
          <div className="flex justify-between mt-3 px-1">
             <span className="text-[12px] font-bold text-momo-pink-1">Chông chênh</span>
             <span className="text-[12px] font-bold text-momo-pink-1">Rực rỡ</span>
          </div>

          <div className="mt-8 text-center h-20 flex items-center justify-center">
             <motion.div 
               key={getEmoji(mood)}
               initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.2 }}
               className="text-[64px]"
             >
               {getEmoji(mood)}
             </motion.div>
          </div>
       </div>

       <div className="mt-8 flex flex-col items-center flex-1 pb-10 bg-momo-pink-minus-2 rounded-t-[32px] pt-8 shadow-[0_-4px_24px_rgba(165,0,100,0.05)] border-t border-momo-pink-minus-1">
         <AnimatePresence>
           {showCards ? (
             <motion.div 
               initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: 'easeOut' }}
               className="flex flex-col items-center w-full px-6"
             >
               <div className="text-[15px] font-bold text-momo-primary mb-6">Chọn 1 lá bài dành cho bạn</div>
               <div className="flex justify-center items-center gap-4 w-full relative">
                  {isLoading ? (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-momo-pink-minus-2/80 backdrop-blur-sm rounded-xl">
                       <Loader2 className="animate-spin text-momo-primary" size={24} />
                    </div>
                  ) : null}
                  <CardItem icon={"🌟"} onNav={handleSelectCard} />
                  <CardItem icon={"🔮"} isMiddle onNav={handleSelectCard} />
                  <CardItem icon={"🎭"} onNav={handleSelectCard} />
               </div>
             </motion.div>
           ) : (
             <div className="flex items-center justify-center h-full w-full">
               <span className="text-[14px] text-gray-400 font-medium">Vuốt thanh điều chỉnh để nhận bài</span>
             </div>
           )}
         </AnimatePresence>
       </div>
    </motion.div>
  )
}

function CardItem({ icon, isMiddle, onNav }: any) {
  return (
    <motion.div 
      initial={{ y: isMiddle ? -12 : 0 }}
      whileTap={{ y: -20, scale: 1.05 }}
      whileHover={{ y: -20, scale: 1.05 }}
      onClick={onNav}
      className={`w-20 h-32 rounded-[16px] flex flex-col items-center justify-center cursor-pointer bg-white shadow-md border ${isMiddle ? 'border-momo-primary' : 'border-momo-pink-minus-1'}`}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
       <div className="text-[32px]">{icon}</div>
    </motion.div>
  )
}
