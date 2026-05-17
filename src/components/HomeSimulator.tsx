import { ScreenState } from '../App';
import { motion } from 'motion/react';
import { Bell, Search, Star, MessageSquare, ChevronRight, LayoutGrid, Ticket, Map, MonitorSmartphone, Smartphone, Building, Receipt, HandCoins, ArrowRightLeft, Wallet, Scan, Clock, User, ChevronRight as ChevronRightIcon } from 'lucide-react';
import MomoMascotIcon from './MomoMascotIcon';

export default function HomeSimulator({ onNav }: { onNav: (s: ScreenState) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="flex-1 bg-white overflow-y-auto relative flex flex-col"
    >
      {/* Background Gradient Top */}
      <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-[#E7F8E4] to-white z-0 pointer-events-none"></div>

      <div className="relative z-10 flex-1 flex flex-col pb-24">
        {/* MoMo Header Mock */}
        <div className="px-4 pt-12 pb-2">
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-white shadow-sm border border-gray-100 rounded-full h-11 flex items-center px-4">
              <Search size={20} className="text-gray-400" />
              <span className="text-gray-500 text-[13px] ml-2 font-medium truncate">Mời bạn dùng MoMo - Nhận quà khôn...</span>
            </div>
            <div className="relative">
              <Bell size={24} className="text-gray-600" />
              <div className="absolute -top-1 -right-1 w-[18px] h-[18px] bg-red-500 rounded-full text-[10px] font-bold text-white flex items-center justify-center border-2 border-[#E7F8E4]">10</div>
            </div>
            <div className="relative">
              <MessageSquare size={24} className="text-gray-600" />
              <div className="absolute -top-1 -right-1 w-[16px] h-[16px] bg-red-500 rounded-full text-[10px] font-bold text-white flex items-center justify-center border-2 border-[#E7F8E4]">1</div>
            </div>
          </div>
        </div>

        {/* Top Actions */}
        <div className="px-4 py-4 grid grid-cols-4 gap-2 text-center">
          <div className="flex flex-col items-center gap-1.5">
             <div className="w-12 h-12 bg-white rounded-[14px] shadow-sm shadow-[#E7F8E4] flex items-center justify-center text-momo-primary">
               <ArrowRightLeft size={24} />
             </div>
             <span className="text-[12px] font-medium text-gray-800">Nạp/Rút</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
             <div className="w-12 h-12 bg-white rounded-[14px] shadow-sm shadow-[#E7F8E4] flex items-center justify-center text-momo-primary">
               <HandCoins size={24} />
             </div>
             <span className="text-[12px] font-medium text-gray-800">Nhận tiền</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
             <div className="w-12 h-12 bg-white rounded-[14px] shadow-sm shadow-[#E7F8E4] flex items-center justify-center text-momo-primary">
               <LayoutGrid size={24} />
             </div>
             <span className="text-[12px] font-medium text-gray-800">QR Thanh toán</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 relative">
             <div className="w-12 h-12 bg-white rounded-[14px] shadow-sm shadow-[#E7F8E4] flex items-center justify-center text-momo-primary">
               <Wallet size={24} />
             </div>
             <span className="text-[12px] font-medium text-gray-800">Ví tiện ích</span>
             <div className="absolute top-0 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
        </div>

        {/* Balance Card */}
        <div className="px-4 mb-5">
           <div className="bg-white rounded-[16px] shadow-md border border-gray-100 overflow-hidden">
              <div className="flex py-3 px-2">
                 <div className="w-1/3 flex flex-col items-center justify-center border-r border-gray-100 relative">
                    <span className="text-[12px] text-gray-600 font-medium mb-1 flex items-center gap-1">Ví MoMo <span className="bg-momo-primary text-white text-[8px] font-bold px-1 rounded-sm">mo<br/>mo</span></span>
                    <span className="text-[13px] font-bold text-gray-800">********</span>
                    <button className="absolute left-2 top-1.5 text-gray-400">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/><line x1="3" y1="3" x2="21" y2="21"/></svg>
                    </button>
                 </div>
                 <div className="w-1/3 flex flex-col items-center justify-center border-r border-gray-100">
                    <span className="text-[12px] text-gray-600 font-medium mb-1">Ví Trả Sau 🦄</span>
                    <span className="text-[12px] font-medium text-momo-primary">Hạn mức cao</span>
                 </div>
                 <div className="w-1/3 flex flex-col items-center justify-center">
                    <span className="text-[12px] text-gray-600 font-medium mb-1">Túi Thần Tài</span>
                    <span className="text-[12px] font-medium text-[#D48806]">Sinh lời mỗi ngày</span>
                 </div>
              </div>
              <div className="bg-blue-50/50 py-2.5 px-3 flex items-center justify-between border-t border-blue-50">
                <div className="flex items-center gap-2">
                   <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                     <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                   </div>
                   <span className="text-[13px] font-medium text-blue-600">Trung Tâm Tài Chính</span>
                </div>
                <ChevronRight size={16} className="text-blue-500" />
              </div>
           </div>
        </div>

        {/* Services Grid */}
        <div className="px-4 grid grid-cols-4 gap-y-4 gap-x-2 text-center mb-6">
           <ServiceItem icon={ArrowRightLeft} color="text-red-500" title="Chuyển tiền" />
           <ServiceItem icon={Building} color="text-blue-500" title="Chuyển tiền Ngân hàng" />
           <ServiceItem icon={Receipt} color="text-teal-500" title="Thanh toán hóa đơn" />
           <ServiceItem icon={Smartphone} color="text-blue-500" title="Nạp tiền điện thoại" />
           
           <ServiceItem icon={MonitorSmartphone} color="text-blue-500" title="Data 4G/5G" />
           <ServiceItem icon={MessageSquare} color="text-momo-primary" title="Cộng đồng" />
           <ServiceItem icon={HandCoins} color="text-orange-500" title="Vay Nhanh" />
           <ServiceItem icon={Wallet} color="text-pink-500" title="Ví Trả Sau" />

           <ServiceItem icon={Building} color="text-orange-500" title="Thanh toán khoản vay" />
           <ServiceItem icon={Ticket} color="text-orange-500" title="Mua vé xem phim" />
           <ServiceItem icon={Map} color="text-blue-500" title="Du lịch - Đi lại" />
           <ServiceItem icon={LayoutGrid} color="text-gray-500" title="Xem thêm dịch vụ" />
        </div>

        <div className="w-full h-2 bg-gray-50 mb-4"></div>

        {/* CineSoul Banners */}
        <div className="p-4 space-y-5 pt-0">
          <div className="flex items-center gap-2 mb-1">
             <h3 className="font-bold text-[16px] text-gray-800">MoMo đề xuất</h3>
          </div>

          <div 
            onClick={() => onNav('CHECKIN')}
            className="w-full rounded-[16px] flex flex-col px-4 py-3 cursor-pointer active:scale-[0.98] transition-transform shadow-[0_2px_12px_rgba(165,0,100,0.08)] border border-momo-pink-minus-1 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, var(--color-momo-pink-minus-2) 0%, #FFF 100%)' }}
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-momo-pink-1/20 to-transparent rounded-full blur-[20px] -translate-y-10 translate-x-10"></div>
            
            <div className="flex justify-between items-start mb-3 relative z-10">
               <div>
                  <div className="text-[11px] font-bold text-momo-pink-1 uppercase tracking-[0.5px]">Thói quen mỗi ngày</div>
                  <div className="flex items-center gap-1 mt-0.5">
                     <span className="text-[16px] font-bold text-momo-primary">Chuỗi 3 ngày</span>
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="#F97316" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c-1.12-1.92-1.5-3.5-1.5-5 0-2 1-3 1-3s1 1 1 3c0 2 2.5 4 4.5 6a4.5 4.5 0 0 1-5 8.5 4.5 4.5 0 0 1-3-7z"/></svg>
                  </div>
               </div>
               <div className="bg-white/80 backdrop-blur-sm px-2.5 py-1.5 rounded-xl border border-momo-pink-minus-1 flex items-center gap-1.5 shadow-sm">
                  <Ticket size={14} className="text-momo-primary" />
                  <div className="text-[9px] font-bold text-momo-primary text-left leading-[1.2]">
                    Ngày 30<br/>Nhận Voucher
                  </div>
               </div>
            </div>
            
            <div className="relative z-10 flex items-center justify-between">
               <div className="flex items-center gap-1.5">
                 {[1,2,3].map(d => (
                    <div key={d} className="w-8 h-8 rounded-full bg-momo-primary flex items-center justify-center text-white font-bold text-[12px] shadow-sm">✓</div>
                 ))}
                 <div className="w-8 h-8 rounded-full bg-white border-2 border-momo-pink-minus-1 flex items-center justify-center text-momo-primary font-bold text-[12px]">4</div>
                 <div className="w-8 h-8 flex items-center justify-center text-gray-300">...</div>
               </div>
            </div>

            {/* Mascot Element */}
            <div className="absolute -right-1 bottom-0 z-0">
               <div className="w-[85px] h-[85px] relative translate-y-2 translate-x-2">
                 <MomoMascotIcon className="w-full h-full" />
               </div>
            </div>
          </div>

          <div className="flex justify-between gap-3 pt-4">
            {/* Morning Widget Trigger */}
            <div 
              onClick={() => onNav('CHECKIN')}
              className="w-1/2 aspect-[4/3] bg-momo-pink-minus-2 rounded-[16px] p-3.5 flex flex-col justify-end relative overflow-hidden cursor-pointer active:scale-[0.98] transition-transform border border-momo-pink-minus-1"
            >
              <div className="absolute top-3 left-3">
                 <div className="w-[38px] h-[38px] bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-[20px]">☀️</span>
                 </div>
              </div>
              <div className="relative z-10 text-[12px] text-momo-primary font-bold leading-[1.3] mt-2">
                Check-in cảm xúc sáng nay ✨
              </div>
            </div>

            {/* Evening Widget Trigger */}
            <div 
              onClick={() => onNav('DIARY')}
              className="w-1/2 aspect-[4/3] bg-[#FFF2F7] rounded-[16px] p-3.5 flex flex-col justify-end relative overflow-hidden cursor-pointer active:scale-[0.98] transition-transform border border-momo-pink-minus-1"
            >
              <div className="absolute top-3 left-3">
                 <div className="w-[38px] h-[38px] bg-white rounded-full flex items-center justify-center shadow-sm">
                     <span className="text-[20px]">🎬</span>
                 </div>
              </div>
              <div className="relative z-10 text-[12px] text-momo-primary font-bold leading-[1.3] mt-2">
                Viết CineDiary tối nay của bạn 📝
              </div>
            </div>
          </div>

          {/* Notification Thread Trigger */}
          <div 
            onClick={() => onNav('THREAD')}
            className="bg-white p-4 rounded-[16px] shadow-sm border border-gray-100 cursor-pointer active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-[22px] h-[22px] bg-momo-primary rounded-[6px] text-white font-bold flex items-center justify-center text-[12px]">M</div>
              <span className="font-bold text-gray-900 text-[14px]">CineSoul Notification</span>
              <span className="text-gray-400 text-[11px] ml-auto font-medium">Bây giờ</span>
            </div>
            <div className="text-[13px] text-gray-600 leading-[1.5] font-medium">
              Bạn có rảnh trưa nay? Đang có 23 sinh viên UEH bàn luận về bộ phim Tâm lý mới nhất trên CineThread kìa!
            </div>
          </div>

          {/* Wrapped Notification Trigger */}
          <div 
            onClick={() => onNav('WRAPPED')}
            className="bg-gradient-to-r from-momo-pink-minus-2 to-white p-4 rounded-[16px] shadow-sm border border-momo-pink-minus-1 cursor-pointer active:scale-[0.98] transition-transform mt-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-[22px] h-[22px] bg-momo-primary rounded-[6px] text-white font-bold flex items-center justify-center text-[12px]">M</div>
              <span className="font-bold text-momo-primary text-[14px]">CineSoul Wrapped</span>
              <span className="text-momo-pink-1 text-[11px] ml-auto font-bold">Mới</span>
            </div>
            <div className="text-[13px] text-gray-800 leading-[1.5] font-medium">
              Thước phim tháng này của bạn đã hoàn tất 🎬. Xem ngay hành trình điện ảnh riêng bạn!
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-[80px] bg-white border-t border-gray-100 grid grid-cols-5 px-2 pb-4 pt-3 items-start z-50 max-w-[400px] mx-auto shadow-[0_-4px_16px_rgba(0,0,0,0.03)]">
         <NavItem icon={() => <div className="w-6 h-6 border-2 border-momo-primary rounded flex items-center justify-center text-[10px] font-bold text-momo-primary">mo</div>} label="MoMo" active />
         <NavItem icon={() => <div className="relative"><Ticket size={24} /><div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div></div>} label="Ưu đãi" />
         <div className="flex flex-col items-center justify-center -mt-8 cursor-pointer">
            <div className="w-14 h-14 bg-momo-primary rounded-full shadow-lg flex items-center justify-center text-white ring-4 ring-white">
              <Scan size={28} />
            </div>
            <span className="text-[10px] font-medium text-gray-500 mt-1.5">Quét mọi QR</span>
         </div>
         <NavItem icon={() => <Clock size={24} />} label="Lịch sử GD" />
         <button onClick={() => onNav('PROFILE')} className="flex flex-col items-center gap-1 cursor-pointer text-gray-400">
            <User size={24} />
            <span className="text-[10px] font-medium">Tôi</span>
         </button>
      </div>
    </motion.div>
  );
}

function ServiceItem({ icon: Icon, color, title }: { icon: any, color: string, title: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 cursor-pointer active:opacity-70">
       <div className={`w-11 h-11 bg-white rounded-[14px] flex items-center justify-center ${color}`}>
         <Icon size={24} strokeWidth={1.5} />
       </div>
       <span className="text-[11px] text-gray-700 leading-[1.2] px-1 whitespace-pre-wrap h-[28px]">{title}</span>
    </div>
  )
}

function NavItem({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-1 cursor-pointer ${active ? 'text-momo-primary' : 'text-gray-400'}`}>
       <Icon />
       <span className="text-[10px] font-medium">{label}</span>
    </div>
  )
}
