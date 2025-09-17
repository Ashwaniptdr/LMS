import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BookForm from './Dashboard/Component/BookForm'
import BookList from './Dashboard/Component/BookList'

function DashBoard() {
  return (
    <>
    <Routes>
        <Route path='bookFrorm' element={<BookForm/>} />
         <Route path='bookList' element={<BookList/>} />
    </Routes>
    
    </>
  )
}

export default DashBoard