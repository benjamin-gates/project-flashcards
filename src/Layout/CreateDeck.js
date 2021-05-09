import React, { useState } from "react";
import { NavLink, Link, Route, useHistory, push } from "react-router-dom";
import Home from "./Home";
import { createDeck } from "../utils/api";
import Deck from "./Deck";

function CreateDeck({setLength, length}) {
  const initialState = {
    name: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const [deckId, setDeckId] = useState(undefined);

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLength(length+1)
    //console.log(formData)
    createDeck(formData)
      .then((result) => history.push(`/decks/${result.id}`));
    };

  //console.log(formData.name, formData.message);

  return (
    <div>
      <NavLink exact to={`/`}>
        Home
      </NavLink>
      /Create Deck
      <Route exact path={`/`}>
        <Home />
      </Route>
      {deckId ? (
          <Route path={`/decks/:deckId`}>
              <Deck />
          </Route>
      ) : (null)}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Deck Name:
          <input type="text" name="name" id="name" onChange={handleChange} />
        </label>
        <br />
        <label htmlFor="description">
          Description:
          <textarea
            name="description"
            id="description"
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="button" onClick={() => history.push("/")}>
        Cancel
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateDeck;
