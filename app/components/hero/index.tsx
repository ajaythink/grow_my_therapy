"use client"
import Navbar from "@/app/components/navbar";
import { useEffect, useState } from "react";

const Hero = () => {
  const [showMsg , setShowMsg] = useState("Greater Love in Your Relationships")
  const message = [
    "Greater Purpose in Your Life Direction",
    "Greater Peace in Your Heart",
    "Greater Love in Your Relationships",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMsg((prev) => {
        const currentIndex = message.indexOf(prev);
        const nextIndex = (currentIndex + 1) % message.length;
        return message[nextIndex];
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  });
  return (
    <>
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className=" bg-gray-400 flex-1 bg-[url('/home_bg.webp')] h-screen bg-cover bg-center bg-blend-multiply px-24">
          <div className="flex flex-col justify-center items-center text-white pt-8">
            <p>Christian Counseling Services in Richmond & Central Virginia</p>
            <p className="text-4xl font-bold">
              Professional Counseling for Christian Healing and Growth
            </p>
            <p className="text-lg mt-4">
              Begin your journey today towards spiritual growth, deeper
              relationships, and lasting inner peace
            </p>
            <p className="text-2xl mt-2 font-bold">
              I want to work with you for…
            </p>
            <p className="text-2xl mt-2 font-bold animate-[ping_3s_linear_infinite] text-blue-300">
              {showMsg}
            </p>
            <p className="font-bold m-5">
              {" "}
              <span className="text-black">&#x2606;</span>Top Rated 40+ Years
              Experience Testimonials Media Mentions
            </p>
            <button className="px-2 py-2 bg-white rounded-lg font-bold text-blue-500 text-center shadow shadow-sky-500 cursor-pointer">
              <span className="text-2xl font-bold">&#x2727;</span> Start Healing
              Today
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
