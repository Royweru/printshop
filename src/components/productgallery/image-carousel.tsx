interface ImageCarouselProps {
  activeIndex: number;
  images: string[];
}

const ImageCarousel = ({ activeIndex, images }: ImageCarouselProps) => {
  return (
    <div className="w-full h-64 flex justify-center items-center bg-transparent">
      <img
        src={images[activeIndex]}
        alt="carousel"
        className="max-h-full aspect-square rounded w-[350px]"
      />
    </div>
  );
};

export default ImageCarousel;
