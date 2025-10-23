
// Import components
import Hero from "./components/hero";
import Contact from "./components/contact";
import Services from "./components/services";
import We from "./components/we";
import WhyChooseUs from "./components/why-choose-us";
import Projects from "./components/projects";
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
