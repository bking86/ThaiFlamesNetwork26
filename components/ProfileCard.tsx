
import React, { useState } from 'react';
import { Profile } from '../types';
import { analyzeMatch } from '../services/geminiService';

interface ProfileCardProps {
  profile: Profile;
  userProfile: Profile;
  onLike: (id: string) => void;
  onPass: (id: string) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, userProfile, onLike, onPass }) => {
  const [analysis, setAnalysis] = useState<{ score: number; reasoning: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const runAiAnalysis = async () => {
    if (analysis || loading) return;
    setLoading(true);
    const result = await analyzeMatch(userProfile, profile);
    setAnalysis(result);
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-sm overflow-hidden border border-[#D4AF37]/10 transition-all hover:shadow-[0_15px_40px_-15px_rgba(0,36,125,0.15)] flex flex-col group">
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
        <img 
          src={profile.imageUrl} 
          alt={profile.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        
        {profile.isVerified && (
          <div className="absolute top-5 left-5 bg-[#D4AF37] text-[#00247D] px-3 py-1 text-[9px] font-black tracking-[0.2em] uppercase shadow-xl border border-white/20">
            Verified Excellence
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#00247D]/80 via-transparent to-transparent opacity-90" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 text-[#F9F8F1]">
          <div className="flex items-baseline gap-3 mb-2">
            <h3 className="text-3xl font-serif font-bold tracking-tight">{profile.name}</h3>
            <span className="text-lg font-light opacity-50 italic">{profile.age}</span>
          </div>
          <div className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#D4AF37]">
            {profile.location}
          </div>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1 bg-white">
        <p className="text-[#1B1B1B]/70 text-sm leading-relaxed mb-8 font-light italic border-l-2 border-[#D4AF37] pl-6 py-1">
          "{profile.bio}"
        </p>

        <div className="mt-auto space-y-6">
          {!analysis && !loading && (
            <button 
              onClick={runAiAnalysis}
              className="w-full text-[#00247D] border border-[#00247D]/30 py-3 text-[9px] font-black uppercase tracking-[0.2em] hover:bg-[#00247D] hover:text-white transition-all shadow-sm"
            >
              Analyze Partnership Synergy
            </button>
          )}

          {loading && (
            <div className="w-full text-center py-3 text-[9px] font-black uppercase tracking-[0.2em] text-[#D4AF37] animate-pulse">
              Consulting Gemini Protocols...
            </div>
          )}

          {analysis && (
            <div className="bg-[#F9F8F1] p-5 border border-[#D4AF37]/20 shadow-inner">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[9px] font-black text-[#D4AF37] uppercase tracking-widest">Synergy Index</span>
                <span className="text-xl font-serif font-bold text-[#00247D]">{analysis.score}%</span>
              </div>
              <p className="text-xs text-[#1B1B1B]/80 font-medium leading-relaxed italic">"{analysis.reasoning}"</p>
            </div>
          )}

          <div className="flex gap-4">
            <button 
              onClick={() => onPass(profile.id)}
              className="flex-1 py-4 text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-[#A51931] transition-colors"
            >
              Dismiss
            </button>
            <button 
              onClick={() => onLike(profile.id)}
              className="flex-[2] py-4 bg-[#A51931] text-white text-[9px] font-black uppercase tracking-[0.2em] shadow-lg hover:bg-[#8a1529] transition-all"
            >
              Send Connection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
