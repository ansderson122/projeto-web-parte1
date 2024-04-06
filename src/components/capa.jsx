import React from "react"
import './capa.css'
import {useNavigate  } from "react-router-dom";

const Capa = (index,img)=>{ 
    const navigate = useNavigate();
    const visualizaAnime = ()=>{
      const anime = "/principal/" + index 
      navigate(anime);
    }

    return (
        <div class="container">
          <div class="capa-anime" onClick={visualizaAnime}>
              <img src= {img} alt="" srcset="" />
          </div>
      </div>
            
    )
}

export default Capa