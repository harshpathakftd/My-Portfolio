/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 flex items-center z-40 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-900/90 backdrop-blur-xl shadow-lg shadow-black/10"
          : "bg-gradient-to-b from-zinc-900 to-zinc-900/0"
      }`}
    >
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a
            href="/"
            className="logo inline-block transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <img
              src="/images/logo.png"
              width={50}
              height={40}
              alt="Portfolio"
            />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn md:hidden transition-transform duration-200 hover:scale-105"
            onClick={() => setNavOpen((prev) => !prev)}
            aria-expanded={navOpen}
            aria-label={navOpen ? "Close menu" : "Open menu"}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>

          <Navbar navOpen={navOpen} />
        </div>

        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}

export default Header