import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  )
}

export default App
