import React from "react";

function CardList({cards}){
    const cardList = cards.map((card) => (
        <li key={card.id}>
            <p>{card.front}</p>
            <p>{card.back}</p>
            <button type="button">Edit</button>
            <button type="delete">Delete</button>
        </li>
    ));
    return cardList;

}

export default CardList;