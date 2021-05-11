import React, { useEffect, useState } from "react";
import {
  NavLink,
  useHistory,
  useParams,
} from "react-router-dom";
import { readCard, readDeck, updateCard } from "../utils/api";

function EditCard() {
  const { deckId, cardId } = useParams();
  const history = useHistory();
  const [formData, setFormData] = useState(undefined);
  const [deck, setDeck] = useState(undefined);

  useEffect(() => {
    Promise.all([readDeck(deckId), readCard(cardId)]).then((results) => {
      setDeck(results[0]);
      setFormData({
        id: cardId,
        front: results[1].front,
        back: results[1].back,
        deckId: deckId,
      });
    });
  }, [deckId, cardId]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCard(formData);
    //.then(() => window.location.reload())
    //.then(() => history.push(`${url}`))
  };

  if (deck && formData)
    return (
      <div>
        <NavLink exact to={`/`}>
          Home
        </NavLink>
        <NavLink exact to={`/decks/${deckId}`}>
          /{deck.name}
        </NavLink>
        /Edit Card {cardId}
        <h1>Edit Card</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="front">
            Front
            <br />
            <textarea
              name="front"
              id="front"
              onChange={handleChange}
              value={formData.front}
            />
          </label>
          <br />
          <label htmlFor="back">
            Back
            <br />
            <textarea
              name="back"
              id="back"
              onChange={handleChange}
              value={formData.back}
            />
          </label>
          <br />
          <button
            type="button"
            onClick={() => history.push(`/decks/${deckId}`)}
          >
            Done
          </button>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  else return <p>Loading...</p>;
}

export default EditCard;
