import { useState, useEffect } from "react";
import image1 from "../assets/iot.jpeg";
import image2 from "../assets/device.jpg";
import image3 from "../assets/laptops.jpg";
import image4 from "../assets/security.jpg";
import image5 from "../assets/man-using-mobile-online-banking.jpg";

const slides = [
  {
    image: image1,
    
  },
  {
    image: image2,
    title: "Technology That Moves You Forward",
    description:
      "Empowering businesses through reliable, scalable and modern technology solutions.",
    button: "Explore Services",
  },
  {
    image: image3,
    title: "Building the Future Together",
    description:
      "From innovative products to digital solutions, we help turn ideas into reality.",
    button: "Get in Touch",
  },
  {
    image: image4,
    title: "Securing Your Digital World",
    description:
      "We provide cutting-edge cybersecurity solutions to protect your business and data.",
    button: "Learn More",
  },
  {
    image: image5,
    title: "Connecting People and Technology",
    description:
      "We create seamless experiences that connect people with the technology they need.",
    button: "Contact Us",
  }
];

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically move to the next slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[550px] w-full overflow-hidden">

      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-full min-w-full"
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 h-full w-full object-cover"
            />

            

            {/* Slide Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">

              <h1 className="mb-5 max-w-3xl text-4xl font-bold md:text-6xl">
                {slide.title}
              </h1>

              <p className="mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
                {slide.description}
              </p>

              

            </div>
          </div>
        ))}
      </div> 

    </section>
  );
}

export default HeroCarousel;