import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.router.js';
import recipeRouter from './routes/recipe.router.js';
import commentRouter from './routes/comment.router.js';

const PORT = process.env.PORT;

const server = express(); // creato il server base
server.use(morgan('dev'));
server.use(cors()); // serve a risolvere i problemi di CORS quando si collega l'api con il frontend
server.use(express.json()); // serve ad accettare json nel body delle richieste

server.use('/api/v1/users', userRouter);
server.use('/api/v1/recipes', recipeRouter);
server.use('/api/v1/recipes', commentRouter);

// gestore di errori
server.use((errorCode, request, response, next) => {
    if (errorCode == 404) next();
    else if (Number.isInteger(errorCode)) response.status(errorCode).send();
    else response.status(500).send();
});

// gestore della 404
server.use((request, response) => {
    response.status(404).send({ message: 'resource not found' });
});

await mongoose
    .connect(process.env.MONGODB_CONNECTION_URI)
    .then(() => console.log('Database connesso'))
    .catch((err) => console.log(err));

server.listen(PORT, () => {
    console.log(`Server in esecuzione alla porta ${PORT}`);
});
