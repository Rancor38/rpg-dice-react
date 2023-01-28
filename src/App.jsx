import "./App.css"
import React, { useState } from 'react';
import DICE_BUTTON from './components/DICE_BUTTON';
import QUANTITY_FORM from './components/QUANTITY_FORM';
import ROLL_BUTTON from './components/ROLL_BUTTON';
import SHOW_RESULT from './components/SHOW_RESULT';
import TITLE_BAR from "./components/TITLE_BAR";

const App = () => {

  const [dieToRoll, setDieToRoll] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [results, setResults] = useState(null)
  const [total, setTotal] = useState(null)

  return (
    <div className="parent">
      <header className="title">
      <TITLE_BAR/>
      </header>
      <main className="main">
        <section className="quantity-section">
        <h2>Quantity:</h2>
        <QUANTITY_FORM dieToRoll={setDieToRoll} setQuantity={setQuantity} quantity={quantity} />
        </section>
        <section className="dice-type-section">
          <h2>Dice Type</h2>
          <div className="dialpad">
      <DICE_BUTTON sides={ 2 } setDieToRoll={ setDieToRoll } />
      <DICE_BUTTON sides={ 4 } setDieToRoll={ setDieToRoll } />
      <DICE_BUTTON sides={ 6 } setDieToRoll={ setDieToRoll } />
      <DICE_BUTTON sides={ 8 } setDieToRoll={ setDieToRoll } />
      <DICE_BUTTON sides={ 10 } setDieToRoll={ setDieToRoll } />
      <DICE_BUTTON sides={ 12 } setDieToRoll={ setDieToRoll } />
      <DICE_BUTTON sides={ 20 } setDieToRoll={ setDieToRoll } />
      <DICE_BUTTON sides={ 100 } setDieToRoll={ setDieToRoll } />
          </div>
        </section>
        <section className="results-section">
      <SHOW_RESULT results ={ results } total={ total } />
        </section>
        <section className="roll-button">
      <ROLL_BUTTON
        setResults={setResults}
        setTotal={setTotal}
        dieToRoll={dieToRoll}
        quantity={quantity}
      />
        </section>
      </main>
    </div>
  );
};

export default App;