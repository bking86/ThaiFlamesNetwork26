
import React from 'react';

const Academy: React.FC = () => {
  const modules = [
    { title: 'The Architecture of Trust', duration: '4 Sessions', level: 'Foundation' },
    { title: 'Thai Cultural Diplomacy', duration: '6 Sessions', level: 'Intermediate' },
    { title: 'Emotional Intelligence in Union', duration: '3 Sessions', level: 'Advanced' },
    { title: 'The Legacy Partnership', duration: '8 Sessions', level: 'Elite' }
  ];

  return (
    <div className="bg-[#1B4332] min-h-screen py-24 text-[#F9F8F1]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-block px-4 py-1 border border-[#D4AF37] text-[#D4AF37] text-[9px] font-black uppercase tracking-[0.3em]">
              Mentorship Portal
            </div>
            <h2 className="text-6xl font-serif font-bold leading-tight">The <span className="text-[#D4AF37] italic">Wisdom</span> Registry</h2>
            <p className="text-lg font-light opacity-60 leading-relaxed">
              Ascend through the tiers of the Thai Flames Network. By engaging with our mentorship modules, you refine your reputation and unlock higher-tier synergy circles.
            </p>
            
            <div className="pt-12 border-t border-white/10 space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">Your Progress</span>
                <span className="text-sm font-serif italic">Intermediate Tier</span>
              </div>
              <div className="h-1 bg-white/10 w-full">
                <div className="h-full bg-[#D4AF37] w-[45%]"></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {modules.map((m, i) => (
              <div key={i} className="group p-8 border border-white/5 hover:border-[#D4AF37]/40 transition-all bg-white/5 cursor-pointer">
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <span className="text-[9px] font-black text-[#D4AF37] uppercase tracking-widest">Module 0{i+1} — {m.level}</span>
                    <h4 className="text-2xl font-serif font-bold group-hover:text-[#D4AF37] transition-colors">{m.title}</h4>
                    <p className="text-[10px] opacity-40 font-bold uppercase tracking-widest">{m.duration}</p>
                  </div>
                  <div className="text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Academy;
