import React from "react";

function CardForm( {formData, handleChange, handleSubmit, deckId, history}){
    return (
<form onSubmit={handleSubmit}>
        <label htmlFor="front" style={{fontWeight:"bold"}}>
          Front
          <br />
          <textarea
            name="front"
            id="front"
            rows="4"
            cols="50"
            onChange={handleChange}
            value={formData.front}
          />
        </label>
        <br />
        <label htmlFor="back" style={{fontWeight:"bold"}}>
          Back
          <br />
          <textarea
            name="back"
            id="back"
            rows="4"
            cols="50"
            onChange={handleChange}
            value={formData.back}
          />
        </label>
        <br />
        <button type="button" class="btn btn-secondary" style={{marginRight:"10px"}} onClick={() => history.push(`/decks/${deckId}`)}>
        Done
        </button>
        <button type="submit" class="btn btn-primary">Save</button>
      </form>
    )
};

      export default CardForm;