import HeroSection from "@/app/components/HeroSection";
import BioclimaticSection from "@/app/components/BioclimaticSection";
import BenefitsSection from "@/app/components/BenefitsSection";
import ProductsSection from "./components/ProductsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BioclimaticSection />
      <BenefitsSection />
      <ProductsSection />
    </main>
  );
}
