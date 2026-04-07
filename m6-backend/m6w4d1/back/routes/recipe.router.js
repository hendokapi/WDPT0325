import { Router } from 'express';
import Recipe from '../models/Recipe.js';

const router = new Router();

router.get('/', async function (request, response) {
    const page = parseInt(request.query.page || 1);
    let perPage = parseInt(request.query.perPage || 5);
    if (perPage > 10) perPage = 10;

    const totalRecipes = await Recipe.countDocuments();
    const totalPages = Math.ceil(totalRecipes / perPage);

    const recipes = await Recipe.find({})
        .sort({ title: 1 })
        .skip(perPage * (page - 1))
        .limit(perPage);

    response.send({
        page,
        perPage,
        totalPages,
        totalResources: totalRecipes,
        data: recipes,
    });
});

router.get('/:receipeId', async function (request, response) {
    const theReceipe = await Recipe.findById(request.params.receipeId).populate(
        'user',
    );
    response.send(theReceipe);
});

export default router;
