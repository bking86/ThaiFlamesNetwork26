
"use client";

import React, { useState } from 'react';
import Layout from './components/Layout';
import Landing from './views/Landing';
import Onboarding from './views/Onboarding';
import Dashboard from './views/Dashboard';
import Circles from './views/Circles';
import Academy from './views/Academy';
import { AppView, Profile } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState<Profile | undefined>();

  const handleStart = () => {
    setView('onboarding');
  };

  const handleOnboardingComplete = (profile: Profile) => {
    setUserProfile(profile);
    setIsLoggedIn(true);
    setView('dashboard');
  };

  const renderView = () => {
    switch (view) {
      case 'landing':
        return <Landing onStart={handleStart} />;
      case 'onboarding':
        return <Onboarding onComplete={handleOnboardingComplete} />;
      case 'dashboard':
        return userProfile ? <Dashboard userProfile={userProfile} /> : null;
      case 'matches':
        return userProfile ? <Circles userProfile={userProfile} /> : null;
      case 'chat':
        return (
          <div className="max-w-6xl mx-auto px-4 py-40 text-center bg-[#F9F8F1] min-h-screen">
            <h2 className="text-4xl font-serif mb-6 text-[#00247D]">The <span className="text-[#D4AF37] italic">Dialogues</span></h2>
            <p className="text-[#1B1B1B]/40 font-light max-w-sm mx-auto">Encrypted communication channels are currently being optimized for member privacy. Expected online in 48 hours.</p>
            <button 
              onClick={() => setView('dashboard')}
              className="mt-12 px-8 py-4 bg-[#00247D] text-white text-[10px] font-black tracking-[0.2em] uppercase"
            >
              Return to Sanctuary
            </button>
          </div>
        );
      case 'academy' as any: // Handling the Academy view link from the nav
        return <Academy />;
      default:
        return <Landing onStart={handleStart} />;
    }
  };

  // Intercepting 'matches' to mean 'circles' and 'academy' via type casting or simple logic
  const activeViewForLayout = view;

  return (
    <Layout activeView={activeViewForLayout} setView={(v) => setView(v)} isLoggedIn={isLoggedIn}>
      {renderView()}
    </Layout>
  );
};

export default App;
