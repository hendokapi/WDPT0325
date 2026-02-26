import { useEffect, useState } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('sto contando');
            setSeconds((oldSec) => oldSec + 1);
        }, 1000);

        return () => {
            console.log('SONO STATO SMONTATO');
            clearInterval(intervalId);
        };
    }, []);

    return <h1>{seconds}</h1>;
}

export default Timer;
