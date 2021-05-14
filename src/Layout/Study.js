import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

function Study({ deck, cards }) {
  const [front, setFront] = useState(true);
  const [card, setCard] = useState(0);
  const history = useHistory();

  // Toggles state of front when "Flip" is clicked
  const handleFlip = () => {
    setFront(!front);
  };

  // Toggles state of front and sets the card # to the next card when "Next" is clicked
  const handleNext = () => {
    setCard(card + 1);
    setFront(!front);
  };

  // Restarts Study from the beginning upon confirmation from the user, else the user is taken back to the Home screen
  function handleRestart() {
    if (window.confirm("Restart Cards?")) {
      setFront(!front);
      setCard(0);
    } else history.push(`/`);
  }

  if (cards && deck)
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
              <NavLink exact to={`/decks/${deck.id}`}>
                {deck.name}
              </NavLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Study
            </li>
          </ol>
        </nav>
        <h1>{deck.name}</h1>
        {cards.length < 3 ? (
          <div class="card">
            <div class="card-body">
            <h3 class="card-title">Not enough cards</h3>
            <p class="card-text">
              You need at least 3 cards to study. You currently have{" "}
              {cards.length} cards in this deck.
            </p>
            <button
              type="button" class="btn btn-primary"
              onClick={() => history.push(`/decks/${deck.id}/cards/new`)}
            >
              Add Cards
            </button>
            </div>
          </div>
        ) : card === cards.length - 1 && !front ? (
          <div class="card">
            <div class="card-body">
            <h3 class="card-title">
              Card {card + 1} of {cards.length}
            </h3>
            <p class="card-text">{cards[card].back}</p>
            <br />
            <button type="button" class="btn btn-secondary" onClick={handleFlip}>
              Flip
            </button>
            <button type="next" class="btn btn-info" onClick={handleRestart}>
              Restart
            </button>
            </div>
          </div>
        ) : front ? (
          <div class="card">
            <div class="card-body">
            <h3 class="card-title">
              Card {card + 1} of {cards.length}
            </h3>
            <p class="card-text">{cards[card].front}</p>
            <br />
            <button type="button" class="btn btn-secondary" onClick={handleFlip}>
              Flip
            </button>
            </div>
          </div>
        ) : (
          <div class="card">
            <div class="card-body">
            <h3 class="card-title">
              Card {card + 1} of {cards.length}
            </h3>
            <p class="card-text">{cards[card].back}</p>
            <br />
            <button type="button" class="btn btn-secondary" onClick={handleFlip}>
              Flip
            </button>
            <button type="next" class="btn btn-info" onClick={handleNext}>
              Next
            </button>
            </div>
          </div>
        )}
      </div>
    );
  else return <p>Loading...</p>;
}

export default Study;
