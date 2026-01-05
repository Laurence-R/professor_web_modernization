import { HeroSection } from "@/components/sections/HeroSection";
import { ResearchInterests } from "@/components/sections/ResearchInterests";
import { SelectedPublications } from "@/components/sections/SelectedPublications";
import { ProspectiveStudents } from "@/components/sections/ProspectiveStudents";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <ResearchInterests />
        <SelectedPublications />
        <ProspectiveStudents />
      </main>
    </div>
  );
}

