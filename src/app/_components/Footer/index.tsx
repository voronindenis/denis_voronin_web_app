'use client';

import React from 'react';

import { pipe } from 'fp-ts/function';

import { getYear, of } from '@/lib/dates';

const Footer: React.FC = () => (
  <footer className='w-full bg-gray-800 py-4 text-white'>
    <div className='container mx-auto px-4 text-center text-sm'>{`© ${pipe(of(), getYear)} Все права защищены`}</div>
  </footer>
);

Footer.displayName = 'Footer';

export default Footer;
