import { motion } from 'motion/react';
import { ArrowLeft, Search, Home, PlaySquare, MapPin, Popcorn, Users, User, ChevronRight } from 'lucide-react';
import { ScreenState } from '../App';

export default function ScreenCinema({ onNav }: { onNav: (s: ScreenState) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: -50 }}
      className="flex-1 bg-white flex flex-col relative overflow-hidden"
    >
      {/* Top Section with Sky background */}
      <div className="relative pt-[44px] pb-6 px-4 bg-[#C8F0FF]">
         {/* Simulate Cloud Background */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[140%] rounded-[50%] bg-white/20 blur-2xl"></div>
           <div className="absolute top-10 right-[-10%] w-[60%] h-[60%] rounded-[50%] bg-white/30 blur-xl"></div>
         </div>

         {/* Header */}
         <div className="flex items-center justify-between mb-4 relative z-10">
            <div className="flex items-center gap-3">
              <button onClick={() => onNav('REVEAL')} className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center backdrop-blur-sm active:scale-95">
                <ArrowLeft size={18} className="text-[#1A1A2E]" />
              </button>
              <span className="font-semibold text-[16px] text-[#1A1A2E]">Mua vé xem phim</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="h-8 bg-white/80 rounded-full flex items-center px-2.5 gap-1.5 backdrop-blur-sm active:scale-95 border border-momo-pink-minus-1 text-momo-primary">
                 <span className="text-[14px]">🤖</span>
                 <span className="text-[12px] font-semibold">Trợ lý</span>
              </button>
              <button onClick={() => onNav('HOME')} className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center backdrop-blur-sm active:scale-95">
                <Home size={16} className="text-[#1A1A2E]" />
              </button>
            </div>
         </div>

         {/* Search Input */}
         <div className="relative z-10 w-full h-[44px] bg-white rounded-[22px] flex items-center shadow-[0_2px_12px_rgba(0,0,0,0.06)] px-4">
            <Search size={18} className="text-gray-400" />
            <input 
              type="text" 
              placeholder="Tìm tên phim hoặc rạp" 
              className="flex-1 ml-2 text-[14px] bg-transparent outline-none placeholder:text-gray-400 text-gray-800 font-medium"
            />
         </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-[90px] bg-white">
        {/* Phim Nổi Bật Carousel */}
        <div className="pt-5 pb-6">
           <h2 className="text-[18px] font-bold text-gray-900 px-4 mb-4">Phim nổi bật</h2>
           
           <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-4 gap-4 pb-2">
              {/* Left Placeholder Poster */}
              <div className="w-[85%] sm:w-[280px] shrink-0 snap-center rounded-[12px] overflow-hidden">
                <div className="w-full aspect-[2/3] bg-gray-200">
                  <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=60" alt="Horror Movie" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Center Poster - Doraemon */}
              <div className="w-[85%] sm:w-[280px] shrink-0 snap-center rounded-[12px] overflow-hidden">
                <div className="w-full aspect-[2/3] bg-[#0A3D73] relative">
                  {/* Doraemon visual mockup */}
                  <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=600&auto=format&fit=crop&q=60" alt="Doraemon Background" className="w-full h-full object-cover opacity-80" />
                  
                  <div className="absolute top-2 left-2 flex gap-1">
                     <span className="bg-[#2D88FF] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-[4px] border border-white/20">SNEAKSHOW</span>
                     <span className="bg-[#1DA124] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-[4px] border border-white/20">P</span>
                  </div>
                  
                  <div className="absolute bottom-2 left-2 text-[48px] font-bold text-white/80 leading-none" style={{ WebkitTextStroke: '1px white' }}>1</div>
                </div>
                <div className="mt-3 text-center">
                   <h3 className="font-bold text-[15px] text-gray-900 truncate px-2">Doraemon Movie 45: Nobita Và...</h3>
                   <p className="text-[11px] text-gray-500 mt-0.5">Hoạt Hình, Giả Tượng, Phiêu Lưu, Gia Đình</p>
                </div>
              </div>

              {/* Right Placeholder Poster */}
              <div className="w-[85%] sm:w-[280px] shrink-0 snap-center rounded-[12px] overflow-hidden">
                <div className="w-full aspect-[2/3] bg-[#8B3E2F] relative">
                  <img src="https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?w=600&auto=format&fit=crop&q=60" alt="Lat Mat 7" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute top-2 left-2">
                     <span className="bg-gray-800 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-[4px] border border-white/20">K</span>
                  </div>
                  <div className="absolute bottom-2 left-2 text-[48px] font-bold text-white/50 leading-none">2</div>
                </div>
              </div>
           </div>
        </div>

        <div className="w-full h-2 bg-momo-gray-bg"></div>

        {/* Phim hay đang chiếu */}
        <div className="pt-5 pb-6 px-4">
           <div className="flex items-center justify-between mb-4">
              <h2 className="text-[18px] font-bold text-gray-900">Phim hay đang chiếu</h2>
              <button className="text-[13px] font-medium text-gray-600 flex items-center">
                Xem tất cả <ChevronRight size={14} className="ml-1" />
              </button>
           </div>
           
           <div className="flex gap-3 overflow-x-auto hide-scrollbar">
             <MovieItem 
               title="Kiến Thần Mộc Nữ"
               rating="16+"
               bg="bg-[#1A3A40]"
               img="https://images.unsplash.com/photo-1509212001556-9aabc8468725?w=200&auto=format&fit=crop&q=60"
             />
             <MovieItem 
               title="Mối quan hệ 'ló vi sóng'"
               rating="18+"
               bg="bg-[#4A1D20]"
               img="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&auto=format&fit=crop&q=60"
             />
             <MovieItem 
               title="Hành tinh Cát"
               rating="13+"
               bg="bg-[#D9BBA0]"
               img="https://images.unsplash.com/photo-1626814030620-80de67a57a12?w=200&auto=format&fit=crop&q=60"
             />
           </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-white border-t border-gray-100 flex justify-between px-2 pb-5 pt-2 z-50">
        <NavTab icon={PlaySquare} label="Chọn phim" active />
        <NavTab icon={MapPin} label="Chọn rạp" />
        <NavTab icon={Popcorn} label="Bắp nước" />
        <NavTab icon={Users} label="Nhóm phim" />
        <button onClick={() => onNav('PROFILE')} className="flex flex-col items-center justify-center flex-1 relative active:scale-95">
          <div className="relative">
            <User size={22} className="text-gray-500" strokeWidth={1.5} />
            <span className="absolute -top-1.5 -right-3 bg-[#E02626] text-white text-[8px] font-bold px-1 rounded-full border-[1px] border-white z-10 scale-90">
              New
            </span>
          </div>
          <span className="text-[10px] mt-1 font-medium text-gray-500">
            Tôi
          </span>
        </button>
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.div>
  )
}

