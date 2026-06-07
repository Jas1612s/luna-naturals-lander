import { Barlow_Condensed, Nunito } from 'next/font/google';
import type { Metadata } from 'next';
import './pdp.css';

/* Headings — bold condensed (matches the packaging label style) */
const barlow = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['400', '600', '700', '800', '900'],
  style: ['normal'],
});

/* Body — friendly rounded sans */
const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Kids Mosquito Repellent Patches | Luna Naturals',
  description: 'DEET-free, plant-based mosquito repellent patches made for kids from 6 months+. 12-hour protection. Safe, mess-free, waterproof.',
};

export default function LunaPdpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${barlow.variable} ${nunito.variable} ln-pdp-page`}>
      {children}
    </div>
  );
}
