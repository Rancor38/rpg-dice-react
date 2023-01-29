import React, { useState } from "react";

const HELP_BUTTON = () => {
    const [buttonPress, setButtonPress] = useState(false);

    if (buttonPress === true) {
        return (
            <>
                <button
                    onClick={() => {
                        setButtonPress(false);
                    }}
                >
                    Toggle Help
                </button>
                <div>
                    <h3>General Use:</h3>
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
                    <h3>Hotkeys:</h3>
                    <li>
                        Press "shift" + "4" to set the quantity of dice to 4.
                    </li>
                    <li>
                        Press "enter" at any time to roll the selected quantity
                        and type of dice.
                    </li>
                </div>
            </>
        );
    }
    return (
        <button
            className="help-button"
            onClick={() => {
                setButtonPress(true);
            }}
        >
            Toggle Help
        </button>
    );
};

export default HELP_BUTTON;
