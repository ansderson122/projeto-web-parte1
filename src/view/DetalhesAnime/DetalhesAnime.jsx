import React , {useState , useEffect} from "react";
import {useLocation } from "react-router-dom";
  
import animes from "../principal/dados";
import imagens from "../../img/Capas/CapasImagens";
import './DetalhesAnime.css'

const DetalhesAnime = (prop)=>{
    const {pathname } = useLocation()
    const numeroAnime = pathname.split('/')[2]
    const anime = animes[numeroAnime]
    const episodiosLen = Array.from({ length: anime['Legendado-episodios'] }, (_, index) => index + 1);
    const episodiosDub = Array.from({ length: anime['Dublado-episodios'] }, (_, index) => index + 1);
    

    useEffect(()=>{
        prop.novoPath(pathname)
    },[])

    return (
        <div className="Anime conteiner">
            <div className="Apresentacao-anime">
                <img src= {imagens[anime.img]} alt="" srcset="" />
                <div className="conteudo"> 
                    <h1 className="Titulo-anime" >{anime.nome}</h1>
                    <p className="Ano-lacamento">Lançamento: {anime.ano_lancamento}</p>
                    <p className="Descricao-anime">{anime.descricao}</p>
                </div>
            </div>


            <h2>Lista de episódios</h2>
            <div className="lista-conteiner">
                <div className="lista-episodios">
                    <h3>LEGENDADO</h3>
                    <ul>
                        {
                            episodiosLen.map((num)=>{
                                return <li className="episodio" id={num + numeroAnime }><a href="#">Episódios {num}</a></li>
                            })
                        }
                    </ul>
                </div>

                <div className="lista-episodios">
                    <h3>DUBLADO</h3>

                    <ul>
                        {
                            episodiosDub.map((num)=>{
                                return <li className="episodio" id={num}><a href="#">Episódios {num}</a></li>
                            })
                        }
                    </ul>
                </div>


            </div>


        </div>
    )
}
export default DetalhesAnime