import { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
    const [count, setCount] = useState(typeof value === 'number' ? value : 0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    const reset = () => {
        setCount(0);
    };
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{count}</h2>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>+1</button>

        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};

export default CounterApp;
