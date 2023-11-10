import React, { useEffect, useState } from 'react'
import './Row.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from '../axios'
import { apiKey, imgUrl } from '../../Constance/Constance';
import { useNavigate } from "react-router-dom";
function Row(props) {
   const [movies, setMovies] = useState([])
   const navigate = useNavigate();
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
          setMovies(response.data.results)
          console.log(response.data);
        })
      
      
      
          AOS.init({duration:2000})
          },[])

          const id = movies.id;

const rowClick=(id)=>{
 navigate("/post", { state:id})
 console.log(id);
}

  return (
    <div className='r-parent'>
            <h1 >{props.title}</h1>
            <div className="rows">

    {movies.map((obj,index)=>{
        return(

<div className="row" data-aos="zoom-in" >
            <img src={`${obj ?  imgUrl+ obj.poster_path : ""}`} alt="" onClick={()=>rowClick(obj.id)} />
            <p>{obj ? obj.title : "" }</p>
        </div>
       
        )
    })}

       
      

    
         

            </div>
    </div>
  )
}

export default Row
