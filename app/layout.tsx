import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ChamaCore | The Core of Every Chama',
  description: 'Secure, transparent, and modern financial management for chamas and member groups.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
