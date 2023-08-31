import { useState } from "react";

//components
import CaseStudyCard from "./CaseStudyCard";

//Assets
import play from "../../../assets/play.png";
import call from "../../../assets/call.png";

//style
import "./CaseStudy.css";

const CaseStudy = () => {
  const [range, setRange] = useState(80);

  const handleRange = (e) => {
    setRange(e.target.value);
  };
  return (
    <section className="case-study">
      <div className="case-study-container">
        <div className="case-study-play">
          <img src={play} alt="play button" />
        </div>

        <div className="case-study-text">
          <h2>We’re leading in the market</h2>

          <div className="case-study-history">
            <p className="one">
              Lorem ipsum is simply free text dolor sit amet, consectetur notted
              adipisicing elit sed do eiusmod tempor incididunt ut labore et
              doloremagna aliqua lonm andhn.
            </p>

            <p className="two">
              We have 35+ years of experience. We offer marketing and consulting
              services
            </p>
          </div>

          <div className="case-study-input">
            <input
              type="range"
              min={0}
              max={100}
              style={{ width: "90%" }}
              value={range}
              onChange={handleRange}
            />
            <div>
              <label htmlFor="">CONSULTING</label>
              <p>{range}%</p>
            </div>
          </div>

          <div className="case-study-phone">
            <img src={call} alt="phone call" />

            <div>
              <p>Have any question? Give us a call</p>
              <p>+2348000000000</p>
            </div>
          </div>
        </div>
      </div>

      <div className="case-study-card-con">
        <CaseStudyCard className="case-study-card">
          <p>GET PROFESSIONAL ADVICE</p>
          <span>
            There are many variations of available but the majority have
            suffered alteration.
          </span>
        </CaseStudyCard>

        <CaseStudyCard className="case-study-card">
          <p>TRUSTED & PROFESSIONAL</p>
          <span>
            There are many variations of available but the majority have
            suffered alteration.
          </span>
        </CaseStudyCard>
      </div>
    </section>
  );
};

export default CaseStudy;
