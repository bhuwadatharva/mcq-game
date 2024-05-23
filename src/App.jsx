import { useState } from 'react';
import NextPage from './NextPage';

const App = () => {
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
    <>
    <div className='flex items-center justify-center'>
        <h1 className='mt-96'>Are You Ready For Quiz!!</h1>
        </div>
      <div className='flex items-center justify-center mt-4'>
      <button className='px-4 py-2 rounded ring ring-blue-300 hover:ring-blue-500' onClick={handleClick}>Start Now</button>
      </div>
      </>
  )
}

export default App