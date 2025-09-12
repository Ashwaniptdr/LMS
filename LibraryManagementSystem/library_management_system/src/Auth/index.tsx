
import { Route, Routes } from 'react-router-dom'
import User from './User'
import Employee from './Employee'


function Auth() {
  return (
   <Routes>
    <Route path='/user/*'element={<User/>}/>
    <Route path='/employee/*' element={<Employee/>} />
   </Routes>
  )
}

export default Auth