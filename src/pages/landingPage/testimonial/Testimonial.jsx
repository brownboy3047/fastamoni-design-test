import TestimonialCard from "./TestimonialCard";

//assets
import left from "../../../assets/left-arrow.png";
import right from "../../../assets/right-arrow.png";

//style
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="testimonial-info">
        <h2>WHAT THEY ARE TALKING ABOUT?</h2>
        <p>Trusted by more than 4,200 customers</p>
        <div className="testimonial-arrow">
          <img src={left} alt="left arrow" />
          <img src={right} alt="right arrow" />
        </div>
      </div>

      <TestimonialCard className="testimonial-card">
        <p>
          Lorem ipsum is simply free text dolor sit amet, consectetur notted
          adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.Lorem ipsum is simply free text dolor sit
          amet,consectetur notted adipisicing elit sed do eiusmod tempor
        </p>

        <p className="testimonial-name">Todd Higgins</p>
        <span className="testimonial-title">Customer</span>
      </TestimonialCard>

      <TestimonialCard className="testimonial-card">
        <p>
          Lorem ipsum is simply free text dolor sit amet, consectetur notted
          adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.Lorem ipsum is simply free text dolor sit
          amet,consectetur notted adipisicing elit sed do eiusmod tempor
        </p>

        <p className="testimonial-name">Todd Higgins</p>
        <span className="testimonial-title">Customer</span>
      </TestimonialCard>
    </section>
  );
};

export default Testimonial;
