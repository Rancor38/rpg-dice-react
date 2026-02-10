import React from "react";

const HELP_BUTTON = ({ activePanel, setActivePanel }) => {
    const preventEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    };

    const isOpen = activePanel === "help";

    const togglePanel = () => {
        setActivePanel("help");
    };

    return (
        <button
            className={isOpen ? "navbar-button active" : "navbar-button"}
            onClick={togglePanel}
            onKeyDown={preventEnter}
        >
            HELP
        </button>
    );
};

const HelpPanel = () => (
    <div className="panel-container">
        <h3>General Use:</h3>
        <ul>
            <li>
                Select and input desired quantities of dice, from 1-100,
                in the quantity tab.
            </li>
            <li>
                Reset will reset the selected dice type and quantity to
                their default values.
            </li>
            <li>
                Currently selected dice have a white highlight and no
                shadow.
            </li>
            <li>Doubleclicking a die (or doubletaping on mobile) will add +1 to the current quantity</li>
        </ul>
        <h3>Hotkeys:</h3>
        <ul>
            <li>
                Press "1" through "8" to select a die type (1=d2, 2=d4, 3=d6, 4=d8, 5=d10, 6=d12, 7=d20, 8=d100).
            </li>
            <li>
                Press "shift" + "4" to set the quantity of dice to 4.
            </li>
            <li>
                Press "enter" at any time to roll the selected quantity
                and type of dice.
            </li>
        </ul>
    </div>
);

export { HELP_BUTTON, HelpPanel };
