import React from 'react'
import Home from '../Components/Home/Home'
import Rows from '../Components/Rows/Row'
import Footer from '../Components/Footer/Footer'
import { topRated, upComing } from '../urls'

function Homepage() {
  return (
    <div>
      <Home/>
      <Rows title="Top Rated" url={topRated} />
      <Rows title='Upcoming Movies' url={upComing} />
      <Footer/>
    </div>
  )
}

export default Homepage
