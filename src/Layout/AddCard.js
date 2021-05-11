import React, { useEffect, useState } from "react";
import { NavLink, useHistory, useParams, useRouteMatch} from "react-router-dom";
import { createCard, readDeck } from "../utils/api";

function AddCard() {
    const {deckId} = useParams();
    const history = useHistory();
    const {url} = useRouteMatch();
  const initialState = {
    front: "",
    back: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [deck, setDeck] = useState(undefined);

  useEffect(() => {
      readDeck(deckId)
      .then((result) => setDeck(result))
  },[deckId]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createCard(deckId, formData)
    .then(() => setFormData(initialState))
    .then(() => history.push(`${url}`))
    };

  if (deck) return (
    <div>
      <NavLink exact to={`/`}>
        Home
      </NavLink>
      <NavLink exact to={`/decks/${deckId}`}>
          /{deck.name}
      </NavLink>
      /Add Card
      <h1>{deck.name}: Add Card</h1>
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
        <button type="button" onClick={() => history.push(`/decks/${deckId}`)}>
        Done
        </button>
        <button type="submit">Save</button>
      </form>
    </div>
  )
  else return (<p>Loading...</p> )
}

export default AddCard;
