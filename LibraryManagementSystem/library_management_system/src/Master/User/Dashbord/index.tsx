
import { Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'

function Dashboard() {
  return (
    <>
    <Routes>
        <Route path='user/*' element={<Navbar/>}/>
        <Route path='home'element={< Home/>}/>
    </Routes>
    </>
  )
}

export default Dashboard