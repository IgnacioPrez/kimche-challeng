import SearchIcon from '../../utils/SearchIcon'
// import { useState } from 'react'

const SearchCharacter = ({searchSelected}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const { search } = Object.fromEntries(new window.FormData(e.target))
    if (search) {
      searchSelected({ variables: { page: 1, name: search } })
    }
  }


  return (
    <form className="border border-white w-[80%] flex  justify-between rounded-lg " onSubmit={handleSubmit}>
      <input
        className="bg-transparent w-[90%] outline-none focus:opacity-100 text-white ml-2"
        placeholder="Search character..."
        name="search"
      />
      <button className="w-max border border-red bg-white rounded-r-lg p-[6px]">
        <SearchIcon width={20} height={20} />
      </button>
    </form>
  )
}

export default SearchCharacter
