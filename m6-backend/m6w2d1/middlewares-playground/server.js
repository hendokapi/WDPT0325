import express from 'express';
import middlewareA from './middlewares/middlewareA.js';
import middlewareBSelector from './middlewares/middlewareBSelector.js';
import middlewareC from './middlewares/middlewareC.js';
import middlewareD from './middlewares/middlewareD.js';
import middlewareRouterUsers from './middlewares/middlewareRouterUsers.js';
import middlewareRouterPosts from './middlewares/middlewareRouterPosts.js';
import middlewareForRoute from './middlewares/middlewareForRoute.js';
import middlewareWithError from './middlewares/middlewareWithError.js';

const server = express();

/*************   ROUTERS   *************/
const routerUsers = express.Router();
const routerPosts = express.Router();

routerUsers.get('/', middlewareForRoute, (req, res, next) => {
    res.send('indice users');
    next();
});

routerUsers.get('/:userId', (req, res, next) => {
    res.send('singolo user');
    next();
});

routerPosts.get('/', (req, res, next) => {
    res.send('indice posts');
    next();
});

routerPosts.get('/:postId', (req, res, next) => {
    res.send('singolo post');
    next();
});
/*************   END ROUTERS   *************/

// Questo è un middleware
server.use((req, res, next) => {
    console.log();
    console.log(req.originalUrl);
    next();
});

// anche questo è un middleware e verrà eseguito quando sarà il momento
// quindi il nome della funzione va scritto SENZA PARENTESI
server.use(middlewareA);

// server.use(middlewareWithError);

// middlewareSelector NON è un middleware ma una funzione che restituisce un middleware
server.use(middlewareBSelector(2));

// routers
server.use('/users', middlewareRouterUsers, routerUsers);
server.use('/posts', middlewareRouterPosts, routerPosts);

// middleware gestore di errori, deve avere 4 parametri
server.use((error, req, res, next) => {
    // console.log(error);
    console.log('GESTORE DI ERRORI 1');
    // throw new Error(); // questo errore verrà catturato dal gestore di errori 2
    next();
});

server.use(middlewareC);
// server.use(middlewareWithError);
server.use(middlewareD);

server.use((error, req, res, next) => {
    // console.log(error);
    console.log('GESTORE DI ERRORI 2');
    // res.status(500).send();
});

server.listen(4000, () => {
    console.clear();
    console.log('server avviato');
});
