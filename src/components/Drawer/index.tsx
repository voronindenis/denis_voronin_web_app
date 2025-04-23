'use client';

import React from 'react';

import cn from 'classnames';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

import Button from '@/components/Button';
import FlexBox from '@/components/FlexBox';
import { getOpenStateTransition } from '@/lib/styles';

const CLOSE_BUTTON_SIZE = 66;

interface DrawerProps {
  children: React.ReactNode;
  className?: string;
  hideCloseButton?: boolean;
  isOpen: boolean;
  onClose: () => void;
  position: 'top' | 'right' | 'bottom' | 'left';
  targetRef?: React.RefObject<HTMLElement | null>;
}

const Drawer: React.FC<DrawerProps> = (props) => {
  const { children, className, hideCloseButton, isOpen, onClose, position, targetRef } = props;
  const drawerRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState<number | null>(null);
  const [width, setWidth] = React.useState<number | null>(null);
  const [coords, setCoords] = React.useState<React.CSSProperties>({});
  const [mounted, setMounted] = React.useState(false);
  const [wrapper, setWrapper] = React.useState<HTMLElement | null>(null);

  const transition = getOpenStateTransition(isOpen);

  const transformStyles = {
    top: 'w-full',
    bottom: 'w-full',
    left: 'h-full',
    right: 'h-full',
  };

  const inlineStylesByPosition: Record<string, React.CSSProperties> = React.useMemo(
    () => ({
      top: { height: isOpen ? (height ?? 0) + (hideCloseButton ? 0 : CLOSE_BUTTON_SIZE) + 'px' : '0px' },
      bottom: { height: isOpen ? (height ?? 0) + (hideCloseButton ? 0 : CLOSE_BUTTON_SIZE) + 'px' : '0px' },
      left: { width: isOpen ? (width ?? 0) + (hideCloseButton ? 0 : CLOSE_BUTTON_SIZE) + 'px' : '0px' },
      right: { width: isOpen ? (width ?? 0) + (hideCloseButton ? 0 : CLOSE_BUTTON_SIZE) + 'px' : '0px' },
    }),
    [height, hideCloseButton, isOpen, width],
  );

  const drawerInlineStyles: React.CSSProperties = React.useMemo(
    () => ({
      ...inlineStylesByPosition[position],
      ...coords,
    }),
    [coords, inlineStylesByPosition, position],
  );

  const overlayInlineStyles: React.CSSProperties = React.useMemo(
    () => ({
      inset: `${coords.top ?? 0}px ${coords.right ?? 0}px ${coords.bottom ?? 0}px ${coords.left ?? 0}px`,
    }),
    [coords.bottom, coords.left, coords.right, coords.top],
  );

  // Get target position
  React.useLayoutEffect(() => {
    const rect = (targetRef?.current ?? document.body).getBoundingClientRect();
    const pos: React.CSSProperties = {
      position: 'absolute',
    };

    switch (position) {
      case 'top':
        pos.top = rect.top > rect.height ? rect.top : rect.height;
        break;
      case 'bottom':
        pos.top = rect.bottom > rect.height ? rect.bottom : rect.height;
        break;
      case 'left':
        pos.left = rect.left > rect.width ? rect.left : rect.width;
        break;
      case 'right':
        pos.left = rect.right > rect.width ? rect.right : rect.width;
        break;
      default:
        break;
    }

    setCoords(pos);
  }, [targetRef, isOpen, position]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(e.target as Node) &&
        !targetRef?.current?.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, targetRef]);

  React.useLayoutEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.scrollHeight);
      setWidth(containerRef.current.scrollWidth);
    }
  }, [children]); // re-run if children change

  React.useEffect(() => {
    const el = document.createElement('div');
    document.body.appendChild(el);

    setWrapper(el);
    setMounted(true);

    return () => {
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    };
  }, []);

  if (!mounted || !wrapper) return null;

  return createPortal(
    <>
      {/* Overlay */}
      <div
        aria-hidden='true'
        className={cn('fixed bg-black', transition, { 'opacity-0': !isOpen, 'opacity-50': isOpen })}
        style={overlayInlineStyles}
      />
      {/* Drawer Panel */}
      <FlexBox
        className={cn('bg-(--color-background) z-40 overflow-hidden', transition, transformStyles[position], className)}
        ref={drawerRef}
        style={drawerInlineStyles}
      >
        <FlexBox
          className='h-full w-full'
          direction='col'
        >
          {!hideCloseButton && (
            <FlexBox
              className='h-full w-full'
              justifyContent={position === 'left' ? 'start' : 'end'}
            >
              <Button
                size='large'
                icon={<X size={32} />}
                onClick={onClose}
                variant='text'
              />
            </FlexBox>
          )}
          <div
            className='w-full'
            ref={containerRef}
          >
            {children}
          </div>
        </FlexBox>
      </FlexBox>
    </>,
    wrapper,
  );
};

Drawer.displayName = 'Drawer';

export default Drawer;
