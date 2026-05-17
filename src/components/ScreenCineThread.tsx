import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Send, Flame, Radio, Sparkles, TrendingUp, Users, MessageSquare } from 'lucide-react';
import { ScreenState } from '../App';

const AI_SUMMARIES = [
  { rank: 1, school: 'UEH', points: '12.5K', summary: "Đang review phim 'Mai', phân tích sâu sắc về tâm lý nhân vật.", fill: '90%', active: true },
  { rank: 2, school: 'Bách Khoa', points: '8.2K', summary: "Tranh luận gay gắt về giả thuyết đa vũ trụ trong phim mới.", fill: '65%', active: false },
  { rank: 3, school: 'KHTN', points: '5.1K', summary: "Săn lùng easter eggs và soi sạn kỹ xảo CGI.", fill: '40%', active: false },
];

const INITIAL_MESSAGES = [
  { id: 1, name: 'Minh Hoàng', role: 'K50', text: 'Ông nào xem Mai khúc cuối khóc giống tui không? 😭', isMe: false },
  { id: 2, name: 'Thùy Dung', role: 'K49', text: 'Cảnh quay góc thấp lúc cãi nhau đỉnh thật sự, đạo diễn set quá khéo.', isMe: false },
  { id: 3, name: 'Bảo Anh', role: 'K50', text: 'Nhạc phim cũng cuốn nữa, nghe đi nghe lại nãy giờ 🎶', isMe: false },
];

