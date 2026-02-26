import { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);

    function increment() {
        // setCounter(counter + 2); // incrementa di 2 correttamente

        // con la callback accumula i cambiamenti allo stato
        setCounter((oldCounter) => oldCounter + 15);
        setCounter((oldCounter) => oldCounter + 15);
        setCounter((oldCounter) => oldCounter + 20);
        setCounter((oldCounter) => oldCounter + 50);
        setCounter((oldCounter) => oldCounter + (oldCounter * 5) / 100);

        // senza callback vale solo l'ultimo cambiamento allo stato
        // setCounter(counter + 18);
        // setCounter(counter + 15);
        // setCounter(counter + 1);
        // setCounter(counter + 1);
        // setCounter(counter + 18);
    }

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={increment}>Incrementa</button>
        </>
    );
}

export default Counter;
