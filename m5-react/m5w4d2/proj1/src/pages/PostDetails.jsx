import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import NotFound from './NotFound';

function PostDetails() {
    const { postId } = useParams();
    const navigate = useNavigate();

    // const [is404, setIs404] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [post, setPost] = useState(null);

    useEffect(() => {
        // setIs404(false);
        setLoading(true);
        setError(false);
        fetch('https://dummyjson.com/posts/' + postId)
            .then((res) => {
                // if (res.status == 404) setIs404(true);
                if (res.status == 404) navigate('/not-found');
                return res.json();
            })
            .then((data) => setPost(data))
            .catch((error) => setError(true))
            .finally(() => setLoading(false));
    }, [postId]);

    // if (is404) return <NotFound />;
    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Errore</h2>;

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    );
}

export default PostDetails;
