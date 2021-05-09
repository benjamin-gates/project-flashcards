import React, { useState } from "react";
import { NavLink, Link, Route, useHistory, push } from "react-router-dom";
import Home from "./Home";
import { updateDeck } from "../utils/api";
import Deck from "./Deck";

function EditDeck({deck}) {
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

  //const [deckId, setDeckId] = useState(undefined);

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    updateDeck({
        id: deck.id,
        name: formData.name,
        description: formData.description,
    })
      .then((result) => history.push(`/decks/${result.id}`));
    };

  return (
    <div>
      <NavLink exact to={`/`}>
        Home/
      </NavLink>
      <NavLink exact to={`/decks/${deck.id}`}>
          {deck.name}
      </NavLink>
      /Edit Deck
      <Route exact path={`/`}>
        <Home />
      </Route>
      <Route exact path={`/decks/:deckId`}>
          <Deck />
      </Route>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Deck Name:
          <input type="text" name="name" id="name" onChange={handleChange} value={formData.name}/>
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
        <button type="button" onClick={() => history.push(`/decks/${deck.id}`)}>
        Cancel
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditDeck;
