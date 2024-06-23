import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import CardDrama from "../components/CardDrama"
import axios from "axios"
import { useState, useEffect } from "react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Button } from "@/components/ui/button"
import { useSelector } from "react-redux"
export default function DramasPage() {
  const [dramas, setDramas] = useState([])
  const [flag, setFlag] = useState("all")
  const user = useSelector(state => state?.auth?.user?.data?._id)
  console.log(dramas)
  const [currentPage, setCurrentPage] = useState(1)
  async function loadData() {
    try {
      if (flag === "all") {
        loadAllData()
      } else if (flag === "watched") {
        loadWatched()
      } else if (flag === "unwatched") {
        loadUnWatched()
      }
    } catch (error) {
      console.log(error)
    }
  }
  async function loadAllData() {
    try {
      setFlag("all")
      const result = await axios.get("http://localhost:3000/dramas?page=" + currentPage)
      console.log(result.data)
      setDramas(result.data.dramas)
    } catch (error) {
      console.log(error)
    }
  }
  async function loadWatched() {
    try {
      setFlag("watched")
      const result = await axios.get("http://localhost:3000/finished/dramas/" + user + "?page=" + currentPage)
      console.log(result.data)
      setDramas(result.data.dramas)
    } catch (error) {
      console.log(error)
    }
  }
  async function loadUnWatched() {
    try {
      setFlag("unwatched")
      const result = await axios.get("http://localhost:3000/dramas/" + user + "?page=" + currentPage)
      console.log(result.data)
      setDramas(result.data.dramas)
    } catch (error) {
      console.log(error)
    }
  }
  function handlePageChange(e) {
    e.preventDefault()
    console.log(e.currentTarget.value)
    setCurrentPage(e.currentTarget.value)
  }
  useEffect(() => {
    //TODO: Add loader for different states
    loadData()
    window.scrollTo(0, 0)
  }, [currentPage])
  return (
    <div className="container mx-auto py-4">
      <div className="flex justify-center gap-4">
        <Button type="button" onClick={() => { setCurrentPage(1); loadWatched() }}>All</Button>
        <Button type="button" onClick={() => { setCurrentPage(1); loadWatched() }}>Watched</Button>
        <Button type="button" onClick={() => { setCurrentPage(1); loadUnWatched() }}>Un-Watched</Button>
      </div>
      <div className="m-4 p-4">
        {dramas && dramas.map((drama, index) => <CardDrama key={index} data={drama} />)}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <button className="flex items-center justify-center gap-2" value={Number(currentPage) - 1} onClick={(e) => handlePageChange(e)}><GrFormPrevious /> <span>Previous </span></button>
          </PaginationItem>
          <PaginationItem>
            <Button className="bg-white text-black border border-black hover:bg-neutral-300" value={Number(currentPage)} onClick={(e) => handlePageChange(e)}>{Number(currentPage)}</Button>
          </PaginationItem>
          <PaginationItem>
            <Button value={Number(currentPage) + 1} onClick={(e) => handlePageChange(e)}>{Number(currentPage) + 1}</Button>
          </PaginationItem>
          <PaginationItem>
            <Button value={Number(currentPage) + 2} onClick={(e) => handlePageChange(e)}>{Number(currentPage) + 2}</Button>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <button className="flex items-center justify-center gap-2" value={Number(currentPage) + 1} onClick={(e) => handlePageChange(e)}> <span>Next </span><GrFormNext /></button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

