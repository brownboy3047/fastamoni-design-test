import CaseStudy from "./case-study/CaseStudy";
import QuestionAnswer from "./faq/QuestionAnswer";
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
    </main>
  );
};

export default LandingPage;
