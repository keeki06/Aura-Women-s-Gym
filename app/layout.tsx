import type {Metadata} from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ZENOVA | Luxury Women\'s Gym & Sanctuary',
  description: 'Experience a bold, dark-themed luxury fitness sanctuary with neon and gold accents, offering specialized Zumba, Yoga, Strength Training, and premium private training designed exclusively for women.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#080709] text-[#EBE9ED] font-sans antialiased min-h-screen text-base overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
