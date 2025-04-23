import React from 'react';

import cn from 'classnames';

interface IFlexBoxProps {
  children: React.ReactNode; // children elements to be rendered inside the FlexBox
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse'; // flex direction, default is 'row'
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around'; // justify content, default is 'between'
  alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'; // align items, default is 'center'
  className?: string; // additional classes to be passed
  style?: React.CSSProperties; // additional styles to be passed
}

const FlexBox = React.forwardRef<HTMLDivElement, IFlexBoxProps>((props, ref) => {
  const {
    children,
    direction = 'row', // default flex direction is row
    justifyContent = 'start', // default justifyContent is 'start'
    alignItems = 'start', // default alignItems is 'start'
    className = '', // allows additional classes to be passed
    style, // allows additional styles to be passed
  } = props;

  const classNames = React.useMemo(
    () =>
      cn(
        'flex',
        className,
        { 'flex-row': direction === 'row' },
        { 'flex-col': direction === 'col' },
        { 'flex-row-reverse': direction === 'row-reverse' },
        { 'flex-col-reverse': direction === 'col-reverse' },
        { 'justify-start': justifyContent === 'start' },
        { 'justify-end': justifyContent === 'end' },
        { 'justify-center': justifyContent === 'center' },
        { 'justify-between': justifyContent === 'between' },
        { 'justify-around': justifyContent === 'around' },
        { 'items-start': alignItems === 'start' },
        { 'items-end': alignItems === 'end' },
        { 'items-center': alignItems === 'center' },
        { 'items-baseline': alignItems === 'baseline' },
        { 'items-stretch': alignItems === 'stretch' },
      ),
    [alignItems, className, direction, justifyContent],
  );

  return (
    <div
      className={classNames}
      ref={ref}
      style={style}
    >
      {children}
    </div>
  );
});

FlexBox.displayName = 'FlexBox';

export default FlexBox;
