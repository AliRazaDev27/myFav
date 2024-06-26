import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Header from './components/Header'
import DramasPage from './pages/DramasPage'
import MoviesPage from './pages/MoviesPage'
import BooksPage from './pages/BooksPage'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const path = location.pathname.startsWith("/")
  const user = useSelector(state => state?.auth?.user?.data)
  console.log(`path: ${path}`)
  useEffect(() => {
    if (!user && path) {
      <LoginPage />
    }
  }, [user, path, navigate])
  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/books' element={<BooksPage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/dramas' element={<DramasPage />} />
      </Routes>

      <ToastContainer />
    </>
  )
}

export default App
