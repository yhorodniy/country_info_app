export interface CountryListItem {
    countryCode: string,
    name: string
}

export interface CountryBorders {
    countryCode: string,
    commonName: string,
}

export interface Country {
    borders: CountryBorders[],
    commonName: string,
}