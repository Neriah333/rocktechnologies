import Navbar from "./pages/navbar";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <section id="home" className="min-h-screen bg-white p-10">
          <h1 className="text-4xl font-bold">Home</h1>
        </section>

        <section id="about" className="min-h-screen bg-purple-50 p-10">
          <h1 className="text-4xl font-bold">About Us</h1>
        </section>

        <section id="services" className="min-h-screen bg-white p-10">
          <h1 className="text-4xl font-bold">Our Services</h1>
        </section>

        <section id="products" className="min-h-screen bg-purple-50 p-10">
          <h1 className="text-4xl font-bold">Our Products</h1>
        </section>

        <section id="contact" className="min-h-screen bg-white p-10">
          <h1 className="text-4xl font-bold">Contact Us</h1>
        </section>
      </main>
    </>
  );
}

export default App;