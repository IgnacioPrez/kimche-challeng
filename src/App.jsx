import { useEffect, useState } from 'react'
import './app.css'
import { Characters, Filters, Pagination, SearchCharacter } from './components'
import { CHARACTER_SELECTED } from './querys/querys'
import { useLazyQuery } from '@apollo/client'
import Skeleton from './components/skeleton/Skeleton'

// TODO: MANTENER UNA BUSQUEDA POR DEFECTO Y EN OTRA QUERY HACER UNA BUSQUEDA LAZY DEL USUARIO
export default function App() {
  const [pageSearch, setPageSearch] = useState(1)
  const [resultOfSearch, setResultOfSearch] = useState([])
  const [searchSelected, { data, error,loading }] = useLazyQuery(CHARACTER_SELECTED)

  useEffect(() => {
    if(data && data.characters.results){
      setResultOfSearch(data.characters.results)
    }
  }, [data])


  return (
    <>
      <main className=" w-screen flex pt-8 items-center flex-col gap-3">
        <SearchCharacter searchSelected={searchSelected} />
        <Filters />
        <Characters pageSearch={pageSearch} resultOfSearch={resultOfSearch} errorSearch={error} loadingSearch={loading}/>
        <Pagination />
      </main>
    </>
  )
}
