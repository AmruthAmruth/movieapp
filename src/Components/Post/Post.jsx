import React, { useEffect, useState } from 'react'
import './Post.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from '../axios'
import { apiKey, imgUrl } from '../../Constance/Constance';
import { useLocation } from 'react-router-dom';
function Post() {
 
   const [postmovie, setPostmovie] = useState('')
   const location = useLocation();
   const id = location.state;
    useEffect(()=>{

axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`).then((response)=>{
      console.log(response.data);
      setPostmovie(response.data)

      console.log(id);

    })
       
    

        AOS.init({duration:1000})
        },[])
  return (
    <div className='p-parent' style={{ 
        backgroundImage: `url(${postmovie ?  imgUrl+postmovie.backdrop_path : "" })`
      }}>
      <div className="p-text"  data-aos="zoom-in">
        <h1>{postmovie ?  postmovie.original_title : "No Name"}</h1> 
        <p className='tag'>{postmovie ? postmovie.tagline : ""}</p>
        <h2>{postmovie ? postmovie.genres[0].name : ""} , {postmovie ? postmovie.genres[1].name : ""} </h2>
        <p>{postmovie ? postmovie.overview : ""}</p>
        <p>{postmovie ? postmovie.runtime : ""} mins</p>
        <p className='ptxt'>{postmovie ? postmovie.vote_average : ""} <i class="fa-solid fa-star-half-stroke"></i> 	&#40;{postmovie ? postmovie.vote_count : ""} Votes&#41;</p>
         
        <p className='ptxt'>Release Date : {postmovie ? postmovie.release_date : ""}</p>
        
      </div>
      <div className="p-post" data-aos="zoom-in">
        <img src={postmovie ? imgUrl+postmovie.poster_path : ""} alt="" />
      </div>
    </div>
  )
}

export default Post
