import Item from "./Item";
import "./Item.css";
import { useState } from "react";
const FoodItems = ({ items }) => {
  // let foodItems = ["Dal", "Greenvegetable", "Roti", "Salad", "Milk", "Ghee"];
  let [activeItems, setActiveItems] = useState([]);
  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };
  return (
    <>
      <ul class="list-group">
        {items.map((item) => (
          // <li key={item} class="list-group-item">
          //   {item}
          // </li>
          <Item
            key={item}
            foodItem={item}
            bought={activeItems.includes(item)}
            handleBuyButton={(event) => onBuyButton(item, event)}
          ></Item>
        ))}
      </ul>
    </>
  );
};
export default FoodItems;
