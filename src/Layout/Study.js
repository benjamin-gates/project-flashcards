import React, { useState } from "react";
import { NavLink, useHistory} from "react-router-dom";

function Study({deck, cards}) {
  const [front, setFront] = useState(true);
  const [card, setCard] = useState(0);
  const history = useHistory();

const handleFlip = () => {
    setFront(!front);
}

const handleNext = () => {
    setCard(card+1)
    setFront(!front);
}

function handleRestart() {
    if(window.confirm("Restart Cards?")){
        setFront(!front);
        setCard(0);
    } else history.push(`/`);
}

  if (cards && deck)
    return (
      <div>
        <NavLink exact to={`/`}>
          Home
        </NavLink>
        <NavLink exact to={`/decks/${deck.id}`}>
          /{deck.name}
        </NavLink>
        <h1>{deck.name}</h1>
        { cards.length < 3 ? (
          <div>
          <h3>Not enough cards
            </h3>
            <p>You need at least 3 cards to study. You currently have {cards.length} cards in this deck.</p>
            <button type="button" onClick={() => history.push(`/decks/${deck.id}/cards/new`)}>Add Cards</button>
            </div>
        ):card === cards.length - 1 && !front ? (
            <div>
              <h3>Card {card+1} of {cards.length}</h3>
            <p>{cards[card].back}</p>
            <br />
            <button type="button" onClick={handleFlip}>
              Flip
            </button>
            <button type="next" onClick={handleRestart}>
                Restart
            </button>
          </div>
        )
        :front ? (<div>
          <h3>Card {card+1} of {cards.length}</h3>
          <p>{cards[card].front}</p>
          <br />
          <button type="button" onClick={handleFlip}>
            Flip
          </button>
        </div>)
        :(
            <div>
              <h3>Card {card+1} of {cards.length}</h3>
          <p>{cards[card].back}</p>
          <br />
          <button type="button" onClick={handleFlip}>
            Flip
          </button>
          <button type="next" onClick={handleNext}>
              Next
          </button>
        </div>
        )
        }
      </div>
    );
  else return <p>Loading...</p>;
}

export default Study;
