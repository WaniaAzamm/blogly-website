import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Page() {
  return (
    <div>
      <div
        className="relative min-h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/contact.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white z-10">
          <div className="text-center px-6 md:px-16">
            <h1 className="text-5xl md:text-7xl font-bold hero-text animate__animated animate__fadeIn animate__delay-1s mb-6">
              Get In Touch With Us
            </h1>
            <p className="text-xl md:text-2xl">
              Have any questions or want to start a project with us? Reach out
              now and lets get connected!
            </p>
          </div>
        </div>
      </div>
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Get In Touch</h2>
          <p className="text-xl mb-12">
            We’d love to hear from you! Please fill out the form below or reach
            out to us via email or phone.
          </p>

          <form className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300"
                />
              </div>
              <div>
                <label className="block text-lg mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-lg mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
              />
            </div>

            <button
              type="submit"
              className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg text-xl hover:bg-indigo-700 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-100 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Contact Details</h2>
          <p className="text-lg mb-8">
            You can also reach us through the following channels:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <FaPhone className="text-4xl text-indigo-600 mb-4" />
              <p className="text-xl">+12345(5464)</p>
            </div>

            <div className="flex flex-col items-center">
              <FaEnvelope className="text-4xl text-indigo-600 mb-4" />
              <p className="text-xl">waniaazam605@company.com</p>
            </div>

            <div className="flex flex-col items-center">
              <FaMapMarkerAlt className="text-4xl text-indigo-600 mb-4" />
              <p className="text-xl">Wania Azam, karachi, pakistan</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
