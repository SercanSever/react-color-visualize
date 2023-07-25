import React from "react";

const Input = ({ colorValue, setColorValue }) => {
  return (
    <div className="container">
      <form onSubmit={(e) => e.preventDefault()} className="input-container">
        <h2>Add Color Name:</h2>
        <input
          autoFocus
          type="text"
          placeholder="Add color name"
          required
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Input;
