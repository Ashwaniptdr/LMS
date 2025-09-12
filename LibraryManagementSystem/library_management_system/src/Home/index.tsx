import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home'

export default function Pages() {
  return (
    <>
    <Routes>
        <Route path="Home" element={<HomePage/>} />
    </Routes>
    </>
  )
}

