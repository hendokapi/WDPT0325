import { useState } from 'react';
import { users } from '../data/users.js';

function UserList() {
    const [filteredUsers, setFilteredUsers] = useState(users);
    // const [searchText, setSearchText] = useState('');

    const filterUsers = (event) => {
        console.log(event.target.value);
        setFilteredUsers(
            users.filter((user) =>
                user.name
                    .toLowerCase()
                    .includes(event.target.value.toLowerCase()),
            ),
        );
    };

    return (
        <>
            <input type="text" onChange={filterUsers} />
            <ol>
                {filteredUsers.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ol>
        </>
    );
}

export default UserList;
