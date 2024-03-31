export default function Modal({ setShowModal, character }) {
  const { name, gender, image, location, origin, species, status } = character

  console.log(character)
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className=" rounded-lg shadow-lg  flex flex-col w-full bg-[#1a1a1a]">
            {/*header*/}
            <div className="flex rounded-t">
              <button
                className="ml-auto bg-transparent p-1 text-white  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className=" text-white font-bold h-4 w-5 text-lg block outline-none focus:outline-none">X</span>
              </button>
            </div>
            {/*body*/}
            <div className="relative  flex w-[450px] h-[200px]  p-2">
              <img src={image} alt={name} className="w-1/2 h-full object-cover" />
              <div className="w-1/2 flex justify-center items-center flex-col text-white gap-[2px]">
                <h3 className="w-full text-center font-bold text-lg text-white">{name}</h3>
                <p className="text-sm">
                  <span className="text-[#53BAF9]">Status</span>: {status}
                </p>
                <p className="text-sm">
                  <span className="text-[#53BAF9]">Gender</span>: {gender}
                </p>
                <p className="text-sm">
                  <span className="text-[#53BAF9]">Species</span>: {species}
                </p>
                <p className="text-sm">
                  <span className="text-[#53BAF9]">Type</span>:
                 {" "}{character.type ? character.type : 'Unknown'}
                </p>
                <p className="text-sm">
                  <span className="text-[#53BAF9]">Location</span>: {location.name}
                </p>
                <p className="text-sm">
                  <span className="text-[#53BAF9]">Origin</span>: {origin.name}
                </p>
                <p className="text-sm">
                  <span className="text-[#53BAF9]">Dimension</span>: {origin.dimension ? origin.dimension : 'Unknouwn'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}
