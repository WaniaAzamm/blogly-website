"use client";

import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa";

export default function SignupPage() {
  return (
    <div className="bg-[#fff] pt-20 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-lg w-full px-20 my-20 py-8 shadow-lg rounded-lg bg-[#fff]">
        <div className="flex justify-center mb-6">
          <h1 className="text-2xl font-bold text-blue-600 tracking-wide flex items-center space-x-2">
            <span className="text-3xl text-blue-500">
              B<span className="text-3xl text-black">logly</span>
            </span>
          </h1>
        </div>

        <h2 className="text-3xl text-center font-semibold text-[#333] mb-6">
          Create Account
        </h2>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#555]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-4 mt-2 bg-[#f9f9f9] text-[#333] rounded-lg border border-[#ddd] focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#555]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-4 mt-2 bg-[#f9f9f9] text-[#333] rounded-lg border border-[#ddd] focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-[#555]"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full p-4 mt-2 bg-[#f9f9f9] text-[#333] rounded-lg border border-[#ddd] focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
              placeholder="Confirm your password"
            />
          </div>
          <Link href="/">
            <button
              type="submit"
              className="w-full py-3 mt-6 bg-[#4285F4] hover:bg-[#357ae8] text-white text-lg rounded-lg transition-all"
            >
              Sign Up
            </button>
          </Link>
        </form>

        <div className="mt-6 text-center text-[#555]">
          <p>
            Already have an account?{" "}
            <Link href="/login" className="text-[#4285F4] hover:underline">
              Sign in
            </Link>
          </p>
        </div>

        <div className="mt-6 text-center">
          <button className="w-full py-3 mt-4 bg-[#DB4437] hover:bg-[#c1352f] text-white flex items-center justify-center gap-2 text-lg rounded-lg transition-all">
            <FaGoogle className="text-white text-xl" />
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
}
