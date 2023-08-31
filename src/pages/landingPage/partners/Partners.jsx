//Assets
import bucket from "../../../assets/bitbucket.png";
import arrowLeft from "../../../assets/arrow-left.png";
import arrowRight from "../../../assets/arrow-right.png";

//components
import CardPartners from "../card/CardPartners";

//style
import "./Partners.css";

const Partners = () => {
  return (
    <section className="partners">
      <div className="partners-container">
        <div className="partners-container-text">
          <h2>REAL-WORLD EXPERIENCE</h2>
          <p>The best business consulting firm you can count on!</p>
        </div>

        <div className="partners-card">
          <CardPartners
            header="WEALTH MANAGEMENT"
            text="READ MORE"
            icon={bucket}
          />

          <CardPartners
            header="WEALTH MANAGEMENT"
            text="READ MORE"
            icon={bucket}
          />

          <CardPartners
            header="WEALTH MANAGEMENT"
            text="READ MORE"
            icon={bucket}
          />
        </div>

        <div className="partners-meet">
          <p>MEET THE PARTNERS</p>
          <div className="arrow">
            <img src={arrowLeft} alt="left arrow" />
            <img src={arrowRight} alt="right arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
