import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Card = ({ cardData }) => {
    const { authorPicture, blogTitle, coverPicture, authorName, readTime, publishDate , hashTag } = cardData;

    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl mb-4">
                <figure><img className='h-56 w-full' src={coverPicture} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div className='flex gap-2'>
                            <img className='w-10 h-10 rounded-full' src={authorPicture} alt="" />
                            <div>
                                <p className='text-base'>{authorName}</p>
                                <p className='text-xs'>{publishDate}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <p className='text-xs'>{readTime} min read</p>
                            <button ><FontAwesomeIcon icon={faBookmark} /></button>
                        </div>
                    </div>
                    <h1 className='card-title'>{blogTitle}</h1>
                    <p className='text-xs'>{hashTag}</p>
                    <a className='text-xs underline text-teal-700' href="">Make as read</a>
                </div>
            </div>
        </>
    );
};

export default Card;