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

export default function DramasPage() {
  const [dramas, setDramas] = useState([])
  console.log(dramas)
  const [currentPage, setCurrentPage] = useState(1)
  const loadData = async () => {
    try {
      const data = await axios.get("http://localhost:3000/dramas?page=" + currentPage)
      console.log(data.data)
      setDramas(data.data.dramas)
    } catch (error) {
      console.log(error)
    }
  }
  function handlePageChange(e) {
    e.preventDefault()
    setCurrentPage(e.target.value)
  }
  useEffect(() => {
    loadData()
    window.scrollTo(0, 0)
  }, [currentPage])
  return (
    <div className="container mx-auto py-4">
      <div className="m-4 p-4">
        {dramas && dramas.map((drama, index) => <CardDrama key={index} data={drama} />)}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
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
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

