const ErrorMessage = ({ items }) => {
  // let foodItems = ["Dal", "Greenvegetable", "Roti", "Salad", "Milk", "Ghee"];
  return <>{items.length === 0 && <h3>I am still hungry.</h3>}</>;
};
export default ErrorMessage;
