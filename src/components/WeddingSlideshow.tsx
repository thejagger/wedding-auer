import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Placeholder images - using placeholder service
const placeholderImages = [
  "https://via.placeholder.com/1200x800/FFFFFF/E8E8E8?text=Wedding+Photo+1",
  "https://via.placeholder.com/1200x800/FFFFFF/E8E8E8?text=Wedding+Photo+2",
  "https://via.placeholder.com/1200x800/FFFFFF/E8E8E8?text=Wedding+Photo+3",
  "https://via.placeholder.com/1200x800/FFFFFF/E8E8E8?text=Wedding+Photo+4",
  "https://via.placeholder.com/1200x800/FFFFFF/E8E8E8?text=Wedding+Photo+5",
  "https://via.placeholder.com/1200x800/FFFFFF/E8E8E8?text=Wedding+Photo+6",
];

export function WeddingSlideshow() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Unsere Hochzeit
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-rose-300 to-transparent dark:via-rose-700" />
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {placeholderImages.map((imageUrl, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-2">
                  <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-lg">
                    <img
                      src={imageUrl}
                      alt={`Wedding photo ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </AspectRatio>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 border-rose-200 hover:bg-rose-50 dark:border-gray-700 dark:hover:bg-gray-800" />
          <CarouselNext className="right-4 border-rose-200 hover:bg-rose-50 dark:border-gray-700 dark:hover:bg-gray-800" />
        </Carousel>
      </div>
    </section>
  );
}
