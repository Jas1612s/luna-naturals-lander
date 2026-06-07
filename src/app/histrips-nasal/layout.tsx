import './histrips-nasal.css';

export const metadata = { title: 'Nasal HiStrips — Performance Nasal Strips' };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="hs-pdp-page">{children}</div>;
}
