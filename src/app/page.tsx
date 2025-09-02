import { PageHeader } from "@/components/page-header";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <PageHeader />
      <main>
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <footer className="text-center py-6 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Diksha's Work Portfolio. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
