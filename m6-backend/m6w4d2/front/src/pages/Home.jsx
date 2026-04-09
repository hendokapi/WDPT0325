import { useEffect, useState } from 'react';
import { Link } from 'react-router';

function Home() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        fetch(import.meta.env.VITE_API_URL + '/recipes')
            .then((res) => res.json())
            .then((data) => setRecipes(data.data))
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <h1>Le nostre ricette</h1>
            {error && <h2>Error while loading</h2>}
            {!error && loading && <h2>Loading...</h2>}
            {!error && !loading && (
                <ul>
                    {recipes.map((recipe) => (
                        <li key={recipe._id}>
                            <Link to={'/recipes/' + recipe._id}>
                                {recipe.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default Home;
