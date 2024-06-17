import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
export default function HomePage() {
  const user = useSelector(state => state.auth?.user?.data)
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  })

  return (
    <div>HomePage</div>
  )
}
