import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Header from './components/Header'
import DramasPage from './pages/DramasPage'
import MoviesPage from './pages/MoviesPage'
import BooksPage from './pages/BooksPage'
function App() {
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
    </>
  )
}

export default App
