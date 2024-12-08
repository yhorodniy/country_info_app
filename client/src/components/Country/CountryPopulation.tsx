import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from "recharts"


interface PopulationData {
    year: number,
    value: number,
}

interface CountryPopulationProps {
    data: PopulationData[],
}

const CountryPopulation: React.FC<CountryPopulationProps> = ({ data }) => {
  const populationData = data.map(item => ({
    year: item.year,
    population: item.value
  }))

  return (
    <LineChart width={600} height={400} data={populationData}>
        <XAxis dataKey="year" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="population" stroke="#8884d8" />
    </LineChart>
  )
}

export default CountryPopulation