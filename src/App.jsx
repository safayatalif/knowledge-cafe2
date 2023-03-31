import React, { useState } from 'react';
import Cards from './Components/Cards/Cards';
import Header from './Components/Header/Header';
import SideCard from './Components/SideCards/SideCard';

const App = () => {
  const [readTime , setReadTime] = useState(0); 
  const timeReadHandler = (time) => {
    const totalReadTime = readTime + time;
    setReadTime(totalReadTime)
  };
  // console.log(readTime);
  return (
    <>
      <header className='header-container'>
        <Header></Header>
      </header>
      <main>
        <div className='md:flex lg:flex'>
          <div className='card-container flex-initial md:w-3/5 lg:w-3/5 w-full p-4 mx-auto'>
            <Cards timeReadHandler={timeReadHandler}></Cards>
          </div>
          <div className='side-card-container flex-initial md:w-2/5 lg:w-2/5 w-full h-full p-4 mx-auto sticky top-0'>
            <SideCard readTime={readTime} ></SideCard>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;