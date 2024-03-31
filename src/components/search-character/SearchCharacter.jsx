import { useEffect, useState } from 'react'
import SearchIcon from '../../utils/SearchIcon'

const SearchCharacter = ({ searchSelected, status, gender, species }) => {
  const [search, setSearch] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (search) {
      searchSelected({ variables: { page: 1, name: search } })
    }
  }
  useEffect(() => {
    searchSelected({ variables: { page: 1, name: search, status: status, gender: gender, species: species } })
  }, [status, gender, species])

  return (
    <form className="border border-white w-[80%] flex  justify-between rounded-lg " onSubmit={handleSubmit}>
      <input
        className="bg-transparent w-[90%] outline-none focus:opacity-100 text-white ml-2"
        placeholder="Search character..."
        name="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="w-max border border-red bg-white rounded-r-lg p-[6px]">
        <SearchIcon width={20} height={20} />
      </button>
    </form>
  )
}

export default SearchCharacter
