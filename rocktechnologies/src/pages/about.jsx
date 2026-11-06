import { Lightbulb, ShieldCheck, Users, Rocket } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function About() {
  const values = [
    {
      icon: <Lightbulb size={24} />,
      title: "Innovation",
      description: "Embracing creativity and technology to develop meaningful solutions.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Integrity",
      description: "Maintaining honesty, transparency and accountability.",
    },
    {
      icon: <Users size={24} />,
      title: "Customer Focus",
      description: "Understanding customer needs and delivering valuable solutions.",
    },
    {
      icon: <Rocket size={24} />,
      title: "Excellence",
      description: "Striving for quality and continuous improvement in everything we do.",
    },
  ];

  return (
    <section id="about" className="bg-purple-50 px-8 py-24">

       <Navbar />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2">

        {/* About Us */}
        <div>
          <p className="mb-3 font-semibold uppercase tracking-widest text-green-600">
            About Us
          </p>

          <p className="mb-5 leading-8 text-slate-600">
            RockTechnologies is committed to leveraging technology
            to transform businesses and create meaningful digital
            experiences. We provide innovative technology solutions
            designed to help individuals and organizations navigate
            an increasingly digital world.
          </p>

          <p className="leading-8 text-slate-600">
            Through innovation, collaboration and a commitment to
            excellence, we aim to deliver reliable solutions that
            empower our clients and support their growth.
          </p>
        </div>

        {/* Our Core Values */}
        <div>

          <h2 className="mb-8 text-4xl font-bold text-green-800">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-6 shadow-sm transition duration-300 hover:bg-green-100 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  {value.icon}
                </div>

                <h3 className="mb-2 font-bold text-slate-800">
                  {value.title}
                </h3>

                <p className="text-sm leading-6 text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;