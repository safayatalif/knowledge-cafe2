import React, { useEffect, useState } from 'react';
import Card from './Card/Card';

const Cards = (props) => {
    const [cardDates, setCardDates] = useState([]);
    useEffect(() => {
        fetch("../../../public/fakeData.json")
            .then(res => res.json())
            .then(data => setCardDates(data));
    }, []);
    return (
        <>
            {
                cardDates.map(cardData => <Card 
                    cardData={cardData}
                    key ={cardData.id}
                    timeReadHandler ={props.timeReadHandler}
                    addBookmarkHandler={props.addBookmarkHandler}
                    ></Card>)
            }
        </>
    );
};

export default Cards;