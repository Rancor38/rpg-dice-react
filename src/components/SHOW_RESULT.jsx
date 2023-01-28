import React from 'react';

const SHOW_RESULT = ({ results, total }) => {
    if (!results) {
        return (
            <h1> Nada nada</h1>
        )
    }
    return (
        <>
            <div>{results.map((result) => {
                return (
                    <h1>{ result }</h1>
                    )
                })}</div>
            <h1>Total: {total}</h1>        
        </>
        );
};

export default SHOW_RESULT;