import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import HeroCarousel from "./pages/HeroCarousel";
import About from "./pages/about";
import Statistics from "./pages/stats";
import Services from "./pages/services";
import Products from "./pages/products";
import Careers from "./pages/careers";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <ScrollToTop />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HeroCarousel />} />
          <Route path="/about" element={<About />} />
          <Route path="/stats" element={<Statistics />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;