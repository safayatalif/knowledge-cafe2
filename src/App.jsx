import React, { useState } from 'react';
import Cards from './Components/Cards/Cards';
import Header from './Components/Header/Header';
import SideCard from './Components/SideCards/SideCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer/Footer';
import Question from './Components/Question/Question';

const App = () => {
  const [readTime, setReadTime] = useState(0);
  const [bookmarkTitle, setBookmarkTitle] = useState([]);
  const timeReadHandler = (time) => {
    const totalReadTime = readTime + time;
    setReadTime(totalReadTime)
  };
  const addBookmarkHandler = (blogTitle) => {
    const checkBookmark = bookmarkTitle.filter(title => title === blogTitle);
    if (checkBookmark.length === 0) {
      setBookmarkTitle([...bookmarkTitle, blogTitle]);
    }
    else {
      toast("Already Bookmark!");
    }
  }
  return (
    <>
      <header className='header-container'>
        <Header></Header>
      </header>
      <main>
        <div className='md:flex lg:flex'>
          <div className='card-container flex-initial md:w-3/5 lg:w-3/5 w-full p-4 mx-auto'>
            <Cards
              timeReadHandler={timeReadHandler}
              addBookmarkHandler={addBookmarkHandler}
            ></Cards>
          </div>
          <div className='side-card-container flex-initial md:w-2/5 lg:w-2/5 w-full h-full p-4 mx-auto sticky top-0'>
            <SideCard
              readTime={readTime}
              bookmarkTitle={bookmarkTitle}
            ></SideCard>
          </div>
        </div>
        <div className='Question-Container'>
          <Question></Question>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default App;