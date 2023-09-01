import CaseStudy from "./case-study/CaseStudy";
import Consulting from "./consulting/Consulting";
import QuestionAnswer from "./faq/QuestionAnswer";
import Growth from "./growth/Growth";
import Hero from "./hero/Hero";
import Mission from "./mission/Mission";
import NewCase from "./new-case/NewCase";
import Partners from "./partners/Partners";
import Testimonial from "./testimonial/Testimonial";

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <Partners />
      <CaseStudy />
      <NewCase />
      <Mission />
      <QuestionAnswer />
      <Testimonial />
      <Consulting />
      <Growth />
    </main>
  );
};

export default LandingPage;
