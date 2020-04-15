import React, { useState } from 'react';
import './App.css';

function App() {
  const [donuts, setDonuts] = useState(
    [
      {
        name: "Chocolate Donut",
        batter: "Chocolate",
        toppings: ["Chocolate Frosting", "Sprinkles"]
      },
      {
        name: "Regular Donut",
        batter: "Vanilla",
        toppings: ["Regular Glaze"]
      },
      {
        name: "Mimosa Donut",
        batter: "Champagne",
        toppings: ["Orange Glaze", "Strawberries"]
      }
    ]
  );

  return (
    <div className="App">
      <h1>Cade's Donut Shop</h1>
      <div className="donuts">
        {donuts.map((donut) => {
          return(
          <Donut name={donut.name} batter={donut.batter} >
            {donut.toppings.map(topping => {return <h4>{topping}</h4>})}
          </Donut>  
          )
        })}
      </div>
    </div>
  );
}

function Donut(props) {
  return(
    <div className="donut" >
      <h2>{props.name}</h2>
      <h3>{props.batter} Batter</h3>
      <h3><u>Topping(s)</u></h3>
        {props.children}
    </div>
  )
}

export default App;
