import React, { useEffect, useState } from 'react';
import DICE_BUTTON from './components/DICE_BUTTON';
import QUANTITY_FORM from './components/QUANTITY_FORM';

const App = () => {

  const [dieToRoll, setDieToRoll] = useState(null)
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    console.log(dieToRoll)
    console.log(quantity)
  })

  return (
    <div>
      
      <QUANTITY_FORM dieToRoll={ setDieToRoll } setQuantity={ setQuantity } quantity={quantity} />
      <DICE_BUTTON sides={ 4 } dieToRoll={ setDieToRoll } />
      <DICE_BUTTON sides={ 6 } dieToRoll={ setDieToRoll } />
    </div>
  );
};

export default App;