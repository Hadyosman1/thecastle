import HeroSection from "@/components/home/HeroSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import WaveDivider from "@/components/WaveDivider";
import DiscoverNowSection from "@/components/home/DiscoverNowSection";
import ContactUsSection from "@/components/home/ContactUsSection";

export default function Home() {
  return (
    <div className="bg-background relative min-h-screen w-full">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in oklab, var(--color-primary) 40%, var(--color-background)), transparent 70%), var(--color-background)",
        }}
      />

      <div className="relative pt-[calc(var(--header-height)+calc(var(--spacing)_*_4))]">
        <HeroSection />
        <WaveDivider />
        <WhyUsSection />
        <DiscoverNowSection />
        <ContactUsSection />
      </div>
    </div>
  );
}
