import React from 'react';
import Bookmark from './Bookmark/Bookmark';
import TimeRead from './TimeRead/TimeRead';

const SideCard = ({ readTime, bookmarkTitle }) => {
    return (
        <div>
            <TimeRead readTime={readTime}></TimeRead>
            <Bookmark bookmarkTitle={bookmarkTitle}></Bookmark>
        </div>
    );
};

export default SideCard;