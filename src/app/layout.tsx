import React from 'react';

import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

import { bauhasFont } from '@/fonts/bauhas';

import './globals.css';

import Footer from '@/app/_components/Footer';

import HeaderMenu from './_components/HeaderMenu';

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['cyrillic'],
});

export const metadata: Metadata = {
  title: 'Denis Voronin',
  description: 'Denis Voronin personal website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={`${raleway.variable} ${bauhasFont.variable} antialiased`}>
        <HeaderMenu />

        <main className='w-full'>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
