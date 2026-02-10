import React from "react";

const HISTORY_BUTTON = ({ activePanel, setActivePanel }) => {
  const preventEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const isOpen = activePanel === "history";

  const togglePanel = () => {
    setActivePanel("history");
  };

  return (
    <button
      className={isOpen ? "navbar-button active" : "navbar-button"}
      onClick={togglePanel}
      onKeyDown={preventEnter}
    >
      Rolls Log
    </button>
  );
};

const HistoryPanel = ({ rollHistory, hasRecoveryData, attemptRecovery }) => {
  const copyToClipboard = () => {
    if (rollHistory.length === 0) return;
    const text = rollHistory
      .map((roll) => `${roll.quantity}d${roll.dieType}: [${roll.results.join(", ")}] = ${roll.total}`)
      .join("\n");
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="panel-container">
      <h3>Roll History:</h3>
      <ul className="history-list">
        {rollHistory.length === 0 ? (
          <li>No rolls yet. Roll some dice!</li>
        ) : (
          rollHistory.map((roll, index) => (
            <li key={index}>
              {roll.quantity}d{roll.dieType}: [{roll.results.join(", ")}] = {roll.total}
            </li>
          ))
        )}
      </ul>
      <div className="history-buttons">
        {hasRecoveryData && (
          <button className="copy-button" onClick={attemptRecovery}>
            Attempt Recovery
          </button>
        )}
        {rollHistory.length > 0 && (
          <button className="copy-button" onClick={copyToClipboard}>
            Copy
          </button>
        )}
      </div>
    </div>
  );
};

export { HISTORY_BUTTON, HistoryPanel };
