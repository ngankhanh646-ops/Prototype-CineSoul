import { motion } from 'motion/react';
import { ArrowLeft, Check, Lock, ChevronRight, Settings, Bell, ShieldCheck, MapPin, Palette, Wallet, Smartphone, Shield, Star, Award, Zap, Clock, Users } from 'lucide-react';
import { ScreenState } from '../App';

export default function ScreenProfile({ onNav }: { onNav: (s: ScreenState) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: -50 }}
      className="flex-1 bg-momo-gray-bg flex flex-col relative overflow-hidden"
    >
      <div className="flex-1 overflow-y-auto pb-[90px]">
        {/* Header Background */}
        <div className="bg-gradient-to-b from-[#E7F8E4] to-momo-gray-bg h-[200px] absolute top-0 left-0 right-0 z-0"></div>

        {/* Header Actions */}
        <div className="relative z-10 flex justify-between items-center px-4 pt-12 pb-4">
           <span className="text-[18px] font-bold text-gray-900">17:02</span>
           <button className="bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full text-[12px] font-bold text-gray-800 flex items-center gap-1.5 border border-white/50">
             <Palette size={14} /> Đổi ảnh nền
           </button>
        </div>

        {/* Profile Card Mock */}
        <div className="relative z-10 px-4 mt-2">
           <div className="bg-white rounded-[20px] shadow-sm p-4 pt-10 flex flex-col items-center relative">
              <div className="absolute -top-10 w-20 h-20 rounded-full bg-momo-pink-minus-2 border-[4px] border-white flex items-center justify-center text-[28px] font-bold text-momo-primary shadow-sm relative">
                 PB
                 <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-[2px] border-white flex items-center justify-center">
                   <Check size={12} className="text-white" strokeWidth={3} />
                 </div>
              </div>

              <h1 className="text-[20px] font-bold text-gray-900 mt-2">Sinh viên K50</h1>
              <div className="flex items-center gap-2 mt-1 mb-4">
                 <span className="text-[14px] text-gray-500 font-medium">ĐH Kinh Tế TP.HCM (UEH)</span>
                 <span className="bg-green-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-full">Đã sinh trắc học</span>
              </div>

              <div className="flex w-full gap-3">
                 <button className="flex-1 bg-gray-50 rounded-[12px] py-2.5 flex items-center justify-center gap-2">
                   <ShieldCheck size={18} className="text-gray-500" />
                   <span className="text-[13px] font-bold text-gray-800">Trang cá nhân <ChevronRight size={14} className="text-gray-400" /></span>
                 </button>
                 <button className="flex-1 bg-momo-pink-minus-2 rounded-[12px] py-2.5 flex items-center justify-center gap-2 text-momo-primary">
                    <span className="text-[13px] font-bold">Nhận Ngay 250K <ChevronRight size={14} /></span>
                 </button>
              </div>
           </div>
        </div>

        {/* Actions Grid */}
        <div className="relative z-10 px-4 mt-4">
           <div className="bg-white rounded-[20px] shadow-sm p-4 flex justify-between">
              <div className="flex flex-col items-center gap-2 flex-1">
                 <Wallet size={28} className="text-gray-600" />
                 <span className="text-[11px] font-bold text-center text-gray-700 leading-tight">Quản lý<br/>thanh toán</span>
              </div>
              <div className="flex flex-col items-center gap-2 flex-1">
                 <Settings size={28} className="text-gray-600" />
                 <span className="text-[11px] font-bold text-center text-gray-700 leading-tight">Cài đặt<br/>thanh toán</span>
              </div>
              <div className="flex flex-col items-center gap-2 flex-1">
                 <Shield size={28} className="text-gray-600" />
                 <span className="text-[11px] font-bold text-center text-gray-700 leading-tight">Đăng nhập<br/>và bảo mật</span>
              </div>
              <div className="flex flex-col items-center gap-2 flex-1">
                 <Bell size={28} className="text-gray-600" />
                 <span className="text-[11px] font-bold text-center text-gray-700 leading-tight">Cài đặt<br/>thông báo</span>
              </div>
           </div>
        </div>

        {/* AI Trust Score Dashboard */}
        <div className="relative z-10 px-4 mt-6">
           <div className="flex items-center gap-2 mb-3">
              <Star size={18} className="text-momo-primary fill-current" />
              <h2 className="text-[18px] font-bold text-gray-900">Vibe Passport Sinh Viên</h2>
           </div>
           
           <div className="bg-white rounded-[20px] shadow-sm p-4 border border-momo-pink-minus-1">
             {/* Info part */}
             <div className="flex items-center gap-3 mb-4">
                <div className="w-[48px] h-[48px] bg-momo-pink-minus-2 rounded-full flex items-center justify-center text-[16px] font-bold text-momo-primary border-2 border-white shadow-sm shrink-0">
                  PB
                </div>
                <div>
                   <div className="text-[14px] font-bold text-gray-900 leading-tight">Sinh viên K50</div>
                   <div className="text-[12px] text-gray-500 font-medium">ĐH Kinh Tế TP.HCM (UEH)</div>
                   <div className="inline-flex mt-1 bg-momo-pink-minus-2 text-momo-primary text-[10px] font-bold px-2 py-[2px] rounded border border-momo-pink-minus-1">
                     Cấp độ: Có chọn lọc
                   </div>
                </div>
             </div>

             <div className="mb-4">
                <div className="flex justify-between items-end mb-1.5">
                   <span className="text-[13px] font-bold text-gray-900">AI Trust Score</span>
                   <span className="text-[13px] font-bold text-momo-primary">40/100</span>
                </div>
                <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                   <div className="h-full bg-gradient-to-r from-momo-pink-1 to-momo-primary rounded-full transition-all duration-500 w-[40%]"></div>
                </div>
                <p className="text-[11px] text-gray-500 mt-2 font-medium">✨ Chia sẻ thêm để mở khóa CineCard huy hiệu</p>
             </div>

             {/* Perks part */}
             <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-momo-pink-minus-2 rounded-[12px] p-2 flex flex-col items-center text-center gap-1.5 border border-momo-pink-minus-1">
                   <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-momo-primary">
                      <Clock size={16} />
                   </div>
                   <span className="text-[10px] font-bold text-gray-800 leading-tight">Lịch sử<br/>xem</span>
                </div>
                <div className="bg-momo-pink-minus-2 rounded-[12px] p-2 flex flex-col items-center text-center gap-1.5 border border-momo-pink-minus-1">
                   <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-momo-primary">
                      <MapPin size={16} />
                   </div>
                   <span className="text-[10px] font-bold text-gray-800 leading-tight">Chia sẻ<br/>vị trí</span>
                </div>
                <div className="bg-gray-50 rounded-[12px] p-2 flex flex-col items-center text-center gap-1.5 border border-gray-100 relative opacity-80">
                   <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center border border-white z-10">
                      <Lock size={8} className="text-white" />
                   </div>
                   <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-400">
                      <Users size={16} />
                   </div>
                   <span className="text-[10px] font-bold text-gray-400 leading-tight">Kết nối<br/>bạn bè</span>
                </div>
             </div>

             {/* Action Button */}
             <button 
                onClick={() => onNav('ONBOARDING')}
                className="w-full h-[40px] bg-white border-[1.5px] border-momo-primary text-momo-primary rounded-[12px] font-bold text-[13px] active:scale-95 transition-transform mt-1"
             >
                Nâng cấp Vibe Passport
             </button>
           </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-[80px] bg-white border-t border-gray-100 grid grid-cols-5 px-2 pb-4 pt-3 items-start z-50 max-w-[400px] mx-auto shadow-[0_-4px_16px_rgba(0,0,0,0.03)] focus:outline-none">
         <NavItem icon={() => <div className="w-6 h-6 border-2 border-gray-400 rounded flex items-center justify-center text-[10px] font-bold text-gray-400">mo</div>} label="MoMo" onClick={() => onNav('HOME')} />
         <NavItem icon={() => <Award size={24} className="text-gray-400" />} label="Ưu đãi" />
         <div className="flex flex-col items-center justify-center -mt-8 cursor-pointer">
            <div className="w-14 h-14 bg-momo-primary rounded-full shadow-lg flex items-center justify-center text-white ring-4 ring-white">
              <ScanIcon size={28} />
            </div>
            <span className="text-[10px] font-medium text-gray-500 mt-1.5">Quét mọi QR</span>
         </div>
         <NavItem icon={() => <div className="text-gray-400"><HistoryIcon size={24} /></div>} label="Lịch sử GD" />
         <NavItem icon={() => <div className="text-momo-primary"><UserIcon size={24} /></div>} label="Tôi" active />
      </div>
    </motion.div>
  )
}

function NavItem({ icon: Icon, label, active = false, onClick }: { icon: any, label: string, active?: boolean, onClick?: () => void }) {
  return (
    <div onClick={onClick} className={`flex flex-col items-center gap-1 cursor-pointer ${active ? 'text-momo-primary' : 'text-gray-400'}`}>
       <Icon />
       <span className="text-[10px] font-bold">{label}</span>
    </div>
  )
}

function ScanIcon(props: any) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>
}

function HistoryIcon(props: any) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
}

function UserIcon(props: any) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
}
