import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import Product from './pages/Product'
import { Route, Routes } from 'react-router-dom'
import Notfound from './pages/Notfound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='bg-black text-white h-screen'>
      <Navbar/>
      <Navbar2/>
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/about' element={<About/>}>About</Route>
        <Route path='/courses' element={<Courses/>}>Courses</Route>
        <Route path='/courses/:CourseId' element={<CourseDetails/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path='men' element={<Men/>}/>
          <Route path='women' element={<Women/>}/>
          <Route path='kids' element={<Kids/>}/>
        </Route>
        <Route path='*' element={<Notfound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
