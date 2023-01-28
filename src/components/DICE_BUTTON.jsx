import React from 'react';

const DICE_BUTTON = ({sides, setDieToRoll}) => {
    return (
        <button onClick={() => setDieToRoll(sides)}>d{sides}</button>
    );
};

export default DICE_BUTTON;