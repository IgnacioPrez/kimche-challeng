
const Pagination = () => {
  return (
    <div className="w-screen p-1">
        <div className="flex items-center justify-center w-full  gap-4 p-1">
            <button className="bg-white rounded-sm text-sm w-11">Prev</button>
            <p className="text-white">Page: 2 / 42</p>
            <button className="bg-white rounded-sm text-sm w-11">Next</button>
        </div>
    </div>
  )
}

export default Pagination