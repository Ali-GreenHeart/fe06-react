import styles from './index.module.css'


const User = ({ basliq, description, imgSrc }) => {
    return (
        <div className={styles.card}>
            <img src={imgSrc} alt='ali developer' />
            <h3>{basliq}</h3>
            <p>{description}</p>
        </div>
    )
}


export default User;