import { Carousel } from "@ark-ui/react/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ThumbnailsCarousel() {
  const images = [
    {
      full: "https://images.unsplash.com/photo-1682614834-00fceebd69b6?w=600&h=400&fit=crop",
      thumb: "https://images.unsplash.com/photo-1682614834-00fceebd69b6?w=120&h=80&fit=crop"
    },
    {
      full: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=400&fit=crop",
      thumb: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=120&h=80&fit=crop"
    },
    {
      full: "https://images.unsplash.com/photo-1475925828558-6ae742be9419?w=600&h=400&fit=crop",
      thumb: "https://images.unsplash.com/photo-1475925828558-6ae742be9419?w=120&h=80&fit=crop"
    },
    {
      full: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
      thumb: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=120&h=80&fit=crop"
    },
    {
      full: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
      thumb: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=120&h=80&fit=crop"
    },
    {
      full: "https://images.unsplash.com/photo-1511497584788-876760111969?w=600&h=400&fit=crop",
      thumb: "https://images.unsplash.com/photo-1511497584788-876760111969?w=120&h=80&fit=crop"
    }
  ];

  return (
    <Carousel.Root
      defaultPage={0}
      slideCount={images.length}
      className="max-w-2xl mx-auto"
    >
      <Carousel.ItemGroup className="overflow-hidden rounded-lg shadow-lg mb-4">
        {images.map((image, index) => (
          <Carousel.Item key={index} index={index}>
            <img
              src={image.full}
              alt={`Slide ${index + 1}`}
              className="w-full h-80 object-cover"
            />
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <div className="flex items-center gap-4">
        <Carousel.PrevTrigger className="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors shrink-0 flex items-center justify-center">
          <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </Carousel.PrevTrigger>

        <div className="flex gap-2 overflow-x-auto scrollbar-hide flex-1 px-2">
          {images.map((image, index) => (
            <Carousel.Indicator
              key={index}
              index={index}
              className="shrink-0 border-2 border-transparent data-[state=current]:border-blue-500 rounded-md overflow-hidden cursor-pointer transition-all hover:border-gray-300"
            >
              <img
                src={image.thumb}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-12 object-cover block"
              />
            </Carousel.Indicator>
          ))}
        </div>

        <Carousel.NextTrigger className="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors shrink-0 flex items-center justify-center">
          <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </Carousel.NextTrigger>
      </div>
    </Carousel.Root>
  );
}
