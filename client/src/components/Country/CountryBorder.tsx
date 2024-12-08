import { Link } from "react-router"
import { CountryBorders } from "../../types/country"

const CountryBorder: React.FC<{borders: CountryBorders[]}> = ({ borders }) => {
  return (
    <ul>
        {borders.map(border => (
            <li key={border.countryCode}>
                <Link to={`/${border.countryCode}`}>{border.commonName}</Link>
            </li>
        ))}
    </ul>
  )
}

export default CountryBorder