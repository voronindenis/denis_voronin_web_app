'use client';

import React from 'react';

import cn from 'classnames';
import { Menu, X } from 'lucide-react';

import Button from '@/components/Button';
import { generateResponsiveClasses } from '@/lib/styles';

const weightClassNames = generateResponsiveClasses('w-', [4, 4, 4, 4, 4, 6, 8]);
const heightClassNames = generateResponsiveClasses('h-', [4, 4, 4, 4, 4, 6, 8]);

const iconClassNames = cn(weightClassNames, heightClassNames);
console.log(iconClassNames);
interface IHeaderMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

const HeaderMenuButton: React.FC<IHeaderMenuButtonProps> = (props) => {
  const { isOpen, onToggle } = props;

  return (
    <Button
      icon={isOpen ? <X className={iconClassNames} /> : <Menu className={iconClassNames} />}
      onClick={onToggle}
      shape='circle'
      size='large'
    />
  );
};

export default HeaderMenuButton;
