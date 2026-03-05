# Installare React Testing Library su un progetto React creato con Vite

**Se i progetto è stato installato con `create-react-app` NON serve fare questi passi (anche se aggiornare le librerie sarebbe utile per non avere messaggi di deprecazione)**

- Installare le dipendenze

    ```
    npm i -D jest @testing-library/react @types/jest ts-node @testing-library/jest-dom jest-environment-jsdom @testing-library/dom @testing-library/user-event @babel/preset-env @babel/preset-react jest-fetch-mock
    ```

- Aggingere in `package.json` le righe `"test": "npx --node-options=\"--experimental-vm-modules\" jest src",` e `"test:watch": "npx --node-options=\"--experimental-vm-modules\" jest src --watch"` nella sezione scripts:
    ```
    "scripts": {
            "dev": "vite",
            "build": "vite build",
            "lint": "eslint .",
            "preview": "vite preview",
            "test": "npx --node-options=\"--experimental-vm-modules\" jest src",
            "test:watch": "npx --node-options=\"--experimental-vm-modules\" jest src --watch"
        },
    ```
- Aprire il file `vite.config.js` e aggiungere la riga `testEnvironment: 'jsdom',`:

    ```
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    // https://vite.dev/config/
    export default defineConfig({
        testEnvironment: 'jsdom', // AGGIUNGERE QUESTA RIGA
        plugins: [react()],
    });
    ```

- Creare nella root del progetto il file `.babelrc` e scriverci dentro:

    ```
    {
        "presets": [
            "@babel/preset-env",
            ["@babel/preset-react", { "runtime": "automatic" }]
        ]
    }
    ```

- Creare nella root del progetto il file `jest.config.cjs` e scriverci dentro:

    ```
    module.exports = {
        testEnvironment: 'jsdom',
        moduleNameMapper: {
            '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        },
    };
    ```

- Scrivere i file di test normalmente, assicurandosi di importare questo in cima a ciascun file di test:

    ```
    import '@testing-library/jest-dom';
    import { render, screen } from '@testing-library/react';

    // resto del codice del test
    ```

- Lanciare i test lanciando il comando `npm run test` oppure `npm run test:watch`
