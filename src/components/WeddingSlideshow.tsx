import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Import gallery images
import image1 from "@/assets/gallery/image-1.jpeg";
import image2 from "@/assets/gallery/image-2.jpeg";
import image3 from "@/assets/gallery/image-3.jpeg";
import image4 from "@/assets/gallery/image-4.jpeg";
import image5 from "@/assets/gallery/image-5.jpeg";
import image6 from "@/assets/gallery/image-6.jpeg";
import image8 from "@/assets/gallery/image-8.jpeg";
import image9 from "@/assets/gallery/image-9.jpeg";
import image10 from "@/assets/gallery/image-10.jpeg";
import image11 from "@/assets/gallery/image-11.jpeg";
import image12 from "@/assets/gallery/image-12.jpeg";

const galleryImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image8,
  image9,
  image10,
  image11,
  image12,
];

export function WeddingSlideshow() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#ff8e9f' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Wir
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {galleryImages.map((imageUrl, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-2">
                  <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-lg">
                    <img
                      src={imageUrl}
                      alt={`Couple photo ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </AspectRatio>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 border-rose-200 hover:bg-rose-50" />
          <CarouselNext className="right-4 border-rose-200 hover:bg-rose-50" />
        </Carousel>
      </div>
    </section>
  );
}
