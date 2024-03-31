import { useLazyQuery, useQuery } from '@apollo/client'
import { Character } from '../character/Character'
import { RANDOM_CHARACTERS, DATA_CHARACTER } from '../../querys/querys'
import { useEffect, useState } from 'react'
import { Modal, Skeleton } from '../'

const Characters = ({ pageSearch, resultOfSearch, errorSearch, loadingSearch, status, gender, species }) => {
  const [page, setPage] = useState(1)
  const { data, loading, error, refetch } = useQuery(RANDOM_CHARACTERS, {
    variables: { page: page || 1, status: status || '', species: species || '', gender: gender || '' },
  })
  const [allCharacters, setAllCharacters] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [getOneCharacter, dataOfCharacter] = useLazyQuery(DATA_CHARACTER)
  
  const renderModal = (id) => {
    obtainData(id)
    setShowModal(true)
  }

  const obtainData = async (id) => {
    getOneCharacter({ variables: { id } })
  }
  useEffect(() => {
    if (data) {
      setAllCharacters(data.characters.results)
    }
  }, [])

  const handleInfiniteScroll = (e) => {
    const isAtBottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight
    if (isAtBottom && page < data.characters.info.pages) {
      setPage(page + 1)
      if (page > 1) {
        refetch({ variables: { page: page , status: status || '', species: species || '', gender: gender || '' } })
        setAllCharacters([...allCharacters, ...data.characters.results])
      }
    }
  }
  console.log(allCharacters)
  if (error || errorSearch) return <span className="text-red-900">Server Error</span>

  return (
    <div
      className="w-[80%] flex items-center gap-5 justify-center flex-wrap min-h-96 overflow-y-auto border border-transparent max-h-[90vh]"
      onScroll={handleInfiniteScroll}
    >
      {resultOfSearch.length > 0
        ? loadingSearch
          ? Array(20)
              .fill(crypto.randomUUID)
              .map((_) => <Skeleton key={crypto.randomUUID()} />)
          : resultOfSearch.map((character) => (
              <Character {...character} key={character.id} renderModal={() => renderModal(character.id)} />
            ))
        : loading
        ? Array(20)
            .fill(crypto.randomUUID)
            .map((_) => <Skeleton key={crypto.randomUUID()} />)
        : allCharacters.map((character) => (
            <Character {...character} key={character.id} renderModal={() => renderModal(character.id)} />
          ))}
      {showModal && dataOfCharacter.data ? (
        <Modal setShowModal={setShowModal} character={dataOfCharacter.data.character} loading={dataOfCharacter} />
      ) : null}
    </div>
  )
}

export default Characters
