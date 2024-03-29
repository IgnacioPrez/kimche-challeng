const Filters = () => {
  return (
    <div className="w-[80%] flex p-1  justify-between">
      <select name="status" className="w-1/4 bg-[#0d1117] text-white rounded-lg border border-white cursor-pointer">
        <option value="">Status...</option>
      </select>
      <select name="spacies" className="w-1/4 bg-[#0d1117] text-white rounded-lg border border-white  cursor-pointer">
        <option value="">Species...</option>
      </select>
      <select name="gender" className="w-1/4 bg-[#0d1117] text-white rounded-lg border border-white cursor-pointer">
        <option value="">Gender...</option>
      </select>
      <div className="W-[10%] bg-[#767575] rounded-lg p-1 hover:bg-[#7a7a7a]">
        <button className=" font-semibold text-sm">Reset filters</button>
      </div>
    </div>
  )
}

export default Filters
