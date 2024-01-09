"use client";
import Carroussel from '@/components/carroussel';

const Fashion = () => {
    const images = [
        { src: '../img/egypt.webp', alt: 'Egypt' },
      ];

  return (
    <Carroussel imageData={images} title="Travel Photography"/>
  );
};

export default Fashion;
