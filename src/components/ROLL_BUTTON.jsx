import { diceSound } from "../audio";

const ROLL_BUTTON = ({ setResults, setTotal, dieToRoll, quantity }) => {
    let numArr = [];
    // roll a dice function
    const rollDice = () => {
    if (quantity <=100)
    {
        for (let i = 0; i < quantity; i += 1) {
            const rolledNum = Math.ceil(Math.random() * dieToRoll);
            numArr.push(rolledNum);
            setResults(numArr);
            setTotal(numArr.reduce((prev, curr) => prev + curr));
        }
        diceSound.load();
        diceSound.play();
    }
        if (quantity > 100) {
        alert('Error Quantity Exceeded: Value must be between 1 and 100!')
    }  
    };

    return (
        <button id="roll-button" onClick={rollDice}>
            Roll!
        </button>
    );
};

export default ROLL_BUTTON;
