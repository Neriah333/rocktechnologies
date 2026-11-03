import {
  Network,
  Settings,
  Wrench,
  ShieldCheck,
  Wifi,
  Cable,
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: <Network size={32} />,
      title: "Network Installation",
      description:
        "Installation and setup of reliable wired and wireless networks for homes and businesses.",
    },
    {
      icon: <Settings size={32} />,
      title: "Network Configuration",
      description:
        "Configuration of routers, switches, access points, and other network devices.",
    },
    {
      icon: <Wrench size={32} />,
      title: "Network Maintenance",
      description:
        "Regular network maintenance, monitoring, and troubleshooting to ensure reliable connectivity.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Network Security",
      description:
        "Network protection through firewall configuration, access controls, and security solutions.",
    },
    {
      icon: <Wifi size={32} />,
      title: "Wi-Fi Solutions",
      description:
        "Wireless network setup and optimization to improve coverage, speed, and connectivity.",
    },
    {
      icon: <Cable size={32} />,
      title: "Structured Cabling",
      description:
        "Professional installation and organization of network cabling for efficient communication.",
    },
  ];

  return (
    <section id="services" className="bg-green-50 px-8 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-4xl font-bold text-green-800">
            Our Services
          </h2>

          <p className="mx-auto max-w-2xl text-slate-600">
            We provide reliable network solutions designed to keep businesses
            and individuals connected, secure, and productive.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:bg-green-100 hover:shadow-md"
            >
              <div className="mb-5 text-green-700">
                {service.icon}
              </div>

              <h3 className="mb-3 text-xl font-semibold text-slate-800">
                {service.title}
              </h3>

              <p className="leading-relaxed text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;