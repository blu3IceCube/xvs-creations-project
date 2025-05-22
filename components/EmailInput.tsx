"use client";

import { ArrowRight } from "lucide-react";

const EmailInput = () => {
  return (
    <section className="text-white">
      <div className="w-[400px]">
        <form className="relative border-b border-white pb-2 focus-within:border-yellow-300 group">
          <input
            type="email"
            placeholder="enter your email"
            className="bg-transparent outline-none w-full pr-10 text-yellow-300 placeholder:text-gray-400 py-2"
          />
          <button
            type="submit"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white transition cursor-pointer group-focus-within:text-yellow-300 hover:text-yellow-300"
          >
            <ArrowRight />
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailInput;
