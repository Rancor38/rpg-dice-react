import React, { useEffect } from "react";

const KEYPRESS_MONITOR = ({ setResults, setTotal, dieToRoll, quantity, setQuantity }) => {
    let numArr = [];
    // roll a dice function
    const rollDice = () => {
        for (let i = 0; i < quantity; i += 1) {
            const rolledNum = Math.ceil(Math.random() * dieToRoll);
            numArr.push(rolledNum);
            setResults(numArr);
            setTotal(numArr.reduce((prev, curr) => prev + curr));
        }
        numArr = [];
    };

    useEffect(() => {
        // Listen to the window for keydowns
        window.addEventListener("keydown", (e) => {
            // enter key will roll the dice
            if (e.key === "Enter") {
                rollDice();
            }
            // shift + 1 = quantity set to 1
            if (e.key === "!") {
                e.preventDefault();
                setQuantity(1);
            }
            // shift + 2 = quantity set to 1
            if (e.key === "@") {
                e.preventDefault();
                setQuantity(2);
            }
            // shift + 2 = quantity set to 1
            if (e.key === "#") {
                e.preventDefault();
                setQuantity(3);
            }
            // shift + 2 = quantity set to 1
            if (e.key === "$") {
                e.preventDefault();
                setQuantity(4);
            }
            // shift + 5 = quantity set to 1
            if (e.key === "%") {
                e.preventDefault();
                setQuantity(5);
            }
            // shift + 6 = quantity set to 1
            if (e.key === "^") {
                e.preventDefault();
                setQuantity(6);
            }
            // shift + 7 = quantity set to 1
            if (e.key === "&") {
                e.preventDefault();
                setQuantity(7);
            }
            // shift + 8 = quantity set to 1
            if (e.key === "*") {
                e.preventDefault();
                setQuantity(8);
            }
            // shift + 9 = quantity set to 1
            if (e.key === "(") {
                e.preventDefault();
                setQuantity(9);
            }
            // shift + 10 = quantity set to 1
            if (e.key === ")") {
                e.preventDefault();
                setQuantity(10);
            }
            //let the arrow keys navigate through the dice types, setting diceType to the current
        });
    }, [dieToRoll, quantity]);

    return <></>;
};

export default KEYPRESS_MONITOR;
