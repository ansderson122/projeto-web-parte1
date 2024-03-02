import React , {useState , useEffect} from "react";
import {useLocation,Navigate } from "react-router-dom";


import animes from './dados'
import './Principal.css'


// Para carrega as imgems  
const importImages = require.context('./Capas', false, /\.(png|jpe?g|svg)$/);

const imagens = {};

importImages.keys().forEach((filename) => {
  const nomeDaImagem = filename.replace('./', '');
  imagens[nomeDaImagem] = importImages(filename);
});


const Login = (prop)=>{
    const {pathname } = useLocation()


    const card = (item)=>{ 
        return (
                <img src= {imagens[item.img]} alt="" srcset="" />
        )
    }

    const gerarNumerosAleatorio = (quantidade, min, max) => {
        if (quantidade > max - min + 1 || max < min) {
          console.error("Impossível sortear a quantidade desejada dentro do intervalo fornecido.");
          return null;
        }
      
        const numerosDisponiveis = Array.from({ length: max - min + 1 }, (_, index) => index + min);
        const numerosSorteados = [];
      
        for (let i = 0; i < quantidade; i++) {
          const indiceSorteado = Math.floor(Math.random() * numerosDisponiveis.length);
          const numeroSorteado = numerosDisponiveis.splice(indiceSorteado, 1)[0];
          numerosSorteados.push(numeroSorteado);
        }
      
        return numerosSorteados;
      };
      
      const arrayAleatorio = (quantidade) => {
        const indicesSorteados = gerarNumerosAleatorio(quantidade, 0, 20);
        return indicesSorteados.map((indice) => animes[indice]);
      };
   

    useEffect(()=>{
            prop.novoPath(pathname)
    },[])

    return (
        <section className="conteiner">

            <div className="Grupo">
                <h1>Destaques</h1>
                <hr />
                <div className="Lista-capas ">
                    {
                        arrayAleatorio(9).map((item)=>card(item))
                    }
                </div>
            </div>

            
            <div className="Grupo">
                <h1>Mais assistidos</h1>
                <hr />
                <div className="Lista-capas ">
                    {
                        arrayAleatorio(9).map((item)=>card(item))
                    }
                </div>
            </div>

            <div className="Grupo">
                <h1>Assista também</h1>
                <hr />
                <div className="Lista-capas ">
                    {
                        arrayAleatorio(20).map((item)=>card(item))
                    }
                </div>
            </div>
       
       
          

           
        </section>
    )
}

export default Login