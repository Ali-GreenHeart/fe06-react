import axios from 'axios'
import Button from 'components/Button'
import PageContainer from 'components/PageContainer'
import { useState } from 'react'
import styles from './index.module.css'

const BASE_URL = ''

const Countries = () => {
    const [countryName, setCountryName] = useState('')
    const [country, setCountry] = useState({
        currencies: []
    })

    return (
        <PageContainer>
            <h1 className={styles.basliq}>Salam. Welcome to Countries page</h1>

            <div>

                <input
                    placeholder='search a country!'
                    type="text"
                    value={countryName}
                    onChange={(ev) => {
                        setCountryName(ev.target.value)
                    }} />
                <Button txt="axtar" clickleyende={() => {
                    axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
                        .then(({ data }) => {
                            setCountry(data[0])
                        })
                }} />
            </div>
            <div>
                <h1>Olke adi: {country.name?.common}</h1>
                <h3>Paytaxt: {country.capital}</h3>
                <h3>Bayragi: <img style={{ width: 60, height: 40 }} src={country.flags?.png} alt="" /> </h3>
                <h3>Musteqilliyi: <div style={{ display: 'inline-block', width: 20, height: 20, borderRadius: '50%', backgroundColor: country.independent ? 'green' : 'red' }}></div></h3>
                <h3>Mezenne: {Object.keys(country.currencies)[0]}</h3>
            </div>
        </PageContainer>
    )
}


export default Countries