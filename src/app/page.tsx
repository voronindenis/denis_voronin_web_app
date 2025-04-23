import React from 'react';

import FlexBox from '@/components/FlexBox';

import HeaderSection from './_components/HeaderSection';

export default function Home() {
  return (
    <FlexBox
      className='w-22/24 mx-auto'
      direction='col'
    >
      <HeaderSection />
    </FlexBox>
  );
}
