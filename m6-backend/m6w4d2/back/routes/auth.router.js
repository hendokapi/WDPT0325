import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Router } from 'express';

import User from '../models/User.js';
import passport from 'passport';
import authentication from '../middlewares/authentication.js';

const router = Router();

router.post('/register', async function (request, response) {
    try {
        const passHash = await bcrypt.hash(request.body.password, 10);

        const newUser = await User.create({
            ...request.body,
            password: passHash,
        });
        response.status(201).send(newUser); // TODO: nascondere l'hash
    } catch (error) {
        console.log(error);
        response.status(400).send({
            message: error.message,
        });
    }
});

router.post('/login', async function (request, response) {
    // verificare che l'email esista
    const user = await User.findOne({ email: request.body.email }).select(
        '+password',
    );

    if (!user)
        return response.status(401).send({
            message: 'Wrong credentials',
        });

    // se esiste verificare che la password sia giusta
    try {
        const result = await bcrypt.compare(
            request.body.password,
            user.password,
        );

        if (!result) throw new Error('Wrong password');

        // se tutto ok generare il token JWT
        jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, jwtToken) => {
                if (err)
                    return response
                        .status(500)
                        .send({ message: 'Error generating JWT' });

                // rispondere con il token oppure con l'errore (credenziali sbagliate)
                return response.send({
                    token: jwtToken,
                });
            },
        );
    } catch (error) {
        return response.status(401).send({
            message: 'Wrong credentials',
        });
    }
});

router.get(
    '/login-google',
    passport.authenticate('google', { scope: ['profile', 'email'] }),
);

router.get(
    '/callback-google',
    passport.authenticate('google', { session: false }),
    function (request, response) {
        console.log('here');
        response.redirect(
            process.env.FRONTEND_HOST +
                process.env.GOOGLE_FRONTEND_PATH +
                '?jwt=' +
                request.user.jwtToken,
        );
    },
);

// dati del profilo dell'utente loggato
router.get('/me', authentication, function (request, response) {
    response.send(request.authUser);
});

export default router;
