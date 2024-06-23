import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { useSelector } from "react-redux"
import { useRef } from "react"
import { toast } from "react-toastify"
export default function CardDrama({ data }) {
  //TODO: improve layout consistency
  //TODO: add buttons for add/remove
  //TODO: add Search functionality
  const titleRef = useRef("")
  const yearRef = useRef("")
  const ratingRef = useRef("")
  const urlRef = useRef("")
  const imgRef = useRef("")
  const genreRef = useRef("")
  const tagRef = useRef("")
  const descriptionRef = useRef("")

  const user = useSelector(state => state.auth.user.data._id)
  async function handleAdd(id) {
    console.log(user)
    const result = await axios.post("http://localhost:3000/finished/dramas", { userId: user, dramaId: id })
    console.log(result.data)
  }
  async function handleEdit(id) {
    try {
      const response = await axios.put(`http://localhost:3000/dramas/`, {
        id: id,
        title: titleRef.current.value || null,
        year: yearRef.current.value || null,
        rating: ratingRef.current.value || null,
        url: urlRef.current.value || null,
        img: imgRef.current.value || null,
        genre: genreRef.current.value || null,
        tag: tagRef.current.value || null,
        description: descriptionRef.current.value || null
      })
      console.log(response.data)
      if (response.data.success == true) {
        console.log("success")
        toast.success("Updated Successfully", { autoClose: 1000 })
      }
    } catch (error) {
      console.log(error)
    }
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
            <button className="font-bold  me-28 border border-sky-600 shadow-lg shadow-sky-500 px-6 py-3 rounded-3xl bg-sky-500 hover:bg-sky-600 text-white" type="button" onClick={() => handleAdd(data._id)}>Add</button>
            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="font-bold  me-28 border border-sky-600 shadow-lg shadow-sky-500 px-6 py-3 rounded-3xl bg-sky-500 hover:bg-sky-600 text-white" variant="outline">Edit Profile</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="title" className="text-right">
                        Title
                      </Label>
                      <Input
                        id="title"
                        ref={titleRef}
                        defaultValue=""
                        placeholder="Leave empty for unchanged"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="year" className="text-right">
                        Year
                      </Label>
                      <Input
                        id="year"
                        ref={yearRef}
                        defaultValue=""
                        placeholder="Leave empty for unchanged"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="rating" className="text-right">
                        Rating
                      </Label>
                      <Input
                        id="rating"
                        ref={ratingRef}
                        defaultValue=""
                        placeholder="Leave empty for unchanged"
                        className="col-span-3"
                      />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="url" className="text-right">
                        URL
                      </Label>
                      <Input
                        id="url"
                        ref={urlRef}
                        defaultValue=""
                        placeholder="Leave empty for unchanged"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="img" className="text-right">
                        Image
                      </Label>
                      <Input
                        id="img"
                        ref={imgRef}
                        defaultValue=""
                        placeholder="Leave empty for unchanged"
                        className="col-span-3"
                      />
                    </div>


                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="genre" className="text-right">
                        Genres
                      </Label>
                      <Input
                        id="genre"
                        ref={genreRef}
                        defaultValue=""
                        placeholder="Leave empty for unchanged"
                        className="col-span-3"
                      />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="tag" className="text-right">
                        Tags
                      </Label>
                      <Input
                        id="tag"
                        ref={tagRef}
                        defaultValue=""
                        placeholder="Leave empty for unchanged"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="description" className="text-right">
                        Description
                      </Label>
                      <Textarea
                        id="description"
                        ref={descriptionRef}
                        defaultValue=""
                        placeholder="Leave empty for unchanged"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="button" onClick={() => handleEdit(data._id)}>Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
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

