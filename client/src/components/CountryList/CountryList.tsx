import { useEffect, useState } from "react"
import { Link } from "react-router"
import { CountryListItem } from "../../types/country"
import { apiRequest } from "../../service/apiService"

const CountryList: React.FC = () => {
    const [ countries, setCountries ] = useState<CountryListItem[]>([])

    useEffect(() => {
        apiRequest<CountryListItem[]>(
            "GET",
            "availible",
            setCountries
        )
    }, [])

  return (
    <section>
        <h1>Availible countries</h1>
        <ul>
            {countries && countries.map(country => {
                return (
                    <li key={country.countryCode}>
                        <Link to={`/${country.countryCode}`}>{country.name}</Link>
                    </li>
                )
            })}
        </ul>
    </section>
  )
}

export default CountryList