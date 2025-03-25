import React from 'react';

import { pipe } from 'fp-ts/function';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';

import { getYear, of } from '@/lib/dates';

import './globals.css';

import { ROUTES } from '@/lib/routes';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className='fixed top-0 w-full bg-blue-600 py-4 text-white'>
          <div className='container mx-auto flex items-center justify-between px-4 py-3'>
            {/* Logo */}
            <h1 className='text-xl font-bold'>Денис Воронин</h1>

            {/* Navigation */}
            <nav className='flex space-x-6'>
              <Link
                href={ROUTES.HOME}
                className='hover:text-gray-300'
              >
                Главная
              </Link>
              <Link
                href={ROUTES.BLOG}
                className='hover:text-gray-300'
              >
                Блог
              </Link>
              <Link
                href={ROUTES.SERVICES}
                className='hover:text-gray-300'
              >
                Услуги
              </Link>
              <Link
                href={ROUTES.CONTACTS}
                className='hover:text-gray-300'
              >
                Контакты
              </Link>
            </nav>
          </div>
        </header>

        <main className='container mx-auto flex-1 px-4 py-8'>{children}</main>

        <footer className='w-full bg-gray-800 py-4 text-white'>
          <div className='container mx-auto px-4 text-center text-sm'>{`© ${pipe(of(), getYear)} Все права защищены`}</div>
        </footer>
      </body>
    </html>
  );
}
