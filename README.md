# Strive Blog

# Index

-   Settimana 1
    -   [Giorno 1](#giorno-1-settimana-1) - setup progetto e CRUD base di `author`
    -   [Giorno 2](#giorno-2-settimana-1) - CRUD base di `post` (e _ricerca posts_)
-   Settimana 2
    -   [Giorno 3](#giorno-3-settimana-2) - _query Mongo NON legate a Strive Blog_ (e _gestione errori_)
    -   [Giorno 4](#giorno-4-settimana-2) - upload immagini (e _invio emails_)
-   Settimana 3
    -   [Giorno 5](#giorno-5-settimana-3) - CRUD `comments` con embedding
    -   [Giorno 6](#giorno-6-settimana-3) - autenticazione con JWT: register, login, logout
-   Settimana 4
    -   [Giorno 7](#giorno-7-settimana-4) - social register e login con Google e lo standard OAuth
    -   [Giorno 8](#giorno-8-settimana-4) - deploy

# Consigli

-   Create una cartella per il progetto, inizializzate la repo e pushatela su GitHub, all'interno create due sottocartelle: `frontend` e `backend`.

-   Impostate da subito correttamente le variabile nel file `.env` e **usate nel codice**, questo semplificherà il deploy finale.

-   **Prima di lanciare comandi nel terminale, controllate in quale cartella si trova.**

# Diagrammi

<img src="./striveBlog.drawio.svg" />

# Giorno 1 (settimana 1)

-   Iniziallizare il progetto (includendo un file `.env`)
-   Visualizzare gli autori del blog (`authors`)

### Struttura risorsa `author`

```
{
    _id
    email
    password
    tokenGoogle
    firstName
    lastName
    birthDate
    avatar
}
```

### Rotte backend

-   GET `/api/v1/authors` _(ritorna la lista degli autori)_
-   GET `/api/v1/authors/:authorId` _(ritorna i dettagli di un singolo autore)_
-   POST `/api/v1/authors` _(Crea un nuovo autore, verrà modificato successivamente con l'aggiunta dell'hash dell password)_
-   PUT `/api/v1/authors/:authorId` _(modifica l'autore con l'id associato)_
-   DELETE `/api/v1/authors/:authorId` _(cancella l'autore con l'id associato)_

### Frontend

-   Impostare la gestione del CORS

    Installare la libreria:

    ```
    npm i cors
    ```

    E in `server.js` aggiungere:

    ```
    import cors from "cors";

    server.use(cors());
    ```

## Giorno 2 (settimana 1)

-   Fare tutte le CRUD per i `posts`
-   Paginare le GET lista di `authors` e `posts`

### Struttura risorsa `post`

```
{
    _id
    category
    title
    cover
    readTime: {
        value
        unit
    }
    author
    content
}
```

### Rotte backend

-   GET `/api/v1/posts` _(aggiungendo il supporto al parametro di ricerca `?title=parola-di-ricerca`, se presente l'endpoint restituisce solo i post che nel titolo contengono la parola di ricerca)_
-   GET `/api/v1/posts/:postId`
-   POST `/api/v1/posts`
-   PUT `/api/v1/posts/:postId`
-   DELETE `/api/v1/posts/:postId`
-   GET `/api/v1/authors/:authorId/posts` _(mostra tutti i post di uno specifico autore)_

### Frontend

-   Fare funzionare il form di creazione di un post
-   Visualizzare la lista dei post in homepage
-   Funzionalità di ricerca post

## Giorno 3 (settimana 2)

-   Set di query su Mongo no legate a Strive Blog
-   _(Aggiungere la gestione degli errori)_

## Giorno 4 (settimana 2)

### Upload immagini

### Invio email

-   Inviare una mail all'autore di un blog post quando viene pubblicato
-   Inviare una mail quando un nuovo autore si registra sulla piattaforma (a chi?)

Inserire le chiavi API di `cloudinary` e `sendgrid` nel file `.env`:

```
CLOUDINARY_API_KEY="key_here"
SENDGRID_API_KEY="key_here"
```

### Rotte backend

-   PATCH `/api/v1/authors/:authorId/avatar`
-   PATCH `/api/v1/posts/:postId/cover`

## Giorno 5 (settimana 3)

-   Aggiungere i commenti con la tecnica dell'`embedding`

### Rotte backend

-   GET `/api/v1/posts/:postId/comments`
-   ~~GET `/api/v1/posts/:postId/comments/:commentId`~~
-   POST `/api/v1/posts/:postId/comments`
-   _(PUT `/api/v1/posts/:postId/comments/:commentId`)_
-   DELETE `/api/v1/posts/:postId/comments/:commentId`

## Giorno 6 (settimana 3)

-   Aggiungere l'autenticazione con JWT
-   proteggere tutti gli endpoint ad eccezione di `/api/v1/login`

### Rotte backend

-   POST `/api/v1/login`
-   POST `/api/v1/logout`
-   GET `/api/v1/me`
-   POST `/api/v1/authors`

### Frontend

-   Creare le pagine per la registrazione e il login
-   Implementare la logica del salvataggio del tonek nel `localStorage` con il login e l'eliminazione del token con il logout
-   Implementare il passaggio del token in tutte le richieste che lo richiedono.

## Giorno 7 (settimana 4)

-   Implementare il social register e login con Google e lo standard OAuth
    -   Installare `passport`
    -   Creare l'app nel proprio account Google
    -   scrivere il codice necessario nel backend

### Rotte backend

...

### Frontend

-   Aggiungere il pulsante Login con Google

## Giorno 8 (settimana 4)

-   Completare tutti i punti precedenti
-   Fare il deploy dell'applicazione:
    -   frontend su [Vercel](https://vercel.com/) oppure [Netlify](https://www.netlify.com/)
    -   backend su [Render](https://render.com/)
    -   CDN immagin su [Cloudinary](https://cloudinary.com/)
    -   servizio email su [SendGrid](https://sendgrid.com/)
