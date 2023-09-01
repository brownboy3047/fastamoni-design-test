import ConsultingCard from "./ConsultingCard";

//assets
import line from "../../../assets/line.png";

//style
import "./Consulting.css";

const Consulting = () => {
  return (
    <div className="consulting">
      <ConsultingCard />
      <img src={line} alt="line" />

      <ConsultingCard />
      <img src={line} alt="line" />

      <ConsultingCard />
      <img src={line} alt="line" />

      <ConsultingCard />
      <img src={line} alt="line" />
    </div>
  );
};

export default Consulting;
