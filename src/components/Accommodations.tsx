import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Building } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Hotel {
  image: string;
  name: string;
  phone: string;
  email: string;
}

const hotels: Hotel[] = [
  {
    image: "https://via.placeholder.com/600x400/F5F5F5/E8E8E8?text=Hotel+1",
    name: "Hotel Grand Palace",
    phone: "+49 123 456 7890",
    email: "info@grandpalace-hotel.de",
  },
  {
    image: "https://via.placeholder.com/600x400/F5F5F5/E8E8E8?text=Hotel+2",
    name: "Boutique Hotel Rose",
    phone: "+49 123 456 7891",
    email: "kontakt@boutique-rose.de",
  },
  {
    image: "https://via.placeholder.com/600x400/F5F5F5/E8E8E8?text=Hotel+3",
    name: "Schloss Hotel Elegance",
    phone: "+49 123 456 7892",
    email: "reservierung@schloss-elegance.de",
  },
  {
    image: "https://via.placeholder.com/600x400/F5F5F5/E8E8E8?text=Hotel+4",
    name: "Garden View Hotel",
    phone: "+49 123 456 7893",
    email: "info@gardenview-hotel.de",
  },
  {
    image: "https://via.placeholder.com/600x400/F5F5F5/E8E8E8?text=Hotel+5",
    name: "Riverside Inn",
    phone: "+49 123 456 7894",
    email: "buchung@riverside-inn.de",
  },
];

export function Accommodations() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#ff8113' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Unterkünfte
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          <p className="max-w-2xl text-center text-white/90">
            Hier finden Sie eine Auswahl an Hotels in der Nähe unserer Hochzeit.
            Bitte reservieren Sie rechtzeitig.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel, index) => (
            <Card
              key={index}
              className="overflow-hidden border-white/20 bg-white/10 hover:bg-white/20 hover:shadow-lg transition-shadow backdrop-blur-sm"
            >
              <AspectRatio ratio={16 / 9} className="overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </AspectRatio>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <Building className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                  <CardTitle className="text-xl text-white">{hotel.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-white flex-shrink-0" />
                  <a
                    href={`tel:${hotel.phone}`}
                    className="text-white/90 hover:text-white transition-colors"
                  >
                    {hotel.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-white flex-shrink-0" />
                  <a
                    href={`mailto:${hotel.email}`}
                    className="text-white/90 hover:text-white transition-colors break-all"
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
