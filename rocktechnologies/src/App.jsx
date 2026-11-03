import Navbar from "./pages/navbar";
import HeroCarousel from "./pages/HeroCarousel";
import About from "./pages/about";
import Statistics from "./pages/stats";

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

        {/* Statistics Section */}
        <section id="statistics">
          <Statistics />
        </section>
      </main>
    </>
  );
}

export default App;