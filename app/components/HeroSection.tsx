import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex text-center justify-center"
      style={{ backgroundImage: "url(/hero.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-white pt-30 pl-20 max-w-2xl">
        <h1 className="text-4xl md:text-6xl  font-bold tracking-tight">
          Construimos Tu Futuro, Cuidamos el Planeta
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-md m-auto">
          Viviendas ecológicas de diseño que combinan tecnología, sustentabilidad y confort.
        </p>
        <Button className="mt-8" size="lg">
          Solicitá tu cotización
        </Button>
      </div>
    </section>
  );
}
