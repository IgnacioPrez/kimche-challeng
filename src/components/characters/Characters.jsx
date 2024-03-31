import { useLazyQuery, useQuery } from '@apollo/client'
import { Character } from '../character/Character'
import { RANDOM_CHARACTERS, DATA_CHARACTER, loadMoreCharacters } from '../../querys/querys'
import { useState } from 'react'
import { Modal, Skeleton } from '../'

const Characters = ({
  resultOfSearch,
  errorSearch,
  status,
  gender,
  species,
  loadingSearch,
  dataOfSearch,
  searchMore,
}) => {
  const { data, error, fetchMore, loading } = useQuery(RANDOM_CHARACTERS, {
    variables: { page: 1, status: status || '', species: species || '', gender: gender || '' },
  })
  const [showModal, setShowModal] = useState(false)
  const [getSearchMatches, dataOfCharacter] = useLazyQuery(DATA_CHARACTER)

  const renderModal = (id) => {
    obtainData(id)
    setShowModal(true)
  }

  const obtainData = async (id) => {
    getSearchMatches({ variables: { id } })
  }
  const handleInfiniteScroll = (e) => {
    const isAtBottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight
    if (isAtBottom) {
      if (resultOfSearch.length > 0) {
        loadMoreCharacters(searchMore, dataOfSearch)
      } else {
        loadMoreCharacters(fetchMore, data)
      }
    }
  }

  if (error || errorSearch) return <span className="text-red-900">Server Error</span>

  return (
    <div
      className="w-[80%] flex items-center gap-5 justify-center flex-wrap min-h-[80vh] max-h-[80vh] overflow-y-auto"
      onScroll={handleInfiniteScroll}
    >
      {loading || loadingSearch
        ? Array(20)
            .fill(crypto.randomUUID)
            .map((_) => <Skeleton key={crypto.randomUUID()} />)
        : data && data.characters.results && resultOfSearch.length <= 0
        ? data.characters.results.map((character) => (
            <Character {...character} key={character.id} renderModal={() => renderModal(character.id)} />
          ))
        : resultOfSearch.map((character) => (
            <Character {...character} key={character.id} renderModal={() => renderModal(character.id)} />
          ))}
      {showModal && dataOfCharacter.data ? (
        <Modal setShowModal={setShowModal} character={dataOfCharacter.data.character} loading={dataOfCharacter} />
      ) : null}
    </div>
  )
}

export default Characters
