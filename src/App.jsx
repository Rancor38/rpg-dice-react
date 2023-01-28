import React, { useEffect, useState } from 'react';
import DICE_BUTTON from './components/DICE_BUTTON';
import QUANTITY_FORM from './components/QUANTITY_FORM';
import ROLL_BUTTON from './components/ROLL_BUTTON';
import SHOW_RESULT from './components/SHOW_RESULT';

const App = () => {

  const [dieToRoll, setDieToRoll] = useState(null)
  const [quantity, setQuantity] = useState(0)
  const [results, setResults] = useState(null)
  const [total, setTotal] = useState(null)

  useEffect(() => {
    console.log(dieToRoll)
    console.log(quantity)
  })

  return (
    <div>
      
      <QUANTITY_FORM dieToRoll={ setDieToRoll } setQuantity={ setQuantity } quantity={ quantity } />
      <DICE_BUTTON sides={ 4 } setDieToRoll={ setDieToRoll } />
      <DICE_BUTTON sides={ 6 } setDieToRoll={ setDieToRoll } />
      <ROLL_BUTTON
        setResults={setResults}
        setTotal={setTotal}
        dieToRoll={dieToRoll}
        quantity={quantity}
      />
      <SHOW_RESULT results ={ results } total={ total } />
    </div>
  );
};

export default App;