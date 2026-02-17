
export interface Profile {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  interests: string[];
  imageUrl: string;
  isVerified?: boolean;
  reputationScore?: number;
  aiScore?: number;
  aiReasoning?: string;
}

export interface UserState {
  isLoggedIn: boolean;
  profile?: Profile;
}

export type AppView = 'landing' | 'onboarding' | 'dashboard' | 'matches' | 'chat';
