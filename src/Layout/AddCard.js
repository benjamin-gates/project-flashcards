import React, {useState } from "react";
import { NavLink, useHistory, useParams, useRouteMatch} from "react-router-dom";
//import CardForm from "./CardForm";
import { createCard, listCards} from "../utils/api";


function AddCard({deck, setCards}) {
    const {deckId} = useParams();
    const history = useHistory();
    const {url} = useRouteMatch();
  const initialState = {
    front: "",
    back: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createCard(deckId, formData)
    .then(() => setFormData(initialState))
    .then(() => listCards(deckId))
    .then((result) => setCards(result))
    .then(() => history.push(`${url}`))
    };

  if (deck) return (
    <div>
      <div>
      <NavLink exact to={`/`}>
        Home
      </NavLink>
      <NavLink exact to={`/decks/${deckId}`}>
          /{deck.name}
      </NavLink>
      /Add Card
      </div>
      <h3>{deck.name}: Add Card</h3><form onSubmit={handleSubmit}>
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

  {/*<CardForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} deckId={deckId} history={history}/>*/}
    </div>
  )
  else return (<p>Loading...</p> )
}

export default AddCard;
