import React, { useEffect, useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { readCard, updateCard } from "../utils/api";
import CardForm from "./CardForm";

function EditCard({ deck, cards, newCards, setNewCards }) {
  const { deckId, cardId } = useParams();
  const history = useHistory();
  const [formData, setFormData] = useState(undefined);

  setNewCards(0);

  // The card that we are editing is loaded, setting the initial state of the form
  useEffect(() => {
    readCard(cardId).then((result) =>
      setFormData({
        id: cardId,
        front: result.front,
        back: result.back,
        deckId: Number(deckId),
      })
    );
  }, [cardId, deckId]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Upon submit, this handler changes state for newCards in the Deck component to trigger useEffect, then the path is pushed to Deck
  const handleSubmit = (event) => {
    event.preventDefault();
    updateCard(formData)
      .then(() => setNewCards(newCards + 1))
      .then(() => history.push(`/decks/${deckId}`));
  };

  if (deck && formData)
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
                {deck.name}
              </NavLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Edit Card {cardId}
            </li>
          </ol>
        </nav>
        <h1>Edit Card</h1>
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

export default EditCard;
