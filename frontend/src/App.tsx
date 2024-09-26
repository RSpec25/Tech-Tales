import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Signup } from './pages/Signup'
import { Blogs } from './pages/Blogs'
import { Publish } from './pages/Publish'
import { Home } from './pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/publish' element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
