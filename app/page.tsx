import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSectionNew } from "@/components/sections/services-section-new";
import { ProjectSection } from "@/components/sections/project-section";
import { CertificationSection } from "@/components/sections/certification-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { BlogSection } from "@/components/sections/blog-section";
import { CTASection } from "@/components/sections/cta-section";
import { getAllPosts } from "@/lib/mdx";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <>
      <HeroSection />
      <ServicesSectionNew />
      <ProjectSection />
      <CertificationSection />
      <TestimonialsSection />
      <BlogSection posts={posts} />
      <CTASection />
    </>
  );
}
