import { Route, Routes } from "react-router";
import CountryList from "../components/CountryList/CountryList";
import CountryInfo from "../components/Country/CountryInfo";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<CountryList />} />
      <Route path="/:code" element={<CountryInfo />} />
    </Routes>
  );
};

export default AppRoutes;
