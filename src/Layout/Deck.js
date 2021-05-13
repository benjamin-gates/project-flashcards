import React, { useState, useEffect } from "react";
import {
  useParams,
  NavLink,
  useHistory,
  useRouteMatch,
  Switch,
  Route,
} from "react-router-dom";
import { listCards, readDeck, deleteDeck } from "../utils/api";
import CardList from "./CardList";
import EditDeck from "./EditDeck";
import AddCard from "./AddCard";
import Study from "./Study";
import EditCard from "./EditCard";

function Deck() {
  const { url } = useRouteMatch();
  const history = useHistory();
  const { deckId } = useParams();
  const [deck, setDeck] = useState(undefined);
  const [cards, setCards] = useState(undefined);
  const [newDeck, setNewDeck] = useState(undefined);
  const [newCards, setNewCards] = useState(cards);
  useEffect(() => {
    /*Promise.all([readDeck(deckId), listCards(deckId)]).then((results) => {
      setDeck(results[0]);
      console.log(results[0],'deck');
      setCards(results[1]);
    });*/
    readDeck(deckId)
    .then(setDeck);
  },[newDeck, newCards]);

  const handleDelete = () => {
    if(window.confirm(`Delete deck? You will not be able to recover it after it is deleted`)){
      deleteDeck(deckId)
      //.then((result) => setNewDeck(result))
      /*.then(() => listCards(deckId))
      .then(setCards)*/
      .then(() => history.push(`/`))
    }

  };

  return deck ? (
    <Switch>
      <Route path="/decks/:deckId/cards/:cardId/edit">
        <EditCard deck={deck} setCards={setCards} cards={deck.cards} newCards={newCards} setNewCards={setNewCards}/>
      </Route>
      <Route path="/decks/:deckId/cards/new">
        <AddCard deck={deck} setDeck={setDeck} setCards={setCards} cards={deck.cards} newDeck={newDeck} setNewDeck={setNewDeck} newCards={newCards} setNewCards={setNewCards}/>
      </Route>
      <Route path={`/decks/:deckId/edit`}>
        <EditDeck deck={deck} setDeck={setDeck} setNewDeck={setNewDeck}/>
      </Route>
      <Route path="/decks/:deckId/study">
        <Study deck={deck} cards={deck.cards} />
      </Route>
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
          <button type="button" onClick={() => history.push(`${url}/study`)}>
            Study
          </button>
          <button
            type="button"
            onClick={() => history.push(`${url}/cards/new`)}
          >
            Add Cards
          </button>
          <button type="delete" onClick={handleDelete}>Delete</button>
        </div>
        <br />
        <ul>
          <CardList cards={deck.cards} deckId={deckId} setCards={setCards} newCards={newCards} setNewCards={setNewCards}/>
        </ul>
      </div>
    </Switch>
  ) : (
    <div>
      <NavLink exact to={`/`}>
        Home
      </NavLink>
      /<p>Loading...</p>
    </div>
  );
}

export default Deck;
