import React from 'react';
import Bookmark from './Bookmark/Bookmark';
import TimeRead from './TimeRead/TimeRead';

const SideCard = ({readTime}) => {
    return (
        <div>
            <TimeRead readTime ={readTime}></TimeRead>
            <Bookmark></Bookmark>
        </div>
    );
};

export default SideCard;