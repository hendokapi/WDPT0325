# Epi Zafferano API

## Avvio

- installare le dipendenze:

    ```
    npm i
    ```

- copiare il file .env.example in .env e inserire i valori necessari:

    ```
    cp .env.example .env
    ```

    oppure copiarlo e rinominarlo manualmente

- avviare il server di sviluppo:
    ```
    npm run dev
    ```

# Deploy on the cloud

- **_In genere NON usate indirizzi statici nei vostri progetti ma fate uso delle variabili di ambiente_** (che durante lo sviluppo di solito vengono scritte nel file `.env`, mentre in produzione potranno essere inserite anche in altre maniere).

## Backend (su [Render](https://render.com/))

- assicurarsi di non avere nel codice link a localhost ma sostituirli con variabili d'ambiente:

    "http://localhost:5173/login" ---> `${process.env.FRONTEND_HOST}/login`

    "http://localhost:3000/api/v1/google-callback" ---> `${process.env.FRONTEND_HOST}/api/v1/google-callback`

- assicurarsi di avere nel file `.env` e `.env.exaple` la chiave `FRONTEND_HOST`

- Su Render creare un nuovo `Web Service` con queste impostazioni:
    - Root Directory: il percorso alla cartella del backend
    - Build Command: `npm install --legacy-peer-deps` (il flag per evitare un errore di conflitto di dipendenze che capita con alcune librerie)
    - Start Command: `node server.js`
    - Pre-Deploy Command: vuoto
    - Auto-Deploy: `On Commit`

- durante il deploy sistemare i valori delle chiavi nel file `.env` e inserirli direttamente nell'interfaccia del servizio del deploy:
    - `BACKEND_HOST`: l'indirizzo di Render
    - `PORT`: 443
    - `FRONTEND_HOST`: l'inderizzo di Vercel

L'url sarà di questo tipo: https://<nome-progetto>.onrender.com

## Frontend (su [Vercel](https://vercel.com/) o [Netlify](https://www.netlify.com/))

- assicurarsi di non avere nel codice link a localhost ma sostituirli con variabili d'ambiente
  "http://localhost:4000/api/v1/posts" ---> `${import.meta.env.VITE_API_URL}/api/v1/posts`

- aggiungere nel file `.env.local` e `.env.exaple` la chiave `VITE_API_URL`

- nel file `vite.config.js`:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/', // 👈 è importante che sia così per Vercel, oppure ometterlo
});
```

- essendo una SPA bisogna dire a Vercel di servire la nostra app ad ogni rotta creando un file `vercel.json` nella root del frontend:

```json
{
    "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

oppure usare l'hash router <HashRouter> invece del <BrowserRouter>, ma questo richiede anche il cambiamento della variabile `OAUTH_PATH_FRONTEND`

- su Vercel creare un progetto con queste impostazioni:
    - Root Directory: il percorso alla cartella del frontend
    - Framework Preset: Vite
    - Build Command: `npm run build`
    - Output Directory: `dist`
    - Install command: `npm install --legacy-peer-deps`

- durante il deploy sistemare i valori delle chiavi nel file `.env` e inserirli direttamente nell'interfaccia del servizio del deploy:
    - `VITE_API_URL`: l'indirizzo di Render
    - `CI`: `false` (altrimenti anche warning fanno fallire il deploy perchè verranno considerati errori)

L'url sarà di questo tipo: https://<nome-progetto>.vercel.app

## Sistemare la configurazione dell'applicazione su Google (se implementa OAuth)

- Aggiungere alla lista di `Authorized redirect URIs` su [Google](https://console.cloud.google.com/apis/credentials) l'indirizzo del backend fornito da Render
