import CaseStudy from "./case-study/CaseStudy";
import Hero from "./hero/Hero";
import NewCase from "./new-case/NewCase";
import Partners from "./partners/Partners";

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <Partners />
      <CaseStudy />
      <NewCase />
    </main>
  );
};

export default LandingPage;
