import React from 'react';

const DICE_BUTTON = ({ sides, dieToRoll, setDieToRoll }) => { 

    if (dieToRoll === sides) {
        return (
            <button className='currentDie' onClick={() => setDieToRoll(sides)}>d{sides}</button>
        )
    }
    return (
        <button id={`d${sides}`} onClick={() => setDieToRoll(sides)}>d{sides}</button>
    );
};

export default DICE_BUTTON;