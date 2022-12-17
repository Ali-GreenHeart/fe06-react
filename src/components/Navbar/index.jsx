import styles from './index.module.css'
const Navbar=()=>{
    return (
        <nav className={styles.navbar}>
            <a href="/">Home</a>
            <a href="/counter">Counter</a>
            <a href="/users">Users</a>
            <a href="/about">About</a>
            <a href="/service">Service</a>
        </nav>
    )
}

export default Navbar