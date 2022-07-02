import {useEffect, useState} from 'react';
import { fetchUserList } from '../Utils/api';



const UsersList = () => {
    const[users, setUsers] = useState({});
    const[isLoading, setIsLoading] = useState([]);

    useEffect(() => {
        fetchUserList()
        .then((usersFromApi) => {
            setUsers(usersFromApi.users);
            setIsLoading(false);
        })
    }, []);
       
    if(isLoading) return <p>Fetching User List now... please wait...</p>

    return (
        <>
        <section >

            {users.map((user) => {
                return (
                <div className="user-list"key={user.username}>                       
                        <p>{user.username}</p>
                        <button className="user-list-image" value={user.username}> 
                        <img src={user.avatar_url} alt="nothing"></img> 
                        </button> 
                       <p>{user.name}</p>
                                       
                </div>
                )
            })}
        </section>
        </>
    )


        }


export default UsersList;