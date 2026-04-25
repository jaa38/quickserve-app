import React, { createContext, useState, ReactNode } from 'react';
import { Country } from '../types/country';

type CountryContextType = {
  country: Country;
  setCountry: (country: Country) => void;
};

export const CountryContext = createContext<CountryContextType | null>(null);

const defaultCountry: Country = {
  name: 'Nigeria',
  code: 'NG',
  dialCode: '+234',
};

export const CountryProvider = ({ children }: { children: ReactNode }) => {
  const [country, setCountry] = useState<Country>(defaultCountry);

  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {children}
    </CountryContext.Provider>
  );
};