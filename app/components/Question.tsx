import React from "react";
import { Question } from "../types";

interface QuestionProps {
  question: Question;
  index: number;
  onAnswer: (isCorrect: boolean) => void;
}

const QuestionComponent: React.FC<QuestionProps> = ({
  question,
  index,
  onAnswer,
}) => {
  const handleAnswerClick = (isCorrect: boolean) => {
    onAnswer(isCorrect);
  };

  return (
    <div>
      <h3>
        {index + 1}. {question.question}
      </h3>
      {question.answers.map((answer, idx) => (
        <div key={idx}>
          <input
            type="radio"
            id={`q${index}-a${idx}`}
            name={`q${index}`}
            onClick={() => handleAnswerClick(answer.isCorrect)}
          />
          <label htmlFor={`q${index}-a${idx}`}>{answer.text}</label>
        </div>
      ))}
    </div>
  );
};

export default QuestionComponent;
