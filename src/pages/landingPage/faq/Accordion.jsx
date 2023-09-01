import "./Accordion.css";

const Accordion = ({ question, answer, num, curOpen, setCurOpen }) => {
  const isOpen = num === curOpen;

  const handleOpen = () => {
    setCurOpen(isOpen ? null : num);
  };
  return (
    <li
      className={`accordion ${isOpen ? "accordion-open" : ""}`}
      onClick={handleOpen}
    >
      <div className="accordion-question">
        <p className="accordion-number">{num + 1}.</p>
        <p className="accordion-text">{question}</p>
        <span className="accordion-icon">{isOpen ? "-" : "+"}</span>
      </div>

      {isOpen && <div className="accordion-answer">{answer}</div>}
    </li>
  );
};

export default Accordion;
