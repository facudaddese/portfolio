"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Image from "next/image";

interface CarouselProps {
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

export const Carousel = ({ images }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Fade()]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  const { width, height } = images[0];

  return (
    <div className="-mx-5 w-[calc(100%+2.5rem)] min-w-0 sm:mx-auto sm:w-full sm:max-w-4xl">
      <div
        className="overflow-hidden rounded-xl"
        style={{ aspectRatio: `${width} / ${height}` }}
        ref={emblaRef}
      >
        <div className="flex h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-full min-w-0 flex-[0_0_100%]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 900px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
