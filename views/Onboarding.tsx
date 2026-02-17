
import React, { useState } from 'react';
import { generateBio } from '../services/geminiService';
import { Profile } from '../types';

interface OnboardingProps {
  onComplete: (profile: Profile) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [age, setAge] = useState(25);
  const [keywords, setKeywords] = useState('');
  const [tone, setTone] = useState('Sophisticated & Direct');
  const [bio, setBio] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateBio = async () => {
    setIsGenerating(true);
    const result = await generateBio(keywords, tone);
    setBio(result);
    setIsGenerating(false);
  };

  const handleFinish = () => {
    onComplete({
      id: 'current-user',
      name,
      age,
      location: 'Bangkok, Thailand',
      bio,
      interests: keywords.split(',').map(k => k.trim()),
      imageUrl: 'https://picsum.photos/seed/me/400/600',
      isVerified: true,
      reputationScore: 85
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-20 min-h-[80vh] flex flex-col justify-center bg-[#F9F8F1]">
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-2">
           <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.3em]">Vetting Phase</span>
           <div className="flex-1 h-[1px] bg-[#D4AF37]/20" />
           <span className="text-[10px] font-bold text-[#00247D] uppercase tracking-widest">{step} / 2</span>
        </div>
      </div>

      {step === 1 && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-serif text-[#1B1B1B]">Initial Identification</h2>
            <p className="text-[#1B1B1B]/60 font-light">Accuracy is foundational to our collective trust.</p>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#00247D]">Legal Full Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Identity for the registry" 
                className="w-full px-6 py-4 bg-white border border-[#00247D]/10 focus:outline-none focus:border-[#D4AF37] transition-all text-lg font-light shadow-sm"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#00247D]">Biological Age</label>
              <input 
                type="number" 
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value))}
                className="w-full px-6 py-4 bg-white border border-[#00247D]/10 focus:outline-none focus:border-[#D4AF37] transition-all text-lg font-light shadow-sm"
              />
            </div>
            <button 
              disabled={!name}
              onClick={() => setStep(2)}
              className="w-full py-5 bg-[#00247D] text-white text-xs font-bold tracking-[0.3em] uppercase hover:bg-[#1B1B1B] disabled:opacity-30 transition-all"
            >
              Confirm & Proceed ➔
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-serif text-[#1B1B1B]">Ethos & Values</h2>
            <p className="text-[#1B1B1B]/60 font-light">Defining your place within the network.</p>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#00247D]">Character Pillars (Keywords)</label>
              <textarea 
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="e.g. Intellectual curiosity, cultural heritage, long-term legacy..." 
                rows={3}
                className="w-full px-6 py-4 bg-white border border-[#00247D]/10 focus:outline-none focus:border-[#D4AF37] transition-all text-base font-light shadow-sm resize-none"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {['Sophisticated & Direct', 'Philosophical', 'Quietly Elegant', 'Traditional'].map(t => (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  className={`py-3 text-[10px] font-bold uppercase tracking-widest border transition-all ${tone === t ? 'bg-[#D4AF37] text-white border-[#D4AF37]' : 'bg-white text-[#00247D] border-[#00247D]/10 hover:border-[#00247D]'}`}
                >
                  {t}
                </button>
              ))}
            </div>
            
            {!bio && (
              <button 
                onClick={handleGenerateBio}
                disabled={isGenerating || !keywords}
                className="w-full py-5 border border-[#00247D] text-[#00247D] text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-3 hover:bg-[#F9F8F1] transition-all disabled:opacity-30"
              >
                {isGenerating ? 'Analyzing Core Values...' : 'Construct AI Narrative Profile'}
              </button>
            )}

            {bio && (
              <div className="animate-in zoom-in-95 duration-500 space-y-4">
                <div className="p-8 bg-white border border-[#D4AF37]/30 shadow-sm relative group focus-within:border-[#D4AF37] transition-colors">
                  <div className="absolute top-0 right-0 p-4 flex gap-4">
                     <span className="text-[8px] font-black uppercase text-gray-300 tracking-widest">Editable Narrative</span>
                     <button 
                        onClick={handleGenerateBio} 
                        className="text-[9px] font-bold uppercase text-[#D4AF37] hover:underline flex items-center gap-1"
                      >
                        Re-calibrate ↺
                      </button>
                  </div>
                  <label className="text-[9px] font-bold uppercase text-[#00247D]/40 block mb-4 tracking-widest">
                    AI Narrative Assistance
                  </label>
                  <textarea 
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Refine your narrative here..."
                    className="w-full bg-transparent text-[#1B1B1B] leading-relaxed focus:outline-none resize-y font-serif text-lg italic min-h-[160px]"
                  />
                  <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                    <p className="text-[10px] text-gray-400 italic">
                      Tip: Personalize the generated text to better reflect your unique voice.
                    </p>
                    <span className="text-[9px] font-bold text-[#D4AF37] opacity-0 group-focus-within:opacity-100 transition-opacity uppercase tracking-tighter">Editing Active</span>
                  </div>
                </div>
              </div>
            )}

            {bio && (
              <button 
                onClick={handleFinish}
                className="w-full py-6 bg-[#A51931] text-white text-sm font-bold tracking-[0.3em] uppercase shadow-xl hover:opacity-90 transition-all"
              >
                SUBMIT FOR FINAL VETTING
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Onboarding;
