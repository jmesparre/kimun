"use client";

import { Button } from "@/components/ui/button";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const container = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // Entrance animation
      const tl = gsap.timeline();

      // Text Entrance animation (Title, Subtitle, Description)
      tl.fromTo(
        ".hero-text",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
        }
      );

      // Button Entrance animation
      tl.fromTo(
        ".hero-button",
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power3.out",
        }
      );

      // Parallax animation
      gsap.to(".parallax-bg", {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex text-center justify-center"
    >
      <div
        className="parallax-bg absolute inset-0 -z-10 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: "url(/hero.jpg)" }}
      />
      <div className="absolute inset-0 bg-black/50 -z-10" />
      <div ref={container} className="relative z-10 text-white pt-30 max-w-2xl lg:max-w-4xl">
        <h1 className="hero-text text-4xl text-shadow-lg md:text-5xl  font-bold tracking-tight">
          Construimos Tu Futuro,
        </h1>
        <h2 className="hero-text text-4xl text-shadow-lg md:text-5xl  font-bold tracking-tight">
          Cuidamos el Planeta
        </h2>
        <p className="hero-text mt-4 text-lg text-shadow-lg md:text-xl max-w-md m-auto">
          Viviendas ecológicas de diseño que combinan tecnología, sustentabilidad y confort.
        </p>
        <Button className="hero-button mt-8" size="lg">
          Solicitá tu cotización
        </Button>
      </div>
    </section>
  );
}
