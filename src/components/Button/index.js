import styles from "./index.module.css"

const Button = ({ clickleyende, txt }) => {
    return (
        <button
            onClick={clickleyende}
            className={styles.btn}>{txt}
        </button>
    )
}

export default Button;