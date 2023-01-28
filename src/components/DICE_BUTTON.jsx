import React from 'react';

const DICE_BUTTON = ({sides, dieToRoll}) => {
    return (
        <button onClick={() => dieToRoll(sides)}>d{sides}</button>
    );
};

export default DICE_BUTTON;