import React, { useState } from "react";

const Trivia = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      answer: "Mars",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (selectedOption !== null) {
      setSelectedOption(null);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("Please select an option before moving to the next question.");
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      {currentQuestion < questions.length ? (
        <div className=" text-center">
          <h2 className="text-xl font-bold mb-4">
            {questions[currentQuestion].question}
          </h2>
          <ul className="space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index} className="text-sm">
                <label className="flex items-center">
                  <input
                    type="radio"
                    required={true}
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionSelect(option)}
                    className="mr-2"
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <button
            onClick={handleNextQuestion}
            className="bg-red-400 text-white px-3 py-1 mt-4 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:border-blue-300"
          >
            Next
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Trivia Completed!</h2>
          <p className="text-lg">
            Your Score: {score} out of {questions.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Trivia;
