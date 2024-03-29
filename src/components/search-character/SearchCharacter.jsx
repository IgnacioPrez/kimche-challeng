import SearchIcon from "../../utils/SearchIcon"

const SearchCharacter = () => {
  return (
    <form className="border border-white w-[80%] flex  justify-between rounded-lg ">
        <input className="bg-transparent w-[90%] outline-none focus:opacity-100 text-white ml-2"/>
        <button className="w-max border border-red bg-white rounded-r-lg p-[6px]">
          <SearchIcon width={20} height={20}/>
        </button>
    </form>
  )
}

export default SearchCharacter