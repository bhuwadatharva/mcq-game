import React, { useState } from 'react';
import Page3 from './Page3';

const Page2 = ({ score }) => {
  const options = [
    "Chipko Movement",
    "SatyaGraha",
    "Boston Tea Party",
    "Achipko Movement"
  ];

  const [step, setStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const correctAnswer = "SatyaGraha";

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
          <h1 className='mt-10 mr-10'>What was the name of the movement led by Mahatma Gandhi that emphasized non-violent resistance?</h1>
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
        <Page3 score={score + (selectedOption === correctAnswer ? 2 : 0)} />
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

export default Page2;
