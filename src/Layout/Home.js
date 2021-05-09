import React, { useEffect, useState } from "react";
import { Route, Link, Switch, useHistory } from "react-router-dom";
import { listDecks, deleteDeck } from "../utils/api";
import CreateDeck from "./CreateDeck";
import Deck from "./Deck";
import NotFound from "./NotFound";

function Home() {
    const history = useHistory();
  const [decks, setDecks] = useState([]);
  const [length, setLength] = useState(0);
  useEffect(() => {
    listDecks().then(setDecks);
  },[length]);

  


 const handleDelete = async (id) => {
     const confirmation = window.confirm("Delete this deck? You will not be able to recover it.")
     if (confirmation){
         await deleteDeck(id);
         listDecks()
         .then(setDecks)
         .then(setLength(decks.length));
     }
      //console.log(deckId);
      //.then(() => window.confirm());
  };

  const homeBody = decks.map((deck) => {
    return (
      <div key={deck.id}>
        <h3>{deck.name}</h3>
        <p>{deck.description}</p>
        <p>{deck.cards.length} cards</p>
        <button type="delete" onClick={() => handleDelete(deck.id)}>Delete</button>
        <button type="button" onClick={() => history.push(`/decks/${deck.id}`)}>View</button>
      </div>
    );
  });

  function Home() {
    return (
      <div>
        <Link to={`/decks/new`}>Create Deck</Link>
        {homeBody}
      </div>
    );
  }
  return (
    <div>
      <Switch>
        <Route path={`/decks/new`}>
          <CreateDeck history={history} setLength={setLength} length={length}/>
        </Route>
        <Route path={`/decks/:deckId`}>
            <Deck/>
        </Route>
        <Route path={`/`}>
          <Home />
        </Route>
        <Route>
            <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default Home;
