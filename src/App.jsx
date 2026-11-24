import { useState } from "react";
import SmoothScroll from "./components/common/SmoothScroll";
import Navbar from "./components/common/Navbar";
import ProjectModal from "./components/common/ProjectModal";
import Hero from "./components/sections/Hero";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import BentoSkills from "./components/sections/BentoSkills";
import ProjectShowcase from "./components/sections/ProjectShowcase";
import ProcessTimeline from "./components/sections/ProcessTimeline";
import ContactFooter from "./components/sections/ContactFooter";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-apple-black text-apple-text">
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectShowcase onSelectProject={setSelectedProject} />
          <ProcessTimeline />
          <BentoSkills />
        </main>
        <ContactFooter />
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </SmoothScroll>
  );
}