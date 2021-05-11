import React, { useEffect, useState } from "react";
import { NavLink, useParams, useHistory} from "react-router-dom";
import { readDeck, listCards } from "../utils/api";

function Study() {
  const { deckId } = useParams();
  const [cards, setCards] = useState(undefined);
  const [deck, setDeck] = useState(undefined);
  const [front, setFront] = useState(true);
  const [card, setCard] = useState(0);
  const history = useHistory();

  useEffect(() => {
    Promise.all([readDeck(deckId), listCards(deckId)]).then((results) => {
      setDeck(results[0]);
      setCards(results[1]);
    });
  }, [deckId]);

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
        { card === cards.length -1 && !front ? (
    
            <div>
                
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
          <p>{cards[card].front}</p>
          <br />
          <button type="button" onClick={handleFlip}>
            Flip
          </button>
        </div>)
        :(
            <div>
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
