import React, { useState } from "react";
import { NavLink, useHistory} from "react-router-dom";
import { createDeck } from "../utils/api";

function CreateDeck() {
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

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    createDeck(formData)
      .then((result) => history.push(`/decks/${result.id}`));
    };

  return (
    <div>
      <NavLink exact to={`/`}>
        Home
      </NavLink>
      /Create Deck
      <h1>Create Deck</h1>
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
