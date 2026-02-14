import {Hero} from "@/components/Hero.tsx";
import {Ablauf} from "@/components/Ablauf";
import {WeddingSlideshow} from "@/components/WeddingSlideshow";
import {Accommodations} from "@/components/Accommodations";

function App() {
  return (
      <div className="min-h-screen bg-white">
        <main>
          <Hero/>
          <Ablauf/>
          <WeddingSlideshow/>
          <Accommodations/>
        </main>
      </div>
  );
}

export default App;
