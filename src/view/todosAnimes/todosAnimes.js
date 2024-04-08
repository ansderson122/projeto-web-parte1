import React,{useEffect} from "react";
import {useLocation } from "react-router-dom";

import Capa from "../../components/capa";
import { useAnimes } from '../../animesContext';

const TodosAnimes = (prop)=>{
    const { pathname } = useLocation();
    

      prop.novoPath(pathname);
    

    
    const {animes,erro} = useAnimes();
  
     
    if (erro) {
        return <h1 className="textRed">Erro no servido</h1>;
    }

    if (animes.length === 0) {
        return <h1>Carregando...</h1>;
    }


    return (
        <section className="conteiner">
            <div className="Grupo">
                <div className="Lista-capas ">
                    {
                        animes.map((anime,index)=>Capa(index,anime.img))
                    }
                </div>
            </div>           
        </section>
    )
}

export default TodosAnimes