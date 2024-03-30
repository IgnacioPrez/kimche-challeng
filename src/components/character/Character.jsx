import './character.css'

const Character = ({image,name}) => {
  return (
    <div className="relative shadow-black shadow-2xl">
      <img src={image} alt={name} className="w-60 h-52 rounded-lg"/>
      <p className="absolute bottom-0 translate-y-[-50%] translate-x-[50%] right-[50%] text-white w-full text-center ">{name}</p>
    </div>
  )
}

export default Character
