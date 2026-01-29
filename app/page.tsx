
// Import components
import We from "./components/we";
import Hero from "./components/hero";
import Contact from "./components/contact";
import Services from "./components/services";
import Projects from "./components/projects";
import WhyChooseUs from "./components/why-choose-us";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <We />
      <WhyChooseUs />
      <Projects />
      <Contact />
    </>
  );
}
