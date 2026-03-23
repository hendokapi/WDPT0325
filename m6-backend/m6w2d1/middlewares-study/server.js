import express from 'express';
import * as mieFunzioni from './exporter.js';
mieFunzioni.grida();
mieFunzioni.saluta();
mieFunzioni.hey();

const server = express();
const routerA = express.Router();
const routerB = express.Router();

routerA.get('/', (request, response, next) => {
    console.log('GET / RouterA');
    response.send('sono la root');
    next();
});

routerA.get('/ciao', (request, response, next) => {
    console.log('GET /ciao RouterA');
    response.send('sono la /ciao');
    next();
});

routerB.get('/sonob', (request, response, next) => {
    console.log('GET /sonob RouterB');
    response.send('sono la /sonob');
    next();
});

server.use(midB);
server.use(midA);
server.use(routerA);
server.use(routerB);
server.use(midErr);
server.use(midC);

server.listen(4000, () => {
    //console.clear();
    console.log('server running on port 4000');
});

// DEFINIZIONE DEI MIDDLEWARES
function midA(request, response, next) {
    console.log('A');
    if (request.query.token) next();
    else next(401);
}

function midB(request, response, next) {
    console.log('B');
    next(500);
}

function midC(request, response, next) {
    console.log('C');
    // response.send('sono C');
    next();
}

function midErr(error, request, response, next) {
    console.log('errore');
    if (error == 401) response.status(401).send('Non hai il token');
    else if (error == 500) response.status(500).send('errore del server');
    next();
}
