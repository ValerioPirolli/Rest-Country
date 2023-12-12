export type stateData = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: Record<string, string>;
  };
  tld: string[];
  currencies: Record<
    string,
    {
      name: string;
      symbol: string;
    }
  >;
  capital: string[];
  region: string;
  subregion: string;
  languages: Record<string, string>;
  borders: string[];
  population: number;
};
