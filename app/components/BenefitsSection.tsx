"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Recycle, Thermometer, VolumeX, FireExtinguisher, Hourglass } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
    { title: "Sustentable", icon: Recycle },
    { title: "Térmica", icon: Thermometer },
    { title: "Acústica", icon: VolumeX },
    { title: "Ignífuga", icon: FireExtinguisher },
    { title: "Velocidad", icon: Hourglass },
];

export default function BenefitsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const styleRef = useRef<HTMLDivElement>(null);
    const materialsRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%", // Start early enough to see it come in
                    end: "bottom top",
                    toggleActions: "play none none reverse",
                },
            });

            // 1. Background Wipe
            tl.fromTo(
                bgRef.current,
                { scaleX: 0 },
                { scaleX: 1, duration: 0.8, ease: "power3.inOut", transformOrigin: "left" }
            );

            // 2. Title Slide In
            tl.fromTo(
                titleRef.current,
                { x: -50, autoAlpha: 0 },
                { x: 0, autoAlpha: 1, duration: 0.5, ease: "power2.out" },
                "-=0.4"
            );

            // 3. Cards Stagger In
            const cards = cardsRef.current?.children;
            if (cards) {
                // Initial appearance (slide up)
                tl.fromTo(
                    cards,
                    { y: 30, autoAlpha: 0 },
                    { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" },
                    "-=0.2"
                );

                // Icon Bounce (a little scale pop after they appear)
                tl.fromTo(
                    gsap.utils.toArray(".benefit-icon"),
                    { scale: 0.8 },
                    { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.5)", stagger: 0.1, clearProps: "all" },
                    "-=0.4"
                );
            }

            // 4. New Sections Fade In
            tl.fromTo(
                [styleRef.current, materialsRef.current],
                { y: 50, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" },
                "-=0.2"
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="w-full">
            {/* Top Part: Benefits with Blue Wipe Background */}
            <div className="relative py-20 lg:py-32 overflow-hidden">
                {/* Background Wipe Layer */}
                <div ref={bgRef} className="absolute inset-0 bg-[#d0e4e6] z-0" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-8">

                        {/* Title Section */}
                        <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
                            <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#8baeb3] uppercase leading-tight text-center lg:text-left invisible">
                                Bene<br className="hidden lg:block" />ficios
                            </h2>
                        </div>

                        {/* Cards Grid */}
                        <div ref={cardsRef} className="w-full lg:w-3/4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {benefits.map((item, index) => (
                                <div key={index} className="flex flex-col items-center justify-center gap-4 group invisible">
                                    <h3 className="text-[#8baeb3] font-bold text-xl md:text-2xl text-center">
                                        {item.title}
                                    </h3>
                                    <div className="benefit-icon p-4 rounded-full bg-white/20 backdrop-blur-sm shadow-sm opacity-90 transition-transform group-hover:scale-110 duration-300">
                                        <item.icon className="w-12 h-12 md:w-16 md:h-16 text-[#8baeb3]" strokeWidth={1.5} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Part: Additional Sections (Style & Materiales) - White Background */}
            <div className="bg-white py-20 lg:py-32">
                <div className="container mx-auto px-4 flex flex-col gap-20 lg:gap-32">

                    {/* Estilo Section */}
                    <div ref={styleRef} className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16 invisible">
                        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#d1d1c9] uppercase leading-tight">
                                Estilo
                            </h2>
                        </div>
                        <div className="w-full lg:w-2/3 flex items-center">
                            <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-center lg:text-left max-w-2xl">
                                Viviendas Kimün, tiene un estilo arquitectónico que fusiona lo colonial con elementos modernos y minimalistas. Integra arcos y arcadas que se complementan con líneas limpias y materiales contemporáneos que aseguran un ambiente moderno y funcional.
                            </p>
                        </div>
                    </div>

                    {/* Materiales y Colores Section */}
                    <div ref={materialsRef} className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 invisible">
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                            <Image
                                src="/colores.webp"
                                alt="Materiales y Colores"
                                width={500}
                                height={300}
                                className="object-contain"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:items-start items-center">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#d1d1c9] uppercase leading-tight text-center lg:text-left">
                                Materiales y<br />Colores
                            </h2>
                            <p className="text-gray-800 text-lg md:text-xl leading-relaxed text-center lg:text-left max-w-xl">
                                Tonos claros y cálidos que amplian los ambientes. Materiales nobles: madera, porcelanato y piedra.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
