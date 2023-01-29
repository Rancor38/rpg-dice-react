import React from "react";

const SHOW_RESULT = ({ results, total }) => {
    if (!results) {
        return (
            <>
                <h2>Results:</h2>
                <div className="results"></div>
                <h2>Total:</h2>
            </>
        );
    }
    return (
        <>
            <h2>Results:</h2>
            <div className="results">
                {results.map((result, index) => {
                    return <p key={index}>{result},</p>;
                })}
            </div>
            <h2>Total: {total}</h2>
        </>
    );
};

export default SHOW_RESULT;
