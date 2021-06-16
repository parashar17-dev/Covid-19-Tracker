import React, { useReducer } from 'react';
import CovidReducer from './CovidReducer';
import CovidContext from './CovidContext';

const GithubState = (props) => {
   const initialState = {
      countries: [],
      country: 'worldwide',
      countryInfo: {},
      tableData: [],
      casesType: 'cases',
      center: [20.5937, 78.9629],
   };

   const [state, dispatch] = useReducer(CovidReducer, initialState);

   // Initialising the Coutry to worldwide when App loads first time:
   const InitialCountryInfo = async () => {
      await fetch('https://disease.sh/v3/covid-19/all')
         .then((response) => response.json())
         .then((data) => {
            dispatch({
               type: 'SET_COUNTRY_INFO',
               payload: data,
            });
         });
   };

   // Sorting the data on the number of cases for all countries
   const sortData = (data) => {
      const sortedData = [...data];

      return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
   };

   // Getting all the countries data from the api request:
   const getCountries = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
         .then((response) => response.json())
         .then((data) => {
            const countries = data.map((country) => ({
               name: country.country,
               value: country.countryInfo.iso2,
            }));

            const SortedData = sortData(data);
            dispatch({
               type: 'SET_TABLE_DATA',
               payload: SortedData,
            });
            dispatch({
               type: 'SET_COUNTRIES',
               payload: countries,
            });
         });
   };

   // Changing the country to the country clicked and also the info:
   const changeCountry = async (event) => {
      const countryCode = event.target.value;

      const url =
         countryCode === 'worldwide'
            ? 'https://disease.sh/v3/covid-19/all'
            : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
      await fetch(url)
         .then((response) => response.json())
         .then((data) => {
            dispatch({
               type: 'SET_COUNTRY',
               payload: countryCode,
            });
            dispatch({
               type: 'SET_COUNTRY_INFO',
               payload: data,
            });
            if (countryCode === 'worldwide') {
               dispatch({
                  type: 'SET_MAP_CENTER',
                  payload: [20.5937, 78.9629],
               });
            } else
               dispatch({
                  type: 'SET_MAP_CENTER',
                  payload: [data.countryInfo.lat, data.countryInfo.long],
               });
         });
   };

   const setCasesType = (types) => {
      dispatch({
         type: 'SET_CASE_TYPES',
         payload: types,
      });
   };

   return (
      <CovidContext.Provider
         value={{
            country: state.country,
            countries: state.countries,
            countryInfo: state.countryInfo,
            tableData: state.tableData,
            center: state.center,
            casesType: state.casesType,
            InitialCountryInfo,
            getCountries,
            changeCountry,
            setCasesType,
         }}
      >
         {props.children}
      </CovidContext.Provider>
   );
};
export default GithubState;
