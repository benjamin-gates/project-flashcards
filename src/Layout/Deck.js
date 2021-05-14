import React, { useState, useEffect } from "react";
import {
  useParams,
  NavLink,
  useHistory,
  useRouteMatch,
  Switch,
  Route,
} from "react-router-dom";
import { readDeck, deleteDeck } from "../utils/api";
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
    readDeck(deckId).then(setDeck);
  }, [newDeck, newCards, deckId]);

  const handleDelete = () => {
    if (
      window.confirm(
        `Delete deck? You will not be able to recover it after it is deleted`
      )
    ) {
      deleteDeck(deckId).then(() => history.push(`/`));
    }
  };

  return deck ? (
    <Switch>
      <Route path="/decks/:deckId/cards/:cardId/edit">
        <EditCard
          deck={deck}
          setCards={setCards}
          cards={deck.cards}
          newCards={newCards}
          setNewCards={setNewCards}
        />
      </Route>
      <Route path="/decks/:deckId/cards/new">
        <AddCard
          deck={deck}
          setDeck={setDeck}
          setCards={setCards}
          cards={deck.cards}
          newDeck={newDeck}
          setNewDeck={setNewDeck}
          newCards={newCards}
          setNewCards={setNewCards}
        />
      </Route>
      <Route path={`/decks/:deckId/edit`}>
        <EditDeck deck={deck} setDeck={setDeck} setNewDeck={setNewDeck} />
      </Route>
      <Route path="/decks/:deckId/study">
        <Study deck={deck} cards={deck.cards} />
      </Route>
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <NavLink exact to={`/`}>
                Home
              </NavLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {deck.name}
            </li>
          </ol>
        </nav>
        <div>
          <h3>{deck.name}</h3>
          <p>{deck.description}</p>
          <div style={{display: "flex", justifyContent:"space-between"}}>
            <div>
          <button type="button" class="btn btn-secondary" onClick={() => history.push(`${url}/edit`)}>
            Edit
          </button>
          <button type="button" class="btn btn-info" onClick={() => history.push(`${url}/study`)}>
            Study
          </button>
          <button
            type="button" class="btn btn-primary"
            onClick={() => history.push(`${url}/cards/new`)}
          >
            Add Cards
          </button>
          </div>
          <div>
          <button type="delete" class="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
          </div>
          </div>
        </div>
        <br />
        <div>
          <CardList
            cards={deck.cards}
            deckId={deckId}
            setCards={setCards}
            newCards={newCards}
            setNewCards={setNewCards}
          />
        </div>
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
