'use client';

import React from 'react';

import cn from 'classnames';
import Link from 'next/link';

import Drawer from '@/components/Drawer';
import FlexBox from '@/components/FlexBox';
import GridMenu from '@/components/GridMenu';
import { IGridMenuCard } from '@/components/GridMenuCard';
import { ROUTES } from '@/lib/routes';
import { getOpenStateTransition } from '@/lib/styles';

const CARDS: IGridMenuCard[] = [
  {
    id: '1',
    title: 'Статьи и новости',
    description: 'Блог',
    descriptionColor: 'text-green-500',
    link: ROUTES.BLOG,
  },
  {
    id: '2',
    title: 'Вдохновиться примерами',
    description: 'Портфолио',
    descriptionColor: 'text-pink-500',
    link: ROUTES.PORTFOLIO,
  },
  {
    id: '3',
    title: 'Решения и исследования',
    description: 'Услуги',
    descriptionColor: 'text-yellow-400',
    link: ROUTES.SERVICES,
  },
  {
    id: '4',
    title: 'Будем на связи',
    description: 'Контакты',
    descriptionColor: 'text-indigo-500',
    link: ROUTES.CONTACTS,
  },
];

const FOOTER_LINKS = [
  { label: 'Youtube', href: '#' },
  { label: 'Telegram', href: '#' },
  { label: 'Habr', href: '#' },
  { label: 'Rutube', href: '#' },
  { label: 'VK Video', href: '#' },
  { label: 'Дзен', href: '#' },
];

interface IHeaderMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  parentRef: React.RefObject<HTMLDivElement | null>;
}

const HeaderMenuDrawer: React.FC<IHeaderMenuDrawerProps> = (props) => {
  const { parentRef, onClose, isOpen } = props;
  const divWithBorderRef = React.useRef<HTMLDivElement>(null);

  const classNames = React.useMemo(
    () =>
      cn(
        'border-b-1 mx-auto',
        {
          'w-22/24': !isOpen,
          'w-full': isOpen,
          'border-b-2 border-b-(--color-border)': !isOpen,
          'border-b-2 border-b-(--color-border-active)': isOpen,
        },
        getOpenStateTransition(isOpen),
      ),
    [isOpen],
  );

  const onCardClick = (_card: IGridMenuCard) => {
    onClose();
  };

  return (
    <>
      <FlexBox
        className='w-full pt-2'
        justifyContent='center'
        ref={divWithBorderRef}
      >
        <div className={classNames} />
      </FlexBox>
      <Drawer
        hideCloseButton={true}
        isOpen={isOpen}
        onClose={onClose}
        position='bottom'
        targetRef={parentRef.current ? parentRef : divWithBorderRef}
      >
        <GridMenu
          cards={CARDS}
          footer={
            <>
              {FOOTER_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className='text-2xl'
                >
                  {label}
                </Link>
              ))}
            </>
          }
          onCardClick={onCardClick}
        />
      </Drawer>
    </>
  );
};

export default HeaderMenuDrawer;
