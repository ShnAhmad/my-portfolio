import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import WorkExperience from "@/components/WorkExperience";
import TechSkills from "@/components/Techskills";
import Contact from "@/components/Contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Zeeshan Ahmad - Software Engineer",
      url: "https://my-portfolio-three-flame-40.vercel.app/",
    },
    {
      "@type": "Person",
      name: "Zeeshan Ahmad",
      url: "https://my-portfolio-three-flame-40.vercel.app/",
      jobTitle: "Software Engineer",
      knowsAbout: [
        "Full-Stack Web Development",
        "Frontend Development",
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "React Native",
        "Flutter",
        "Electron",
        "REST APIs",
        "GraphQL",
      ],
      sameAs: [
        "https://github.com/ShnAhmad",
        "https://www.linkedin.com/in/zeeshan-ahmad2/",
      ],
    },
  ],
};

export default function Home() {
  return (
    <main className="relative bg-black font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <AnimatedBackground />
      <Hero />
      <AboutMe />
      <WorkExperience />
      <Projects />
      <Education />
      <TechSkills />
      <Contact />
    </main>
  );
}