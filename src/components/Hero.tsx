import {SignupDialog} from "./SignupDialog";
import {Heart, Sparkles} from "lucide-react";

export function Hero() {
  return (
      <section
          className="relative overflow-hidden py-24 px-6"
          style={{ backgroundColor: '#cd0f4d' }}>

        <div className="relative mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="flex items-center gap-4">
              <SignupDialog/>
            </div>


            <h1 className="flex flex-col text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.2]">
              JOHANNA <span className="font-mirabella">und</span> JONAS
            </h1>

            <div className="flex items-center gap-4 text-rose-400">
              <Sparkles className="h-6 w-6 animate-pulse"/>
              <Heart className="h-6 w-6 animate-pulse [animation-delay:200ms] fill-rose-400"/>
              <Sparkles className="h-6 w-6 animate-pulse [animation-delay:400ms]"/>
            </div>

            <p className="max-w-2xl text-lg text-white sm:text-xl">
              Damit wir alles gut planen können, bitten wir dich, uns kurz oben mitzuteilen, ob du kommst oder leider nicht.
            </p>

            <p className="max-w-2xl text-lg text-white sm:text-xl">
              Außerdem: Wenn du Allergien hast oder etwas Bestimmtes nicht isst, schreib das bitte dazu.
            </p>
            <p className="max-w-2xl text-lg text-white sm:text-xl">
              Für alle, die übernachten möchten: Sag  am Telefon einfach dazu, dass du Teil der Hochzeitsgesellschaft bist.
            </p>
            <h2 className="text-white text-4xl font-extrabold sm:text-xl md:text-1xl lg:text-2xl leading-normal">
              JOHANNA <span className="font-mirabella">und</span> JONAS
            </h2>

            <div className="flex items-center gap-4 text-rose-400">
              <Sparkles className="h-6 w-6 animate-pulse"/>
              <Heart className="h-6 w-6 animate-pulse [animation-delay:200ms] fill-rose-400"/>
              <Sparkles className="h-6 w-6 animate-pulse [animation-delay:400ms]"/>
            </div>
          </div>
        </div>
      </section>
  );
}
