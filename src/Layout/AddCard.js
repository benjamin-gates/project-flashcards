import React, { useEffect, useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { createCard, readDeck } from "../utils/api";
import CardForm from "./CardForm";

function AddCard({ deck, newCards, setNewCards }) {
  const { deckId } = useParams();
  const history = useHistory();
  const [newDeck, setNewDeck] = useState(undefined);
  setNewCards(0);

  const initialState = {
    front: "",
    back: "",
  };
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    readDeck(deckId).then((result) => setNewDeck(result));
  }, [deckId]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createCard(deckId, formData)
      .then(() => setNewCards(newCards + 1))
      .then(() => setFormData(initialState));
  };

  if (newDeck)
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
                {newDeck.name}
              </NavLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Add Card</li>
          </ol>
        </nav>
        <h2>{newDeck.name}: Add Card</h2>
        {/*<div>
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
        </div>*/}

        <CardForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} deckId={deckId} history={history}/>
      </div>
    );
  else return <p>Loading...</p>;
}

export default AddCard;
