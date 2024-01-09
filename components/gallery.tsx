"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ImageData {
  src: string;
  alt: string;
  portrait?: boolean;
}

interface FashionProps {
  imageData: ImageData[];
  title: string;
}

const Fashion: React.FC<FashionProps> = ({ imageData, title }) => {
  return (
    <div className="flex h-screen bg-moops">
      <div className="flex-1 overflow-auto px-[20vw] space-y-8">
        {imageData.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-full h-auto"
          />
        ))}
      </div>
      <div className="w-1/3 sticky top-0 h-screen flex items-center justify-center">
        <p>Your fixed content here...</p>
      </div>
    </div>
  );
};

export default Fashion;
