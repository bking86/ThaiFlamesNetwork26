
// Add missing React import to provide the React namespace for types like ReactNode
import React from 'react';
import './globals.css';
import { Lora, Montserrat } from 'next/font/google';

const lora = Lora({ 
  subsets: ['latin'], 
  variable: '--font-lora',
  weight: ['400', '600', '700'] 
});

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'] 
});

export const metadata = {
  title: 'Thai Flames Network | National-Premium Matchmaking',
  description: 'A high-trust collective for the sustainable advancement of cultural partnership.',
};

export default function RootLayout({
  children,
}: {
  // Use React.ReactNode which is now accessible via the React import
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${montserrat.variable}`}>
      <body className="bg-[#F9F8F1] text-[#1B1B1B] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
