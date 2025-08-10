import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload
    alert("Form submitted successfully!");
  };

  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-100">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-400/40 mt-20">
        {/* Logo and description */}
        <div className="md:max-w-96">
          <img className="h-7" src={assets.logo} alt="SaaScribe Logo" />
          <p className="mt-6 text-sm drop-shadow-md">
            Experience the power of AI with{" "}
            <span className="font-semibold">SaaScribe</span>.
            <br /> Transform your content creation with our suite of premium AI
            tools. Write articles, generate images, and enhance your workflow.
          </p>
        </div>

        {/* Links and subscription */}
        <div className="flex-1 flex items-start md:justify-end gap-20">
          {/* Company links */}
          <div>
            <h2 className="font-semibold mb-5 text-white drop-shadow-sm">
              Company
            </h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:text-indigo-400 transition" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-indigo-400 transition" href="#">
                  About us
                </a>
              </li>
              <li>
                <a className="hover:text-indigo-400 transition" href="#">
                  Contact us
                </a>
              </li>
              <li>
                <a className="hover:text-indigo-400 transition" href="#">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="font-semibold text-white mb-5 drop-shadow-sm">
              Subscribe to our newsletter
            </h2>
            <div className="text-sm space-y-2">
              <p className="drop-shadow-md">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-2 pt-4"
              >
                <input
                  className="bg-white/10 border border-white/30 placeholder-gray-300 text-white focus:ring-2 ring-indigo-500 outline-none w-full max-w-64 h-9 rounded px-2"
                  type="email"
                  placeholder="Enter your email"
                  required
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "Please enter a valid email address"
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                />
                <button
                  type="submit"
                  className="bg-indigo-500 hover:bg-indigo-600 w-24 h-9 text-white rounded cursor-pointer transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom text */}
      <p className="pt-4 text-center text-xs md:text-sm pb-5 text-gray-300 drop-shadow-sm">
        Copyright 2025 © SaaScribe. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
