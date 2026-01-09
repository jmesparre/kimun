"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BioclimaticSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const houseRef = useRef<HTMLDivElement>(null);
    const materialsRef = useRef<HTMLDivElement>(null);

    // --- Refs for Annotations ---
    // Arq: Only textRef needed now (no line/dot)
    const refArq = { text: useRef<HTMLDivElement>(null) };

    const refDiseno = { line: useRef<SVGLineElement>(null), text: useRef<HTMLDivElement>(null), dot: useRef<SVGCircleElement>(null) };
    const refMax = { line: useRef<SVGLineElement>(null), text: useRef<HTMLDivElement>(null), dot: useRef<SVGCircleElement>(null) };
    const refMat = { line: useRef<SVGLineElement>(null), text: useRef<HTMLDivElement>(null), dot: useRef<SVGCircleElement>(null) };

    // Bottom Row (Left to Right)
    const refBio = { line: useRef<SVGLineElement>(null), text: useRef<HTMLDivElement>(null), dot: useRef<SVGCircleElement>(null) };
    const refSismo = { line: useRef<SVGLineElement>(null), text: useRef<HTMLDivElement>(null), dot: useRef<SVGCircleElement>(null) };
    const refAgua = { line: useRef<SVGLineElement>(null), text: useRef<HTMLDivElement>(null), dot: useRef<SVGCircleElement>(null) };

    // Materials Column
    const timelineLineRef = useRef<HTMLDivElement>(null);
    const grayLineRef = useRef<HTMLDivElement>(null); // New ref for the gray background line
    const matRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Helper to set initial line state
            const allLines = [
                refDiseno.line.current, refMax.line.current, refMat.line.current,
                refBio.line.current, refSismo.line.current, refAgua.line.current
            ];
            gsap.set(allLines, { strokeDasharray: 1000, strokeDashoffset: 1000 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=400%", // Increased scroll length for more comfortable reading
                    pin: true,
                    scrub: 1,
                },
            });

            // --- PHASE 0: TITLE ---
            tl.fromTo(titleRef.current, { autoAlpha: 0, y: -20 }, { autoAlpha: 1, y: 0, duration: 0.5 });

            // --- PHASE 1: HOUSE INTRO ---
            tl.fromTo(
                houseRef.current,
                { autoAlpha: 0, scale: 0.95, y: 30 },
                { autoAlpha: 1, scale: 1, y: 0, duration: 1, ease: "power2.out" }
            );

            // --- PHASE 2: ANNOTATIONS ---

            const animateAnnotation = (ref: any, positionParameters: string) => {
                tl.to(ref.line.current, { strokeDashoffset: 0, duration: 0.5 }, positionParameters);
                tl.fromTo(ref.dot.current, { scale: 0, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.4 }, "<0.4");
                tl.fromTo(ref.text.current, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.5 }, "<0.1");
            };

            // 1. Arquitectura Bioclimática (Text Only - First)
            tl.fromTo(refArq.text.current, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.6 }, "+=0.2");

            // 2. Rest of Top Row
            animateAnnotation(refDiseno, "+=0.1"); // Diseño Integrado
            animateAnnotation(refMax, "+=0.1");    // Maximiza
            animateAnnotation(refMat, "+=0.1");    // Materiales

            // 3. Bottom Row
            animateAnnotation(refBio, "+=0.1");    // Biodigestor
            animateAnnotation(refSismo, "+=0.1");  // Sismo
            animateAnnotation(refAgua, "+=0.1");   // Agua

            // Pause to read
            tl.to({}, { duration: 1 });

            // Reveal Gray Line (Background) BEFORE the inner line grows
            tl.fromTo(grayLineRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 });

            // --- PHASE 3: MATERIALS COLUMN ---
            tl.fromTo(
                timelineLineRef.current,
                { scaleY: 0 },
                { scaleY: 1, duration: 3, ease: "none" },
                "+=0.2"
            );

            // Reveal materials as line passes
            matRefs.forEach((ref, i) => {
                tl.fromTo(
                    ref.current,
                    { autoAlpha: 0, x: 20 },
                    { autoAlpha: 1, x: 0, duration: 0.5 },
                    `<${0.5 + (i * 0.8)}` // Staggered based on line progress
                );
            });

            // Add delay at the end to freeze the state before unpinning
            tl.to({}, { duration: 2 });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full min-h-screen lg:h-screen lg:overflow-hidden flex items-center justify-center font-sans text-gray-800 overflow-x-hidden">
            <div className="container mx-auto px-0 lg:h-full relative grid grid-cols-1 lg:grid-cols-12 gap-4 pt-24 lg:pt-[14vh] content-center"> {/* Adjusted padding and alignment */}

                {/* --- TITLE --- */}
                <h2 ref={titleRef} className="absolute left-4 lg:left-0 top-[10vh] lg:top-[12vh] text-3xl md:text-4xl xl:text-5xl font-bold text-[#e0d9cf] uppercase tracking-wide invisible z-0">
                    Casa Ecológica
                </h2>

                {/* --- HOUSE CENTERPIECE --- */}
                <div className="col-span-1 lg:col-span-9 lg:h-full flex items-center justify-center relative z-10 pt-20 lg:pt-0">

                    {/* Main Container for Image + SVG + Text */}
                    {/* Added max-h to prevent overflow on short screens and responsive width */}
                    <div ref={houseRef} className="relative w-full lg:w-[95%] max-w-6xl aspect-[1.6] max-h-[60vh] lg:max-h-[75vh] invisible">
                        <Image
                            src="/casa.webp"
                            alt="Casa Bioclimática"
                            fill
                            className="object-contain"
                            priority
                        />

                        {/* SVG OVERLAY */}
                        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible z-20">
                            <defs>
                                <marker id="dot-marker" markerWidth="4" markerHeight="4" refX="2" refY="2">
                                    <circle cx="2" cy="2" r="2" fill="#4B5563" />
                                </marker>
                            </defs>

                            {/* TOP ROW */}
                            {/* 2. Diseño Integrado (Roof Left) */}
                            <line ref={refDiseno.line} x1="37%" y1="19%" x2="55%" y2="22%" stroke="#4B5563" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                            <circle ref={refDiseno.dot} cx="55%" cy="22%" r="3" fill="#4B5563" className="invisible" />

                            {/* 3. Maximiza vistas (Roof Right/Window) */}
                            <line ref={refMax.line} x1="55%" y1="12%" x2="67%" y2="22%" stroke="#4B5563" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                            <circle ref={refMax.dot} cx="67%" cy="22%" r="3" fill="#4B5563" className="invisible" />

                            {/* 4. Materiales de calidad (Far Right Wall) */}
                            <line ref={refMat.line} x1="80%" y1="9%" x2="76%" y2="27%" stroke="#4B5563" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                            <circle ref={refMat.dot} cx="76%" cy="27%" r="3" fill="#4B5563" className="invisible" />


                            {/* BOTTOM ROW */}
                            {/* 5. Biodigestor (Tank - Bottom Left) */}
                            <line ref={refBio.line} x1="15%" y1="79%" x2="25%" y2="72%" stroke="#4B5563" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                            <circle ref={refBio.dot} cx="25%" cy="72%" r="3" fill="#4B5563" className="invisible" />

                            {/* 6. Sismoresistente (Foundation - Bottom Center) */}
                            <line ref={refSismo.line} x1="40%" y1="85%" x2="45%" y2="65%" stroke="#4B5563" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                            <circle ref={refSismo.dot} cx="45%" cy="65%" r="3" fill="#4B5563" className="invisible" />

                            {/* 7. Recolección aguas (Gutter - Bottom Right) */}
                            <line ref={refAgua.line} x1="70%" y1="80%" x2="54%" y2="58%" stroke="#4B5563" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                            <circle ref={refAgua.dot} cx="54%" cy="58%" r="3" fill="#4B5563" className="invisible" />
                        </svg>

                        {/* TEXT LABELS */}
                        {/* Using clamp and % positioning for better responsiveness */}
                        {/* Top Row Labels */}
                        <div ref={refArq.text} className="absolute left-[2%] top-[22%] w-[20%] text-center invisible">
                            <h4 className="text-[#5a5a54] font-bold text-[clamp(0.6rem,1.1vw,1.1rem)] leading-tight">Arquitectura<br />Bioclimática</h4>
                        </div>

                        <div ref={refDiseno.text} className="absolute left-[25%] top-[14%] w-[20%] text-center invisible">
                            <h4 className="font-bold text-[#5a5a54] text-[clamp(0.6rem,1.1vw,1.1rem)]">Diseño Integrado</h4>
                        </div>

                        <div ref={refMax.text} className="absolute left-[45%] top-[5%] w-[20%] text-center invisible">
                            <h4 className="font-bold text-[#5a5a54] text-[clamp(0.6rem,1.1vw,1.1rem)] leading-tight">Maximiza<br />las vistas</h4>
                        </div>

                        <div ref={refMat.text} className="absolute left-[68%] top-[3%] w-[25%] text-center invisible">
                            <h4 className="font-bold text-[#5a5a54] text-[clamp(0.6rem,1.1vw,1.1rem)]">Materiales de calidad</h4>
                        </div>

                        {/* Bottom Row Labels */}
                        <div ref={refBio.text} className="absolute left-[5%] top-[80%] w-[15%] text-center invisible">
                            <h4 className="font-bold text-[#5a5a54] text-[clamp(0.6rem,1.1vw,1.1rem)]">Biodigestor</h4>
                        </div>

                        <div ref={refSismo.text} className="absolute left-[30%] top-[87%] w-[20%] text-center invisible">
                            <h4 className="font-bold text-[#5a5a54] text-[clamp(0.6rem,1.1vw,1.1rem)]">Sismoresistente</h4>
                        </div>

                        <div ref={refAgua.text} className="absolute left-[60%] top-[82%] w-[25%] text-left invisible">
                            <h4 className="font-bold text-[#5a5a54] text-[clamp(0.6rem,1.1vw,1.1rem)] leading-tight">Recolección<br />de aguas de lluvia</h4>
                        </div>
                    </div>
                </div>

                {/* --- MATERIALS COLUMN (Right) --- */}
                <div ref={materialsRef} className="col-span-1 lg:col-span-3 pb-10 lg:pb-0 h-fit flex flex-col  relative z-10">

                    <div ref={grayLineRef} className="absolute left-1 top-[0%] bottom-[0%] lg:top-[0%] lg:bottom-[0%] w-[4px] bg-gray-300/50 opacity-0 invisible">
                        <div ref={timelineLineRef} className="w-full h-full bg-[#5CA4A9] origin-top scale-y-0" />
                    </div>

                    <div className="space-y-8 relative z-10 py-2 ml-8 lg:ml-8">
                        {[
                            { title: "Foilroof", text: "Aislante reflectivo superior", img: "/roilroof.webp" },
                            { title: "Ladrillos HCCA", text: "Alta capacidad térmica", img: "/hcca.webp" },
                            { title: "Doble Vidrio", text: "Hermeticidad y confort", img: "/double.glass.webp" }
                        ].map((item, i) => (
                            <div key={i} ref={matRefs[i]} className="invisible">
                                {/* Connector Dot */}
                                <div className="absolute -left-[32px]  mt-10 xl:mt-16 w-3 h-3 rounded-full bg-[#5CA4A9] border-2 border-[#5CA4A9]" />

                                <div className="p-0">
                                    <div className="relative w-20 h-10 xl:mt-0 h-16 xl:h-24 mb-2 rounded-lg overflow-hidden">
                                        <Image src={item.img} alt={item.title} fill className="object-contain" />
                                    </div>
                                    <h4 className="font-bold text-gray-800 text-sm xl:text-base">{item.title}</h4>
                                    <p className="text-[10px] xl:text-xs text-gray-500">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
