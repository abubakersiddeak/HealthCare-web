import HeroSection from "@/components/home/HeroSection";
import HighlightsSection from "@/components/home/HighlightsSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <ServicesPreview />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
}
