import { useState } from "react";
import "./FoodInput.css";

const FoodInput = ({ handleKeyDown }) => {
  // const handleOnChange = (event) => {
  //   console.log(event.target.value);
  // };

  return (
    <input
      class="inputbutton"
      onKeyDown={handleKeyDown}
      placeholder="Enter the item "
      type="text"
    />
  );
};
export default FoodInput;
