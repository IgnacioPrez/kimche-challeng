import { useQuery, gql } from '@apollo/client'
import { Character } from '../character/Character'
import { RANDOM_CHARACTERS } from '../../querys/querys'
import { useState } from 'react'
import { Pagination, Skeleton } from '../'
const Characters = ({ pageSearch, resultOfSearch, errorSearch, loadingSearch, status, gender, species }) => {
  const [page, setPage] = useState(1)
  const { data, loading, error } = useQuery(RANDOM_CHARACTERS, {
    variables: { page: page || 1, status: status || '', species: species || '', gender: gender || '' },
  })



  if (error) return <span className="text-red">Server Error</span>
  return (
    <div className="w-[80%] flex items-center gap-5 justify-center flex-wrap ">
      {resultOfSearch.length > 0
        ? loadingSearch
          ? Array(20)
              .fill(crypto.randomUUID)
              .map((_) => <Skeleton key={crypto.randomUUID()} />)
          : resultOfSearch.map((character) => <Character {...character} key={character.id} />)
        : loading
        ? Array(20)
            .fill(crypto.randomUUID)
            .map((_) => <Skeleton key={crypto.randomUUID()} />)
        : data.characters.results.map((character) => <Character {...character} key={character.id} />)}

      <Pagination page={page} />
    </div>
  )
}

export default Characters
