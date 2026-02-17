
import React, { useState } from 'react';
import { Profile } from '../types';
import ProfileCard from '../components/ProfileCard';

interface DashboardProps {
  userProfile: Profile;
}

const MOCK_PROFILES: Profile[] = [
  {
    id: '1',
    name: 'Siri',
    age: 27,
    location: 'Bangkok, Thonglor',
    bio: 'An architect of modern spaces and ancient values. Looking for a partner whose life is built on the same foundations of integrity and vision.',
    interests: ['Fine Art', 'Sustainability', 'Global Finance'],
    imageUrl: 'https://images.unsplash.com/photo-1512413316925-fd4b93f31521?q=80&w=800&auto=format&fit=crop',
    isVerified: true,
    reputationScore: 92
  },
  {
    id: '2',
    name: 'Natt',
    age: 29,
    location: 'Chiang Mai, Nimman',
    bio: 'Practicing the discipline of slow living while scaling ethical technology. A student of northern heritage and a mentor of future systems.',
    interests: ['Systems Design', 'Slow Living', 'Northern History'],
    imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop',
    isVerified: true,
    reputationScore: 88
  },
  {
    id: '3',
    name: 'Mali',
    age: 24,
    location: 'Phuket, Old Town',
    bio: 'Dedicated to the preservation of the Andaman marine ecosystem. Seeking a dialogue that goes as deep as the ocean and as far as the stars.',
    interests: ['Marine Life', 'Cultural History', 'Meditation'],
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
    isVerified: true,
    reputationScore: 95
  }
];

const Dashboard: React.FC<DashboardProps> = ({ userProfile }) => {
  const [profiles, setProfiles] = useState(MOCK_PROFILES);

  const handleLike = (id: string) => {
    setProfiles(prev => prev.filter(p => p.id !== id));
  };

  const handlePass = (id: string) => {
    setProfiles(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="bg-[#F9F8F1] min-h-screen">
      
      {/* Sanctuary Header Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20 border-b border-[#00247D]/10 pb-16">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 border border-[#00247D] text-[#00247D] text-[9px] font-black uppercase tracking-[0.3em]">
              The Registry of Excellence
            </div>
            <h2 className="text-6xl font-serif font-bold text-[#00247D]">The <span className="text-[#D4AF37] italic">Sanctuary</span></h2>
            <p className="text-xl text-[#1B1B1B]/60 font-light max-w-2xl leading-relaxed">
              Curated for intellectual and emotional synergy. Every profile here has passed the Gemini vetting process and aligns with our charter of trust.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="bg-white p-8 border-l-4 border-[#D4AF37] shadow-xl min-w-[240px]">
               <div className="text-[9px] font-black uppercase tracking-widest text-[#00247D] mb-2">Member Status</div>
               <div className="flex items-baseline gap-2">
                 <span className="text-4xl font-serif text-[#00247D] font-bold">Elite</span>
                 <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-tighter">Gold Vetted</span>
               </div>
               <div className="mt-4 h-1.5 w-full bg-gray-100 overflow-hidden">
                 <div className="h-full bg-[#D4AF37] w-[85%] shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
               </div>
               <div className="mt-2 text-[8px] font-bold text-gray-400 uppercase tracking-widest">Reputation: {userProfile.reputationScore}/100</div>
            </div>
          </div>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-32">
          {profiles.length > 0 ? (
            profiles.map(profile => (
              <ProfileCard 
                key={profile.id} 
                profile={profile} 
                userProfile={userProfile}
                onLike={handleLike}
                onPass={handlePass}
              />
            ))
          ) : (
            <div className="col-span-full py-40 text-center border border-dashed border-[#00247D]/20">
               <h3 className="text-3xl font-serif italic text-gray-400 mb-4">A Moment of Reflection</h3>
               <p className="text-sm font-light text-gray-400 max-w-sm mx-auto">New candidates are currently undergoing vetting. Please return in 6 hours for updated synergies.</p>
               <button onClick={() => setProfiles(MOCK_PROFILES)} className="mt-8 text-[#00247D] text-[10px] font-black uppercase tracking-widest border-b border-[#00247D]">Request New Cycle</button>
            </div>
          )}
        </div>
      </div>

      {/* Academy & Mentorship Portal Section (Deep Forest) */}
      <section className="bg-[#1B4332] py-32 text-[#F9F8F1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="inline-block px-4 py-1 border border-[#D4AF37] text-[#D4AF37] text-[9px] font-black uppercase tracking-[0.3em]">
                Growth & Lineage
              </div>
              <h2 className="text-5xl font-serif font-bold text-[#F9F8F1]">The <span className="text-[#D4AF37] italic">Mentorship Academy</span></h2>
              <p className="text-lg font-light opacity-70 leading-relaxed max-w-lg">
                Excellence is not found; it is cultivated. Access exclusive masterclasses on emotional architecture, Thai cultural diplomacy, and sustainable partnership development.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-6 border border-white/10 hover:border-[#D4AF37]/50 transition-all cursor-pointer">
                  <div className="text-[#D4AF37] text-2xl mb-4 font-serif italic">01</div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Heritage Intelligence</h4>
                  <p className="text-xs opacity-50 font-light">Navigating the nuances of Thai social architecture.</p>
                </div>
                <div className="p-6 border border-white/10 hover:border-[#D4AF37]/50 transition-all cursor-pointer">
                  <div className="text-[#D4AF37] text-2xl mb-4 font-serif italic">02</div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Emotional Precision</h4>
                  <p className="text-xs opacity-50 font-light">The art of direct yet respectful communication.</p>
                </div>
              </div>
              <button className="bg-[#A51931] text-white px-10 py-5 text-[10px] font-black tracking-[0.2em] shadow-2xl">
                ENTER THE ACADEMY
              </button>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-[#00247D]/20 overflow-hidden border-8 border-[#F9F8F1]/10">
                 <img 
                  src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000" 
                  alt="Ancient Thai Wisdom"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-[#D4AF37] p-10 text-[#00247D] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] max-w-xs">
                <h4 className="text-[10px] font-black uppercase tracking-widest mb-4">Next Fellowship Event</h4>
                <p className="font-serif text-2xl font-bold leading-tight italic">"The Philosophy of Lasting Synergy"</p>
                <p className="mt-4 text-[9px] font-bold opacity-60">Live from The Mandarin, Bangkok / OCT 24</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Dashboard;
