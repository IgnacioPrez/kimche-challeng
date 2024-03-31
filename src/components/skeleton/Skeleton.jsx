import { ImageIcon } from '../../utils/ImageIcon'

const Skeleton = () => {
  return (
    <div
      role="status"
      className={`flex items-center justify-center h-52  w-60 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700`}
    >
      <ImageIcon />
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Skeleton
