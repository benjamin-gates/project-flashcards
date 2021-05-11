import React, { useState, useEffect } from "react";
import {
  useParams,
  NavLink,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import { readDeck } from "../utils/api";
import CardList from "./CardList";

function Deck() {
  const { url } = useRouteMatch();
  const history = useHistory();
  const { deckId } = useParams();
  const [deck, setDeck] = useState(undefined);
  /*const [cards, setCards] = useState(undefined);*/
  useEffect(() => {
    readDeck(deckId).then((result) => setDeck(result));
    //listCards(deckId).then(setCards);
  },[deckId]);

  return deck /*&& cards*/ ?  (
      <div>
        <NavLink exact to={`/`}>
          Home
        </NavLink>
        /{deck.name}
        <div>
          <h3>{deck.name}</h3>
          <p>{deck.description}</p>
          <button type="button" onClick={() => history.push(`${url}/edit`)}>
            Edit
          </button>
          <button type="button" onClick={() => history.push(`${url}/study`)}>Study</button>
          <button type="button" onClick={() => history.push(`${url}/cards/new`)}>Add Cards</button>
          <button type="delete">Delete</button>
        </div>
        <br />
        <ul>
          <CardList /*cards={cards}*/ />
        </ul>
      </div>
    ): (
      <div>
        <NavLink exact to={`/`}>
          Home
        </NavLink>
        /<p>Loading...</p>
      </div>
    );
}

export default Deck;
