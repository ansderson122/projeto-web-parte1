import React, { useState } from "react";
import {useLocation,Navigate } from "react-router-dom";
import './Principal.css'
import Capa from "../../components/capa";
import { useAnimes } from '../../animesContext';

const Login = (prop)=>{
    const {pathname } = useLocation() 
    prop.novoPath(pathname); 
    const {animes,erro,destaques,assistidos,assistatambem} = useAnimes();
     
    if (erro) {
        return <h1 className="textRed">Erro no servido</h1>;
    }

    if (animes.length === 0) {
        return <h1>Carregando...</h1>;
    }


    return (
        <section className="conteiner">

            <div className="Grupo">
                <h1>Destaques</h1>
                <hr />
                <div className="Lista-capas ">
                    {
                        destaques.map((index)=>Capa(index,animes[index].img))
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
                        assistatambem.map((index)=>Capa(index,animes[index].img))
                    }
                </div>
            </div>
        </section>
    )
}

export default Login