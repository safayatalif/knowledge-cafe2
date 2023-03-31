import React from 'react';

const TimeRead = ({readTime}) => {
    return (
        <div className='card shadow-md p-4 border bg-sky-200'>
            <p className='text-center font-bold'>Spent time on read : {readTime} min</p>
        </div>
    );
};

export default TimeRead;