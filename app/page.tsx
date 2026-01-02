import { HeroSection } from "@/components/sections/hero-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSectionNew } from "@/components/sections/services-section-new";
import { ProjectSection } from "@/components/sections/project-section";
import { CertificationSection } from "@/components/sections/certification-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { BlogSection } from "@/components/sections/blog-section";
import { CTASection } from "@/components/sections/cta-section";
import { getAllPosts } from "@/lib/mdx";

import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <>
      <FlickeringGrid
        className="fixed inset-0 z-0 [mask-image:radial-gradient(circle_at_center,white_20%,transparent_80%)] pointer-events-none"
        color="#60A5FA"
        flickerChance={0.1}
        gridGap={6}
        maxOpacity={0.3}
        squareSize={4}
      />
      <div className="relative z-10">
        <HeroSection />
        <TechStackSection />
        <AboutSection />
        <ServicesSectionNew />
        <ProjectSection />
        <CertificationSection />
        <TestimonialsSection />
        <BlogSection posts={posts} />
        <CTASection />
      </div>
    </>
  );
}
