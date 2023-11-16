import type { NextRouter } from 'next/router';

export const isServerSideRendered = () => {
  return typeof window === 'undefined';
};

export const getPublicImage = (router: NextRouter, name: string) => {
  return `${router.basePath}/assets/images/${name}`;
};

export const getPublicSvg = (router: NextRouter, name: string) => {
  return `${router.basePath}/assets/svg/${name}`;
};

export const getPublicAudio = (router: NextRouter, name: string) => {
  return `${router.basePath}/assets/audio/${name}`;
};
