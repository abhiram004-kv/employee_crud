import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navi'
import Navi from './components/Navi'
import Tabl from './components/Tabl'
import Edt from './components/Edt'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navi></Navi>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/' element={<Tabl/>}/>
        <Route path='/Edt/:id' element={<Edt/>}/>
      </Routes>
     {/* <Login></Login> */}

    </>
  )
}

export default App
