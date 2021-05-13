import React, { useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { updateDeck } from "../utils/api";

function EditDeck({ deck, setDeck, setNewDeck }) {
  const { deckId } = useParams();
  const initialState = {
    name: deck.name,
    description: deck.description,
  };
  const [formData, setFormData] = useState(initialState);


  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    updateDeck({
      id: deckId,
      name: formData.name,
      description: formData.description,
    })
      .then((result) => setNewDeck(result))
      .then(() => history.push(`/decks/${deckId}`));
  };

  if (formData)
    return (
      <div>
        <NavLink exact to={`/`}>
          Home/
        </NavLink>
        <NavLink exact to={`/decks/${deckId}`}>
          {formData.name}
        </NavLink>
        /Edit Deck
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Deck Name:
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={formData.name}
            />
          </label>
          <br />
          <label htmlFor="description">
            Description:
            <textarea
              name="description"
              id="description"
              onChange={handleChange}
              value={formData.description}
            />
          </label>
          <br />
          <button
            type="button"
            onClick={() => history.push(`/decks/${deckId}`)}
          >
            Cancel
          </button>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  else return <p>Loading...</p>;
}

export default EditDeck;
