
import { Route, Routes } from 'react-router-dom'

import Register from './Pages/Register'
import Login from './Pages/login'


function User() {
  return (
    <>
     <Routes>
        <Route path='Login' element={<Login/>}/>
        <Route path='Register' element={<Register/>}/>
     </Routes>
    </>
  )
}

export default User