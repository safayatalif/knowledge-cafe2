import React from 'react';
import BookmarkItem from './BookmarkItem/BookmarkItem';

const Bookmark = ({ bookmarkTitle }) => {
    return (
        <div className='card shadow-md p-4 border bg-sky-50 mt-4'>
            <h1 className='font-bold'>Bookmarked Blogs : {bookmarkTitle.length}</h1>
            {
                bookmarkTitle.map((title, index) =>
                    <BookmarkItem
                        title={title}
                        key={index}
                    ></BookmarkItem>)
            }
        </div>
    );
};

export default Bookmark;