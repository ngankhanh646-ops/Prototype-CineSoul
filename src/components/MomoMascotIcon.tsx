export default function MomoMascotIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Horns */}
      <path d="M25 30 L30 8 Q40 12 45 18" fill="#A50064" stroke="#A50064" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M28 10 C32 15 35 18 35 18" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      
      <path d="M75 30 L70 8 Q60 12 55 18" fill="#A50064" stroke="#A50064" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M72 10 C68 15 65 18 65 18" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      
      {/* Helmet Base */}
      <path d="M12 45 C12 10, 88 10, 88 45 C88 88, 55 98, 50 98 C45 98, 12 88, 12 45" fill="#A50064"/>
      
      {/* Face Area */}
      <path d="M18 48 C18 25, 82 25, 82 48 C82 72, 72 88, 50 88 C28 88, 18 72, 18 48" fill="#FCE4EC"/>
      
      {/* Helmet white trim */}
      <path d="M18 30 Q50 42 82 30" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
      
      {/* Left Eye */}
      <circle cx="36" cy="48" r="9" fill="white"/>
      <circle cx="37" cy="48" r="5.5" fill="#1A1A1A"/>
      <circle cx="38" cy="46" r="2" fill="white"/>
      
      {/* Right Eye (Winking) */}
      <path d="M58 45 Q65 40 72 47" stroke="#1A1A1A" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
      
      {/* Eyebrows */}
      <path d="M30 38 Q35 36 40 38" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M58 39 Q63 36 68 38" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      
      {/* Mouth */}
      <path d="M40 60 Q50 66 60 58" stroke="#A50064" strokeWidth="2" strokeLinecap="round" fill="none"/>
      
      {/* Tongue */}
      <path d="M52 63 Q56 72 60 63" fill="#F472B6"/>
      <path d="M52 63 Q56 72 60 63" stroke="#A50064" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}
