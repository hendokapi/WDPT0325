import { Router } from 'express';
import Recipe from '../models/Recipe.js';

const router = Router();

router.post('/:recipeId/comments', async (request, response, next) => {
    try {
        const recipe = await Recipe.findById(request.params.recipeId);
        recipe.comments.push(request.body);
        const modifiedRecipe = await recipe.save();
        response.send(modifiedRecipe);
    } catch (error) {
        console.log(error);
        next(400);
    }
});

router.put(
    '/:recipeId/comments/:commentId',
    async (request, response, next) => {
        try {
            const recipe = await Recipe.findById(request.params.recipeId);
            const theComment = recipe.comments.id(request.params.commentId);

            // // se sono più campi da modificare
            // for (let key in request.body) {
            //     theComment[key] = request.body[key];
            // }

            theComment.text = request.body.text;
            const modifiedRecipe = await recipe.save();

            if (!recipe) next(404);
            else response.send(modifiedRecipe);
        } catch (error) {
            console.log(error);
            next(400);
        }
    },
);

router.delete(
    '/:recipeId/comments/:commentId',
    async (request, response, next) => {
        const recipe = await Recipe.findById(request.params.recipeId);
        const theComment = recipe.comments.id(request.params.commentId);

        theComment.deleteOne();

        const modifiedRecipe = await recipe.save();

        response.send(modifiedRecipe);
    },
);

export default router;
