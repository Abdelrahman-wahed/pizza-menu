import React from "react";

const Pizza=(props:{
  index:number,
        plusAndMinus: (index: number, step: number) => void,
        sold: (name: string) => void;
  delete: (name: string) => void;
        key:number,
        
        [key:string]:any
}) => {
  return (
    <div className={props.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={props.photoName} alt="pizza Order" />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
        <button onClick={() => props.delete(props.name)}>Delete</button>
        <button onClick={() => props.sold(props.name)}>Sold Out</button>
        <button onClick={() => props.plusAndMinus(props.index, +1)}>
          Plus
        </button>
        <button onClick={() => props.plusAndMinus(props.index, -1)}>
          minus
        </button>
      </div>
    </div>
  );
};

export default Pizza;
