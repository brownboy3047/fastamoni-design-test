//assets
import circle from "../../../assets/check-circle.png";
import short from "../../../assets/line-22.png";
//style
import "./Growth.css";

const Growth = () => {
  return (
    <section className="growth">
      <div className="growth-container">
        <div className="growth-result">
          <div className="growth-result-one">
            <img src={circle} alt="circle check" />
            <div>
              <h2>HIGHEST SUCCESS RATES</h2>
              <p>
                Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin,
                lorem is simply free text quis bibendum.
              </p>
            </div>
          </div>

          <div className="growth-result-one">
            <img src={circle} alt="circle check" />
            <div>
              <h2>HIGHEST SUCCESS RATES</h2>
              <p>
                Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin,
                lorem is simply free text quis bibendum.
              </p>
            </div>
          </div>
        </div>

        <div className="growth-info">
          <p className="growth-info-text">
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration in some form injected humour
            or randomised words which dont look believable.
          </p>

          <div className="growth-info-next">
            <img src={short} alt="short line icon" />
            <span>If you are going to use a passage</span>
          </div>

          <div className="growth-info-next">
            <img src={short} alt="short line icon" />
            <span>If you are going to use a passage</span>
          </div>

          <div className="growth-info-next">
            <img src={short} alt="short line icon" />
            <span>If you are going to use a passage</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
