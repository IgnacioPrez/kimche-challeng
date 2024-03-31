import { useEffect, useState } from 'react'
import './app.css'
import { Characters, Filters, SearchCharacter } from './components'
import { CHARACTER_SELECTED } from './querys/querys'
import { useLazyQuery } from '@apollo/client'

export default function App() {
  const [resultOfSearch, setResultOfSearch] = useState([])
  const [searchSelected, { data, error, loading }] = useLazyQuery(CHARACTER_SELECTED)
  const [status, setStatus] = useState('')
  const [species, setSpecies] = useState('')
  const [gender, setGender] = useState('')

  useEffect(() => {
    if (data && data.characters.results) {
      setResultOfSearch(data.characters.results)
    }
  }, [data])

  const filtersReset = () => {
    setGender('')
    setSpecies('')
    setStatus('')
    setResultOfSearch([])
  }

  return (
    <>
      <main className=" w-screen flex pt-8 items-center flex-col gap-3">
        <SearchCharacter searchSelected={searchSelected} status={status} gender={gender} species={species} />
        <Filters setGender={setGender} setSpecies={setSpecies} setStatus={setStatus} filtersReset={filtersReset} />
        <Characters
          resultOfSearch={resultOfSearch}
          errorSearch={error}
          loadingSearch={loading}
          status={status}
          species={species}
          gender={gender}
        />
      </main>
    </>
  )
}
