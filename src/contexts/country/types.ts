export type IQueryCountries = {
  countries: ICountries[],
  continents: IContinents[]
}

export type ICountryContext = {
  countries: ICountries[],
  setCountries: React.Dispatch<React.SetStateAction<ICountries[]>>
  continents: IContinents[],
  setContinents: React.Dispatch<React.SetStateAction<IContinents[]>>
  loading: Boolean
}

export type ICountryProvider = {
  children: React.ReactNode
}

export type ICountries = {
  name: string,
  currency: string,
  phone: string,
}

export type IContinents = {
  name: string,
}
