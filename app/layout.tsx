import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RedStone Realty | Luxury Properties',
  description: 'Luxury Homes, Apartments, and Commercial Properties Across Prime Locations',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`dark ${inter.className} scroll-smooth`}>
      <body className="bg-[#0A0A0A] text-white min-h-screen selection:bg-[#FF1E1E]/30 relative flex flex-col" suppressHydrationWarning>
        <div className="fixed top-[-100px] right-[-100px] w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none z-[-1]"></div>
        <div className="fixed bottom-[-50px] left-[-50px] w-[300px] h-[300px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none z-[-1]"></div>
        {children}
      </body>
    </html>
  );
}
