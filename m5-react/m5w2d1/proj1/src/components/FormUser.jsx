import { useState } from 'react';

function FormUser() {
    const [text, setText] = useState('gigi');

    return (
        <>
            <input
                type="text"
                onChange={(event) => setText(event.target.value)}
                value={text}
            />
            <h2>Testo: {text}</h2>
        </>
    );
}

export default FormUser;
