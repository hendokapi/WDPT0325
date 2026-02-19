import { useEffect, useState } from 'react';

function Counter() {
    console.log('Counter eseguito');

    const [counter, setCounter] = useState(0); // [ valore; funzione ]
    const [triggeratore, setTriggeratore] = useState(true);

    // senza l'array delle dipendenze viene eseguito
    // ad ogni rendering del componente
    useEffect(() => console.log('vengo renderizzato'));

    // eseguito SOLO al primo montaggio del componente
    useEffect(
        () => console.log('sono stato MONTATO'),
        [] /* array delle dipendenze */,
    );

    // eseguito al montaggio e al cambiamento di una qualsiasi
    // delle variabili di stato elencate nell'array delle dipendenze
    useEffect(
        () => console.log('triggeratore è cambiato'),
        [triggeratore] /* array delle dipendenze */,
    );

    return (
        <>
            <button>inutile</button>
            <h1 id="display">{counter}</h1>
            <button
                id="btn-increment"
                onClick={() => {
                    setCounter(counter + 1);
                    setTriggeratore(!triggeratore);
                }}
            >
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
