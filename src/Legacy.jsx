import './App.css'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
  //quantities
const q1 = document.querySelector('#one')
const q2 = document.querySelector('#two')
const q3 = document.querySelector('#three')
const q4 = document.querySelector('#four')
const q5 = document.querySelector('#five')
const q6 = document.querySelector('#six')
const q7 = document.querySelector('#seven')
const q8 = document.querySelector('#eight')
const q9 = document.querySelector('#nine')
const q10 = document.querySelector('#ten')
const currentDiceQ = document.querySelector('#currentDiceQ')

// //dice type
const d2 = document.querySelector('#d2')
const d4 = document.querySelector('#d4')
const d6 = document.querySelector('#d6')
const d8 = document.querySelector('#d8')
const d10 = document.querySelector('#d10')
const d12= document.querySelector('#d12')
const d20= document.querySelector('#d20')
const d100 = document.querySelector('#d100')

// results and total

let result = document.getElementById('result')
let total = document.getElementById('total')

// //roll and reset and resetQ
const roll = document.querySelector('#roll')
const reset = document.querySelector('#reset')
const resetQ = document.querySelector('#resetQ')

// //event listeners
q1.addEventListener("click", () => {selectQuantity(1)})
q2.addEventListener("click", () => {selectQuantity(2)})
q3.addEventListener("click", () => {selectQuantity(3)})
q4.addEventListener("click", () => {selectQuantity(4)})
q5.addEventListener("click", () => {selectQuantity(5)})
q6.addEventListener("click", () => {selectQuantity(6)})
q7.addEventListener("click", () => {selectQuantity(7)})
q8.addEventListener("click", () => {selectQuantity(8)})
q9.addEventListener("click", () => {selectQuantity(9)})
q10.addEventListener("click", () => {selectQuantity(10)})


d2.addEventListener('click', () => {selectDice(2)})
d4.addEventListener('click', () => {selectDice(4)})
d6.addEventListener('click', () => {selectDice(6)})
d8.addEventListener('click', () => {selectDice(8)})
d10.addEventListener('click', () => {selectDice(10)})
d12.addEventListener('click', () => {selectDice(12)})
d20.addEventListener('click', () => {selectDice(20)})
d100.addEventListener('click', () => {selectDice(100)})

roll.addEventListener('click', () => {rollDice(diceType, quantity)})
reset.addEventListener('click', () => {resetDice()})
resetQ.addEventListener('click', () => { resetQuantity() })

// the type of dice
let diceType = 0;
// selectDice Function
const selectDice = (num) => {
    diceType = num
    if (quantity === 0) {
        selectQuantity(1)
    }
    return diceType
} 
// the quantity of dice
let quantity = 0;
// selectQuantity
const selectQuantity = (q) => {
    quantity += q
    return (quantity) && (currentDiceQ.innerText = quantity)
}

// all numbers rolled
let rolledNumArr = []

// roll a dice function
const rollDice = (diceType, quantity) => {
    resetDice()
    for (let i = 0; i < quantity; i+=1) {
        const rolledNum = Math.ceil(Math.random() * diceType)
        rolledNumArr.push(rolledNum)
        result.textContent = rolledNumArr
    }
    totalFunction()
}
// resetDice function
const resetDice = () => {
    if (document.getElementsByClassName("sticker")) {
    }
    return (rolledNumArr = []) && (result.innerText = rolledNumArr) && (total.innerText = null)
}
//  resetQ
const resetQuantity = () => {
    return (quantity = 0), (currentDiceQ.innerText = quantity)
}

//add up all dice 
const totalFunction = () => {
    total.innerText = rolledNumArr.reduce((prev, curr) => prev + curr);
}
}, [])
  
  return (
    <div className="App">
      <div className="parent">
    <div className="title-bar div1">
        <h1 className="">RPG-DICE-ROLLER</h1>
    </div>
    <section className="div2">
        <h2> Dice Quantity</h2>
        <div className="pad">
            <button type="button" className="btn btn-primary" id="one">+1</button>
            <button type="button" className="btn btn-primary" id="two">+2</button>
            <button type="button" className="btn btn-primary" id="three">+3</button>
            <button type="button" className="btn btn-primary" id="four">+4</button>
            <button type="button" className="btn btn-primary" id="five">+5</button>
            <button type="button" className="btn btn-primary" id="six">+6</button>
            <button type="button" className="btn btn-primary" id="seven">+7</button>
            <button type="button" className="btn btn-primary" id="eight">+8</button>
            <button type="button" className="btn btn-primary" id="nine">+9</button>
            <button type="button" className="btn btn-primary" id="ten">+10</button>
            </div>  
            <button type="button" className="btn btn-info" id="resetQ">Reset Quantity</button> 
    </section>
    <section className="div3"> 
    <h2>Current Dice Quantity:</h2>
    <h2 id="currentDiceQ">0</h2>
    </section>
    <section className="div4 dice">
        <h2>Die Type</h2>
        <div className="pad">
            <button type="button" className="btn btn-success" id="d2">d2</button>
            <button type="button" className="btn btn-success" id="d4">d4</button>
            <button type="button" className="btn btn-success" id="d6">d6</button>
            <button type="button" className="btn btn-success" id="d8">d8</button>
            <button type="button" className="btn btn-success" id="d10">d10</button>
            <button type="button" className="btn btn-success" id="d12">d12</button>
            <button type="button" className="btn btn-success" id="d20">d20</button>
            <button type="button" className="btn btn-success" id="d100">d100</button>
            </div>
            <section className=" roll-reset">
            <button type="button" className="btn btn-info" id="roll">Roll</button>
            <button type="button" className="btn btn-info" id="reset">Reset</button>
        </section>
        </section>
        <main className="div5">
            <section className="results">
                <h2>Results:</h2>
                <h2 id="result"></h2>
            </section>
            <section className="total">
                <h2>Total:</h2>
                <h2 id="total"></h2>
            </section>
        </main>

</div>
    </div>
  );
}

export default App;
