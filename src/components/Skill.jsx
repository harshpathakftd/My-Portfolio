/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SkillCard from "./SkillCard";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const devOpsSkills = [
  { imgSrc: "/images/AWS.png", label: "AWS", desc: "Cloud" },
  { imgSrc: "/images/kube.png", label: "Kubernetes", desc: "Orchestration" },
  { imgSrc: "/images/docker.png", label: "Docker", desc: "Containers" },
  { imgSrc: "/images/jenkins.png", label: "Jenkins", desc: "CI/CD" },
  { imgSrc: "/images/ter.png", label: "Terraform", desc: "IaC" },
  { imgSrc: "/images/linux.png", label: "Linux", desc: "OS / Shell" },
  { imgSrc: "/images/git.png", label: "Git", desc: "Version control" },
  { imgSrc: "/images/ani.png", label: "Ansible", desc: "Automation" },
  { imgSrc: "/images/prom.png", label: "Prometheus", desc: "Monitoring" },
  { imgSrc: "/images/grap.webp", label: "Grafana", desc: "Observability" },
  { imgSrc: "/images/maven.png", label: "Maven", desc: "Build" },
];

const fullStackSkills = [
  { imgSrc: "/images/java.png", label: "Java", desc: "Backend" },
  { imgSrc: "/images/Spring_Boot.png", label: "Spring Boot", desc: "Backend" },
  { imgSrc: "/images/hibernate.png", label: "Hibernate", desc: "ORM" },
  { imgSrc: "/images/react.svg", label: "React", desc: "Frontend" },
];

const Skill = () => {
  const sectionRef = useRef(null);
  const devOpsGridRef = useRef(null);
  const fullStackGridRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "-80 bottom",
            end: "bottom 90%",
            toggleActions: "play none none none",
          },
        }
      );

      const devOpsCards = devOpsGridRef.current?.querySelectorAll(".skill-card-item") ?? [];
      const fullStackCards = fullStackGridRef.current?.querySelectorAll(".skill-card-item") ?? [];

      gsap.fromTo(
        devOpsCards,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: devOpsGridRef.current,
            start: "-60 bottom",
            end: "bottom 88%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        fullStackCards,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: fullStackGridRef.current,
            start: "-60 bottom",
            end: "bottom 88%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="skills" className="section section-line pb-24 lg:pb-32">
      <div className="container">
        <div ref={headerRef} className="opacity-0">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-sky-400/10 text-sky-400 ring-1 ring-sky-400/20 mb-4">
            Tech stack
          </span>
          <h2 className="headline-2">
            DevOps & Full Stack — Tools I Use
          </h2>
          <p className="text-zinc-400 mt-3 mb-10 max-w-[52ch]">
            From cloud, CI/CD & infrastructure to backend and frontend — the tools I use to build and ship reliable systems and applications.
          </p>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-sky-400/60 shrink-0" />
              DevOps & Cloud
            </h3>
            <div
              ref={devOpsGridRef}
              className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))]"
            >
              {devOpsSkills.map(({ imgSrc, label, desc }, key) => (
                <SkillCard
                  key={key}
                  imgSrc={imgSrc}
                  label={label}
                  desc={desc}
                  classes="skill-card-item skill-card opacity-0"
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-sky-400/60 shrink-0" />
              Full Stack
            </h3>
            <div
              ref={fullStackGridRef}
              className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))]"
            >
              {fullStackSkills.map(({ imgSrc, label, desc }, key) => (
                <SkillCard
                  key={key}
                  imgSrc={imgSrc}
                  label={label}
                  desc={desc}
                  classes="skill-card-item skill-card opacity-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill