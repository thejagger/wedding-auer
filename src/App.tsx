import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Gallery} from "./components/Gallery";
import {Hero} from "@/components/Hero.tsx";

function App() {
  return (
      <div className="min-h-screen">
        <Header/>
        <main>
          <Hero/>
          {/*<Gallery/>*/}
        </main>
        <Footer/>
      </div>
  );
}

export default App;
