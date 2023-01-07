import PageContainer from 'components/PageContainer';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { ActionTypes } from 'reducers/UserReducer';
import { v4 as uuidv4 } from 'uuid';
import User from '../../components/User';
import styles from './index.module.css';
import usersData from './users.json';



const UsersWithRedux = ({ users, dispatch }) => {

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

const mapStoreToProps = (store) => {
    return store;
}

export default connect(mapStoreToProps)(UsersWithRedux);