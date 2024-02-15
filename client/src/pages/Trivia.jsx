import React, { useState } from "react";

const Trivia = () => {
  const questions = [
    {
      question:
        "On a casual Night out Malet new, Yet Binhed Imertalew to Get Food? ",
      options: ["McDonalds", "Pop-Eyes", "Menge Bet", "Subway"],
      answer: "McDonalds",
    },
    {
      question: "Stupid ______ Nigga!",
      options: ["Funny", "Looking", "Ass", "Dumb"],
      answer: "Ass",
    },
    {
      question: "Which Part of the Day do we Both hate the Most?",
      options: ["Night", "Morning", "Evening", "Afternoon"],
      answer: "Morning",
    },
    {
      question: "Say we Had a Son, What would we Name this Kid?",
      options: ["John", "Samson", "Amensisa", "kaleb"],
      answer: "Amensisa",
    },
    {
      question: "Who is my favourite artist?",
      options: [
        "Dagne Walle",
        "Haachaluu Hundesaa",
        "NBA Young Boy",
        "Kuku Sebsibe",
      ],
      answer: "Dagne Walle",
    },
    {
      question: "Where did we first kiss?",
      options: ["Washroom", "Car", "Outside", "We never kissed"],
      answer: "Car",
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
          <h2 className="text-xl font-bold mb-2">Trivia Completed!</h2>
          <p className="text-lg">
            Your Score: {score} out of {questions.length}
          </p>
          {score === questions.length && (
            <p className="font-bold mb-2">
              Okay baby since you answered all the questions here is your
              Password: <span className="font-bold text-red-500"> Mammaye</span>
              <br></br> <br></br>
            </p>
          )}
          {score < questions.length && (
            <p>
              {" "}
              I can't believe you failed baby yigermal now go back and try again
              dummy.{" "}
            </p>
          )}
          <a href="/" className=" underline text-blue-700 mt-4">
            Go Back to your Gift
          </a>
        </div>
      )}
    </div>
  );
};

export default Trivia;
