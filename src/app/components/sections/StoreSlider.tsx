"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

interface StoreSliderProps {
  images: string[];
}

export function StoreSlider({ images }: StoreSliderProps) {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      loop: images.length > 1,
      slides: { perView: 1 },
    },
    [
      (instance) => {
        let timeoutId: ReturnType<typeof setTimeout>;

        const scheduleNextSlide = () => {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => instance.next(), 3500);
        };

        instance.on("created", scheduleNextSlide);
        instance.on("animationEnded", scheduleNextSlide);
        instance.on("updated", scheduleNextSlide);
        instance.on("dragStarted", () => clearTimeout(timeoutId));
        instance.on("destroyed", () => clearTimeout(timeoutId));
      },
    ],
  );

  return (
    <div className="relative aspect-[4/3] overflow-hidden">
      <div ref={sliderRef} className="keen-slider h-full w-full overflow-hidden">
        {images.map((image) => (
          <div
            key={image}
            className="keen-slider__slide relative flex h-full shrink-0 items-center justify-center overflow-hidden bg-white-secondary"
          >
            <Image
              src={image}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="scale-110 object-cover opacity-15 blur-xl"
              alt=""
              aria-hidden="true"
            />
            <Image
              src={image}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="z-10 object-contain p-3 sm:p-5"
              alt=""
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <button
          type="button"
          aria-label="Próxima imagem"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            slider.current?.next();
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/55 px-3 py-1 text-2xl text-white transition hover:bg-black/75"
        >
          ›
        </button>
      )}
    </div>
  );
}
