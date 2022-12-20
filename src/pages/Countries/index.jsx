import axios from 'axios'
import Button from 'components/Button'
import PageContainer from 'components/PageContainer'
import { useState } from 'react'
import styles from './index.module.css'

const BASE_URL = ''

const Countries = () => {
    const [isDarkMode, setIsDarkMode] = useState(true)
    const [countryName, setCountryName] = useState('')

    return (
        <>
            <div className={`${styles.usersContainer} ${isDarkMode ? styles.darkMode : ""}`}>
                <Button
                    txt={`${isDarkMode ? "🌞" : '🌙'}`}
                    clickleyende={() => {
                        setIsDarkMode(!isDarkMode)
                    }}
                />
                <h1 className={styles.basliq}>Salam. Welcome to Countries page</h1>

                <div>

                    <input placeholder='search a country!' value={countryName} type="text" onChange={(ev) => {
                        setCountryName(ev.target.value)
                    }} />
                    <Button txt="axtar" clickleyende={() => {
                        console.log(countryName)
                        axios.get(`https://restcountries.com/v2/name/${countryName}`).then(({ data }) => {
                            console.log(data[0])
                        })
                        setCountryName('')
                    }} />
                </div>

            </div>
        </>
    )
}


export default Countries