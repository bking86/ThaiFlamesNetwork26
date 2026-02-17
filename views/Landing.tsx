
import React from 'react';

interface LandingProps {
  onStart: () => void;
}

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center bg-[#F9F8F1]">
      <div className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        
        <div className="lg:col-span-7 space-y-12 animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="inline-flex items-center gap-4 px-4 py-1.5 border border-[#D4AF37] text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em]">
            National-Premium Matchmaking
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[1.1] text-[#00247D]">
            The Standard of <br />
            <span className="text-[#A51931] italic">High-Trust Union</span>
          </h1>
          
          <p className="text-xl text-[#1B1B1B]/60 max-w-xl font-light leading-relaxed">
            Thai Flames Network is a vetted sanctuary for individuals who refuse to settle. A synergy of cultural heritage, AI-precision, and absolute integrity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <button 
              onClick={onStart}
              className="px-14 py-6 bg-[#A51931] text-white text-[10px] font-black tracking-[0.2em] shadow-[0_20px_40px_-10px_rgba(165,25,49,0.3)] hover:translate-y-[-4px] transition-all"
            >
              REQUEST ADMISSION
            </button>
            <button className="px-14 py-6 border border-[#00247D] text-[#00247D] text-[10px] font-black tracking-[0.2em] hover:bg-[#00247D] hover:text-white transition-all">
              VIEW THE CHARTER
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative group">
          <div className="aspect-[4/5] shadow-2xl overflow-hidden border-[16px] border-white relative">
            <img 
              src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
              alt="Sophisticated Thailand"
            />
            <div className="absolute inset-0 bg-[#00247D]/10 mix-blend-multiply opacity-30"></div>
          </div>
          <div className="absolute -bottom-12 -left-12 bg-[#D4AF37] p-12 text-[#00247D] shadow-[0_30px_60px_-15px_rgba(0,36,125,0.3)] max-w-[280px]">
             <div className="text-5xl font-serif font-bold mb-3 tracking-tighter">98%</div>
             <p className="text-[10px] font-black uppercase tracking-[0.2em] leading-normal opacity-80">
               Member commitment to sustainable partnership.
             </p>
          </div>
        </div>
      </div>

      <div className="bg-[#00247D] py-32 text-[#F9F8F1]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-24">
          <div className="space-y-6">
            <div className="w-12 h-[1px] bg-[#D4AF37] mb-8"></div>
            <h3 className="text-[#D4AF37] font-serif text-3xl italic">Vetting Protocols</h3>
            <p className="text-[#F9F8F1]/60 text-sm font-light leading-relaxed">Proprietary Gemini-AI verification combined with manual heritage vetting ensures a 100% authenticated registry.</p>
          </div>
          <div className="space-y-6">
            <div className="w-12 h-[1px] bg-[#D4AF37] mb-8"></div>
            <h3 className="text-[#D4AF37] font-serif text-3xl italic">Sustainable Union</h3>
            <p className="text-[#F9F8F1]/60 text-sm font-light leading-relaxed">We match for deep-layer architectural alignment—values, goals, and legacy potential.</p>
          </div>
          <div className="space-y-6">
            <div className="w-12 h-[1px] bg-[#D4AF37] mb-8"></div>
            <h3 className="text-[#D4AF37] font-serif text-3xl italic">Elite Academy</h3>
            <p className="text-[#F9F8F1]/60 text-sm font-light leading-relaxed">Exclusive lifelong learning in emotional intelligence, negotiation, and high-context cultural diplomacy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
