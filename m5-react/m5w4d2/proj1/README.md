# Installare React Testing Library su un progetto React creato con Vite

**Se il progetto è stato installato con `create-react-app` NON serve fare questi passi (anche se aggiornare le librerie sarebbe utile per non avere messaggi di deprecazione)**

- Installare le dipendenze

    ```
    npm i -D jest @testing-library/react @types/jest ts-node @testing-library/jest-dom jest-environment-jsdom @testing-library/dom @testing-library/user-event @babel/preset-env @babel/preset-react jest-fetch-mock identity-obj-proxy
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
    import userEvent from '@testing-library/user-event';
    import { render, screen } from '@testing-library/react';
    import { describe, it, expect, jest } from '@jest/globals'; // it o test sono equivalenti

    // import { MemoryRouter } from 'react-router'; // se il componente usa cose da react router

    // describe è un contenitore facoltativo
    describe('Home tests', () => {
        // test 1
        it('renders the fetched posts', async () => {
            // resto del codice del test
        });

        // test 2
        it('renders the fetched posts', async () => {
            // resto del codice del test
        });
    }
    ```

    Esempi:

    ```jsx
    import '@testing-library/jest-dom';
    import { MemoryRouter } from 'react-router';
    import { describe, it, expect, jest } from '@jest/globals';
    import { render, screen } from '@testing-library/react';

    import Home from './Home.jsx';

    // crea un contenitore di test (facoltativo)
    describe('Home tests', () => {
        // it o test crea gli effettivi test
        it('renders the fetched posts', async () => {
            // mock della fetch
            globalThis.fetch = jest.fn(() =>
                Promise.resolve({
                    status: 200,
                    ok: true,
                    json: () =>
                        Promise.resolve(
                            // qui va il body di una risposta tipo
                            {
                                posts: [
                                    { id: 1, title: 'Post 1' },
                                    { id: 2, title: 'Post 2' },
                                    { id: 3, title: 'Post 3' },
                                ],
                            },
                        ),
                }),
            );

            render(
                // mettere il componente in un MemoryRouter se utilizza
                // componenti da react router come il Link
                <MemoryRouter>
                    <Home />
                </MemoryRouter>,
            );

            const postsLinks = await screen.findAllByRole('link');
            expect(postsLinks).toHaveLength(3);
        });
    });
    ```

    ```jsx
    import '@testing-library/jest-dom';
    import userEvent from '@testing-library/user-event';
    import { describe, it, expect } from '@jest/globals';
    import { render, screen } from '@testing-library/react';

    import Home from './Home.jsx';

    describe('Home tests', () => {
        it('image inside card is clickable', async () => {
            render(<Home />);
            // assegnare l'id agli elementi con data-testid="post-card"
            const cards = await screen.findAllByTestId('post-card');
            const card = cards[0];
            const img = within(card).getByRole('img');
            await userEvent.click(img);
            expect(img).toBeInTheDocument();
        });
    });
    ```

- Lanciare i test lanciando il comando `npm run test` (oppure le scorciatoie `npm test` o `npm t`) oppure avviarli in modalità watch (vengono eseguiti automaticamente ad ogni modifica apportata ai file) con il comando `npm run test:watch`
