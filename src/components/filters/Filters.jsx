const Filters = () => {
  return (
    <div>
      <select name="status">
        <option value="">Status...</option>
      </select>
      <select name="spacies">
        <option value="">Species...</option>
      </select>
      <select name="gender">
        <option value="">Gender...</option>
      </select>
      <button>Reset filters</button>
    </div>
  )
}

export default Filters
