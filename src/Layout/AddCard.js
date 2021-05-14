import React, { useEffect, useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { createCard, readDeck } from "../utils/api";
import CardForm from "./CardForm";

function AddCard({ deck, newCards, setNewCards }) {
  const { deckId } = useParams();
  const history = useHistory();
  const [newDeck, setNewDeck] = useState(undefined);
  setNewCards(0);

  // Creating "blank" form state for AddCard
  const initialState = {
    front: "",
    back: "",
  };
  const [formData, setFormData] = useState(initialState);

  // The deck with matching deck ID is loaded to add a card
  useEffect(() => {
    readDeck(deckId).then((result) => setNewDeck(result));
  }, [deckId]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Form handler for that creates new card using createCard
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
            <li class="breadcrumb-item active" aria-current="page">
              Add Card
            </li>
          </ol>
        </nav>
        <h2>{newDeck.name}: Add Card</h2>
        <CardForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          deckId={deckId}
          history={history}
        />
      </div>
    );
  else return <p>Loading...</p>;
}

export default AddCard;
