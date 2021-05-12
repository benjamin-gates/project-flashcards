import React from "react";

function CardForm( {formData, handleChange, handleSubmit, deckId, history}){
    return (
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
    )
};

      export default CardForm;