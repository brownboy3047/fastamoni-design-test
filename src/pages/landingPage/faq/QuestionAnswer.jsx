import { useState } from "react";
import Accordion from "./Accordion";

//Assets
import check from "../../../assets/check.png";

import "./QuestionAnswer.css";

const data = [
  {
    id: 1,
    Question: "THINK AHEAD AND BOOST YOUR BUSINESS?",
    Answer:
      "There are many variations of passages the majority have suffered alteration in some for injected humour.",
  },

  {
    id: 2,
    Question: "HOW CONSULTANCY EXPERTS WORK?",
    Answer:
      "There are many variations of passages the majority have suffered alteration in some for injected humour.",
  },

  {
    id: 3,
    Question: "WHAT IS THE BEST ADVICE FOR GROWTH?",
    Answer:
      "There are many variations of passages the majority have suffered alteration in some for injected humour.",
  },

  {
    id: 4,
    Question: "HOW TO IMPROVE YOUR BUSINESS?",
    Answer:
      "There are many variations of passages the majority have suffered alteration in some for injected humour.",
  },
];

const info = [
  { text: "Nsectetur cing elit." },
  { text: "Suspe ndisse suscipit sagittis leo." },
  { text: "Entum estibulum dignissim posuere." },
  { text: "If you are going to use a passage" },
  { text: "If you are going to use a passage test data." },
];

const QuestionAnswer = () => {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="question">
      <div className="question-container">
        <div className="question-intro">
          <h1>QUESTION ANSWERS</h1>
          <p>We help our clients renew their business</p>
        </div>

        <div className="question-faq">
          <ul className="question-accordion">
            {data.length > 0 &&
              data.map((faq, index) => (
                <Accordion
                  key={faq.id}
                  question={faq.Question}
                  answer={faq.Answer}
                  num={index}
                  curOpen={curOpen}
                  setCurOpen={setCurOpen}
                />
              ))}
          </ul>

          <ul className="question-info">
            {info.length > 0 &&
              info.map((el, index) => (
                <li key={index}>
                  <img src={check} alt="check" />
                  <span>{el.text}</span>
                </li>
              ))}
          </ul>

          <div className="question-exp">
            <p className="question-years">30</p>
            <p className="question-exp-text">
              Years of <br /> Expeirence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
