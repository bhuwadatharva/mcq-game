import React, { useState } from 'react';
import Score from './Score'; // Or the next page if it's not Page2

const Page5 = ({ score }) => {
  const options = [
    "Cape Comorin",
    "Cancer",
    "Capricorn",
    "Religious Majority Area"
  ];

  const [step, setStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const correctAnswer = "Cape Comorin";

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextClick = () => {
    let newScore = score;
    if (selectedOption === correctAnswer) {
      newScore += 2;
    }
    setStep(step + 1);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {step === 0 && (
        <>
          <h1 className='mt-10 mr-10'>What event led to the partition of India into two separate countries: India and Pakistan?</h1>
          <div className='mt-5 grid grid-cols-2 gap-4' style={{ display: 'inline-block' }}>
            {options.map((option, index) => (
              <button 
                key={index} 
                style={{
                  ...buttonStyle, 
                  backgroundColor: selectedOption === option ? '#c0ffee' : '#e0aaff'
                }}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className='flex justify-end'>
            <button 
              className='py-2 px-6 rounded border-cyan-400 border-2 mr-20' 
              onClick={handleNextClick}
              disabled={!selectedOption}
            >
              Next
            </button>
          </div>
        </>
      )}
      {step === 1 && (
        <Score score={score + (selectedOption === correctAnswer ? 2 : 0)} />
      )}
    </div>
  );
};

const buttonStyle = {
  display: 'block',
  width: '150px',
  height: '50px',
  margin: '10px auto',
  backgroundColor: '#e0aaff',
  color: 'black',
  border: '2px solid #4a00e0',
  borderRadius: '10px',
  fontSize: '18px',
  cursor: 'pointer'
};

export default Page5;
