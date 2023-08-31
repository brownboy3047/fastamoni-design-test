//component
import NewCaseCard from "./NewCaseCard";

//assets
import carLogo from "../../../assets/automobile.png";

//style
import "./NewCase.css";

const NewCase = () => {
  return (
    <section className="new-case">
      <div className="new-case-container">
        <div className="new-case-info">
          <h1>NEW CASE STUDIES</h1>
          <p>We help our clients renew their business</p>
        </div>

        <div className="new-case-card">
          <NewCaseCard className="new-case-card-box">
            <img src={carLogo} alt="car" />
            <p>Thought leadership</p>
            <h3>
              businesses <br /> growth
            </h3>
          </NewCaseCard>

          <NewCaseCard className="new-case-card-box">
            <img src={carLogo} alt="car" />
            <p>Thought leadership</p>
            <h3>
              businesses <br /> growth
            </h3>
          </NewCaseCard>

          <NewCaseCard className="new-case-card-box">
            <img src={carLogo} alt="car" />
            <p>Thought leadership</p>
            <h3>
              businesses <br /> growth
            </h3>
          </NewCaseCard>
        </div>
      </div>
    </section>
  );
};

export default NewCase;