export default function ScreenCineThread({ onNav }: { onNav: (s: ScreenState) => void }) {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Simulate incoming live messages
  useEffect(() => {
    const timer = setInterval(() => {
      const mockLiveMessages = [
        { name: 'Tuấn Trần', role: 'K48', text: 'Cuối tuần này ai đi xem lại lần 2 hongg?' },
        { name: 'Ngọc Lan', role: 'K50', text: 'Chưa xem, bớt spoil lại mấy má ơi 😤' },
        { name: 'Hoàng Long', role: 'K49', text: 'Plot twist ở phút 90 ảo thật đấy =)))' },
      ];
      
      const randomMsg = mockLiveMessages[Math.floor(Math.random() * mockLiveMessages.length)];
      setMessages(prev => [...prev, { id: Date.now(), ...randomMsg, isMe: false }]);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handleSend = () => {
    if (!inputText.trim()) return;
    setMessages(prev => [...prev, { id: Date.now(), name: 'Tôi', role: 'K50', text: inputText, isMe: true }]);
    setInputText('');
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-50 relative overflow-hidden">
      {/* Dynamic Header */}
      <div className="h-[44px] flex items-center px-4 shrink-0 bg-momo-primary text-white z-10 transition-colors">
        <button onClick={() => onNav('HOME')} className="p-2 -ml-2 active:scale-95 text-white">
          <ArrowLeft size={20} />
        </button>
        <div className="flex-1 text-center font-bold text-[16px]">
          CineThread Campus
        </div>
        <div className="w-8"></div> {/* spacer */}
      </div>

      {/* Realtime AI Leaderboard */}
      <div className="bg-gradient-to-b from-momo-primary to-[#ff4081] p-4 pb-8 rounded-b-[24px] text-white shrink-0 shadow-md z-1">
        <div className="flex justify-between items-end mb-4">
           <div>
              <div className="flex items-center gap-1.5 mb-1 text-[11px] uppercase font-bold text-white/80 tracking-wider">
                <TrendingUp size={14} /> Đường đua rạp chiếu
              </div>
              <div className="text-[20px] font-bold drop-shadow-sm">Top Trending Chat</div>
           </div>
           <div className="bg-black/20 backdrop-blur-md px-2 py-1 rounded-md gap-1.5 flex items-center text-[10px] font-bold border border-white/10 uppercase">
              <Radio size={12} className="text-green-400 animate-pulse" /> Live Now
           </div>
        </div>
        
        <div className="flex flex-col gap-2.5">
           {AI_SUMMARIES.map((item, idx) => (
             <div 
               key={idx} 
               className={`rounded-xl p-3 border relative overflow-hidden transition-all ${
                 item.active 
                 ? 'bg-white/15 border-white/30 backdrop-blur-lg shadow-[0_0_15px_rgba(255,255,255,0.1)]' 
                 : 'bg-black/10 border-white/10 backdrop-blur-sm'
               }`}
             >
               <div className="flex justify-between items-center mb-1.5 relative z-10">
                  <div className="flex gap-2 items-center">
                     <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${item.rank === 1 ? 'bg-yellow-400 text-yellow-900' : 'bg-white/20 text-white'}`}>
                       #{item.rank}
                     </span>
                     <span className="font-bold text-[14px]">{item.school}</span>
                  </div>
                  <div className="text-[12px] font-bold flex gap-1 items-center">
                    <Flame size={14} className={item.rank === 1 ? 'text-yellow-400' : 'text-orange-400'} /> 
                    {item.points}
                  </div>
               </div>
               
               <div className="flex gap-1.5 items-start mt-2 relative z-10">
                 <Sparkles size={12} className="text-momo-pink-minus-2 shrink-0 mt-0.5" />
                 <div className="text-[12px] text-white leading-[1.3] font-medium opacity-90">
                    <span className="font-bold opacity-100">AI:</span> {item.summary}
                 </div>
               </div>
               
               {/* Progress Bar background */}
               <div className="absolute bottom-0 left-0 h-1 w-full bg-black/20">
                  <motion.div 
                    className={`h-full ${item.active ? 'bg-white' : 'bg-white/40'}`}
                    initial={{ width: 0 }} 
                    animate={{ width: item.fill }} 
                    transition={{ duration: 1.5, ease: "easeOut" }} 
                  />
               </div>
             </div>
           ))}
        </div>
      </div>

      {/* Live Chat / Thread Room */}
      <div className="flex-1 flex flex-col bg-slate-50 rounded-t-[24px] -mt-4 relative z-10 overflow-hidden shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        
        {/* Room Header Pin */}
        <div className="px-4 py-3 border-b border-gray-200 bg-white/90 backdrop-blur-md sticky top-0 z-20 flex justify-between items-center">
           <div className="flex flex-col">
              <div className="font-bold text-gray-900 text-[14px] flex items-center gap-2">
                 <div className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                 </div>
                 Cộng đồng UEH
              </div>
              <div className="text-[11px] font-medium text-gray-500 flex items-center gap-1 mt-0.5">
                 <Users size={10} /> 1,245 Sinh viên đang trực tuyến
              </div>
           </div>
           
           <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-momo-primary to-momo-pink-1 flex items-center justify-center shadow-sm">
              <MessageSquare size={14} className="text-white" />
           </div>
        </div>

        {/* Chat Stream */}
        <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 pb-[80px]">
           <AnimatePresence>
             {messages.map((msg) => (
               <motion.div 
                 key={msg.id}
                 initial={{ opacity: 0, scale: 0.9, y: 10 }}
                 animate={{ opacity: 1, scale: 1, y: 0 }}
                 className={`flex flex-col max-w-[85%] ${msg.isMe ? 'self-end items-end' : 'self-start items-start'}`}
               >
                 {!msg.isMe && (
                   <div className="flex gap-1.5 items-center mb-1 ml-1">
                     <span className="text-[11px] font-bold text-gray-700">{msg.name}</span>
                     <span className="text-[9px] bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded font-medium">{msg.role}</span>
                   </div>
                 )}
                 <div 
                   className={`px-3.5 py-2.5 rounded-[18px] text-[14px] leading-[1.4] shadow-sm font-medium ${
                     msg.isMe 
                     ? 'bg-momo-primary text-white rounded-tr-[4px]' 
                     : 'bg-white text-gray-800 rounded-tl-[4px] border border-gray-100'
                   }`}
                 >
                   {msg.text}
                 </div>
               </motion.div>
             ))}
           </AnimatePresence>
           <div ref={chatEndRef} />
        </div>
      </div>

      {/* Input Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-white border-t border-gray-100 p-3 pt-2 pb-safe z-30 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
        <div className="flex flex-col gap-2">
           <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar px-1">
              <span className="shrink-0 bg-momo-pink-minus-2 text-momo-primary text-[11px] font-bold px-3 py-1.5 rounded-full border border-momo-pink-minus-1 whitespace-nowrap active:scale-95 transition-transform">
                Đỉnh quá =)))
              </span>
              <span className="shrink-0 bg-momo-pink-minus-2 text-momo-primary text-[11px] font-bold px-3 py-1.5 rounded-full border border-momo-pink-minus-1 whitespace-nowrap active:scale-95 transition-transform">
                Phim 'Mai' hay k ạ?
              </span>
           </div>
           
           <div className="flex items-center gap-2 bg-gray-100/80 rounded-full pr-1.5 pl-4 py-1.5 border border-gray-200">
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 bg-transparent border-none outline-none text-[14px] text-gray-800 placeholder-gray-500 font-medium" 
                placeholder="Tham gia trò chuyện trực tiếp..." 
              />
              <button 
                onClick={handleSend}
                className={`w-[34px] h-[34px] rounded-full flex items-center justify-center transition-colors ${
                  inputText.trim() ? 'bg-momo-primary shadow-sm' : 'bg-gray-300'
                }`}
              >
                <Send size={16} className="text-white -ml-0.5" />
              </button>
           </div>
        </div>
      </div>
    </div>
  )
}
