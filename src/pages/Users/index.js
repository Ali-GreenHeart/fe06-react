import PageContainer from 'components/PageContainer';
import User from '../../components/User';
import styles from './index.module.css';
import usersData from './users.json';


const Users = () => {

    return (
        <PageContainer>
                <h1 className={styles.basliq}>Salam. Welcome to Users page</h1>
                <div className={styles.cardContainer}>
                    {
                        usersData.map((user) => {
                            return <User key={user.id} imgSrc={`/img/${user.img}.jpg`} basliq={user.username} description={user.job} />
                        })
                    }
                </div>
        </PageContainer>
    )
}

export default Users;