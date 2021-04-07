export interface Currency {
    code: string;
    name: string;
    symbol: string;
}

export interface Language {
    name: string;
    nativeName: string;
    // eslint-disable-next-line camelcase
    iso639_1: string;
    // eslint-disable-next-line camelcase
    iso639_2: string;
}

export interface RestCountry {
    name: string;
    population: number;
    capital: string;
    region: string;
}

export interface RestCountryExtended extends RestCountry {
    topLevelDomain: Array<string>;
    currencies: Array<Currency>;
    languages: Array<Language>;
    nativeName: string;
    borders: Array<string>;
    subregion: string;
    alpha2Code: string;
}
