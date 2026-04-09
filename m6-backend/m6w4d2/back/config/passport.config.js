import GoogleStategy from 'passport-google-oauth20';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const googleStrategyConfig = new GoogleStategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL:
            process.env.BACKEND_HOST + process.env.GOOGLE_CALLBACK_PATH,
    },

    async function (accessToken, refreshToken, profile, cb) {
        console.log(profile);

        // cerchiamo l'utente nel db
        let user = await User.findOne({ googleId: profile.id });

        // se non esiste lo creiamo (registriamo) in questo momento
        if (!user) {
            user = await User.create({
                firstName: profile._json.given_name,
                lastName: profile._json.family_name,
                email: profile._json.email,
                googleId: profile.id,
                profile: profile._json.picture,
            });
        }

        jwt.sign(
            { userId: user.id }, // id di Mongo
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, jwtToken) => {
                return cb(err, { jwtToken: jwtToken }); // l'oggetto finisce in request.user
            },
        );
    },
);

export default googleStrategyConfig;
