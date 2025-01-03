import { useState, useEffect } from "react";

interface useCarouselProps {
  totalImages: number;
  intercal?: number;
}

export const useCarousel = ({
  totalImages,
  interval = 5000,
}: useCarouselProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % totalImages);
    }, interval);
    return () => {
      clearInterval(timer);
    };
  });
  return currentImage;
};
