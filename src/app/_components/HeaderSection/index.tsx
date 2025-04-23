import React from 'react';

import Image from 'next/image';

import FlexBox from '@/components/FlexBox';

const HeaderSection: React.FC = () => (
  <>
    <Image
      alt='Abstract circles'
      className='top-1/6 absolute left-0 -z-10'
      height={816}
      quality={80}
      sizes='(max-width: 640px) 100vw,
         (max-width: 768px) 100vw,
         (max-width: 1024px) 100vw,
         (max-width: 1280px) 100vw,
         (max-width: 1536px) 75vw,
         1456px'
      src='/images/denis__voronin_httpss.mj.runkLvUw-PBAr0_Three_circles._The_wh_f3944498-956a-45c2-94d4-da6fa33c0069_3.jpg'
      width={1456}
    />
    <FlexBox
      className='h-screen w-full py-6'
      justifyContent='end'
    >
      <div className='4xl:w-1/2 w-2/3 py-6'>
        <h1 className='font-(family-name:--font-bauhas) break-normal text-right text-8xl font-bold uppercase md:break-all'>
          В 2024 году зарегистрировано 5.3 млн новых онлайн-бизнесов
        </h1>
      </div>
    </FlexBox>
  </>
);

export default HeaderSection;
