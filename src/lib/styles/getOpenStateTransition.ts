import cn from 'classnames';

export const getOpenStateTransition = (isOpen: boolean) =>
  cn({
    'transition-all duration-300 ease-in-out': !isOpen,
    'transition-all duration-300 ease-in-out delay-150': isOpen,
  });
