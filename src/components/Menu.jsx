import Pizza from "./Pizza";
let Menu = (props) => {
  let PizzaList = props.pizzaData.map((pizza, index) => {
    return (
      <Pizza
        index={index}
        plusAndMinus={props.plusAndMinus}
        sold={props.sold}
        delete={props.delete}
        key={index}
        {...pizza}
            />
    );
  });
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. {PizzaList.length} creative dishes to choose
        from. All from our stone oven, all organic, all delicious.
      </p>
      <div className="pizzas">{PizzaList}</div>
    </main>
  );
};
export default Menu;
