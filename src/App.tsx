import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Hero} from "@/components/Hero.tsx";

function App() {
  return (
      <div className="min-h-screen">
        <Header/>
        <main>
          <Hero/>
        </main>
        <Footer/>
      </div>
  );
}

export default App;
