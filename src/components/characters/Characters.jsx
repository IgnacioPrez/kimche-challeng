import { useQuery, gql } from '@apollo/client'
import Character from '../character/Character'

// TODO: => character( parameters )

const ALL_RICKS = gql`
  query {
    characters(page: 1) {
      info {
        count
      }
      results {
        id,
        name,
        image
      }
    }
  }
`

const Characters = () => {
  const {data,loading,error} = useQuery(ALL_RICKS)
  if(error)return <span className='text-red'>Server Error</span>
  return(
    <div className='w-[80%] flex items-center gap-5 justify-center flex-wrap '>
      {loading ? <span>loading...</span> : (
        data.characters.results.map((character) => {
          return <Character {...character} key={character.id}/>
        })
      )}
    </div>
  )
}

export default Characters
