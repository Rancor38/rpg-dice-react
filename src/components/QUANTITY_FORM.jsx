import React from "react";

const QUANTITY_FORM = ({ quantity, setQuantity, dieToRoll }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.value = null;
    setQuantity(e.target.value);
    e.target[0].value = e.target.value;
    dieToRoll(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Quantity:
        <input type="number" min="1" max="100" onChange={handleChange}></input>
      </label>
      <input type="submit" value="Reset" />
    </form>
  );
};

export default QUANTITY_FORM;