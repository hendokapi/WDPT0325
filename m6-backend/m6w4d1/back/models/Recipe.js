import { model, Schema } from 'mongoose';

const commentSchema = new Schema(
    {
        text: {
            type: String,
            maxLenght: 200,
            required: true,
        },
        commenterName: {
            type: String,
            minLenght: 2,
            maxLenght: 20,
            required: true,
        },
        email: {
            type: String,
            required: true, // il campo è obbligatorio
            lowercase: true, // trasforma il testo in minuscole
            trim: true, // toglie spazi bianchi a inizio e fine del testo
            match: [
                /[\w+.]*@\w+\.\w+/, // struttura
                'Email non valida', // messaggio di errore
            ],
        },
    },
    {
        timestamps: true, // aggiunge createdAt e updatedAt
    },
);

const recipeSchema = new Schema(
    {
        title: {
            type: String,
            minLenght: 10,
            maxLength: 50,
            required: true,
        },
        text: {
            type: String,
            maxLenght: 1000,
        },
        cookingTime: {
            type: Number,
            min: 1,
            validate: {
                validator: Number.isInteger,
                message: '{VALUE} is not an integer',
            },
        },
        // by reference
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        tag: [String],
        comments: [commentSchema],
    },
    {
        timestamps: true, // aggiunge createdAt e updatedAt
    },
);

// function mioValidatore(value) {
//     // logica
//     return true;

//     // logica
//     return false;
// }

const Recipe = model('Recipe', recipeSchema);

export default Recipe;
