import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

function RecipeDetails() {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const params = useParams();

    useEffect(() => {
        setLoading(true);
        setError(false);
        fetch(import.meta.env.VITE_API_URL + '/recipes/' + params.recipeId)
            .then((res) => res.json())
            .then((data) => setRecipe(data))
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <h1>Le nostre ricette</h1>
            {error && <h2>Error while loading</h2>}
            {!error && loading && <h2>Loading...</h2>}
            {!error && !loading && (
                <>
                    <h2>{recipe.name}</h2>
                    <h3>Comments</h3>
                    <ul>
                        {recipe.comments.map((comment) => (
                            <li key={comment.id}>{comment.text}</li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
}

export default RecipeDetails;
