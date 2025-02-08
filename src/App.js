import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { useState } from "react";
import pizzaData from "./data";
import "./index.css";
function App() {
  const [order, setOrder] = useState(pizzaData);
  function deleteOrder(name) {
    setOrder((prev) => prev.filter((obj) => obj.name !== name));
  }
  function solder(name) {
    setOrder((prev) =>
      prev.map((order) =>
        order.name === name ? { ...order, soldOut: !order.soldOut } : order
      )
    );
  }
  function plusAndMinus(index,step) {

    setOrder((order) =>
      order.map((pizza, indexoo) =>
        index === indexoo ? { ...pizza, price: pizza.price+step } : pizza
      )
    );
  }

  function DeleteAll() {
    setOrder(order.slice(0, 0));
  }
  return (
    <div className="container">
      <Header />
      <Menu
        plusAndMinus={plusAndMinus}
        sold={solder}
        delete={deleteOrder}
        pizzaData={order}
      />
      <Footer deleteAll={DeleteAll} />
    </div>
  );
}
export default App