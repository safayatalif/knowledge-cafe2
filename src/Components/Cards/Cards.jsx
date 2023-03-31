import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {
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
                    ></Card>)
            }
        </>
    );
};

export default Cards;