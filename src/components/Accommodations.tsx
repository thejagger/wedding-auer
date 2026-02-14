import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Building } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import donauLodgeImage from "@/assets/donau-lodge.jpg";

export function Accommodations() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#ef6235' }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-8 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Unterkunft
          </h2>
          <div className="h-px w-24 bg-linear-to-r from-transparent via-white/50 to-transparent" />
          <p className="max-w-2xl text-center text-white/90">
            Für alle, die übernachten möchten: Sag am Telefon einfach dazu, dass du Teil der Hochzeitsgesellschaft bist.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="overflow-hidden py-0 border-white/20 bg-white/10 hover:bg-white/20 hover:shadow-xl transition-all backdrop-blur-sm w-full max-w-2xl">
            <AspectRatio ratio={16 / 9} className="overflow-hidden">
              <img
                src={donauLodgeImage}
                alt="Donau Lodge"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </AspectRatio>
            <CardHeader className="pb-4">
              <div className="flex items-start gap-3">
                <Building className="h-6 w-6 text-white mt-0.5 shrink-0" />
                <CardTitle className="text-2xl md:text-3xl text-white">Donau Lodge</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-5 pb-6">
              <div className="flex items-center gap-3 text-base">
                <Phone className="h-5 w-5 text-white shrink-0" />
                <a
                  href="tel:+43741254334"
                  className="text-white/90 hover:text-white transition-colors text-lg"
                >
                  +43 7412 54 334
                </a>
              </div>
              <div className="flex items-center gap-3 text-base">
                <Mail className="h-5 w-5 text-white shrink-0" />
                <a
                  href="mailto:office@donau-lodge.at"
                  className="text-white/90 hover:text-white transition-colors break-all text-lg"
                >
                  office@donau-lodge.at
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
