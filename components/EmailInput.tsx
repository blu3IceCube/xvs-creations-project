"use client";

import { ArrowRight } from "lucide-react";

const EmailInput = () => {
  return (
    <section className="text-white">
      <div className="w-[400px]">
        <form className="relative border-b border-white pb-2">
          <input
            type="email"
            placeholder="enter your email"
            className="bg-transparent outline-none w-full pr-10 text-white placeholder:text-gray-400 py-2"
          />
          <button
            type="submit"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition"
          >
            <ArrowRight />
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailInput;
