import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Disha web',
  description: 'Disha by Superstore',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container flex justify-center">
          <div className="min-h-screen w-full sm:w-360">{children}</div>
        </div>
      </body>
    </html>
  );
}
