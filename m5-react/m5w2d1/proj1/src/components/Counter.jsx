import { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(50); // [ valore; funzione ]

    return (
        <>
            <h1 id="display">{counter}</h1>
            <button id="btn-increment" onClick={() => setCounter(counter + 1)}>
                Incrementa
            </button>
            <button id="btn-increment" onClick={() => setCounter(counter - 1)}>
                Decrementa
            </button>
            <button id="btn-increment" onClick={() => setCounter(counter * 10)}>
                x 10
            </button>
            <button
                id="btn-increment"
                onClick={() => setCounter(counter * counter)}
            >
                ^ 2
            </button>
        </>
    );
}

export default Counter;
