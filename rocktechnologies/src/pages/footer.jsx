import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

function Footer() {
  const socialLinks = [
    {
      icon: <FaInstagram size={16} />,
      href: "https://www.instagram.com/",
      label: "Instagram",
    },
  ];

  const solutions = [
    "Network Installation",
    "Structured Cabling",
    "Wi-Fi & Mesh Solutions",
    "Network Security",
    "Hardware & Products",
    "Downloads & Guides",
  ];

  return (
    <footer className="relative border-t border-emerald-100 bg-emerald-50/60 pt-16 pb-6 font-sans text-slate-600">

      {/* Top Border Accent */}
      <div className="absolute top-0 right-0 left-0 h-1 bg-emerald-700" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Column 1: Brand & About */}
          <div className="space-y-4">

            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-700 text-xl font-bold text-white">
                R
              </div>

              <span className="text-xl font-bold tracking-tight text-emerald-950">
                ROCK TECHNOLOGIES
              </span>
            </div>

            <p className="text-xs leading-relaxed text-slate-600">
              A trusted network solutions and ICT infrastructure provider,
              delivering reliable connectivity, structured cabling, and
              enterprise hardware across East Africa.
            </p>

            {/* Social Media */}
            <div className="flex space-x-2 pt-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm transition hover:bg-emerald-700 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-4">

            <h3 className="text-base font-bold text-slate-900">
              Our Solutions
            </h3>

            <ul className="space-y-2.5 text-xs font-medium">
              {solutions.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item === "Hardware & Products" ? "#products" : "#services"}
                    className="transition hover:text-emerald-700 hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* Column 3: Contact Information */}
          <div className="space-y-4">

            <h3 className="text-base font-bold text-slate-900">
              Contact Us
            </h3>

            <ul className="space-y-3 text-xs">

              <li className="flex items-start space-x-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />

                <span>
                  1st Floor, Tech Park Building, Ring Road, Westlands, Nairobi
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 shrink-0 text-emerald-700" />

                <span>+254 700 000 000</span>
              </li>

              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 shrink-0 text-emerald-700" />

                <span>info@rocktechnologies.co.ke</span>
              </li>

              <li className="flex items-center space-x-3">
                <Clock className="h-4 w-4 shrink-0 text-emerald-700" />

                <span>8:00 am – 5:00 pm</span>
              </li>

            </ul>
          </div>

          {/* Column 4: App Downloads */}
          <div className="space-y-4">

            <h3 className="text-base leading-snug font-bold text-slate-900">
              Our apps are available on the Google Play Store
            </h3>

            <div className="space-y-2 pt-1">

              {/* Google Play */}
              <a
                href="#"
                className="flex w-full max-w-[200px] items-center space-x-3 rounded-md bg-black px-4 py-2 text-white shadow-md transition hover:bg-slate-800"
              >

                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L18.81,13.12C19.34,12.59 19.34,11.41 18.81,10.88L16.81,8.88L14.75,10.94L16.81,15.12M14.75,13.06L16.81,15.12L5.25,22.19L14.75,13.06M5.25,1.81L16.81,8.88L14.75,10.94L5.25,1.81Z" />
                </svg>

                <div className="text-left">
                  <div className="text-[9px] font-semibold tracking-wider text-slate-300 uppercase">
                    Android App On
                  </div>

                  <div className="text-xs leading-none font-bold">
                    Google Play
                  </div>
                </div>

              </a>

              {/* Windows Store */}
              <a
                href="#"
                className="flex w-full max-w-[200px] items-center space-x-3 rounded-md bg-black px-4 py-2 text-white shadow-md transition hover:bg-slate-800"
              >

                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4h-13.051M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.801" />
                </svg>

                <div className="text-left">
                  <div className="text-[9px] font-semibold tracking-wider text-slate-300 uppercase">
                    Download from
                  </div>

                  <div className="text-xs leading-none font-bold">
                    Windows Store
                  </div>
                </div>

              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between border-t border-emerald-100/80 pt-6 text-xs text-slate-500 md:flex-row">

          <p>
            © 2026 All Rights Reserved. Rock Technologies Ltd
          </p>

          <p className="mt-3 md:mt-0">
            Built for reliable connectivity.
          </p>

        </div>

      </div>

      {/* Floating Contact and WhatsApp Buttons */}
      <div className="fixed right-4 bottom-4 z-50 flex items-center space-x-2">

        <a
          href="#contact"
          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-lg transition hover:bg-emerald-50"
        >
          Contact us
        </a>

        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition hover:scale-105 hover:bg-emerald-600"
        >
          <MessageCircle className="h-5 w-5" />
        </a>

      </div>

    </footer>
  );
}

export default Footer;