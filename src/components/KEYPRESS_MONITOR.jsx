import React, { useEffect } from "react";
import { diceSound } from "../audio/index";

const KEYPRESS_MONITOR = ({
    setResults,
    setTotal,
    dieToRoll,
    quantity,
    setQuantity,
    setDieToRoll,
    setPressingDie,
    addToHistory,
}) => {
    // Map number keys to dice sides
    const keyToDice = {
        "1": 2,
        "2": 4,
        "3": 6,
        "4": 8,
        "5": 10,
        "6": 12,
        "7": 20,
        "8": 100,
    };

    let numArr = [];
    // roll a dice function
    const rollDice = () => {
        for (let i = 0; i < quantity; i += 1) {
            const rolledNum = Math.ceil(Math.random() * dieToRoll);
            numArr.push(rolledNum);
        }
        const rollTotal = numArr.reduce((prev, curr) => prev + curr);
        setResults([...numArr]);
        setTotal(rollTotal);
        addToHistory(dieToRoll, quantity, [...numArr], rollTotal);
        diceSound.load();
        diceSound.play();
        numArr = [];
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            // enter key will roll the dice
            if (e.key === "Enter") {
                rollDice();
            }
            // Number keys 1-8 for dice selection (keydown = scale up preview)
            if (keyToDice[e.key] && !e.repeat) {
                e.preventDefault();
                setPressingDie(keyToDice[e.key]);
            }
            // shift + 1 = quantity set to 1
            if (e.key === "!") {
                e.preventDefault();
                setQuantity(1);
            }
            // shift + 2 = quantity set to 2
            if (e.key === "@") {
                e.preventDefault();
                setQuantity(2);
            }
            // shift + 3 = quantity set to 3
            if (e.key === "#") {
                e.preventDefault();
                setQuantity(3);
            }
            // shift + 4 = quantity set to 4
            if (e.key === "$") {
                e.preventDefault();
                setQuantity(4);
            }
            // shift + 5 = quantity set to 5
            if (e.key === "%") {
                e.preventDefault();
                setQuantity(5);
            }
            // shift + 6 = quantity set to 6
            if (e.key === "^") {
                e.preventDefault();
                setQuantity(6);
            }
            // shift + 7 = quantity set to 7
            if (e.key === "&") {
                e.preventDefault();
                setQuantity(7);
            }
            // shift + 8 = quantity set to 8
            if (e.key === "*") {
                e.preventDefault();
                setQuantity(8);
            }
            // shift + 9 = quantity set to 9
            if (e.key === "(") {
                e.preventDefault();
                setQuantity(9);
            }
            // shift + 0 = quantity set to 10
            if (e.key === ")") {
                e.preventDefault();
                setQuantity(10);
            }
        };

        const handleKeyUp = (e) => {
            // Number keys 1-8 for dice selection (keyup = select the die)
            if (keyToDice[e.key]) {
                e.preventDefault();
                setDieToRoll(keyToDice[e.key]);
                setPressingDie(null);
            }
        };

        // Listen to the window for key events
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        // Cleanup event listeners
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [dieToRoll, quantity]);

    return <></>;
};

export default KEYPRESS_MONITOR;
