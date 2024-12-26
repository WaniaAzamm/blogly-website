import React from "react";
import Image from "next/image";

export default function ReviewCards() {
  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            What Our Readers Say
          </h2>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="w-64 p-6 bg-white shadow-lg rounded-lg text-center mb-8">
              <div className="flex justify-center mb-4">
                <Image
                  src="/n1.jpg"
                  alt="User 1"
                  width={50}
                  height={50}
                  className="rounded-full object-contain"
                />
              </div>
              <p className="text-gray-600 text-sm mb-4">
                I love the content on this blog! Its insightful and keeps me
                updated on the latest trends!
              </p>
              <div className="font-semibold text-gray-800">John Doe</div>
              <div className="text-sm text-gray-500">Web Developer</div>
            </div>

            <div className="w-64 p-6 bg-white shadow-lg rounded-lg text-center mb-8">
              <div className="flex justify-center mb-4">
                <Image
                  src="/t1.png"
                  alt="User 2"
                  width={50}
                  height={50}
                  className="rounded-full object-contain"
                />
              </div>
              <p className="text-gray-600 text-sm mb-4">
                An incredible resource for developers. The articles are always
                relevant and practical!
              </p>
              <div className="font-semibold text-gray-800">Alice Johnson</div>
              <div className="text-sm text-gray-500">Full-stack Developer</div>
            </div>

            <div className="w-64 p-6 bg-white shadow-lg rounded-lg text-center mb-8">
              <div className="flex justify-center mb-4">
                <Image
                  src="/c1.jpg"
                  alt="User 3"
                  width={50}
                  height={50}
                  className="rounded-full object-contain"
                />
              </div>
              <p className="text-gray-600 text-sm mb-4">
                The blog has become my go-to source for the latest in tech.
                Highly recommend!
              </p>
              <div className="font-semibold text-gray-800">Jane Smith</div>
              <div className="text-sm text-gray-500">Software Engineer</div>
            </div>

            <div className="w-64 p-6 bg-white shadow-lg rounded-lg text-center mb-8">
              <div className="flex justify-center mb-4">
                <Image
                  src="/t2.png"
                  alt="User 4"
                  width={50}
                  height={50}
                  className="rounded-full object-contain"
                />
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Great blog with a variety of topics. I look forward to every new
                post!?
              </p>
              <div className="font-semibold text-gray-800">Mark Wilson</div>
              <div className="text-sm text-gray-500">UX Designer</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
