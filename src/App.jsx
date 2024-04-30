import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErroMessage";
import Containere from "./components/Containere";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
// to use react fragment we have to import first {import React from "react"}
function App() {
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  // let [textToShow, setTextState] = useState("Food Item Entered by user");
  let [foodItems, setFoodItems] = useState([]);
  // console.log(`current value of text state ${textToShow}`);
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log(`food value entered is ` + newFoodItem);
    }
    // console.log(event);
    // setTextState(event.target.value);
  };
  return (
    <>
      <Containere>
        <h1>Healthy food</h1>

        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        {/* <p>{textToShow}</p> */}
        <FoodItems items={foodItems}></FoodItems>
      </Containere>
    </>
  );
}
export default App;
