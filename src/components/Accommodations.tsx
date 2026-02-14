import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Building, MapPin } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import donauLodgeImage from "@/assets/donau-lodge.jpg";
import babenbergerhofImage from "@/assets/babenbergerhof.webp";

interface Hotel {
  image: string;
  name: string;
  address?: string;
  phone: string;
  email: string;
}

const hotels: Hotel[] = [
  {
    image: donauLodgeImage,
    name: "Donau Lodge",
    address: "Wiener Straße 10, 3370 Ybbs an der Donau",
    phone: "+43 7412 54 334",
    email: "office@donau-lodge.at",
  },
  {
    image: babenbergerhofImage,
    name: "Babenbergerhof",
    address: "Wiener Straße 10, 3370 Ybbs an der Donau",
    phone: "+43 7412 543 34",
    email: "office@babenbergerhof.at",
  },
];

export function Accommodations() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#ef6235' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-8 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Unterkünfte
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          <p className="max-w-2xl text-center text-white/90">
            Für alle, die übernachten möchten: Sag am Telefon einfach dazu, dass du Teil der Hochzeitsgesellschaft bist.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hotels.map((hotel, index) => (
            <Card
              key={index}
              className="overflow-hidden py-0 border-white/20 bg-white/10 hover:bg-white/20 hover:shadow-xl transition-all backdrop-blur-sm"
            >
              <AspectRatio ratio={16 / 9} className="overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </AspectRatio>
              <CardHeader className="pb-4">
                <div className="flex items-start gap-3">
                  <Building className="h-6 w-6 text-white mt-0.5 shrink-0" />
                  <CardTitle className="text-2xl md:text-3xl text-white">{hotel.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pb-6">
                {hotel.address && (
                  <div className="flex items-start gap-3 text-base">
                    <MapPin className="h-5 w-5 text-white shrink-0 mt-0.5" />
                    <div className="text-white/90 text-lg">
                      {hotel.address}
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-3 text-base">
                  <Phone className="h-5 w-5 text-white shrink-0" />
                  <a
                    href={`tel:${hotel.phone.replace(/\s/g, '')}`}
                    className="text-white/90 hover:text-white transition-colors text-lg"
                  >
                    {hotel.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-base">
                  <Mail className="h-5 w-5 text-white shrink-0" />
                  <a
                    href={`mailto:${hotel.email}`}
                    className="text-white/90 hover:text-white transition-colors break-all text-lg"
                  >
                    {hotel.email}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
