import { model, Schema } from 'mongoose';

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: String,
        email: {
            type: String,
            required: true, // il campo è obbligatorio
            unique: true, // verifica che il valore non sia già presente nel database
            lowercase: true, // trasforma il testo in minuscole
            trim: true, // toglie spazi bianchi a inizio e fine del testo
            match: [
                /[\w+.]*@\w+\.\w+/, // struttura
                'Email non valida', // messaggio di errore
            ],
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        birthDate: {
            type: Date,
            min: '1930-01-01',
            max: Date.now,
        },
        profile: String,
        password: {
            type: String,
            select: false, // di default non mostra l'hash nelle select
        },
    },
    {
        timestamps: true, // aggiunge createdAt e updatedAt
    },
);

const User = model('User', userSchema);

export default User;
