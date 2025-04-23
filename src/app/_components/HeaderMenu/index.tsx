'use client';

import React from 'react';

import cn from 'classnames';

import FlexBox from '@/components/FlexBox';
import { generateResponsiveClasses } from '@/lib/styles';

import HeaderMenuButton from './components/HeaderMenuButton';
import HeaderMenuDrawer from './components/HeaderMenuDrawer';
import HeaderMenuText from './components/HeaderMenuText';

const pb = generateResponsiveClasses('pb-', [2, 2, 2, 2, 2, 2, 6]);
const pt = generateResponsiveClasses('pt-', [4, 4, 4, 4, 4, 4, 12]);

const HeaderMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const ref = React.useRef<HTMLDivElement>(null);

  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={cn('relative top-0 z-50 w-full pt-4')}
      ref={ref}
    >
      <FlexBox direction='col'>
        <FlexBox
          alignItems='end'
          justifyContent='between'
          className={cn('w-22/24 mx-auto', pb, pt)}
        >
          <HeaderMenuText />
          <HeaderMenuButton
            isOpen={isOpen}
            onToggle={onToggle}
          />
        </FlexBox>
        <HeaderMenuDrawer
          isOpen={isOpen}
          onClose={onClose}
          parentRef={ref}
        />
      </FlexBox>
    </header>
  );
};

export default HeaderMenu;
