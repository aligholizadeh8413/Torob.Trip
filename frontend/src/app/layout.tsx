import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'ترب تریپ | هوشمندانه‌تر سفر کن', description: 'کشف و مقایسه گزینه‌های سفر در ترب تریپ' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" dir="rtl"><body>{children}</body></html>;
}
