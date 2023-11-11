import Skills from "@/components/Skills";
import About from "@/components/about";
import Timeline from "@/components/timeline";
// import Timeline from "@/components/newTimeline";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
// import Experience from "@/components/experience";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <Skills />
      <Timeline />
      {/* <SectionDivider />
      <Skills />
      <SectionDivider />
      <Skills /> */}
    </main>
  );
}
