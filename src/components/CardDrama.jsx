import axios from "axios"
import { useSelector } from "react-redux"
export default function CardDrama({ data }) {
  //TODO: improve layout consistency
  //TODO: add buttons for add/remove
  //TODO: add Search functionality
  function handleAdd(id) {
    const user = useSelector(state => state.auth.user.user._id)
    axios.post("http://localhost:3000/finsihed/dramas", { userID: user, dramaId: id })
  }
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full mx-auto my-4 border-2 border-black ">
      <div className="w-full md:w-3/12 border-2 border-red-500">
        <img className="w-full border-2 border-red-900" src={data.img} alt="poster" />
      </div>
      <div className="w-full md:w-9/12 px-4 py-4 border-2 border-green-500">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold">{data.title}</h1>
            <p className="mt-2 text-xl"><span className="px-2">{data.year}</span><span className="px-2">{data.rating}</span></p>
          </div>
          <div>
            <button className="font-bold  me-28 border border-sky-600 shadow-lg shadow-sky-500 px-6 py-3 rounded-3xl bg-sky-500 hover:bg-sky-600 text-white" type="button" onClick={() => handleAdd(data._id)}>ADD</button>
          </div>
        </div>
        <p className="mt-2 line-clamp-4">{data.description}</p>
        <h1 className="text-xl font-semibold mt-2">Genres</h1>
        <ul className="flex flex-wrap gap-2 mt-2">
          {data.genres && data.genres.map((genre, index) => <li key={index}>{genre}</li>)}
        </ul>
        <h1 className="text-xl font-semibold mt-2 text-nowrap">Tags</h1>
        <ul className="flex flex-wrap gap-2 mt-2">
          {data.tags && data.tags.map((tag, index) => <li key={index}>{tag}</li>)}
        </ul>
      </div>
    </div>
  )
}

