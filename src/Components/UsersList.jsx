import {useEffect, useState} from 'react';

const UsersList = () => {
    const[users, setUsers] = useState([]);
    const[isLoading, setIsLoading] = useState([]);

    useEffect(() => {
        fetchUserList()
        .then((usersFromApi) => {
            setUsers(usersFromApi);
            setIsLoading(false);
        })
    }, []);

    if(isLoading) return <p>Fetching User List now... please wait...</p>

    return (
        <section>
            {users.map((user) => {
                return (
                <div>
                    <li>
                        key={users.username}
                        value={users.username}
                        {users.username}
                    </li>
                </div>
                )
            })}
        </section>
    )




    return <p>soon to be a users list!</p>
}

export default UsersList;