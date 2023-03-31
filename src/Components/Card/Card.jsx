import React from 'react';

const Card = ({ cardData }) => {
    const { authorPicture, blogTitle, coverPicture, authorName, readTime, publishDate } = cardData;

    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl mb-4">
                <figure><img className='h-56 w-full' src={coverPicture} alt="Shoes" /></figure>
                <div className="card-body">
                    <div>
                        <div className='flex gap-2'>
                            <img className='w-10 h-10 rounded-full' src={authorPicture} alt="" />
                            <div>
                                <h3 className='text-base font-bold'>{authorName}</h3>
                                <p className='text-xs'>{publishDate}</p>
                            </div>
                        </div>
                        <div>
                        <p className='text-xs'>{readTime} min read</p>
                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;