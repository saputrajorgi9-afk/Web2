import Hero from "../sections/Hero";
import WhyWebsite from "../sections/WhyWebsite";
import Projects from "../sections/Projects";
import Process from "../sections/Process";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <WhyWebsite />
        <Projects />
        <Process />
      </main>

      <Footer />
    </>
  );
}