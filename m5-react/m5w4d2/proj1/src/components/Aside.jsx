import { Link } from 'react-router-dom';

function Aside() {
    return (
        <aside>
            <h2>Aside</h2>
            <ul>
                <li>
                    <Link to={'/posts/1'}>Post 1</Link>
                </li>
                <li>
                    <Link to={'/posts/2'}>Post 2</Link>
                </li>
                <li>
                    <Link to={'/posts/3'}>Post 3</Link>
                </li>
            </ul>
        </aside>
    );
}

export default Aside;
