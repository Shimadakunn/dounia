"use client";
import Carroussel from '@/components/carroussel';

const Fashion = () => {
    const images = [
        { src: '../img/moops.webp', alt: 'Moops' },
        { src: '../img/retro.webp', alt: 'Retro' },
        { src: '../img/ethan.webp', alt: 'Ethan' },
        { src: '../img/cyborg.webp', alt: 'Cyborg' },
        { src: '../img/morgane.webp', alt: 'Morgane' },
      ];

  return (
    <Carroussel imageData={images} title="Fashion Photography"/>
  );
};

export default Fashion;
