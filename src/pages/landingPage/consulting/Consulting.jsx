import ConsultingCard from "./ConsultingCard";

//assets
import line from "../../../assets/line.png";

//style
import "./Consulting.css";
import CaseStudyCard from "../case-study/CaseStudyCard";

const Consulting = () => {
  return (
    <div className="consulting-container">
      <div className="consulting">
        <ConsultingCard />
        <img className="image" src={line} alt="line" />

        <ConsultingCard />
        <img className="image" src={line} alt="line" />

        <ConsultingCard />
        <img className="image" src={line} alt="line" />

        <ConsultingCard />
        <img className="image" src={line} alt="line" />
      </div>

      <div className="consulting-growth">
        <CaseStudyCard className="consulting-growth-card">
          BUSINESS GROWTH
        </CaseStudyCard>

        <CaseStudyCard className="consulting-growth-card">
          BUSINESS GROWTH
        </CaseStudyCard>

        <CaseStudyCard className="consulting-growth-card">
          BUSINESS GROWTH
        </CaseStudyCard>
      </div>
    </div>
  );
};

export default Consulting;
