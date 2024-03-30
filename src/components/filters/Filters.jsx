

const Filters = ({ filtersReset, setGender, setSpecies, setStatus }) => {
  return (
    <div className="w-[80%] flex p-1  justify-between">
      <select
        name="status"
        className="w-1/4 bg-[#0d1117] text-white rounded-lg border border-white cursor-pointer"
        onChange={(e) => {
          setStatus(e.target.value)
        }}
      >
        <option value="">Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead </option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        name="spacies"
        className="w-1/4 bg-[#0d1117] text-white rounded-lg border border-white  cursor-pointer"
        onChange={(e) => {
          setSpecies(e.target.value)
        }}
      >
        <option value="">Species...</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>
      <select
        name="gender"
        className="w-1/4 bg-[#0d1117] text-white rounded-lg border border-white cursor-pointer"
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="">Gender...</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknow">Unknow</option>
      </select>
      <div className="W-[10%] bg-[#767575] rounded-lg p-1 hover:bg-[#7a7a7a]">
        <button className=" font-semibold text-sm" onClick={filtersReset}>
          Reset filters
        </button>
      </div>
    </div>
  )
}

export default Filters
