/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ButtonPrimary, ButtonOutline } from "./Button";

const HEADLINE_PHRASES = [
  "DevOps Engineer",
  "Cloud & Kubernetes Specialist",
  "Full Stack Developer",
];
const TYPE_SPEED_MS = 80;
const BACKSPACE_SPEED_MS = 50;
const PAUSE_AFTER_TYPE_MS = 2200;
const PAUSE_AFTER_DELETE_MS = 400;
const CURSOR_BLINK_MS = 530;

const Hero = () => {
  const sectionRef = useRef(null);
  const avatarRef = useRef(null);
  const badgeRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);
  const glowRef = useRef(null);
  const techStackRef = useRef(null);
  const highlightsRef = useRef(null);

  const [headlineText, setHeadlineText] = useState("");
  const [cursorOn, setCursorOn] = useState(true);
  const [startTyping, setStartTyping] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [phase, setPhase] = useState("typing"); // 'typing' | 'deleting'

  // Start typewriter after headline container is visible
  useEffect(() => {
    const id = setTimeout(() => setStartTyping(true), 400);
    return () => clearTimeout(id);
  }, []);

  // Typewriter + backspace cycle
  useEffect(() => {
    if (!startTyping) return;

    const currentPhrase = HEADLINE_PHRASES[phraseIndex];

    if (phase === "typing") {
      if (headlineText.length >= currentPhrase.length) {
        // Pause at full phrase, then start deleting
        const id = setTimeout(() => setPhase("deleting"), PAUSE_AFTER_TYPE_MS);
        return () => clearTimeout(id);
      }
      const id = setTimeout(() => {
        setHeadlineText(currentPhrase.slice(0, headlineText.length + 1));
      }, TYPE_SPEED_MS);
      return () => clearTimeout(id);
    }

    if (phase === "deleting") {
      if (headlineText.length === 0) {
        // Switch to next phrase and start typing
        const id = setTimeout(() => {
          setPhraseIndex((i) => (i + 1) % HEADLINE_PHRASES.length);
          setPhase("typing");
        }, PAUSE_AFTER_DELETE_MS);
        return () => clearTimeout(id);
      }
      const id = setTimeout(() => {
        setHeadlineText(headlineText.slice(0, -1));
      }, BACKSPACE_SPEED_MS);
      return () => clearTimeout(id);
    }
  }, [startTyping, phase, phraseIndex, headlineText]);

  // Blinking cursor
  useEffect(() => {
    const id = setInterval(() => setCursorOn((c) => !c), CURSOR_BLINK_MS);
    return () => clearInterval(id);
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        avatarRef.current,
        { opacity: 0, y: 24, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5 }
      )
        .fromTo(
          badgeRef.current,
          { opacity: 0, x: -12 },
          { opacity: 1, x: 0, duration: 0.4 },
          "-=0.25"
        )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.2"
        )
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.45 },
          "-=0.35"
        )
        .fromTo(
          techStackRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.45 },
          "-=0.25"
        )
        .fromTo(
          highlightsRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.45 },
          "-=0.3"
        )
        .fromTo(
          buttonsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        );

      if (imageRef.current) {
        tl.fromTo(
          imageRef.current,
          { opacity: 0, x: 40, scale: 0.96 },
          { opacity: 1, x: 0, scale: 1, duration: 0.8 },
          "-=0.5"
        );
      }
      if (glowRef.current) {
        tl.fromTo(
          glowRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.6 },
          "-=0.8"
        );
      }
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative pt-28 lg:pt-36 overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgba(56,189,248,0.08),transparent_50%)]"
      />

      <div className="container relative items-center lg:grid lg:grid-cols-2 lg:gap-12">
        <div className="relative z-10">
          {/* Avatar + Status badge */}
          <div className="flex items-center gap-3">
            <figure
              ref={avatarRef}
              className="img-box w-11 h-11 rounded-xl ring-2 ring-zinc-600/50 ring-offset-2 ring-offset-zinc-900 overflow-hidden shadow-lg"
            >
              <img
                src="/images/avatar-1.jpg"
                width={44}
                height={44}
                alt="Harsh Pathak"
                className="img-cover"
              />
            </figure>

            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/80 ring-1 ring-zinc-600/40 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-emerald-400/30" />
              </span>
              <span className="text-zinc-300 text-sm font-medium tracking-wide">
                Available for work
              </span>
            </div>
          </div>

          {/* Headline – typewriter */}
          <h1
            ref={headlineRef}
            className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-6 mb-3 lg:mb-4 min-h-[1.2em]"
          >
            {headlineText}
            <span
              className="inline-block w-[2px] min-w-[2px] h-[0.85em] align-middle bg-sky-400 ml-0.5 transition-opacity duration-75"
              style={{ opacity: cursorOn ? 1 : 0 }}
              aria-hidden="true"
            />
          </h1>
          <p
            ref={subtextRef}
            className="text-zinc-400 text-lg lg:text-xl max-w-[32ch] mb-5 font-normal leading-relaxed"
          >
            Building scalable infrastructure, CI/CD & cloud automation — plus full-stack when the project needs it.
          </p>

          {/* Tech stack */}
          <p
            ref={techStackRef}
            className="text-zinc-500 text-sm sm:text-base mb-4 font-medium tracking-wide flex flex-wrap items-center gap-x-2 gap-y-1"
          >
            {["AWS", "Kubernetes", "Docker", "Jenkins", "Terraform", "Linux"].map(
              (tech, i) => (
                <span key={tech} className="inline-flex items-center gap-x-2">
                  <span className="text-zinc-400 hover:text-sky-400 transition-colors">
                    {tech}
                  </span>
                  {i < 5 && (
                    <span className="text-zinc-600 select-none" aria-hidden="true">
                      |
                    </span>
                  )}
                </span>
              )
            )}
          </p>

          {/* Experience + Remote */}
          <div
            ref={highlightsRef}
            className="flex flex-wrap items-center gap-3 mb-8 lg:mb-10"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800/80 ring-1 ring-zinc-600/40 text-zinc-300 text-sm font-medium">
              <span className="text-sky-400 font-semibold">3+</span> Years
              Experience
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800/80 ring-1 ring-zinc-600/40 text-zinc-300 text-sm font-medium">
              Open to Remote Opportunities
            </span>
          </div>

          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-wrap items-center gap-3">
            <ButtonPrimary
              href="/images/Harsh_Pathak_devops_ATS__New.pdf"
              label="Download CV"
              icon="download"
              download="Harsh_Pathak_Resume.pdf"
            />
            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        {/* Hero image with glow */}
        <div className="hidden lg:block relative mt-12 lg:mt-0">
          <div
            ref={glowRef}
            className="absolute -inset-4 bg-gradient-to-t from-sky-500/20 via-sky-400/10 to-transparent rounded-[80px] blur-2xl -z-10"
            aria-hidden="true"
          />
          <figure
            ref={imageRef}
            className="w-full max-w-[480px] ml-auto rounded-[60px] overflow-hidden shadow-2xl shadow-sky-950/30 ring-1 ring-zinc-700/50 bg-gradient-to-t from-sky-400/20 via-transparent to-transparent"
          >
            <img
              src="/images/sst.png"
              width={656}
              height={800}
              alt="Harsh Pathak"
              className="w-full object-cover hero-image-float"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
