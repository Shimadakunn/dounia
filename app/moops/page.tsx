"use client";
import Gallery from '@/components/gallery';

const Fashion = () => {
    const images = [
        { src: '../img/moops/1.webp', alt: 'Ethan' },
        { src: '../img/moops/2.webp', alt: 'Ethan', portrait: false },
        { src: '../img/moops/3.webp', alt: 'Ethan', portrait: false },
        { src: '../img/moops/4.webp', alt: 'Ethan' },
        { src: '../img/moops/5.webp', alt: 'Ethan' },
        { src: '../img/moops/6.webp', alt: 'Ethan', portrait: false },
        { src: '../img/moops/7.webp', alt: 'Ethan' },
        { src: '../img/moops/8.webp', alt: 'Ethan' },
        { src: '../img/moops/9.webp', alt: 'Ethan' },
        { src: '../img/moops/10.webp', alt: 'Ethan' },
        { src: '../img/moops/11.webp', alt: 'Ethan' },
        { src: '../img/moops/12.webp', alt: 'Ethan', portrait: false },
        { src: '../img/moops/13.webp', alt: 'Ethan' },
        { src: '../img/moops/14.webp', alt: 'Ethan' },
        { src: '../img/moops/15.webp', alt: 'Ethan', portrait: false },
        { src: '../img/moops/16.webp', alt: 'Ethan' , portrait: false},
        { src: '../img/moops/17.webp', alt: 'Ethan', portrait: false },
        { src: '../img/moops/18.webp', alt: 'Ethan' },
      ];

  return (
    <Gallery imageData={images} title="MOOPS"/>
  );
};

export default Fashion;