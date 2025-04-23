import React from 'react';

import FlexBox from '@/components/FlexBox';
import GridMenuCard, { IGridMenuCard } from '@/components/GridMenuCard';

interface IGridMenuProps {
  cards: IGridMenuCard[];
  className?: string; // additional classes to be passed
  columns?: 2; // number of columns in the grid
  footer?: React.ReactNode; // optional footer content for the card
  gap?: 0; // gap between the grid items
  onCardClick?: (card: IGridMenuCard) => void; // optional callback for card click
}

const GridMenu: React.FC<IGridMenuProps> = (props) => {
  const { cards, footer, onCardClick } = props;

  return (
    <FlexBox direction='col'>
      <div className='grid w-full grid-cols-2'>
        {cards.map(({ description, descriptionColor, title, id, link, icon }, idx) => (
          <GridMenuCard
            key={id}
            description={description}
            descriptionColor={descriptionColor}
            icon={icon}
            id={id}
            link={link}
            title={title}
            index={idx}
            length={cards.length}
            onClick={onCardClick}
          />
        ))}
      </div>
      {footer && (
        <div className='border-t-1 flex w-full flex-wrap justify-start gap-10 border-gray-300 px-8 py-16'>{footer}</div>
      )}
    </FlexBox>
  );
};

GridMenu.displayName = 'GridMenu';

export default GridMenu;
