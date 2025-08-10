import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 sm:px-20 xl:px-32 relative flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen text-white">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-center mb-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2] drop-shadow-lg">
          Create amazing content <br /> with{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-primary inline-block drop-shadow-lg"
          >
            <Typewriter
              options={{
                strings: ["AI tools"],
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 50,
                pauseFor: 0,
              }}
            />
          </motion.span>
        </h1>
        <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-200 font-medium drop-shadow-md">
          Transform your content creation with our suite of premium AI tools.
          Write articles, generate images, remove backgrounds, and enhance your
          workflow.
        </p>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs">
        <button
          onClick={() => navigate("/ai")}
          className="bg-primary text-white px-10 py-3 rounded-lg hover:scale-105 active:scale-95 transition cursor-pointer drop-shadow-lg"
        >
          Start creating now
        </button>
      </div>

      {/* Trusted Brands Carousel */}
      <div className="relative z-10 overflow-hidden py-4 mt-8">
        <div className="whitespace-nowrap animate-slide flex items-center justify-center">
          <img
            src={assets.slack}
            alt="Slack"
            className="h-10 mx-8 inline-block"
          />
          <img
            src={assets.framer}
            alt="Framer"
            className="h-10 mx-8 inline-block"
          />
          <img
            src={assets.google}
            alt="Google"
            className="h-10 mx-8 inline-block"
          />
          <img
            src={assets.linkedin}
            alt="LinkedIn"
            className="h-10 mx-8 inline-block"
          />
          <img
            src={assets.instagram}
            alt="Instagram"
            className="h-10 mx-8 inline-block"
          />
          <img
            src={assets.facebook}
            alt="Facebook"
            className="h-10 mx-8 inline-block"
          />
          {/* Duplicate for loop effect */}
          <img
            src={assets.slack}
            alt="Slack"
            className="h-10 mx-8 inline-block"
          />
          <img
            src={assets.framer}
            alt="Framer"
            className="h-10 mx-8 inline-block"
          />
          <img
            src={assets.google}
            alt="Google"
            className="h-10 mx-8 inline-block"
          />
          <img
            src={assets.linkedin}
            alt="LinkedIn"
            className="h-10 mx-8 inline-block"
          />
          <img
            src={assets.instagram}
            alt="Instagram"
            className="h-10 mx-8 inline-block"
          />
          <img
            src={assets.facebook}
            alt="Facebook"
            className="h-10 mx-8 inline-block"
          />
        </div>
      </div>
      {/* Trusted Users */}
      <div className="relative z-10 flex items-center justify-center gap-4 mt-8 mx-auto drop-shadow-lg">
        <img
          src={assets.user_group}
          alt="Trusted Users"
          className="h-8 object-contain animate-pulse"
        />
        <p className="text-lg sm:text-xl text-gray-200">
          Trusted by{" "}
          <span className="font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            15k+ creators
          </span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
