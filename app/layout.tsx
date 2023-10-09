import './globals.css';
import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';

import Providers from './providers';

const fira = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GreenIntCo',
  description: 'A test project for GreenIntCo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${fira.className} bg-primary text-white`}>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
