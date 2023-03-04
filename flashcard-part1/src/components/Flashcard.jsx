import React, { useState } from "react";
import "./Flashcard.css";

const flashcardsData = [
  {
    id: 1,
    question: "1. Who are them?",
    answer: "TWICE",
    image: "./img/twice.png",
  },
  {
    id: 2,
    question: "2. Who are them?",
    answer: "ITZY",
    image: "./img/itzy.png",
  },
  {
    id: 3,
    question: "3. Who are them?",
    answer: "BTS",
    image: "./img/bts.png",
  },
  {
    id: 4,
    question: "4. Who are them?",
    answer: "EXO",
    image: "./img/exo.png",
  },
  {
    id: 5,
    question: "5. Who are them?",
    answer: "BLACKPINK",
    image: "./img/bp.png",
  },
  {
    id: 6,
    question: "6. Who are them?",
    answer: "Tomorrow X Together",
    image: "./img/txt.png",
  },
  {
    id: 7,
    question: "7. Who are them?",
    answer: "AESPA",
    image: "./img/ae.png",
  },
  {
    id: 8,
    question: "8. Who are them?",
    answer: "NEW JEANS",
    image: "./img/nj.png",
  },
  {
    id: 9,
    question: "9. Who are them?",
    answer: "NCT DREAM",
    image: "./img/nct.png",
  },
  {
    id: 10,
    question: "10. Who are them?",
    answer: "IVE",
    image: "./img/ive.png",
  },
];

const FlashCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const currentFlashcard = flashcardsData[currentCardIndex];

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleForwardClick = () => {
    setCurrentCardIndex((currentCardIndex + 1) % flashcardsData.length);
  };

  const handleBackClick = () => {
    if (currentCardIndex !== 0)
      setCurrentCardIndex((currentCardIndex - 1) % flashcardsData.length);
    else {
      setCurrentCardIndex(9);
    }
  };
  return (
    <>
      <div>
        <div>
          <button onClick={handleBackClick}>Back</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={handleForwardClick}>Next</button>
        </div>
        <br />
        <div
          className={`flashcard ${isFlipped ? "flipped" : ""}`}
          onClick={handleClick}
        >
          <div className="front">
            <div className="content">
              <h2>{currentFlashcard.question}</h2>
            </div>
            <div className="content">
              <img src={currentFlashcard.image} alt="image" />
            </div>
          </div>
          <div className="back">
            <div className="content">{currentFlashcard.answer}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashCard;
