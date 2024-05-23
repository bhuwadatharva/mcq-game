import React, { useState } from 'react'
import Page1 from './components/level1/Page1'
import Lev2 from './components/level2/Lev2'
import Lev3 from './components/level3/Lev3'
import Lev4 from './components/level4/Lev4'
import Lev5 from './components/level5/Lev5'
import Lev6 from './components/level6/Lev6'

const NextPage = () => {
    const [count, setCount] = useState(0);

    const handleCardClick = (newCount) => {
      setCount(newCount);
    };
  
    // Rendering logic based on count state
    switch (count) {
      case 1:
        return <Page1 />;
      case 2:
        return <Lev2 />;
      case 3:
        return <Lev3 />;
      case 4:
        return <Lev4 />;
      case 5:
        return <Lev5 />;
      case 6:
        return <Lev6 />;
      default:
  return (
    <>
      <section className="bg-white pb-6">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          <div className="container mx-auto px-6 p-6 bg-white">
            <div className="mb-16 text-center">
              <p className="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">Levels</p>
            </div>
            <div className="flex flex-wrap my-12">
              <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                <div className="flex items-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="currentColor" className="h-6 w-6 text-indigo-500">
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                  </svg>
                  <div className="ml-4 text-xl">Indian Geography</div>
                </div>
                <p className="leading-loose text-gray-500">Indian geography is consist of the geographic location and the weather in a country.</p>
                <button onClick={() => handleCardClick(1)}>Start Here</button>
              </div>

              <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
                <div className="flex items-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="currentColor" className="h-6 w-6 text-indigo-500">
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                  </svg>
                  <div className="ml-4 text-xl">Modern History</div>
                </div>
                <p className="leading-loose text-gray-500">History is the study of past.</p>
                <button onClick={() => handleCardClick(2)}>Start Here</button>
              </div>

              <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
                <div className="flex items-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="currentColor" className="h-6 w-6 text-indigo-500">
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                  </svg>
                  <div className="ml-4 text-xl">Indian Civics</div>
                </div>
                <p className="leading-loose text-gray-500">Civics is consist of political right and give a knowlege about citizeship</p>
                <button onClick={() => handleCardClick(3)}>Start Here</button>
              </div>

              <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
                <div className="flex items-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="currentColor" className="h-6 w-6 text-indigo-500">
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                  </svg>
                  <div className="ml-4 text-xl">Indian Piligrimage</div>
                </div>
                <p className="leading-loose text-gray-500">The piligrimage and tourist attraction point in India.</p>
                <button onClick={() => handleCardClick(4)}>Start Here</button>
              </div>

              <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
                <div className="flex items-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="currentColor" className="h-6 w-6 text-indigo-500">
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                  </svg>
                  <div className="ml-4 text-xl">General Knowledge</div>
                </div>
                <p className="leading-loose text-gray-500">Genral knowledge is the collection of data from diferent field.</p>
                <button onClick={() => handleCardClick(5)}>Start Here</button>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                <div className="flex items-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="currentColor" className="h-6 w-6 text-indigo-500">
                    <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                  </svg>
                  <div className="ml-4 text-xl">Planets</div>
                </div>
                <p className="leading-loose text-gray-500">The planets are revolving object around the sun and collection makes a galaxy.</p>
                <button onClick={() => handleCardClick(6)}>Start Here</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
};

export default NextPage;
