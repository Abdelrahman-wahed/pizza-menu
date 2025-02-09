import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { useState } from "react";
import pizzaData from "./data";
import "./index.css";
import { data } from "./components/types/app";
function App() {
  const [order, setOrder] = useState<data[]>(pizzaData);
  function deleteOrder(name: string): void {
    setOrder((prev) => prev.filter((obj) => obj.name !== name));
  }
  function solder(name: string): void {
    setOrder((prev) =>
      prev.map((order) =>
        order.name === name ? { ...order, soldOut: !order.soldOut } : order
      )
    );
  }
  function plusAndMinus(index: number, step: number): void {
    setOrder((order) =>
      order.map((pizza, indexoo) =>
        index === indexoo ? { ...pizza, price: pizza.price + step } : pizza
      )
    );
  }

  function DeleteAll():void {
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
export default App;
