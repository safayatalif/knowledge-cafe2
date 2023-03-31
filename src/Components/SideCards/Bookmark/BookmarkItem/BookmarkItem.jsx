import React from 'react';

const BookmarkItem = ({title}) => {
    // console.log(props)
    return (
        <div className='card shadow p-4 border mt-2 bg-sky-200'>
            <p>{title}</p>
        </div>
    );
};

export default BookmarkItem;