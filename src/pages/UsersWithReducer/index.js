import PageContainer from 'components/PageContainer';
import { useEffect, useReducer, useState } from 'react';
import User from '../../components/User';
import styles from './index.module.css';
import usersData from './users.json';
import { v4 as uuidv4 } from 'uuid';


const reducer = (store, action) => {
    if (action.type === 'load_users') {
        return [...action.data]   // 
    } else if (action.type === 'remove_users') {
        return []
    } else if (action.type === 'add_user') {
        return [...store, action.data]
    } else if (action.type === 'remove_first_user') {
        return store.slice(1, store.length)
    }
}

const UsersWithReducer = () => {
    const [users, dispatch] = useReducer(reducer, [])


    useEffect(() => {
        dispatch({ type: 'load_users', data: usersData })
    }, [])

    return (
        <PageContainer>
            <h1 className={styles.basliq}>Salam. Welcome to Users page</h1>
            <button onClick={() => {
                dispatch({ type: 'remove_users' })
            }}>remove all users</button>
            <button onClick={() => {
                const username = 'ali'
                const job = 'tester'
                const img = 'ali'
                const id = uuidv4()
                dispatch({ type: 'add_user', data: { username, job, img, id } })
            }}>add user</button>
            <button onClick={() => {
                dispatch({ type: 'remove_first_user' })
            }}>
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