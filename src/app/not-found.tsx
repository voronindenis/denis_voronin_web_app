import React from 'react';

import Link from 'next/link';

import { ROUTES } from '@/lib/routes';

const NotFound: React.FC = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 text-center'>
      <h1 className='mb-2 text-4xl font-bold text-gray-800'>Страница не найдена</h1>
      <p className='mb-6 text-gray-600'>Извините, мы не смогли найти то, что вы ищете.</p>
      <Link
        href={ROUTES.HOME}
        className='inline-block rounded bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700'
      >
        На главную
      </Link>
    </div>
  );
};

NotFound.displayName = 'NotFound';

export default NotFound;
