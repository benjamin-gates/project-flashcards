import React, { useState, useEffect } from "react";
import {
  useParams,
  NavLink,
  Route,
  useHistory,
  useRouteMatch,
  Switch,
} from "react-router-dom";
import Home from "./Home";
import { readDeck, listCards } from "../utils/api";
import CardList from "./CardList";
import EditDeck from "./EditDeck";

function Deck() {
  const { url } = useRouteMatch();
  const history = useHistory();
  const { deckId } = useParams();
  const [deck, setDeck] = useState(undefined);
  const [cards, setCards] = useState(undefined);
  useEffect(() => {
    //const abortController = new AbortController();
    readDeck(deckId).then((result) => setDeck(result));
    //.catch((error))
    //.then(()=> console.log(deck))
    listCards(deckId).then(setCards);
  }, [deck]);

  if (deck && cards) {
    const DeckBody = () => (
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
          <button type="button">Study</button>
          <button type="button">Add Cards</button>
          <button type="delete">Delete</button>
        </div>
        <br />
        <ul>
          <CardList cards={cards} />
        </ul>
      </div>
    );
    return (
      <div>
        <Switch>
          <Route exact path={`${url}`}>
            <DeckBody />
          </Route>
          <Route exact path={`${url}/edit`}>
            <EditDeck deck={deck} />
          </Route>
          <Route exact path={`/`}>
            <Home />
          </Route>
        </Switch>
      </div>
    );
  } else {
    return (
      <div>
        <NavLink exact to={`/`}>
          Home
        </NavLink>
        /<p>Loading...</p>
        <Route exact path={`/`}>
          <Home />
        </Route>
      </div>
    );
  }
}

export default Deck;
