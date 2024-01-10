"use client";

import {useState, useEffect} from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import Autoplay from "embla-carousel-autoplay"
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
}
  
interface FashionProps {
    imageData: ImageData[];
    title:string;
}

const  Fashion: React.FC<FashionProps> =  ({ imageData,title }) => {
  const router = useRouter();
  function extractBaseName(filePath:string) {
    const segments = filePath.split('/');
    const lastSegment = segments.pop();
    return lastSegment?.split('.')[0];
  }
  return (
    <div className="flex items-center justify-center h-screen flex-col font-[Nimbus] space-y-4 bg-black">
      <h1 className="text-2xl">{title}</h1>
      <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full max-w-[80vw] lg:max-w-[70vw] md:max-w-[80vw]"
      >
        <CarouselContent>
          {imageData.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <AspectRatio ratio={1 / 1.5} className="relative">
                  <img src={image.src} alt={image.alt} className="absolute w-full h-full object-cover cursor-pointer" onClick={() =>router.push(`/${extractBaseName(image.src)}`)}/>
                </AspectRatio>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Fashion;
