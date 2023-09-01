//assets
import brain from "../../../assets/brainstorming.png";

//style
import "./ConsultingCard.css";

const ConsultingCard = () => {
  return (
    <div className="consult-card">
      <img src={brain} alt="brainstorming" />
      <p>420</p>
      <span>CONSULTING SOLUTIONS</span>
    </div>
  );
};

export default ConsultingCard;
