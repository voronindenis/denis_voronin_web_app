// fonts/my-font.ts
import localFont from 'next/font/local';

export const bauhasFont = localFont({
  src: [
    {
      path: '../../public/fonts/bauhas_lt(RUS BY LYAJKA).ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-bauhas',
  display: 'swap',
});
