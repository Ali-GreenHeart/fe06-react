import PageContainer from 'components/PageContainer';
import { useEffect, useReducer, useState } from 'react';
import User from '../../components/User';
import styles from './index.module.css';
import usersData from './users.json';
import { v4 as uuidv4 } from 'uuid';
import UserReducer, { ActionTypes } from 'reducers/UserReducer';



const UsersWithReducer = () => {
    const [users, dispatch] = useReducer(UserReducer, [])

    useEffect(() => {
        dispatch({ type: ActionTypes.loadUsers, data: usersData })
    }, [])

    return (
        <PageContainer>
            <h1 className={styles.basliq}>Salam. Welcome to Users page</h1>
            <button onClick={() => dispatch({ type: ActionTypes.removeUsers })}>remove all users</button>
            <button onClick={() => {
                const newUser = {
                    id: uuidv4(),
                    username: 'ali',
                    job: 'tester',
                    img: 'ali'
                }
                dispatch({ type: ActionTypes.addUser, data: newUser })
            }}>add user</button>
            <button onClick={() => dispatch({ type: ActionTypes.removeFirstUser })}>
                delete user
            </button>
            <div className={styles.cardContainer}>
                {
                    users.map((user) => {
                        return <User key={user.id} imgSrc={`/img/${user.img}.jpg`} basliq={user.username} description={user.job} />
                    })
                }
            </div>
        </PageContainer>
    )
}

export default UsersWithReducer;