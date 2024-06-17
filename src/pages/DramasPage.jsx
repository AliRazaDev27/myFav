import CardDrama from "../components/CardDrama"
import axios from "axios"
import { useState, useEffect } from "react"

export default function DramasPage() {
  const [dramas, setDramas] = useState([])
  console.log(dramas)
  const loadData = async () => {
    try {
      const data = await axios.get("http://localhost:3000/dramas")
      setDramas(data.data.dramas)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    loadData()
  }, [])
  return (
    <div className="container mx-auto">
      <div className="m-4 p-4">
        {dramas && dramas.map((drama, index) => <CardDrama key={index} data={drama} />)}
      </div>
    </div>
  )
}

