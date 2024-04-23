// memo is a higher-order component (HOC) memorizes the rendering of a functional component
// It prevents a functional component from re-rendering if it's props haven't changed
// It's is perticularly useful when you have components that are rendering with the same props
// but dont need to update when those props changes

import React, { memo } from 'react';

const GenerateRandomNumbers = memo(({ randomNumber, generateRandomNumber }) => {
    console.log('Generate random number component rendered');
    return (
        <div>
            <h2>Random Number: {randomNumber}</h2>
            <button onClick={generateRandomNumber}>Generate random number</button>
        </div>
    );
});

export default GenerateRandomNumbers;
