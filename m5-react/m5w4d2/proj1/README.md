# Installare React Testing Library su un progetto React creato con Vite

**Se i progetto è stato installato con `create-react-app` NON serve fare questi passi (anche se aggiornare le librerie sarebbe utile per non avere messaggi di deprecazione)**

- Installare le dipendenze

    ```
    npm i -D jest @testing-library/react @types/jest ts-node @testing-library/jest-dom jest-environment-jsdom @testing-library/dom @testing-library/user-event @babel/preset-env @babel/preset-react jest-fetch-mock
    ```

- Aggingere in `package.json` le righe `"npx --node-options=\"--experimental-vm-modules --no-warnings\" jest src",` e `"npx --node-options=\"--experimental-vm-modules --no-warnings\" jest src --watch"` nella sezione scripts:
    ```json
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "lint": "eslint .",
        "preview": "vite preview",
        "test": "npx --node-options=\"--experimental-vm-modules --no-warnings\" jest src",
        "test:watch": "npx --node-options=\"--experimental-vm-modules --no-warnings\" jest src --watch"
    },
    ```
- Aprire il file `vite.config.js` e aggiungere la riga `testEnvironment: 'jsdom',`:

    ```js
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    // https://vite.dev/config/
    export default defineConfig({
        testEnvironment: 'jsdom', // AGGIUNGERE QUESTA RIGA
        plugins: [react()],
    });
    ```

- Creare nella root del progetto il file `.babelrc` e scriverci dentro:

    ```json
    {
        "presets": [
            "@babel/preset-env",
            ["@babel/preset-react", { "runtime": "automatic" }]
        ]
    }
    ```

- Creare nella root del progetto il file `setupTests.js` e scriverci dentro:

    ```js
    import { TextEncoder, TextDecoder } from 'util';

    globalThis.TextEncoder = TextEncoder;
    globalThis.TextDecoder = TextDecoder;
    ```

- Creare nella root del progetto il file `jest.config.cjs` e scriverci dentro:

    ```js
    module.exports = {
        testEnvironment: 'jsdom',
        moduleNameMapper: {
            '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        },
        setupFiles: ['./setupTests.js'],
    };
    ```

- Scrivere i file di test normalmente, assicurandosi di importare questo in cima a ciascun file di test:

    ```js
    import '@testing-library/jest-dom';
    import { render, screen } from '@testing-library/react';
    import { it, expect, describe, jest } from '@jest/globals';

    // import { MemoryRouter } from 'react-router'; // se il componente usa il router

    // resto del codice del test
    ```

- Lanciare i test lanciando il comando `npm run test` oppure `npm run test:watch`
