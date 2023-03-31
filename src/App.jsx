import React from 'react';
import Cards from './Components/Cards/Cards';
import Header from './Components/Header/Header';

const App = () => {
  return (
    <>
      <header className='header-container'>
        <Header></Header>
      </header>
      <main>
        <div className='md:flex lg:flex'>
          <div className='card-container flex-initial md:w-3/5 lg:w-3/5 w-full p-4 mx-auto'>
              <Cards></Cards>
          </div>
          <div className='side-card-container flex-initial md:w-2/5 lg:w-2/5 w-full h-full p-4 mx-auto bg-green-700'>
              <p>side card container</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;