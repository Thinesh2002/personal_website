import Testimonials from "./Clients";
import Expertise from "./Skilles";
import FAQ from "./FAQ";
import HeroPage from "./Hero";
import Experience from "./Experiences";

const HomePage = () => {
  return (
    <>
      <section className="container mx-auto px-4 py-16 md:py-20">
        <HeroPage />
      </section>

      <section id="services">
        <Expertise />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="faq">
        <FAQ />
      </section>
    </>
  );
};

export default HomePage;
