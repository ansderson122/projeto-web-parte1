import React , { useEffect,useState} from "react";
import {useLocation } from "react-router-dom";
import './Principal.css'
import Capa from "../../components/capa";
import { useAnimes } from '../../animesContext';

const Login = (prop)=>{
    const {pathname } = useLocation() 
    prop.novoPath(pathname);
    const animes = useAnimes();
  
 
    const Destaques = [ 16, 5, 11, 4, 15, 2, 13, 7, 9 ]
    const assistidos = [ 13, 5, 4, 2, 7, 10, 12, 14, 9 ]
    const Assistatambem = [13,18,12,6,19,1,17,3,16,7,8,11,10,15,14,4,9,20,5,2]

    
   
    
    
    if (animes.length === 0) {
        return <div>Carregando...</div>;
    }



    return (
        <section className="conteiner">

            <div className="Grupo">
                <h1>Destaques</h1>
                <hr />
                <div className="Lista-capas ">
                    {
                        Destaques.map((index)=>Capa(index,animes[index].img))
                    }
                </div>
            </div>

            
            <div className="Grupo">
                <h1>Mais assistidos</h1>
                <hr />
                <div className="Lista-capas ">
                    {
                        assistidos.map((index)=>Capa(index,animes[index].img))
                    }
                </div>
            </div>

            <div className="Grupo">
                <h1>Assista também</h1>
                <hr />
                <div className="Lista-capas ">
                    {
                        Assistatambem.map((index)=>Capa(index,animes[index].img))
                    }
                </div>
            </div>
       
       
          

           
        </section>
    )
}

export default Login