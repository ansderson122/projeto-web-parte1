import React from "react"
import './capa.css'
import {useNavigate  } from "react-router-dom";
import imagens from "../img/Capas/CapasImagens";

import animes from "../view/principal/dados";


const Capa = (index)=>{ 
    const navigate = useNavigate();
    const visualizaAnime = ()=>{
      const anime = "/principal/" + index 
      navigate(anime);
    }

    return (
        <div class="container">
          <div class="capa-anime" onClick={visualizaAnime}>
              <img src= {imagens[animes[index].img]} alt="" srcset="" />
          </div>
      </div>
            
    )
}

export default Capa
