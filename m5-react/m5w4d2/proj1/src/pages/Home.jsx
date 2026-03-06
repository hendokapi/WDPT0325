import { useEffect, useState } from 'react';
import { Link } from 'react-router';

function Home() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError(false);
        fetch('https://dummyjson.com/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data.posts))
            .catch((error) => setError(true))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Errore</h2>;

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <Link to={'/posts/' + post.id}>{post.title}</Link>
                </li>
            ))}
        </ul>
    );
}

export default Home;
