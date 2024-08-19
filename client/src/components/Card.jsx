import { download } from '../assets'
import { downloadImage } from '../utils'

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg group transition-transform transform hover:scale-105 hover:shadow-xl">
      <img className="w-full h-auto object-cover" src={photo} alt={prompt} />
      <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-gray-800 text-base mb-4">{prompt}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">{name}</span>
          <button
            type="button"
            onClick={() => downloadImage(_id, photo)}
            className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-700 transition-colors"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
