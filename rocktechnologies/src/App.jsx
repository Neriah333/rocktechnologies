import Navbar from "./pages/navbar";
import HeroCarousel from "./pages/HeroCarousel";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        {/* Home Section */}
        <section id="home">
          <HeroCarousel />
        </section>
      </main>
    </>
  );
}

export default App;