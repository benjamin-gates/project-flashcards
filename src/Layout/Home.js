import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { listDecks, deleteDeck } from "../utils/api";

function Home() {
  const history = useHistory();
  const [decks, setDecks] = useState([]);
  const [length, setLength] = useState(0);

  // The list of decks are loaded each time the state "length" changes
  useEffect(() => {
    listDecks().then(setDecks);
  }, [length]);

  // When delete button is clicked, the deck will be deleted upon confirmation from user
  const handleDelete = async (id) => {
    const confirmation = window.confirm(
      "Delete this deck? You will not be able to recover it."
    );
    if (confirmation) {
      await deleteDeck(id);
      setLength(decks.length);
    }
  };

  // Mapping deck content with buttons for the main body of the Home component
  const homeBody = decks.map((deck) => (
    <div key={deck.id} class="card border border-secondary" width="18 rem" style={{marginTop:"20px"}}>
      <div className="card-body">
      <h2 className="card-title">{deck.name}</h2>
      <p className="card-text">{deck.description}</p>

      <div style={{display:"flex", justifyContent: "space-between"}}>
      <h4 className="card-text">{deck.cards.length} cards</h4>
      <div>
      <button type="delete" style={{marginRight: "10px"}} className="btn btn-danger" onClick={() => handleDelete(deck.id)}>
        Delete
      </button>
      <button type="button" className="btn btn-info" onClick={() => history.push(`/decks/${deck.id}`)}>
        View
      </button>
      </div>
      </div>
      </div>
    </div>
  ));

  return decks ? (
    <div>
      <button type="button" class="btn btn-primary" onClick={() => history.push(`/decks/new`)}>
        Create Deck
      </button>
      {homeBody}
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default Home;
