import "./App.css";
import React, { useState } from "react";
import DICE_BUTTON from "./components/DICE_BUTTON";
import QUANTITY_FORM from "./components/QUANTITY_FORM";
import ROLL_BUTTON from "./components/ROLL_BUTTON";
import SHOW_RESULT from "./components/SHOW_RESULT";
import TITLE_BAR from "./components/TITLE_BAR";
import KEYPRESS_MONITOR from "./components/KEYPRESS_MONITOR";
import HELP_BUTTON from "./components/HELP_BUTTON";

const App = () => {
    const [dieToRoll, setDieToRoll] = useState(20);
    const [quantity, setQuantity] = useState(1);
    const [results, setResults] = useState(null);
    const [total, setTotal] = useState(null);

    return (
        <>
                <a className="github-tag" href="https://github.com/Rancor38/rpg-dice-react">
        <img src="https://symbols.getvecta.com/stencil_65/6_github.a79e66470c.svg" alt="github" />
                </a>
            <header className="title">
                 <TITLE_BAR />
            </header>
            <main className="main">
                <section className="quantity-section">
                    <h2>Quantity:</h2>
                    <QUANTITY_FORM
                        dieToRoll={setDieToRoll}
                        setQuantity={setQuantity}
                        setResults={setResults}
                        quantity={quantity}
                    />
                </section>
                <section className="dice-type-section">
                    <h2>Dice Type</h2>
                    <div className="dialpad">
                        <DICE_BUTTON
                            sides={2}
                            dieToRoll={dieToRoll}
                            setDieToRoll={setDieToRoll}
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />
                        <DICE_BUTTON
                            sides={4}
                            dieToRoll={dieToRoll}
                            setDieToRoll={setDieToRoll}
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />
                        <DICE_BUTTON
                            sides={6}
                            dieToRoll={dieToRoll}
                            setDieToRoll={setDieToRoll}
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />
                        <DICE_BUTTON
                            sides={8}
                            dieToRoll={dieToRoll}
                            setDieToRoll={setDieToRoll}
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />
                        <DICE_BUTTON
                            sides={10}
                            dieToRoll={dieToRoll}
                            setDieToRoll={setDieToRoll}
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />
                        <DICE_BUTTON
                            sides={12}
                            dieToRoll={dieToRoll}
                            setDieToRoll={setDieToRoll}
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />
                        <DICE_BUTTON
                            sides={20}
                            dieToRoll={dieToRoll}
                            setDieToRoll={setDieToRoll}
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />
                        <DICE_BUTTON
                            sides={100}
                            dieToRoll={dieToRoll}
                            setDieToRoll={setDieToRoll}
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />
                    </div>
                </section>
                <section className="results-section">
                    <SHOW_RESULT results={results} total={total} />
                </section>
                <section className="roll-section">
                    <ROLL_BUTTON
                        setResults={setResults}
                        setTotal={setTotal}
                        dieToRoll={dieToRoll}
                        quantity={quantity}
                    />
                </section>
            </main>
            <HELP_BUTTON />
            <KEYPRESS_MONITOR
                setResults={setResults}
                setTotal={setTotal}
                dieToRoll={dieToRoll}
                quantity={quantity}
                setQuantity={setQuantity}
            />
        </>
    );
};

export default App;
