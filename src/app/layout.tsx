import type { Metadata } from 'next';
import { Caveat } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const font = Caveat({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Lists',
  description: 'Created by Zachary Clark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        data-theme="lofi"
        className={cn(font.className, 'min-h-screen bg-base-200')}
      >
        {children}
      </body>
    </html>
  );
}
