import Button from 'components/Button';
import PageContainer from 'components/PageContainer';
import { useState } from 'react';
import User from '../../components/User';
import styles from './index.module.css'
import usersData from './users.json'


const Users = () => {
    const [isDarkMode, setIsDarkMode] = useState(true)

    return (
        <PageContainer>
            <div className={`${styles.usersContainer} ${isDarkMode ? styles.darkMode : ""}`}>
                <Button
                    txt={`${isDarkMode ? "🌞" : '🌙'}`}
                    clickleyende={() => {
                        setIsDarkMode(!isDarkMode)
                    }}
                />
                <h1 className={styles.basliq}>Salam. Welcome to Users page</h1>
                <div className={styles.cardContainer}>
                    {
                        usersData.map((user) => {
                            return <User key={user.id} imgSrc={`/img/${user.img}.jpg`} basliq={user.username} description={user.job} />
                        })
                    }
                </div>
            </div>
        </PageContainer>
    )
}

export default Users;