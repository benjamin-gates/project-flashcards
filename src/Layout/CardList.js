import React, {useEffect, useState} from "react";
import {useHistory, useRouteMatch, useParams} from "react-router-dom";
import { listCards } from "../utils/api";

function CardList(){
    const {url} = useRouteMatch();
    const {deckId} = useParams();
    const history = useHistory();
    const [cards, setCards] = useState(undefined);

    useEffect(() => {
        listCards(deckId).then(setCards)
    },[deckId])

    
    if(cards) {
        const cardList = cards.map((card) => (
            <li key={card.id}>
                <p>{card.front}</p>
                <p>{card.back}</p>
                <button type="button" onClick={() => history.push(`${url}/cards/${card.id}/edit`)}>Edit</button>
                <button type="delete">Delete</button>
            </li>
        ));
        return cardList
    }
    else return <p>Loading...</p>

}

export default CardList;