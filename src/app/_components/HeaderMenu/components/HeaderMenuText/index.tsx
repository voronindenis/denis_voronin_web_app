import React from 'react';

import cn from 'classnames';
import Link from 'next/link';

import { ROUTES } from '@/lib/routes';
import { generateResponsiveClasses } from '@/lib/styles';

const text = generateResponsiveClasses('text-', ['2xl', '2xl', '2xl', '2xl', '2xl', '4xl', '6xl']);
const extraTextHidden = generateResponsiveClasses('', [
  '',
  'hidden',
  'hidden',
  'hidden',
  'hidden',
  'hidden',
  'hidden',
  'hidden',
  'block',
]);

const HeaderMenuText: React.FC = () => (
  <>
    <Link href={ROUTES.HOME}>
      <h1 className={cn('font-(family-name:--font-bauhas) font-bold tracking-wide', text)}>
        Студия
        <br /> Дениса Воронина
      </h1>
    </Link>
    <h2 className={cn('text-3xl font-medium', extraTextHidden)}>Разработка приложений для Вашего бизнеса</h2>
  </>
);

HeaderMenuText.displayName = 'HeaderMenuText';

export default HeaderMenuText;
