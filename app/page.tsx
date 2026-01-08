import HeroSection from "@/app/components/HeroSection";
import BioclimaticSection from "@/app/components/BioclimaticSection";
import ProductsSection from "./components/ProductsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BioclimaticSection />
      <ProductsSection />
    </main>
  );
}
