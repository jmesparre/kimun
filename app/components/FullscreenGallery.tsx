"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function FullscreenGallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const image1Ref = useRef<HTMLDivElement>(null);
    const image2Ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=150%", // Adjust scroll distance for animation speed
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                },
            });

            // Initial state: Image 2 is off-screen to the right
            gsap.set(image2Ref.current, { xPercent: 100 });

            // Animate: Image 2 slides in from right (to 0), Image 1 slides out to left (to -100)
            tl.to(image2Ref.current, { xPercent: 0, ease: "none" })
                .to(image1Ref.current, { xPercent: -100, ease: "none" }, "<"); // "<" syncs start time

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-screen overflow-hidden">
            <div ref={wrapperRef} className="relative w-full h-full">

                {/* Image 1 */}
                <div ref={image1Ref} className="absolute inset-0 w-full h-full z-10">
                    <Image
                        src="/foto1.webp"
                        alt="Gallery Image 1"
                        fill
                        className="object-cover p-5 bg-white"
                        priority
                    />
                </div>

                {/* Image 2 */}
                <div ref={image2Ref} className="absolute inset-0 w-full h-full z-20">
                    <Image
                        src="/foto2.webp" // Assuming second image is foto2.webp as per common assets, verify if needed or use placeholder logic from confirm
                        alt="Gallery Image 2"
                        fill
                        className="object-cover p-5 bg-white"
                    />
                </div>

            </div>
        </section>
    );
}
