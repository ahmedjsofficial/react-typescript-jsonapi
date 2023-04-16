import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ErrorPage, PostDetails, Posts } from './pages'

const App = () => {
  console.log(`Hello from App`)
  return (
    <Routes>
      <Route path='/' element={<Posts />} />
      <Route path='/post/:id' element={<PostDetails />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default App