import React from 'react';

const SHOW_RESULT = ({ results, total }) => {
    if (!results) {
        return (
            <>
            <h2>Results:</h2>
            <h2>Total:</h2>
            </>
        )
    }
    return (
        <>
            <div>
                <h2>
                 Results:   
                </h2>
                {results.map((result) => {
                return (
                    <p>{ result },</p>
                    )
                })}</div>
            <h2>Total: {total}</h2>        
        </>
        );
};

export default SHOW_RESULT;