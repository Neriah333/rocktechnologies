import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Products() {
  const products = [
    {
      title: "Wi-Fi Router Power Backup (UPS)",
      description:
        "Mini Uninterruptible Power Supply (UPS) designed to keep home Wi-Fi routers and fiber modems powered during outages.",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
      ctaText: "Request Product Details",
      link: "#details",
    },
    {
      title: "4G/5G Pocket MiFi Routers",
      description:
        "High-speed portable cellular Wi-Fi hotspots providing reliable internet connectivity for remote work and travel.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      ctaText: "Request Product Details",
      link: "#details",
    },
    {
      title: "GaN Fast Chargers & Power Banks",
      description:
        "High-wattage multi-port GaN adapters and high-capacity portable chargers for phones, tablets, and laptops.",
      image:
        "https://images.unsplash.com/photo-1609592424109-dd9892f1b177?auto=format&fit=crop&w=800&q=80",
      ctaText: "Request Product Details",
      link: "#details",
    },
    {
      title: "Smart Security Doorbells & Cameras",
      description:
        "Wireless HD security cameras and video doorbells featuring motion detection and smartphone alerts.",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
      ctaText: "Request Product Details",
      link: "#details",
    },
    {
      title: "Workstation USB-C Docking Stations",
      description:
        "Multi-port USB-C hubs with dual-monitor support, fast pass-through charging, and gigabit Ethernet ports.",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      ctaText: "Request Product Details",
      link: "#details",
    },
    {
      title: "Thermal Label Printers",
      description:
        "Inkless high-speed shipping label printers for e-commerce, warehousing, and business logistics.",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      ctaText: "Request Product Details",
      link: "#details",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="products" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-green-950 sm:text-4xl">
            Our Product Catalog
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-sm text-gray-500 sm:text-base">
            High-quality electronics, connectivity devices, and smart home solutions
            sourced and tested for reliable everyday performance.
          </p>
        </div>

        {/* Carousel / Grid Wrapper */}
        <div className="relative px-2 sm:px-6">
          {/* Side Navigation Buttons */}
          <button
            onClick={prevSlide}
            aria-label="Previous product"
            className="absolute -left-2 sm:left-0 top-1/3 -translate-y-1/2 z-10 rounded-md border border-gray-200 bg-white p-2 text-gray-800 shadow-md transition hover:bg-gray-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next product"
            className="absolute -right-2 sm:right-0 top-1/3 -translate-y-1/2 z-10 rounded-md border border-gray-200 bg-white p-2 text-gray-800 shadow-md transition hover:bg-gray-100"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-sm border border-gray-300 bg-white text-center shadow-sm transition hover:shadow-md"
              >
                {/* Product Image Header */}
                <div className="h-52 w-full border-b border-gray-200 bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="flex items-center justify-center text-lg font-bold text-gray-900 min-h-[3.5rem] leading-snug">
                      {product.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-gray-500 min-h-[3rem]">
                      {product.description}
                    </p>
                  </div>

                  {/* Action CTA Button */}
                  <div className="mt-6">
                    <a
                      href={product.link}
                      className="inline-block rounded-sm bg-green-900 px-5 py-2.5 text-xs font-medium text-white transition hover:bg-blue-950"
                    >
                      {product.ctaText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Pagination Dots */}
          <div className="mt-10 flex justify-center items-center gap-2">
            {products.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveSlide(dotIdx)}
                aria-label={`Go to product ${dotIdx + 1}`}
                className={`h-3 w-3 rounded-full transition-all ${
                  dotIdx === activeSlide
                    ? "bg-black scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;