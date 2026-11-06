import React from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Users,
  TrendingUp,
  Lightbulb,
  Target,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

function Careers() {
  const values = [
    {
      icon: <TrendingUp size={30} />,
      title: "Continuous Growth",
      description:
        "We believe in continuous learning, developing new skills and creating opportunities for professional growth.",
    },
    {
      icon: <Users size={30} />,
      title: "Team Collaboration",
      description:
        "We value teamwork, shared knowledge and diverse perspectives in building meaningful solutions.",
    },
    {
      icon: <Lightbulb size={30} />,
      title: "Innovation",
      description:
        "We embrace fresh ideas, creative thinking and emerging technologies to solve real-world challenges.",
    },
    {
      icon: <Target size={30} />,
      title: "Purpose-Driven Work",
      description:
        "We focus on delivering technology solutions that create value and make a meaningful difference.",
    },
  ];

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="relative bg-green-950 text-white py-32 px-8 md:px-20 overflow-hidden">

        <div className="absolute top-0 right-0 w-96 h-96 bg-green-700/20 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">

          <p className="text-green-300 font-semibold tracking-[0.2em] uppercase mb-5">
            Careers at RockTechnologies
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl">
            Be Part of Something
            <span className="text-green-400"> Innovative.</span>
          </h1>

          <p className="text-green-100 text-lg md:text-xl mt-8 max-w-2xl leading-relaxed">
            Great technology is built by passionate people. Discover what
            makes RockTechnologies a place where ideas, collaboration and
            innovation come together.
          </p>

          <a
            href="#our-culture"
            className="inline-flex items-center gap-3 mt-10 bg-white text-green-950 px-8 py-4 rounded-lg font-semibold hover:bg-green-100 transition-all"
          >
            Discover Our Culture
            <ArrowRight size={20} />
          </a>

        </div>
      </section>


      {/* Introduction */}
      <section className="py-24 px-8 md:px-20">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-green-700 font-semibold tracking-widest uppercase mb-4">
              Our People
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Technology Moves Forward Through People.
            </h2>

            <p className="text-slate-600 mt-6 leading-relaxed">
              At RockTechnologies, we recognize that people are at the
              heart of innovation. Building impactful technology requires
              curiosity, collaboration and a commitment to excellence.
            </p>

            <p className="text-slate-600 mt-5 leading-relaxed">
              We value individuals who are passionate about technology,
              open to learning and motivated to contribute to meaningful
              solutions.
            </p>

          </div>

          <div className="bg-green-50 rounded-2xl p-10 md:p-14">

            <div className="w-16 h-16 bg-green-800 text-white rounded-xl flex items-center justify-center mb-8">
              <HeartHandshake size={32} />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Building Together
            </h3>

            <p className="text-slate-600 mt-4 leading-relaxed">
              We believe in creating an environment where people can
              exchange ideas, develop their potential and work together
              towards a shared vision.
            </p>

          </div>

        </div>

      </section>


      {/* Our Culture */}
      <section
        id="our-culture"
        className="bg-slate-50 py-24 px-8 md:px-20"
      >

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-16">

            <p className="text-green-700 font-semibold tracking-widest uppercase">
              What We Value
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">
              A Culture Built on Growth and Innovation
            </h2>

            <p className="text-slate-600 mt-5 leading-relaxed">
              Our approach to work is guided by values that encourage
              creativity, collaboration and continuous improvement.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {values.map((value, index) => (

              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-green-700 hover:shadow-lg transition-all duration-300"
              >

                <div className="text-green-700 mb-6">
                  {value.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {value.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm">
                  {value.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* Career Opportunities */}
      <section className="py-24 px-8 md:px-20">

        <div className="max-w-4xl mx-auto text-center">

          <div className="w-20 h-20 bg-green-100 text-green-800 rounded-full flex items-center justify-center mx-auto mb-7">
            <BriefcaseBusiness size={34} />
          </div>

          <p className="text-green-700 font-semibold tracking-widest uppercase">
            Career Opportunities
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">
            No Current Openings
          </h2>

          <p className="text-slate-600 text-lg mt-6 leading-relaxed max-w-2xl mx-auto">
            We don't have any open positions at the moment. However,
            we're always interested in connecting with talented,
            passionate and forward-thinking individuals.
          </p>

          <div className="mt-10 inline-flex items-center gap-3 bg-green-50 text-green-800 px-6 py-4 rounded-xl">
            <CheckCircle2 size={22} />

            <span className="font-medium">
              Check back soon for future opportunities.
            </span>
          </div>

        </div>

      </section>


      {/* Closing Section */}
      <section className="bg-green-950 py-24 px-8 md:px-20">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-green-300 font-semibold tracking-widest uppercase">
            The Future Starts Here
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white mt-5 leading-tight">
            Great Things Happen When
            <span className="text-green-400"> People Innovate Together.</span>
          </h2>

          <p className="text-green-100 mt-7 max-w-2xl mx-auto leading-relaxed">
            Stay connected with RockTechnologies and follow our journey
            as we continue building solutions, embracing innovation
            and creating opportunities for the future.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Careers;