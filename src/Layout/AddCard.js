import React, {useEffect, useState } from "react";
import { NavLink, useHistory, useParams, useRouteMatch} from "react-router-dom";
//import CardForm from "./CardForm";
import { createCard, listCards, readDeck} from "../utils/api";


function AddCard({deck, setDeck, setCards, cards, newCards, setNewCards}) {
    const {deckId} = useParams();
    const history = useHistory();
    const {url} = useRouteMatch();
    const [newDeck, setNewDeck] = useState(undefined);

    const someObject = {
      name: 'howdy',
      id: 'poop'
    };
    console.log(someObject, `object`);
  console.log(deck, `deck`);
  const initialState = {
    front: "",
    back: "",
  };
  const [formData, setFormData] = useState(initialState);
  const name = deck.name;
  console.log(deck.name, 'prop');
  console.log(name, 'variable');

  useEffect(() => {
    readDeck(deckId)
    .then((result) => setNewDeck(result))
  },[]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  /*useEffect(() => {
    readDeck(deckId)
    .then(setDeck)
  })*/

  const handleSubmit = (event) => {
    event.preventDefault();
    createCard(deckId, formData)
    .then((result) => newCards.push(result))
    .then(() => setFormData(initialState))
    /*.then(() => listCards(deckId))
    .then((result) => setCards(result))*/
    //.then(() => history.push(`${url}`))

    };

  if (newDeck) return (
    <div>
      <NavLink exact to={`/`}>
        Home
      </NavLink>
      <NavLink exact to={`/decks/${deckId}`}>
          {newDeck.name}
      </NavLink>
      Add Card
      <h2>{newDeck.name}: Add Card</h2>
      <div>
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
        <button type="button" onClick={() => history.push(`/decks/${deckId}`)}>
        Done
        </button>
        <button type="submit">Save</button>
      </form>
      </div>

  {/*<CardForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} deckId={deckId} history={history}/>*/}
    </div>
  )
  else return (<p>Loading...</p> )
}

export default AddCard;
