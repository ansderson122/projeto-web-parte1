import React , {useState , useEffect} from "react";
import {useLocation } from "react-router-dom";
  

import './Sobre.css'

const Sobre = (prop)=>{
    const {pathname } = useLocation()

    useEffect(()=>{
        prop.novoPath(pathname)
    },[])


    return (
        <>   
            <section className="conteiner">
                <section className="Sobre-conteudo">
                
                    <h1>Bem-Vindo ao <strong>Anime Streamer!</strong></h1>

                    <div className="Sobre-conteudo-lateral">
                        <h2>Quem Somos:</h2>
                        <p>O <strong>Anime Streamer</strong> é mais do que apenas um site para assistir animes; é uma comunidade dedicada aos entusiastas do mundo da animação japonesa. Nossa missão é proporcionar uma experiência envolvente e acessível para os fãs de animes, conectando-os a um vasto universo de histórias emocionantes e cativantes.</p>
                    </div>

                    <div className="Sobre-conteudo-lateral">
                        <h2>Nossa História:</h2>    
                        <p>Fundado em 2024, o Anime Streamer nasceu da paixão compartilhada por animes e do desejo de criar um espaço onde os fãs pudessem descobrir, assistir e discutir seus animes favoritos. Desde então, temos trabalhado incessantemente para aprimorar a plataforma e oferecer o melhor serviço possível.</p>
                    </div>

                    <div className="Sobre-conteudo-lateral">
                        <h2>O Que Oferecemos:</h2>
                        <ul>
                            <li>Uma ampla seleção de animes, desde os clássicos atemporais até os lançamentos mais recentes.</li>
                            <li>Recursos interativos, como listas de reprodução personalizadas e recomendações com base nos gostos individuais.</li>
                            <li>Uma comunidade ativa, onde os fãs podem compartilhar suas opiniões, análises e descobrir novos tesouros do mundo dos animes.</li>
                        </ul>
                    </div>

                    <div className="Sobre-conteudo-lateral">
                        <h2>Contate-Nos:</h2>

                        <div>
                            <p>Estamos sempre abertos ao feedback da comunidade. Se você tiver sugestões, perguntas ou quiser simplesmente dizer "oi", não hesite em entrar em contato conosco através do nosso formulário de contato ou em nossas redes sociais.</p>

                            <p>Agradecemos por fazer parte da comunidade Anime Streamer!</p>
       
                        </div>
             </div>
                </section>  
            </section>  
        </>

    )
}

export default Sobre