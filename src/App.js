import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Post from './Pages/post';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/post" element={<Post/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
