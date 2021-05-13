import React from "react";
import {useHistory, useRouteMatch} from "react-router-dom";
import {deleteCard, listCards} from "../utils/api";

function CardList({cards, deckId, setCards, newCards, setNewCards}){
    //if(!cards||!cards.length) return null;
    const {url} = useRouteMatch();
    const history = useHistory();
    function handleDelete(cardId) {
        if(window.confirm(`Delete this card? You will not be able to recover it`))   
        {deleteCard(cardId)
            .then(() => setNewCards(cards.map((card) => card.id===cardId ? null : card)))
        /*.then(() => listCards(deckId))
        .then((result) => setCards(result))*/}
    }
    
    if(cards) {
        const cardList = cards.map((card, index) => (
            <li key={index}>
                <p>{card.front}</p>
                <p>{card.back}</p>
                <button type="button" onClick={() => history.push(`${url}/cards/${card.id}/edit`)}>Edit</button>
                <button type="delete" onClick={() => handleDelete(card.id)}>Delete</button>
            </li>
        ));
        return cardList
    }
    else return <p>Loading...</p>

}

export default CardList;