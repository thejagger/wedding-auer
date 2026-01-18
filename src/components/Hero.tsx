import {SignupDialog} from "./SignupDialog";
import {Calendar, Clock, MapPin, Heart, Sparkles} from "lucide-react";

export function Hero() {
  return (
      <section
          className="relative overflow-hidden py-24 px-6"
          style={{ backgroundColor: '#ff8e9f' }}>
        {/* Elegant decorative elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 h-px w-32 bg-gradient-to-r from-transparent via-rose-200/50 to-transparent"/>
          <div className="absolute top-40 right-20 h-px w-24 bg-gradient-to-r from-transparent via-rose-200/50 to-transparent"/>
          <div className="absolute bottom-20 left-1/4 h-px w-20 bg-gradient-to-r from-transparent via-rose-200/50 to-transparent"/>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="flex items-center gap-4">
              <SignupDialog/>
            </div>


            <h1 className="bg-gradient-to-r from-rose-400 via-rose-600 to-rose-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl leading-[1.5]">
              JOHANNA <span className="font-mirabella">and</span> JONAS
            </h1>

            <p className="max-w-2xl text-lg text-white sm:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* Event details */}
            <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
              <div
                  className="flex items-center gap-3 rounded-xl border border-rose-100 bg-white px-4 py-3 shadow-sm transition hover:shadow-md">
                <Calendar className="h-6 w-6 text-rose-500"/>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Datum</div>
                  <div className="font-medium">Samstag, 30. Mai</div>
                </div>
              </div>
              <div
                  className="flex items-center gap-3 rounded-xl border border-rose-100 bg-white px-4 py-3 shadow-sm transition hover:shadow-md">
                <Clock className="h-6 w-6 text-rose-500"/>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Zeit</div>
                  <div className="font-medium">12:00</div>
                </div>
              </div>
              <div
                  className="flex items-center gap-3 rounded-xl border border-rose-100 bg-white px-4 py-3 shadow-sm transition hover:shadow-md sm:col-span-2">
                <MapPin className="h-6 w-6 text-rose-500"/>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Standort</div>
                  <div className="font-medium">Lorem Ipsum
                  </div>
                </div>
              </div>
              {/*<div*/}
              {/*    className="flex items-center gap-3 rounded-xl border bg-white/70 px-4 py-3 shadow-sm backdrop-blur transition hover:shadow-md dark:border-gray-800 dark:bg-gray-800/60 sm:col-span-2">*/}
              {/*  <span className="text-2xl">👔</span>*/}
              {/*  <div className="text-left">*/}
              {/*    <div className="text-sm text-muted-foreground">Dress code</div>*/}
              {/*    <div className="font-medium">“Average 30 Chic”, interpret as you will.*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>

            <div className="flex items-center gap-4 text-rose-400">
              <Sparkles className="h-6 w-6 animate-pulse"/>
              <Heart className="h-6 w-6 animate-pulse [animation-delay:200ms] fill-rose-400"/>
              <Sparkles className="h-6 w-6 animate-pulse [animation-delay:400ms]"/>
            </div>

            <p className="max-w-2xl text-lg text-white sm:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <p className="max-w-2xl text-lg text-white sm:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="max-w-2xl text-lg text-white sm:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h2 className="bg-gradient-to-r from-rose-400 via-rose-600 to-rose-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-xl md:text-1xl lg:text-2xl leading-[1.5]">
              JOHANNA <span className="font-mirabella">and</span> JONAS
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
