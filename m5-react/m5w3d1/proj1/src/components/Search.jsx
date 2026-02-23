function Search({ term }) {
    return (
        <input
            type="text"
            value={term[0]}
            onChange={(event) => term[1](event.target.value)}
        />
    );
}

export default Search;
