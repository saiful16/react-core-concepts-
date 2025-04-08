import { Suspense } from 'react';
import './App.css'
import Countries from './components/countries/Countries'

const fetchCountries = async () => {
  const countriesList = await fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
  return countriesList;
}



function App() {
  const allCountries = fetchCountries();

  return (
    <>
      <h1>Countries and Information</h1>
      <Suspense fallback={<h1>Countries are loading</h1>}>
        <Countries allCountries={allCountries}></Countries>
      </Suspense>

    </>
  )
}

export default App
