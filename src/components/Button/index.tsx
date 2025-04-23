'use client';

import React, { MouseEventHandler } from 'react';

import cn from 'classnames';

import { generateResponsiveClasses } from '@/lib/styles';

const largeWeightClassNames = generateResponsiveClasses('min-w-', [8, 8, 8, 8, 8, 12, 16]);
const largeHeightClassNames = generateResponsiveClasses('min-h-', [8, 8, 8, 8, 8, 12, 16]);
const mediumWeightClassNames = generateResponsiveClasses('min-w-', [6, 6, 6, 6, 6, 8, 12]);
const mediumHeightClassNames = generateResponsiveClasses('min-h-', [6, 6, 6, 6, 6, 8, 12]);

interface IButtonProps {
  children?: React.ReactNode; // children elements to be rendered inside the button
  icon?: React.ReactNode; // icon to be rendered inside the button
  iconPosition?: 'left' | 'right'; // position of the icon, default is 'left'
  onClick?: (e: React.SyntheticEvent) => void; // function to be called on button click
  onMouseDown?: MouseEventHandler; // function to be called on button mouse down
  shape?: 'rounded' | 'circle'; // shape of the button, default is 'rounded'
  size?: 'medium' | 'large'; // size of the button, default is 'medium'
  variant?: 'outlined' | 'text'; // variant of the button, default is 'primary'
}

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const {
    children,
    icon,
    iconPosition = 'left',
    onClick,
    onMouseDown,
    shape = 'square',
    size = 'medium',
    variant = 'outlined',
  } = props;

  const outlinedClassNames = cn({
    'border-2 border-(--color-border)': variant === 'outlined',
    'hover:border-(--color-border-hover)': variant === 'outlined',
    'active:border-(--color-border-active)': variant === 'outlined',
    'active:text-(--color-text-active)': variant === 'outlined',
    'hover:text-(--color-text-hover)': variant === 'outlined',
  });

  const textClassNames = cn({
    'active:text-(--color-text-active)': variant === 'text',
    'hover:text-(--color-text-hover)': variant === 'text',
  });

  const roundedClassNames = cn({
    'rounded-xl': shape === 'rounded',
  });

  const circleClassNames = cn({
    'rounded-full': shape === 'circle',
  });

  const mediumClassNames = cn({
    [mediumHeightClassNames]: size === 'medium',
    [mediumWeightClassNames]: size === 'medium',
  });

  const largeClassNames = cn({
    [largeHeightClassNames]: size === 'large',
    [largeWeightClassNames]: size === 'large',
  });

  const classNames = cn(
    circleClassNames,
    largeClassNames,
    mediumClassNames,
    outlinedClassNames,
    roundedClassNames,
    textClassNames,
    'cursor-pointer',
    'flex',
    'items-center',
    'justify-center',
    'mx-1',
    'my-0.5',
    'px-1',
    'py-1',
    'text-foreground',
    'transition-all',
  );

  return (
    <button
      className={classNames}
      onClick={onClick}
      onMouseDown={onMouseDown}
      ref={ref}
    >
      {icon && iconPosition === 'left' && <div className='p-1'>{icon}</div>}
      {children}
      {icon && iconPosition === 'right' && <div className='p-1'>{icon}</div>}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
