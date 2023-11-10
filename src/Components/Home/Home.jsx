import React, { useEffect, useState } from 'react'
import './Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from '../axios'
import { apiKey, imgUrl } from '../../Constance/Constance';
import { useNavigate } from "react-router-dom";
function Home() {
  
  const navigate = useNavigate();
  const [movie, setMovie] = useState("")
  

    useEffect(()=>{
  axios.get(`popular?api_key=${apiKey}&language=en-US`).then((response)=>{
   const arr =  Math.floor(Math.random() * 20);
    setMovie(response.data.results[arr])
   
  })



    AOS.init({duration:1000})
    },[])
    
    const id = movie.id;
    const watchMore=()=>{
      
      navigate("/post", { state:id})
    }
  return (
    <div className='h-parent' style={{ 
        backgroundImage: `url(${movie ?  imgUrl+movie.backdrop_path : "" })`
      }}>
      <div className="h-text"  data-aos="zoom-in">
        <h1>{movie ?  movie.title : ""}</h1> 
        <p>{movie ?  movie.overview : " "}</p>
        <div className="h-btn">
            <button onClick={watchMore}>More Details</button>
        </div>
      </div>
      <div className="h-post" data-aos="zoom-in">
        <img src={movie ? imgUrl+movie.poster_path : ""}alt="" />
      </div>
    </div>
  )
}

export default Home
