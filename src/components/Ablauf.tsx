import {Clock, MapPin} from "lucide-react";

interface ScheduleItem {
    time?: string;
    timeRange?: string;
    event: string;
    location?: string;
    description?: string;
}

const scheduleItems: ScheduleItem[] = [
    {time: "09:30", event: "Empfang", location: "Gasthof Reutner"},
    {time: "11:00", event: "Kirchliche Trauung", location: "Stiftskirche Waldhausen"},
    {time: "12:00", event: "Gruppenfoto", location: "Stiftskirche Waldhausen"},
    {time: "13:30", event: "Abfahrt von der Kirche", location: "zum Babenbergerhof"},
    {time: "14:00", event: "Sektempfang", location: "Donau Lodge"},
    {time: "18:00", event: "Abendessen", description: "Abschnitt der Hochzeitstorte"},
    {time: "21:00", event: "Party", location: "Babenbergerhof"},
];

export function Ablauf() {
    return (
        <section className="py-12 px-6" style={{backgroundColor: '#ff8113'}}>
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col items-center gap-4 mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Ablauf
                    </h2>
                    <div className="h-px w-24 bg-linear-to-r from-transparent via-white/50 to-transparent"/>
                </div>

                <div className="space-y-3">
                    {scheduleItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row md:items-center gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
                        >
                            <div className="flex items-center gap-2 md:w-28 shrink-0">
                                <Clock className="h-4 w-4 text-white shrink-0"/>
                                <div className="text-white font-semibold text-base">
                                    {item.time || item.timeRange || ""}
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-white text-lg font-semibold mb-1">
                                    {item.event}
                                </h3>
                                {item.location ? (
                                    <div className="flex items-center gap-2 text-white/90">
                                        <MapPin className="h-3.5 w-3.5 shrink-0"/>
                                        <span className="text-base">{item.location}</span>
                                    </div>
                                ) : <></>}
                                {item.description ? (
                                    <div className="flex items-center gap-2 text-white/90">
                                        <span className="text-base">{item.description}</span>
                                    </div>
                                ) : <></>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
