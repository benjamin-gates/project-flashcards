import React, { useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { updateDeck } from "../utils/api";

function EditDeck({ deck, setNewDeck }) {
  const { deckId } = useParams();

  // Sets initial formData to the Deck name and description passed from Deck
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

  // Updates the deck with information entered into form, then takes user to Deck screen upon Submit
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
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <NavLink exact to={`/`}>
                Home
              </NavLink>
            </li>
            <li class="breadcrumb-item">
              <NavLink exact to={`/decks/${deckId}`}>
                {formData.name}
              </NavLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Edit Deck
            </li>
          </ol>
        </nav>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" style={{marginBottom:"15px"}}>
            Deck Name:
            <input
              type="text"
              name="name"

              id="name"
              size="37"
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
              cols="40"
              rows="3"
              onChange={handleChange}
              value={formData.description}
            />
          </label>
          <br />
          <button
            type="button"
            class="btn btn-secondary"
            style={{marginRight: "10px"}}
            onClick={() => history.push(`/decks/${deckId}`)}
          >
            Cancel
          </button>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  else return <p>Loading...</p>;
}

export default EditDeck;
