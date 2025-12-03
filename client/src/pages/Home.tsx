import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutPreview } from "@/components/AboutPreview";
import { VisionPreview } from "@/components/VisionPreview";
import { JourneyPreview } from "@/components/JourneyPreview";
import { BoxingBusinessPreview } from "@/components/BoxingBusinessPreview";
import { ProjectsPreview } from "@/components/ProjectsPreview";
import { JournalPreview } from "@/components/JournalPreview";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutPreview />
      <VisionPreview />
      <JourneyPreview />
      <BoxingBusinessPreview />
      <ProjectsPreview />
      <JournalPreview />
      <ContactCTA />
      <Footer />
    </div>
  );
}
