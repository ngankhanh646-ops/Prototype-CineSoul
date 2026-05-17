import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Share2, Ticket, Gift, Sparkles, Flame } from 'lucide-react';
import { ScreenState } from '../App';

export default function ScreenCineMemoryWrapped({ onNav }: { onNav: (s: ScreenState) => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showGiftModal, setShowGiftModal] = useState(false);
  const slideCount = 4;
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (showGiftModal) return;
    
    // Auto advance slides
    progressRef.current = setTimeout(() => {
      if (currentSlide < slideCount - 1) {
        setCurrentSlide(prev => prev + 1);
      }
    }, 5000);

    return () => {
      if (progressRef.current) clearTimeout(progressRef.current);
    };
  }, [currentSlide, showGiftModal]);

  const handleNext = () => {
    if (currentSlide < slideCount - 1) setCurrentSlide(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
  };

  const handleTap = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX } = e;
    const { innerWidth } = window;
    if (clientX > innerWidth / 2) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  const handleShare = () => {
    setShowGiftModal(true);
  };

  return (
    <div className="flex-1 bg-gray-900 text-white relative overflow-hidden flex flex-col">
       {/* Background */}
       <div className="absolute inset-0 z-0">
          <motion.div 
            key={`bg-${currentSlide}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className={`w-full h-full ${
              currentSlide === 0 || currentSlide === 1 ? 'bg-gradient-to-br from-[#1A1240] via-[#A50064] to-[#4A148C]' :
              currentSlide === 2 ? 'bg-gradient-to-tr from-[#A50064] via-orange-600 to-pink-500' :
              'bg-gradient-to-b from-[#2D2680] to-[#1A1240]'
            }`}
          />
          <div className="absolute inset-0 bg-black/20" />
       </div>

       {/* Progress Bars */}
       <div className="absolute top-4 left-0 right-0 px-4 flex gap-1 z-20">
         {Array.from({ length: slideCount }).map((_, idx) => (
           <div key={idx} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
             <motion.div 
               className="h-full bg-white"
               initial={{ width: currentSlide > idx ? '100%' : '0%' }}
               animate={{ width: currentSlide === idx ? (showGiftModal ? '100%' : '100%') : currentSlide > idx ? '100%' : '0%' }}
               transition={{ duration: currentSlide === idx && !showGiftModal ? 5 : 0, ease: 'linear' }}
             />
           </div>
         ))}
       </div>

       {/* Close Btn */}
       <button onClick={() => onNav('HOME')} className="absolute top-8 right-4 z-20 w-8 h-8 flex items-center justify-center bg-black/20 rounded-full backdrop-blur-md">
         <X size={20} className="text-white" />
       </button>

       {/* Content Area */}
       <div className="flex-1 relative z-10 p-6 flex flex-col justify-center" onClick={handleTap}>
         <AnimatePresence mode="wait">
            {currentSlide === 0 && (
              <motion.div 
                key="slide-0"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="flex flex-col items-center flex-1 justify-center"
              >
                 <div className="text-[12px] font-bold tracking-[3px] text-white/70 uppercase mb-8 text-center">Hành trình Tháng 10</div>
                 
                 <div className="bg-white/10 backdrop-blur-lg rounded-[24px] p-6 border border-white/20 w-full text-center">
                   <div className="flex items-center justify-center gap-2 mb-2">
                     <Flame className="text-orange-500" size={24} />
                     <span className="text-[24px] font-bold">31 Ngày Đam Mê</span>
                   </div>
                   <p className="text-[13px] text-white/80 mb-6">Bạn không bỏ lỡ ngày nào để khám phá cảm xúc và điện ảnh!</p>
                   
                   <div className="grid grid-cols-7 gap-y-2 gap-x-1 mb-6 text-center">
                     {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map(d => <div key={d} className="text-[10px] text-white/50 mb-1">{d}</div>)}
                     <div className="col-span-1"></div> {/* Tue Start offset */}
                     {Array.from({length: 31}).map((_, i) => {
                       const watchDays = [7, 14, 25]; // 3 days they went to watch movies
                       const isWatched = watchDays.includes(i);
                       const posterImgs = [
                         '1536440136628-849c177e76a1', '1440404652283-6f1f4d92eb91', '1485846234645-a62644f84728'
                       ];
                       
                       if (isWatched) {
                         const randomImg = `https://images.unsplash.com/photo-${posterImgs[watchDays.indexOf(i)]}?q=80&w=100&auto=format&fit=crop`;
                         return (
                           <div key={i} className="aspect-square w-full max-w-[32px] mx-auto rounded-md bg-momo-primary flex items-center justify-center border border-momo-pink-1 shadow-[0_0_8px_rgba(165,0,100,0.5)] overflow-hidden relative z-10 scale-110">
                             <img src={randomImg} alt="Poster" className="absolute inset-0 w-full h-full object-cover" />
                           </div>
                         );
                       }

                       // Check-in day
                       return (
                         <div key={i} className="aspect-square w-full max-w-[32px] mx-auto rounded-full bg-momo-primary/80 flex items-center justify-center border border-white/20">
                           <span className="text-[12px] font-bold text-white">✓</span>
                         </div>
                       );
                     })}
                   </div>
                 
                   <div className="bg-[#A50064] border border-momo-pink-1 rounded-xl p-3 flex items-center gap-3 text-left">
                     <div className="text-[28px] shrink-0">🍿</div>
                     <div>
                       <div className="text-[13px] font-bold text-white mb-0.5">Thưởng chuỗi điểm danh</div>
                       <div className="text-[11px] text-white/80">Bạn nhận được 1 Voucher Bắp nước!</div>
                     </div>
                   </div>
                 </div>
              </motion.div>
            )}

            {currentSlide === 1 && (
              <motion.div 
                key="slide-1"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="flex flex-col items-center flex-1 justify-center"
              >
                 <div className="text-[12px] font-bold tracking-[3px] text-white/70 uppercase mb-8">Tháng 10 của bạn</div>
                 
                 <div className="flex flex-col w-full gap-6">
                    <div className="bg-white/10 backdrop-blur-lg rounded-[24px] p-6 border border-white/20">
                       <div className="text-[48px] mb-2 leading-none">🕯️</div>
                       <div className="text-[20px] font-bold mb-1">15 ngày tĩnh lặng</div>
                       <div className="text-[14px] text-white/80">Cùng năng lượng The Hermit. Bạn đã dành nhiều thời gian để chữa lành và suy ngẫm.</div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-lg rounded-[24px] p-6 border border-white/20 ml-8">
                       <div className="text-[48px] mb-2 leading-none">🌪️</div>
                       <div className="text-[20px] font-bold mb-1">5 ngày bùng nổ</div>
                       <div className="text-[14px] text-white/80">Cùng The Fool. Bước ra khỏi vùng an toàn và phiêu lưu vào những thể loại mới.</div>
                    </div>
                 </div>
              </motion.div>
            )}

            {currentSlide === 2 && (
              <motion.div 
                key="slide-2"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="flex flex-col items-center flex-1 justify-center"
              >
                 <div className="text-[12px] font-bold tracking-[3px] text-white/70 uppercase mb-8">Bức tranh cảm xúc (The Mosaic)</div>
                 
                 {/* Visual Representation of Mosaic */}
                 <div className="w-[280px] h-[360px] bg-white/5 backdrop-blur-md rounded-[24px] border border-white/20 flex flex-col overflow-hidden relative shadow-[0_0_40px_rgba(165,0,100,0.4)]">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616859737153-62c451557002?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-60"></div>
                    <div className="absolute inset-0 grid grid-cols-4 grid-rows-5 gap-1 p-2">
                       {Array.from({length: 20}).map((_, i) => (
                         <motion.div 
                           key={i}
                           initial={{ opacity: 0, scale: 0 }}
                           animate={{ opacity: 1, scale: 1 }}
                           transition={{ duration: 0.5, delay: i * 0.05 }}
                           className={`rounded-lg flex items-center justify-center text-[20px] shadow-sm backdrop-blur-sm
                            ${i % 3 === 0 ? 'bg-momo-primary/80' : i % 5 === 0 ? 'bg-orange-500/80' : 'bg-white/10'}
                           `}
                         >
                           {i === 2 ? '🕯️' : i === 7 ? '🌪️' : i === 12 ? '🎭' : i === 18 ? '☀️' : ''}
                         </motion.div>
                       ))}
                    </div>
                 </div>
                 
                 <div className="mt-8 text-center text-[15px] text-white/90 leading-relaxed font-medium max-w-[280px]">
                    Từ những mảnh ghép cảm xúc, CineSoul đã vẽ nên một bức tranh trọn vẹn dành riêng cho bạn.
                 </div>
              </motion.div>
            )}

            {currentSlide === 3 && (
              <motion.div 
                key="slide-3"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="flex flex-col items-center flex-1 justify-center"
              >
                 <div className="text-[12px] font-bold tracking-[3px] text-white/70 uppercase mb-6 drop-shadow-md">Tựa phim của tháng do AI đặt</div>
                 
                 <div className="bg-white/10 backdrop-blur-xl rounded-[24px] p-8 border border-white/30 text-center w-full shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-20 transform translate-x-4 -translate-y-4">
                      <Sparkles size={80} className="text-white" />
                    </div>
                    
                    <div className="text-[14px] font-bold text-momo-pink-1 mb-4">Tháng 10 của Khán Ngân</div>
                    <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop" 
                         alt="Cover" className="w-[120px] h-[180px] rounded-[12px] object-cover mx-auto mb-6 shadow-xl border border-white/20" />
                         
                    <h2 className="text-[24px] font-bold leading-[1.3] text-white serif-text mb-4 drop-shadow-md">
                      "Kẻ mộng mơ học cách đi chậm lại"
                    </h2>
                    
                    <p className="text-[13px] text-white/80 font-medium">
                      Một tháng của những khoảng nghỉ đắt giá, tìm thấy bản thân mình trong tĩnh lặng.
                    </p>
                 </div>

                 <button 
                  onClick={(e) => { e.stopPropagation(); handleShare(); }}
                  className="mt-10 w-full h-[56px] bg-momo-primary text-white rounded-full font-bold text-[16px] flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-[0_8px_32px_rgba(165,0,100,0.5)] border border-momo-pink-1"
                 >
                   <Share2 size={20} />
                   Khoe lên Story & Nhận quà
                 </button>
              </motion.div>
            )}
         </AnimatePresence>
       </div>

       {/* Gift Modal */}
       <AnimatePresence>
         {showGiftModal && (
           <motion.div 
             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
             className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
           >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-[24px] p-6 w-full max-w-[320px] flex flex-col items-center relative overflow-hidden"
              >
                <button onClick={() => setShowGiftModal(false)} className="absolute top-4 right-4 text-gray-400">
                  <X size={20} />
                </button>
                
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-500">
                  <Gift size={32} />
                </div>
                
                <h3 className="text-[20px] font-bold text-gray-900 mb-2">Chia sẻ thành công!</h3>
                <p className="text-[14px] text-gray-600 text-center font-medium mb-6">
                  Bạn nhận được quà tặng từ hệ sinh thái MoMo. Kiểm tra thẻ quà tặng ngay!
                </p>
                
                <div className="w-full bg-momo-pink-minus-2 border border-momo-pink-minus-1 rounded-[16px] p-4 flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 border border-momo-pink-minus-1 text-momo-primary">
                    <Ticket size={24} />
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-momo-primary">Vé xem phim 0Đ</div>
                    <div className="text-[12px] text-gray-500">CGV, Lotte, Galaxy</div>
                  </div>
                </div>

                <div className="w-full bg-orange-50 border border-orange-100 rounded-[16px] p-4 flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 border border-orange-100 text-orange-500 text-[24px]">
                    🍿
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-orange-600">Voucher Bắp nước 50K</div>
                    <div className="text-[12px] text-gray-500">Áp dụng mọi cụm rạp</div>
                  </div>
                </div>

                <button 
                  onClick={() => onNav('HOME')}
                  className="w-full h-[48px] bg-momo-primary text-white rounded-full font-bold text-[15px] active:scale-95"
                >
                  Tuyệt vời, về Trang chủ
                </button>
              </motion.div>
           </motion.div>
         )}
       </AnimatePresence>
    </div>
  )
}
