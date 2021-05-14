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
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
      <NavLink exact to={`/`}>
        Home
      </NavLink>
      </li>
      <li class="breadcrumb-item active" aria-current="page">
      Create Deck
      </li>
      </ol>
      </nav>
      <h1>Create Deck</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" style={{marginBottom:"15px"}}>
          Deck Name:
          <input type="text" name="name" id="name" size="37" onChange={handleChange}/>
        </label>
        <br />
        <label htmlFor="description">
          Description:
          <textarea
            name="description"
            id="description"
            onChange={handleChange}
            cols="40"
            rows="3"
          />
        </label>
        <br />
        <button type="button" class="btn btn-secondary" style={{marginRight: "10px"}} onClick={() => history.push("/")}>
        Cancel
        </button>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default CreateDeck;
