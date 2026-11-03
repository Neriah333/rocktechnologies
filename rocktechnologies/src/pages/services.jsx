import React from "react";
import {
  Network,
  Settings,
  Wrench,
  ShieldCheck,
  Wifi,
  Cable,
  ArrowRight,
} from "lucide-react";

function Services() {
  const services = [
    {
      category: "Infrastructure & Setup",
      title: "Network Installation",
      description:
        "Installation and setup of reliable wired and wireless networks for homes and businesses, ensuring optimal coverage and high-speed throughput.",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
      icon: <Network className="h-6 w-6 text-emerald-600" />,
      primaryLinkText: "Request Solution Overview",
      secondaryLinkText: "Schedule a Site Survey",
    },
    {
      category: "System Optimization",
      title: "Network Configuration",
      description:
        "Configuration of routers, switches, access points, and enterprise network devices tailored for seamless bandwidth allocation and VLAN isolation.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      icon: <Settings className="h-6 w-6 text-emerald-600" />,
      primaryLinkText: "Request Solution Overview",
      secondaryLinkText: "Schedule a Configuration Audit",
    },
    {
      category: "Support & Monitoring",
      title: "Network Maintenance",
      description:
        "Regular network maintenance, proactively monitoring traffic and troubleshooting bottlenecks to ensure uninterrupted 24/7 connectivity.",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      icon: <Wrench className="h-6 w-6 text-emerald-600" />,
      primaryLinkText: "Request Solution Overview",
      secondaryLinkText: "Schedule a Maintenance Plan",
    },
    {
      category: "Cybersecurity & Access",
      title: "Network Security",
      description:
        "Enterprise network protection through firewall configuration, strict access controls, intrusion prevention, and real-time threat monitoring.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />,
      primaryLinkText: "Request Solution Overview",
      secondaryLinkText: "Schedule a Security Audit",
    },
    {
      category: "Wireless Technology",
      title: "Wi-Fi Solutions",
      description:
        "Custom wireless network setup, mesh deployment, and channel optimization to extend coverage and maximize connection speeds across all zones.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      icon: <Wifi className="h-6 w-6 text-emerald-600" />,
      primaryLinkText: "Request Solution Overview",
      secondaryLinkText: "Schedule a Coverage Assessment",
    },
    {
      category: "Hardware & Connectivity",
      title: "Structured Cabling",
      description:
        "Professional installation and organization of Ethernet and fiber cabling standards (Cat6/Cat6A) for clean, high-speed backbone architecture.",
      image:
        "https://images.unsplash.com/photo-1520869578617-557561d7b114?auto=format&fit=crop&w=800&q=80",
      icon: <Cable className="h-6 w-6 text-emerald-600" />,
      primaryLinkText: "Request Solution Overview",
      secondaryLinkText: "Schedule a Cable Assessment",
    },
  ];

  return (
    <section id="services" className="bg-slate-50/50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-600">
            We provide reliable network solutions designed to keep businesses and
            individuals connected, secure, and productive.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              {/* Header Image & Overlapping Icon Badge */}
              <div className="relative h-48 w-full bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Floating Icon Badge */}
                <div className="absolute -bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-3 shadow-md ring-1 ring-slate-100">
                  {service.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6 pt-10">
                <div>
                  {/* Category Tag */}
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    {service.category}
                  </span>

                  {/* Title */}
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>

                {/* Footer Action Links */}
                <div className="mt-8 border-t border-slate-100 pt-5 space-y-3">
                  <a
                    href="#request"
                    className="inline-flex items-center text-sm font-semibold text-blue-900 hover:text-blue-700"
                  >
                    {service.primaryLinkText || "Request Solution Overview"}{" "}
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </a>

                  <div>
                    <a
                      href="#schedule"
                      className="text-sm font-medium text-slate-500 hover:text-slate-800"
                    >
                      {service.secondaryLinkText || "Schedule a Demo"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;