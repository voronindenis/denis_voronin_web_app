import React from 'react';

import cn from 'classnames';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export interface IGridMenuCard {
  description: string; // description of the card
  descriptionColor: string; // color of the description text taken from Tailwind CSS
  icon?: React.ReactNode; // icon to be rendered inside the card
  id: string; // unique identifier for the card
  index?: number; // index of the card in the grid
  link: string; // URL to navigate to when the card is clicked
  title: string; // title of the card
  length?: number; // total number of cards in the grid
  onClick?: (card: IGridMenuCard) => void;
}

const GridMenuCard: React.FC<IGridMenuCard> = (props) => {
  const { id, title, description, descriptionColor, icon, link, index = 0, length = 1, onClick } = props;

  const position = index + 1;

  const onLinkClick = () => {
    if (onClick) {
      onClick(props);
    }
  };

  return (
    <Link
      key={id}
      className={cn(
        'group flex items-center justify-between border-gray-300 bg-white px-12 py-24 transition-colors duration-300 hover:bg-gray-100',
        // Borders based on position
        {
          'border-r-1': position % 2 > 0,
          'border-b-1': position !== length - 1 && position !== length,
        },
      )}
      href={link}
      onClick={onLinkClick}
    >
      <div>
        <p className={`text-lg font-medium uppercase tracking-wide ${descriptionColor}`}>{description}</p>
        <h2 className='mt-2 text-4xl font-semibold'>{title}</h2>
      </div>
      {icon ? (
        icon
      ) : (
        <ChevronRight
          className='transform transition-transform duration-300 group-hover:translate-x-2'
          size={32}
        />
      )}
    </Link>
  );
};

export default GridMenuCard;
