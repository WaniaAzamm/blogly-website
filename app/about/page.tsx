"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Page() {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="bg-black text-gray-300">
      <div
        className="relative min-h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/h5.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10 px-6 md:px-16">
          <div className="text-center">
            <h1 className="text-4xl pt-20 sm:text-5xl md:text-7xl font-bold text-white animate__animated animate__fadeIn mb-6">
              Welcome to Our World of Knowledge
            </h1>
            <p className="text-lg sm:text-xl text-gray-300">
              Your one-stop destination for insightful blogs, expert reviews,
              and life-changing stories.
            </p>
            <Link href="/allblogs">
              <button className="mt-6 px-8 py-3 bg-red-600 hover:bg-red-700 text-white text-lg rounded-lg transition-all">
                Explore Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            About Us
          </h2>
          <p className="text-lg sm:text-xl mb-8">
            At <span className="text-red-500">Our Blog</span>, we believe in the
            power of knowledge and inspiration. Our mission is to create a space
            where readers can explore, learn, and grow.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 text-left text-lg">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-red-400">
              What We Offer
            </h3>
            <ul className="list-disc pl-6">
              <li className="mb-3">
                Cutting-edge insights into the latest technology trends.
              </li>
              <li className="mb-3">
                Expert opinions on products and services.
              </li>
              <li className="mb-3">
                Step-by-step tutorials to help you upskill.
              </li>
              <li className="mb-3">
                Inspiring stories to motivate and uplift.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-red-400">
              Why Choose Us?
            </h3>
            <ul className="list-disc pl-6">
              <li className="mb-3">
                Reliable, well-researched content curated by experts.
              </li>
              <li className="mb-3">
                Diverse topics to cater to a wide range of interests.
              </li>
              <li className="mb-3">
                A commitment to fostering a community of learners and
                innovators.
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-red-400">
            Our Mission
          </h3>
          <p>
            Our mission is to bridge the gap between knowledge and inspiration,
            empowering readers to explore their potential and embrace the
            ever-changing world of ideas. Together, we aim to build a brighter
            future by making learning accessible and engaging for everyone.
          </p>
          {readMore && (
            <p className="mt-4 text-gray-400">
              From breaking news in technology to heartfelt human-interest
              stories, we cover it all. Our commitment to innovation drives us
              to continuously improve and adapt to the needs of our readers.
              Thank you for being part of our journey.
            </p>
          )}
          <button
            onClick={toggleReadMore}
            className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-md transition-all"
          >
            {readMore ? "Read Less" : "Read More"}
          </button>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-3 text-red-400">
                Innovation
              </h4>
              <p className="text-gray-300">
                We push boundaries and encourage creative solutions to deliver
                content that inspires and informs.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-3 text-red-400">
                Integrity
              </h4>
              <p className="text-gray-300">
                Honesty and transparency form the foundation of all our content
                and interactions.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-3 text-red-400">
                Community
              </h4>
              <p className="text-gray-300">
                We believe in creating a strong community where ideas and
                connections thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-black text-center">
        <h4 className="text-3xl sm:text-4xl text-white font-bold mb-4">
          Join Our Journey
        </h4>
        <p className="text-lg sm:text-xl text-gray-300 mb-6">
          Be a part of a growing community that values knowledge, innovation,
          and inspiration.
        </p>
        <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-lg transition-all">
          Subscribe Now
        </button>
      </section>
    </div>
  );
}
