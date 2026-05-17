import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import HomeSimulator from './components/HomeSimulator';
import ScreenOnboarding from './components/ScreenOnboarding';
import ScreenCheckIn from './components/ScreenCheckIn';
import ScreenReveal from './components/ScreenReveal';
import ScreenCineThread from './components/ScreenCineThread';
import ScreenCineDiary from './components/ScreenCineDiary';
import ScreenCinema from './components/ScreenCinema';
import ScreenProfile from './components/ScreenProfile';
import ScreenCineMemoryWrapped from './components/ScreenCineMemoryWrapped';

export type ScreenState = 'HOME' | 'ONBOARDING' | 'CHECKIN' | 'REVEAL' | 'THREAD' | 'DIARY' | 'CINEMA' | 'PROFILE' | 'WRAPPED';

export interface TarotData {
  cardName: string;
  numeral: string;
  emoji: string;
  reasoning: string;
  recommendationTitle: string;
  recommendationGenre: string;
  recommendationRating: string;
  recommendationReviews: string;
  imagePrompt?: string;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('HOME');
  const [mood, setMood] = useState<number>(50);
  const [tarotData, setTarotData] = useState<TarotData | null>(null);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'HOME': return <HomeSimulator key="HOME" onNav={setCurrentScreen} />;
      case 'ONBOARDING': return <ScreenOnboarding key="ONBOARDING" onNav={setCurrentScreen} />;
      case 'CHECKIN': return <ScreenCheckIn key="CHECKIN" onNav={setCurrentScreen} mood={mood} setMood={setMood} setTarotData={setTarotData} />;
      case 'REVEAL': return <ScreenReveal key="REVEAL" onNav={setCurrentScreen} mood={mood} tarotData={tarotData} />;
      case 'THREAD': return <ScreenCineThread key="THREAD" onNav={setCurrentScreen} />;
      case 'DIARY': return <ScreenCineDiary key="DIARY" onNav={setCurrentScreen} />;
      case 'CINEMA': return <ScreenCinema key="CINEMA" onNav={setCurrentScreen} />;
      case 'PROFILE': return <ScreenProfile key="PROFILE" onNav={setCurrentScreen} />;
      case 'WRAPPED': return <ScreenCineMemoryWrapped key="WRAPPED" onNav={setCurrentScreen} />;
      default: return <HomeSimulator key="HOME" onNav={setCurrentScreen} />;
    }
  };

  return (
    <div className="flex justify-center min-h-[100dvh] bg-neutral-900 overflow-hidden font-sans">
      <div className="w-full max-w-[400px] h-[100dvh] bg-white relative shadow-2xl overflow-hidden flex flex-col">
        <AnimatePresence mode="popLayout">
          {renderScreen()}
        </AnimatePresence>
      </div>
    </div>
  );
}
