import React, { useEffect } from 'react';

const KEYPRESS_MONITOR = ({ setResults, setTotal, dieToRoll, quantity }) => {

    let numArr = []
    // roll a dice function
    const rollDice = () => {
    for (let i = 0; i < quantity; i+=1) {
        const rolledNum = Math.ceil(Math.random() * dieToRoll)
        numArr.push(rolledNum)
        setResults(numArr)
        setTotal(numArr.reduce((prev, curr) => prev + curr))
        numArr = []
    }
    }

    useEffect(() => {
        // enter key will roll the dice
        window.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            rollDice()
          }
        })
    },[dieToRoll])

    
    return (
        <></>
    );
};

export default KEYPRESS_MONITOR;