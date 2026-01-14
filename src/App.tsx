import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Hero} from "@/components/Hero.tsx";
import {WeddingSlideshow} from "@/components/WeddingSlideshow";
import {Accommodations} from "@/components/Accommodations";

function App() {
  return (
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <Header/>
        <main>
          <Hero/>
          <WeddingSlideshow/>
          <Accommodations/>
        </main>
        <Footer/>
      </div>
  );
}

export default App;
