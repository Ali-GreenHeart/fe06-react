import { useState } from "react"
import Button from "../Button"
import styles from "./index.module.css"

const Counter = () => {
    const [count, setCount] = useState(0)
    const [isDarkMode, setIsDarkMode] = useState(true)
    
    return (
        <div style={{ height: '100vh' }} className={isDarkMode ? styles.darkMode : ""}>
            <h1>{count}</h1>
            <Button
                txt="+"
                clickleyende={() => {
                    setCount(count + 1)
                }} />
            <Button
                txt="-"
                clickleyende={() => {
                    setCount(count - 1)
                }}
            />
            <Button
                txt="0"
                clickleyende={() => {
                    setCount(0)
                }}
            />
            <Button
                txt="special"
                clickleyende={() => {
                    const eded = +prompt('ededi daxil edin: ')
                    setCount(eded)
                }}
            />
            <Button
                txt="console"
                clickleyende={() => {
                    console.log(count)
                }}
            />
            <Button
                txt={`${isDarkMode ? "🌞" : '🌙'}`}
                clickleyende={() => {
                    setIsDarkMode(!isDarkMode)
                }}
            />
        </div>
    )
}


export default Counter;