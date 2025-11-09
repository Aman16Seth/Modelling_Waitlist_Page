import { HeroSection } from "./components/HeroSection";
import { ForModelsSection } from "./components/ForModelsSection";
import { ForDesignersSection } from "./components/ForDesignersSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { WaitlistFormSection } from "./components/WaitlistFormSection";
import { GallerySection } from "./components/GallerySection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ForModelsSection />
      <ForDesignersSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <WaitlistFormSection />
      <GallerySection />
      <Footer />
    </div>
  );
}