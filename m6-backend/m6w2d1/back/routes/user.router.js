import { Router } from 'express';
import User from '../models/User.js';

const router = Router();

router.get('/users', async function (request, response) {
    // TODO: aggiungere paginazione
    const users = await User.find({});
    response.send(users);
});

router.get('/users/:userId', async (request, response, next) => {
    const theUser = await User.findById(request.params.userId);
    if (!theUser) response.status(404).send({ message: 'Not found' });
    else response.send(theUser);
});

router.post('/users', async (request, response, next) => {
    try {
        const newUser = await User.create(request.body);
        response.send(newUser);
    } catch (error) {
        console.log(error);
        next(400);
    }
});

router.put('/users/:userId', async (request, response, next) => {
    try {
        const userModified = await User.findByIdAndUpdate(
            request.params.userId,
            request.body,
            { new: true }, // per restituire i dati modificati e non quelli originali
        );
        if (!userModified) next(404);
        else response.send(userModified);
    } catch (error) {
        console.log(error);
        next(400);
    }
});

router.delete('/users/:userId', async (request, response, next) => {
    const userDeleted = await User.findByIdAndDelete(request.params.userId);
    response.send({ message: 'user deleted' });
});

export default router;
