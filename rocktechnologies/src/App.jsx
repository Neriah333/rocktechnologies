import Navbar from "./pages/navbar";
import HeroCarousel from "./pages/HeroCarousel";
import About from "./pages/about";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        {/* Home Section */}
        <section id="home">
          <HeroCarousel />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>
      </main>
    </>
  );
}

export default App;