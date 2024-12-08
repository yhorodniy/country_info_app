const axios = require('axios');

exports.availableCountries = async (req, res) => {
    try {
        const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
}

exports.countryInfo = async (req, res) => {
    const { code } = req.params;
    
    try {
        const countryResponce = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${code}`);
        const populationResponce = await axios.post(`https://countriesnow.space/api/v0.1/countries/population`,
            {country: countryResponce.data.commonName}
        )
        const flagResponce = await axios.post(`https://countriesnow.space/api/v0.1/countries/flag/images`, {"iso2": code})

        res.status(200).json({
            countryInfo: countryResponce.data,
            population: populationResponce.data,
            flag: flagResponce.data
        });
    } catch (error) {
        res.status(404).json({ message: 'Country not found' });
    }
}