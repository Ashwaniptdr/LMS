
import { Link, Route, Routes } from 'react-router-dom'
import Book from '../Pages/Book'
import AvaBook from '../Pages/AvaBook'

function Navbar() {
  return (
   <>

   <nav>
     <Link to={"user/Daskbord/Books"}>Book</Link>
     <Link to={"user/Daskbord/AvaBooks"}>AvaBook</Link>
   </nav>
   <div>
    <Routes>
        <Route path='book/*'element={<Book />}/>
        <Route path='avabook/*' element={<AvaBook/>}/>
    </Routes>
   </div>
   
   </>
  )
}

export default Navbar