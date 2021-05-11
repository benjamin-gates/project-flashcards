import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { listDecks, deleteDeck } from "../utils/api";

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
  };

  const homeBody = decks.map((deck) => (
      <div key={deck.id}>
        <h3>{deck.name}</h3>
        <p>{deck.description}</p>
        <p>{deck.cards.length} cards</p>
        <button type="delete" onClick={() => handleDelete(deck.id)}>Delete</button>
        <button type="button" onClick={() => history.push(`/decks/${deck.id}`)}>View</button>
      </div>
    )
  );

    return decks ? (
      <div>
          <button type="button" onClick={() => history.push(`/decks/new`)}>Create Deck</button>
        {homeBody}
      </div>
    ) : <p>Loading...</p>

}

export default Home;
