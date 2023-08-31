import "./CardPartners.css";

const CardPartners = ({ header, text, icon }) => {
  return (
    <div className="card-partners">
      <div>
        <h3>{header}</h3>
        <p>{text}</p>
      </div>

      <div className="card-partners-icon">
        <img src={icon} alt="" />
      </div>
    </div>
  );
};

export default CardPartners;
