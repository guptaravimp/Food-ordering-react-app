import style from "./Item.module.css";
// const Item = (props) => {
//   return (
//     <>
//       <li class="list-group-item">{props.foodItem}</li>
//     </>
//   );
// };

// we can also use via destructuring
const Item = ({ foodItem, bought, handleBuyButton }) => {
  // const handlerBuyButtonClicked = (event) => {
  //   console.log(event);
  //   console.log(`${foodItem} being boughted`);
  // };
  return (
    <>
      {/* <li class="list-group-item kg-item">{foodItem}</li> */}
      <li class={`${style["kg-Item"]} list-group-item ${bought && "active"} `}>
        {foodItem}
        {/* <button type="button"  class="btn btn-link"> */}
        <button
          type="button"
          id="btne"
          onClick={handleBuyButton}
          class="btn btn-info"
        >
          Buy
        </button>
      </li>
    </>
  );
};
export default Item;