function MovieItem({ title, rating, bg, img }: { title: string, rating: string, bg: string, img: string }) {
  return (
    <div className="w-[140px] shrink-0 flex flex-col gap-2">
      <div className={`w-full aspect-[3/2] ${bg} rounded-[8px] overflow-hidden relative`}>
        <img src={img} alt={title} className="w-full h-full object-cover mix-blend-overlay" />
        <div className="absolute top-1.5 left-1.5 bg-[#E88C22] text-white text-[10px] font-bold px-1.5 py-[1px] rounded-full border border-white/20">
          {rating}
        </div>
      </div>
    </div>
  )
}

function NavTab({ icon: Icon, label, active, hasBadge, badgeText }: any) {
  return (
    <button className="flex flex-col items-center justify-center flex-1 relative active:scale-95">
      <div className="relative">
        <Icon size={22} className={active ? "text-momo-primary" : "text-gray-500"} strokeWidth={active ? 2.5 : 1.5} />
        {hasBadge && (
          <span className="absolute -top-1.5 -right-3 bg-[#E02626] text-white text-[8px] font-bold px-1 rounded-full border-[1px] border-white z-10 scale-90">
            {badgeText}
          </span>
        )}
      </div>
      <span className={`text-[10px] mt-1 ${active ? "font-bold text-momo-primary" : "font-medium text-gray-500"}`}>
        {label}
      </span>
    </button>
  )
}
