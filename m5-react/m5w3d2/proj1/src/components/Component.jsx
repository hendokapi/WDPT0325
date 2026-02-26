import { useEffect, useState } from 'react';

function Component() {
    const [trigger, setTrigger] = useState(true);
    const [jonny, setJonny] = useState(true);
    const [dep1, setDep1] = useState(true);
    const [dep2, setDep2] = useState(true);

    // viene eseguito ad ogni rendering (anche al primo montaggio)
    // useEffect(callback);

    // viene eseguito SOLO al primo montaggio
    // useEffect(callback, []);

    // viene eseguito al primo montaggio e anche ogni volta che cambia il valore di almeno una delle dipendenze
    useEffect(callback, [dep1, dep2]);

    function callback() {
        setTrigger(!trigger);
        console.log('EFFETTO ESEGUITO');
    }
    // const callback = () => {
    //     console.log('EFFETTO ESEGUITO');
    // };

    return (
        <div>
            <h2>
                <button onClick={() => setTrigger(!trigger)}>
                    Cambia stato
                </button>{' '}
                trigger: {trigger + ''}
            </h2>
            <h2>
                <button onClick={() => setDep1(!dep1)}>Cambia stato</button>{' '}
                dep1: {dep1 + ''}
            </h2>
            <h2>
                <button onClick={() => setDep2(!dep2)}>Cambia stato</button>{' '}
                dep2: {dep2 + ''}
            </h2>
            <h2>
                <button onClick={() => setJonny(!jonny)}>Cambia stato</button>{' '}
                jonny: {jonny + ''}
            </h2>
        </div>
    );
}

export default Component;
