import React, { useEffect, useState } from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { readCard, updateCard, listCards } from "../utils/api";
//import CardForm from "./CardForm";

function EditCard({ deck, setCards, cards, newCards, setNewCards }) {
  const { deckId, cardId } = useParams();
  const history = useHistory();
  const [formData, setFormData] = useState(undefined);
  //setNewCards(cards);
  //setNewCards(newCards);
  setNewCards(0);

  //console.log(typeof deckId, '1');

  useEffect(() => {
    setNewCards(cards);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(typeof deckId, '2');
    updateCard(formData)
      /*.then((card) =>
        newCards.map((item) => {
          return card.id === item.id ? card : item;
        })
      )*/
      .then(() => setNewCards(newCards + 1))
      //.then((result) => setNewCards(result))
      /*.then(() => listCards(deckId))
    .then((result) => setCards(result))*/
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
            <li class="breadcrumb-item">Edit Card {cardId}</li>
          </ol>
        </nav>
        <h1>Edit Card</h1>
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
        {/*<CardForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} deckId={deckId} history={history} />*/}
      </div>
    );
  else return <p>Loading...</p>;
}

export default EditCard;
