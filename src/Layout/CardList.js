import React from "react";
import {useHistory, useRouteMatch} from "react-router-dom";
import {deleteCard} from "../utils/api";

function CardList({cards, setNewCards}){
    const {url} = useRouteMatch();
    const history = useHistory();
    function handleDelete(cardId) {
        if(window.confirm(`Delete this card? You will not be able to recover it`))   
        {deleteCard(cardId)
            .then(() => setNewCards(cards.map((card) => card.id===cardId ? null : card)))}
    }
    
    if(cards) {
        const cardList = cards.map((card, index) => (
            <div key={index} class="card border border-secondary" style={{marginBottom: "15px"}}>
                <div class="card-body">
                    <div style={{display:"flex"}}>
                <p class="card-text" style={{fontWeight: "bold", marginRight:"10px"}}>Front:</p>
                <p class="card-text">{card.front}</p>
                </div>
                <div style={{display:"flex"}}>
                <p class="card-text" style={{fontWeight: "bold", marginRight:"10px"}}>Back:</p>  
                <p class="card-text">{card.back}</p>
                </div>
                <div style={{display: "flex", justifyContent:"flex-end"}}>
                <button type="button" class="btn btn-secondary" style={{marginRight: "10px"}} onClick={() => history.push(`${url}/cards/${card.id}/edit`)}>Edit</button>
                <button type="delete" class="btn btn-danger" onClick={() => handleDelete(card.id)}>Delete</button>
                </div>
                </div>
            </div>
        ));
        return cardList
    }
    else return <p>Loading...</p>

}

export default CardList;