import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.router.js';

const PORT = process.env.PORT;

const server = express(); // creato il server base
server.use(morgan('dev'));
server.use(cors()); // serve a risolvere i problemi di CORS quando si collega l'api con il frontend
server.use(express.json()); // serve ad accettare json nel body delle richieste

server.use(userRouter);

// server.use(gestoreDiErrori);

const router = express.Router();

router.get('/', (request, response) => {
    console.log('hai visitato la root');
    response.send({
        saluto: 'ciao',
    });
});

router.get('/posts/:postId', (request, response) => {
    console.log(request.params);
    console.log(request.query);
    const postId = request.params.postId;
    console.log(postId);
    response.send({
        postId: postId,
    });
});

router.post('/', (request, response) => {
    console.log(request.body);
    response.status(404).send({
        message: 'nel body il titolo è: ' + request.body.title,
    });
});

server.use(router);

await mongoose
    .connect(process.env.MONGODB_CONNECTION_URI)
    .then(() => console.log('Database connesso'))
    .catch((err) => console.log(err));

server.listen(PORT, () => {
    console.log(`Server in esecuzione alla porta ${PORT}`);
});
