import React from 'react';

const ROLL_BUTTON = ({ setResults, setTotal, dieToRoll, quantity }) => {

    let numArr = []
// roll a dice function
    const rollDice = () => {
    for (let i = 0; i < quantity; i+=1) {
        const rolledNum = Math.ceil(Math.random() * dieToRoll)
        numArr.push(rolledNum)
        setResults(numArr)
        setTotal(numArr.reduce((prev, curr) => prev + curr))
    }
}

    return (
        <button onClick={rollDice}>Roll!</button>
    );
};

export default ROLL_BUTTON;