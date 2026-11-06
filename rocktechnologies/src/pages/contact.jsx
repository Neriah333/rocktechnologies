import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form Submitted:", formData);

    alert("Thank you for contacting RockTechnologies!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="bg-white px-6 py-24">

      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">

          <h2 className="mb-4 text-4xl font-bold text-green-800">
            Get In Touch
          </h2>

          <p className="mx-auto max-w-2xl text-slate-600">
            Have a question or need a reliable network solution?
            Get in touch with our team. We'd be happy to assist you.
          </p>

        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl bg-green-800 p-8 text-white md:p-10">

            <h3 className="mb-4 text-2xl font-bold">
              Contact Information
            </h3>

            <p className="mb-10 text-sm leading-relaxed text-green-100">
              Reach out to us for enquiries, technical assistance,
              or information about our network solutions.
            </p>

            <div className="space-y-8">

              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-green-300" />

                <div>
                  <h4 className="mb-1 font-semibold">Our Location</h4>
                  <p className="text-sm text-green-100">
                    Nairobi, Kenya
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 shrink-0 text-green-300" />

                <div>
                  <h4 className="mb-1 font-semibold">Phone Number</h4>
                  <p className="text-sm text-green-100">
                    +254 790 502 537
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 shrink-0 text-green-300" />

                <div>
                  <h4 className="mb-1 font-semibold">Email Address</h4>
                  <p className="text-sm text-green-100">
                    info@rocktechnologies.co.ke
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 shrink-0 text-green-300" />

                <div>
                  <h4 className="mb-1 font-semibold">Working Hours</h4>
                  <p className="text-sm text-green-100">
                    Monday – Friday: 8:00 AM – 5:00 PM
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div>

            <h3 className="mb-2 text-2xl font-bold text-slate-800">
              Send Us a Message
            </h3>

            <p className="mb-8 text-sm text-slate-500">
              Fill in the form below and we'll get back to you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name and Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    required
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

              </div>

              {/* Phone Number */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+254 7XX XXX XXX"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="5"
                  required
                  className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
              >
                Send Message
                <Send size={18} />
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;