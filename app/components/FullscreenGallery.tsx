"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "/galeria/frente.webp",
    "/galeria/exterior2.webp",
    "/galeria/exterior3.jpeg",
    "/galeria/galeria.webp",
    "/galeria/living-comedor.webp",
    "/galeria/living.jpeg",
    "/galeria/comedor.webp",
    "/galeria/comedor2.jpeg",
    "/galeria/cocina.webp",
    "/galeria/habitacion.jpeg",
    "/galeria/habitacion2.jpeg",
];

export default function FullscreenGallery() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const closeModal = useCallback(() => setSelectedIndex(null), []);

    const showNext = useCallback(() => {
        setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
    }, []);

    const showPrev = useCallback(() => {
        setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
    }, []);

    // Handle Keyboard Navigation & Escape
    useEffect(() => {
        if (selectedIndex === null) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
            if (e.key === "ArrowRight") showNext();
            if (e.key === "ArrowLeft") showPrev();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex, closeModal, showNext, showPrev]);

    // Handle Scroll Lock
    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedIndex]);

    // Handle Wheel Scroll Navigation
    const handleWheel = (e: React.WheelEvent) => {
        // Debounce handling could be good but for simple scroll nav:
        // Prevent default not needed as we are in fixed overlay, actually wait, 
        // fixed overlay stops scroll propagation to body usually if it captures events.
        // But we want to trigger change.
        if (e.deltaY > 0) {
            showNext();
        } else if (e.deltaY < 0) {
            showPrev();
        }
    };

    return (
        <section className="w-full py-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg group"
                            onClick={() => setSelectedIndex(index)}
                        >
                            <Image
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
                    onClick={closeModal}
                    onWheel={handleWheel}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2 z-60"
                        onClick={(e) => { e.stopPropagation(); closeModal(); }}
                    >
                        <X size={32} />
                    </button>

                    {/* Prev Button */}
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 z-60 hidden md:block"
                        onClick={(e) => { e.stopPropagation(); showPrev(); }}
                    >
                        <ChevronLeft size={48} />
                    </button>

                    {/* Next Button */}
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 z-60 hidden md:block"
                        onClick={(e) => { e.stopPropagation(); showNext(); }}
                    >
                        <ChevronRight size={48} />
                    </button>

                    {/* Image Container */}
                    <div
                        className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center touch-manipulation"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={images[selectedIndex]}
                            alt="Fullscreen Gallery Image"
                            fill
                            className="object-contain select-none"
                            quality={100}
                            priority
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
