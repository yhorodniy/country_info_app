import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { Country } from "../../types/country";
import { Flag } from "../../types/flag";
import { Population } from "../../types/population";
import { apiRequest } from "../../service/apiService";
import styles from "./CountryInfo.module.scss"
import CountryBorder from "./CountryBorder";
import CountryPopulation from "./CountryPopulation";

interface CountryService {
    countryInfo: Country,
    flag: { data: Flag },
    population: { data: { populationCounts: Population[] } }
}

const CountryInfo: React.FC = () => {
    const { code } = useParams<{ code: string}>();
    const [ countryInfo, setCountryInfo ] = useState<Country | null>(null);
    const [ flag, setFlag ] = useState<Flag | null>(null);
    const [ population, setPopulation ] = useState<Population[] | null>(null);
    const [ showBorder, setShowBorder ] = useState<boolean>(false);

    const dataHandler = (data: CountryService) => {
        const { countryInfo, flag, population } = data
        setCountryInfo(countryInfo);
        setFlag(flag.data);
        setPopulation(population.data.populationCounts);
    };

    useEffect(() => {
        apiRequest("GET", `info/${code}`, dataHandler)
    }, [code])

    if (!countryInfo || !flag || !population) return <div>Loading...</div>

    return (
        <>
            <div className={styles.countryInfo}>
                <h1>{countryInfo.commonName}</h1>
                <img
                    src = {flag?.flag}
                    alt = {flag?.name}
                    title = {flag?.name}
                    width = "70" />
            </div>
            <button onClick = {() => setShowBorder(!showBorder)}>Border country</button>
            {showBorder && <CountryBorder borders = {countryInfo.borders} />}
            <CountryPopulation data = {population}/>
        </>
    )
}

export default CountryInfo
