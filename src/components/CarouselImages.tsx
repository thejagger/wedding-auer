import {Card, CardContent} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselImages() {
  return (
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <Carousel opts={{
              align: "start",
              loop: true,
            }} className="w-full max-w-sm">
              <CarouselContent className="-ml-1">
                {Array.from({length: 5}).map((_, index) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card>
                          <CardContent
                              className="flex aspect-square items-center justify-center p-6">
                            <span className="text-2xl font-semibold">{index + 1}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious/>
              <CarouselNext/>
            </Carousel>
          </div>
        </div>
      </section>
  )
}
