
import { Route, Routes } from 'react-router-dom'
import Register from './Pages/Register'
import Login from './Pages/Login'

function Employee() {
  return (
    <>
      <Routes>
        <Route path='Register' element={<Register/>}/>
        <Route path='Login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default Employee