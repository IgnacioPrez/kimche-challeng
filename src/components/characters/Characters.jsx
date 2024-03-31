import { useLazyQuery, useQuery } from '@apollo/client'
import { Character } from '../character/Character'
import { RANDOM_CHARACTERS, DATA_CHARACTER } from '../../querys/querys'
import { useState } from 'react'
import { Modal, Pagination, Skeleton } from '../'

const Characters = ({ pageSearch, resultOfSearch, errorSearch, loadingSearch, status, gender, species }) => {
  const [page, setPage] = useState(1)
  const { data, loading, error } = useQuery(RANDOM_CHARACTERS, {
    variables: { page: page || 1, status: status || '', species: species || '', gender: gender || '' },
  })
  const [showModal, setShowModal] = useState(false)
  const [getOneCharacter, dataOfCharacter] = useLazyQuery(DATA_CHARACTER)

  console.log(dataOfCharacter)
  const renderModal = (id) => {
    obtainData(id)
    setShowModal(true)
  }

  const obtainData = async (id) => {
     getOneCharacter({ variables: { id } })
  }

  if (error || errorSearch) return <span className="text-red">Server Error</span>
  return (
    <div className="w-[80%] flex items-center gap-5 justify-center flex-wrap ">
      {resultOfSearch.length > 0
        ? loadingSearch
          ? Array(20)
              .fill(crypto.randomUUID)
              .map((_) => <Skeleton key={crypto.randomUUID()} />)
          : resultOfSearch.map((character) => (
              <Character
                {...character}
                key={character.id}
                renderModal={() => renderModal(character.id)}
              />
            ))
        : loading
        ? Array(20)
            .fill(crypto.randomUUID)
            .map((_) => <Skeleton key={crypto.randomUUID()} />)
        : data.characters.results.map((character) => (
            <Character
              {...character}
              key={character.id}
              renderModal={() =>  renderModal(character.id)}
            />
          ))}
      <Pagination page={page} />
      {showModal && dataOfCharacter.data ? <Modal setShowModal={setShowModal} character={dataOfCharacter.data.character} loading={dataOfCharacter}/> : null}
    </div>
  )
}

export default Characters
