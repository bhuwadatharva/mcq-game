import { useState } from 'react';
import NextPage from '../../NextPage';

const Score = ({score}) => {
    const [showNextPage, setShowNextPage] = useState(false);

    const handleClick = () => {
      const score = 1;
      console.log(score);
      if (score === 1) {
        setShowNextPage(true);
      }
    };
  
    if (showNextPage) {
      return <NextPage />;
    }
  
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Your total score is: {score}</h1>
      <button className='py-2 px-6 rounded border-cyan-400 border-2 'onClick={handleClick}>Exit</button>
      
    </div>
  )
}

export default Score

             