import { Router } from 'express';
import User from '../models/User.js';
import uploadCloudinary from '../middlewares/uploadCloudinary.js';
import mailer from '../helpers/mailer.js';

const router = Router();

router.get('/', async function (request, response) {
    // TODO: aggiungere paginazione
    const users = await User.find({});
    response.send(users);
});

router.get('/:userId', async (request, response, next) => {
    let theUser;
    try {
        theUser = await User.findById(request.params.userId);
    } catch (error) {
        theUser = null;
    }
    if (!theUser) response.status(404).send({ message: 'Not found' });
    else response.send(theUser);
});

router.post(
    '/',
    uploadCloudinary.single('profile'), // middleware per gestire la multipart/form-data
    async (request, response, next) => {
        // console.log(request.file);
        try {
            const newUser = await User.create({
                ...request.body,
                profile: request.file.path,
            });
            response.send(newUser);
            await mailer.sendMail({
                from: 'h.kapidani@gmail.com',
                to: [request.body.email],
                subject: 'Benvenuto',
                text: `Benvenuto tra noi, ${request.body.firstName}`,
                html: `<p>Benvenuto tra noi, <b>${request.body.firstName}</b></p>`,
            });
        } catch (error) {
            console.log(error);
            next(400);
        }
    },
);

router.put('/:userId', async (request, response, next) => {
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

router.delete('/:userId', async (request, response, next) => {
    const userDeleted = await User.findByIdAndDelete(request.params.userId);
    response.send({ message: 'user deleted' });
});

export default router;
