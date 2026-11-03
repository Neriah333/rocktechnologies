import Navbar from "./pages/navbar";
import HeroCarousel from "./pages/HeroCarousel";
import About from "./pages/about";
import Statistics from "./pages/stats";
import Services from "./pages/services";
import Products from "./pages/products";

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

        {/* Services Section */}
        <section id="services">
          <Services />
        </section>

        {/* Products Section */}
        <section id="products">
          <Products />
        </section>
      </main>
    </>
  );
}

export default App;