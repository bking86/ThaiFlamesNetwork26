
import React from 'react';
import { Profile } from '../types';

interface CirclesProps {
  userProfile: Profile;
}

const MOCK_MATCHES: (Profile & { trustLevel: string })[] = [
  {
    id: 'm1',
    name: 'Ananda',
    age: 31,
    location: 'Bangkok, Riverside',
    bio: 'Focused on heritage restoration and high-impact philanthropy. Seeking a synergy of purpose.',
    interests: ['Philanthropy', 'Architecture'],
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
    isVerified: true,
    reputationScore: 98,
    trustLevel: 'Diamond'
  },
  {
    id: 'm2',
    name: 'Pim',
    age: 28,
    location: 'Chiang Mai, Mae Rim',
    bio: 'An educator of traditional arts in a digital age. Let’s build a legacy together.',
    interests: ['Fine Arts', 'Education'],
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    isVerified: true,
    reputationScore: 94,
    trustLevel: 'Gold'
  }
];

const Circles: React.FC<CirclesProps> = () => {
  return (
    <div className="bg-[#F9F8F1] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 border-b border-[#00247D]/10 pb-12">
           <h2 className="text-5xl font-serif font-bold text-[#00247D] mb-4">Active <span className="text-[#D4AF37] italic">Circles</span></h2>
           <p className="text-lg text-[#1B1B1B]/50 font-light max-w-xl">
             Your established synergies. These connections have passed mutual vetting and are currently in active dialogue.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {MOCK_MATCHES.map(match => (
            <div key={match.id} className="bg-white border border-[#D4AF37]/20 p-2 flex flex-col sm:flex-row gap-8 hover:shadow-xl transition-all duration-500 group">
              <div className="w-full sm:w-48 aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={match.imageUrl} className="w-full h-full object-cover" alt={match.name} />
              </div>
              <div className="flex-1 py-4 pr-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-serif font-bold text-[#00247D]">{match.name}</h3>
                    <span className="bg-[#D4AF37] text-[#00247D] text-[8px] font-black px-2 py-1 uppercase tracking-widest">{match.trustLevel} Tier</span>
                  </div>
                  <p className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-[0.2em] mb-4">{match.location}</p>
                  <p className="text-xs text-[#1B1B1B]/60 italic font-light leading-relaxed">"{match.bio}"</p>
                </div>
                
                <div className="mt-8 flex items-center justify-between border-t border-gray-50 pt-6">
                  <div className="space-y-1">
                    <span className="text-[8px] font-black uppercase text-gray-300 tracking-widest">Synergy Index</span>
                    <div className="text-xl font-serif text-[#00247D]">{match.reputationScore}%</div>
                  </div>
                  <button className="bg-[#00247D] text-white px-6 py-3 text-[9px] font-black uppercase tracking-[0.2em] hover:bg-[#A51931] transition-all">
                    RESUME DIALOGUE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Circles;
