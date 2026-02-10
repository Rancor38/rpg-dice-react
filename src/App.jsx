import "./App.css";
import React, { useState, useEffect } from "react";
import DICE_BUTTON from "./components/DICE_BUTTON";
import QUANTITY_FORM from "./components/QUANTITY_FORM";
import ROLL_BUTTON from "./components/ROLL_BUTTON";
import SHOW_RESULT from "./components/SHOW_RESULT";
import TITLE_BAR from "./components/TITLE_BAR";
import KEYPRESS_MONITOR from "./components/KEYPRESS_MONITOR";
import { HELP_BUTTON, HelpPanel } from "./components/HELP_BUTTON";
import { HISTORY_BUTTON, HistoryPanel } from "./components/HISTORY_BUTTON";

const App = () => {
    const [dieToRoll, setDieToRoll] = useState(20);
    const [quantity, setQuantity] = useState(1);
    const [results, setResults] = useState(null);
    const [total, setTotal] = useState(null);
    const [pressingDie, setPressingDie] = useState(null);
    const [rollHistory, setRollHistory] = useState([]);
    const [activePanel, setActivePanel] = useState("history");
    const [hasRecoveryData, setHasRecoveryData] = useState(false);

    // Check for recovery data on mount
    useEffect(() => {
        const savedHistory = localStorage.getItem("rollHistory");
        if (savedHistory) {
            setHasRecoveryData(true);
        }
    }, []);

    // Save history to localStorage whenever it changes
    useEffect(() => {
        if (rollHistory.length > 0) {
            localStorage.setItem("rollHistory", JSON.stringify(rollHistory));
        }
    }, [rollHistory]);

    const addToHistory = (dieType, qty, rollResults, rollTotal) => {
        // If this is the first roll of a new session, clear old recovery data
        if (rollHistory.length === 0 && hasRecoveryData) {
            localStorage.removeItem("rollHistory");
            setHasRecoveryData(false);
        }
        setRollHistory(prev => [...prev, {
            dieType,
            quantity: qty,
            results: rollResults,
            total: rollTotal
        }]);
    };

    const attemptRecovery = () => {
        const savedHistory = localStorage.getItem("rollHistory");
        if (savedHistory) {
            try {
                const parsed = JSON.parse(savedHistory);
                setRollHistory(parsed);
                setHasRecoveryData(false);
            } catch (e) {
                console.error("Failed to recover history", e);
            }
        }
    };

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
                            pressingDie={pressingDie}
                        />
                        <DICE_BUTTON
                            sides={4}
                            dieToRoll={dieToRoll}
                            setDieToRoll={setDieToRoll}
                            quantity={quantity}
                            setQuantity={setQuantity}
                            pressingDie={pressingDie}
                        />
                        <DICE_BUTTON
                            sides={6}
                            dieToRoll={dieToRoll}
                            setDieToRoll={setDieToRoll}
                            quantity={quantity}
                            setQuantity={setQuantity}
                            pressingDie={pressingDie}
                        />
                        <DICE_BUTTON
                            sides={8}
                            dieToRoll={dieToRoll}
                            setDieToRoll={setDieToRoll}
                            quantity={quantity}
                            setQuantity={setQuantity}
                            pressingDie={pressingDie}
                        />
                        <DICE_BUTTON
                            sides={10}
                            dieToRoll={dieToRoll}
                            setDieToRoll={setDieToRoll}
                            quantity={quantity}
                            setQuantity={setQuantity}
                            pressingDie={pressingDie}
                        />
                        <DICE_BUTTON
                            sides={12}
                            dieToRoll={dieToRoll}
                            setDieToRoll={setDieToRoll}
                            quantity={quantity}
                            setQuantity={setQuantity}
                            pressingDie={pressingDie}
                        />
                        <DICE_BUTTON
                            sides={20}
                            dieToRoll={dieToRoll}
                            setDieToRoll={setDieToRoll}
                            quantity={quantity}
                            setQuantity={setQuantity}
                            pressingDie={pressingDie}
                        />
                        <DICE_BUTTON
                            sides={100}
                            dieToRoll={dieToRoll}
                            setDieToRoll={setDieToRoll}
                            quantity={quantity}
                            setQuantity={setQuantity}
                            pressingDie={pressingDie}
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
                        addToHistory={addToHistory}
                    />
                </section>
            </main>
            <nav className="bottom-navbar">
                <div className="navbar-buttons">
                    <HISTORY_BUTTON activePanel={activePanel} setActivePanel={setActivePanel} />
                    <HELP_BUTTON activePanel={activePanel} setActivePanel={setActivePanel} />
                </div>
                <div className="panel-area">
                    {activePanel === "help" && <HelpPanel />}
                    {activePanel === "history" && (
                        <HistoryPanel
                            rollHistory={rollHistory}
                            hasRecoveryData={hasRecoveryData && rollHistory.length === 0}
                            attemptRecovery={attemptRecovery}
                        />
                    )}
                </div>
            </nav>
            <KEYPRESS_MONITOR
                setResults={setResults}
                setTotal={setTotal}
                dieToRoll={dieToRoll}
                quantity={quantity}
                setQuantity={setQuantity}
                setDieToRoll={setDieToRoll}
                setPressingDie={setPressingDie}
                addToHistory={addToHistory}
            />
        </>
    );
};

export default App;
