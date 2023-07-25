import React from "react";
import colorNames from "colornames";

const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
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
          onChange={(e) => {
            setColorValue(e.target.value);
            setHexValue(colorNames(e.target.value));
          }}
        />
        <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
          Toggle Text Color
        </button>
      </form>
    </div>
  );
};

export default Input;
