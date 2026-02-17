
import React from 'react';
import { AppView } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeView: AppView;
  setView: (view: AppView) => void;
  isLoggedIn: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, activeView, setView, isLoggedIn }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[#D4AF37]/30">
      <header className="sticky top-0 z-50 bg-[#00247D] shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-4 cursor-pointer group" 
            onClick={() => setView(isLoggedIn ? 'dashboard' : 'landing')}
          >
            <div className="w-10 h-10 bg-[#D4AF37] rounded-sm flex items-center justify-center text-[#00247D] font-serif font-bold transition-transform group-hover:rotate-6">
              TF
            </div>
            <h1 className="text-xl font-serif font-bold tracking-[0.1em] text-[#F9F8F1]">
              THAI FLAMES <span className="text-[#D4AF37] font-light italic">NETWORK</span>
            </h1>
          </div>

          {isLoggedIn ? (
            <nav className="flex items-center gap-8">
              <button 
                onClick={() => setView('dashboard')}
                className={`text-[11px] font-bold uppercase tracking-widest transition-all ${activeView === 'dashboard' ? 'text-[#D4AF37]' : 'text-[#F9F8F1]/70 hover:text-[#F9F8F1]'}`}
              >
                The Sanctuary
              </button>
              <button 
                onClick={() => setView('matches')}
                className={`text-[11px] font-bold uppercase tracking-widest transition-all ${activeView === 'matches' ? 'text-[#D4AF37]' : 'text-[#F9F8F1]/70 hover:text-[#F9F8F1]'}`}
              >
                Circles
              </button>
              <button 
                onClick={() => setView('chat')}
                className={`text-[11px] font-bold uppercase tracking-widest transition-all ${activeView === 'chat' ? 'text-[#D4AF37]' : 'text-[#F9F8F1]/70 hover:text-[#F9F8F1]'}`}
              >
                Dialogues
              </button>
              <div className="w-9 h-9 border-2 border-[#D4AF37] rounded-full overflow-hidden p-0.5 bg-white shadow-inner">
                <img className="w-full h-full rounded-full object-cover" src="https://picsum.photos/seed/user/100/100" alt="Profile" />
              </div>
            </nav>
          ) : (
             <button 
              onClick={() => setView('onboarding')}
              className="bg-[#A51931] text-white px-8 py-3 text-[10px] font-bold tracking-[0.2em] hover:bg-[#8a1529] transition-all shadow-lg"
            >
              REQUEST ACCESS
            </button>
          )}
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-[#1B4332] border-t border-[#D4AF37]/30 py-20 text-[#F9F8F1]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5 space-y-6">
             <h4 className="font-serif text-3xl text-[#D4AF37]">The Thai Flames Charter</h4>
             <p className="text-sm font-light leading-relaxed opacity-70 max-w-sm">
               A high-trust collective for the sustainable advancement of cultural partnership. We believe in the precision of AI and the warmth of tradition.
             </p>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 text-[10px] font-bold uppercase tracking-[0.2em]">
             <div className="flex flex-col gap-5">
               <span className="text-[#D4AF37]">Institutions</span>
               <a href="#" className="opacity-50 hover:opacity-100 transition-opacity">Academy of Values</a>
               <a href="#" className="opacity-50 hover:opacity-100 transition-opacity">Vetting Protocols</a>
               <a href="#" className="opacity-50 hover:opacity-100 transition-opacity">Code of Honor</a>
             </div>
             <div className="flex flex-col gap-5">
               <span className="text-[#D4AF37]">Intelligence</span>
               <a href="#" className="opacity-50 hover:opacity-100 transition-opacity">Gemini Synergies</a>
               <a href="#" className="opacity-50 hover:opacity-100 transition-opacity">Trust Ledger</a>
               <a href="#" className="opacity-50 hover:opacity-100 transition-opacity">Privacy Shield</a>
             </div>
             <div className="flex flex-col gap-5">
               <span className="text-[#D4AF37]">Contact</span>
               <a href="#" className="opacity-50 hover:opacity-100 transition-opacity">Concierge</a>
               <a href="#" className="opacity-50 hover:opacity-100 transition-opacity">Media</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
