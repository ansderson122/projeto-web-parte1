import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";

import { FaSearch } from 'react-icons/fa';
import { TiArrowBack } from "react-icons/ti";


import Sobre from './sobre/Sobre'
import Cadastro from './cadastro/Cadastro';
import Login from './login/Login';
import Principal from './principal/Principal'
import DetalhesAnime from './DetalhesAnime/DetalhesAnime';
import TodosAnimes from './todosAnimes/todosAnimes'


function App() {

  const [namePath,setnamePath] = useState("")

  const autualizaPath = (novoPath)=>{
    setnamePath(novoPath)
  }

  const handleSubmit = () => {

  }
  

  return (
    <div className="App">

      <Router>
            <div> 
              <div className="navigation">
                <div className="App-logo">Anime Streamer </div>
                <nav className='App-nav'>
                  <ul>
                    {
                      (namePath === '/' || namePath === '/sobre')?(
                        <>
                          <li>
                            <Link to="/cadastro" className='App-nav-item quadro vermelho'>Cadastro</Link>
                          </li> 
                          <li>
                            <Link to="/login" className='App-nav-item quadro azul'>Login</Link>
                          </li> 

                        </>
                      ):(<></>)
                    }

                    {
                      (namePath === '/cadastro')?(
                        <>
                          <li>
                            <Link to="/sobre" className='App-nav-item quadro vermelho'><TiArrowBack className='voltar'/></Link>
                          </li> 
                          <li>
                            <Link to="/login" className='App-nav-item quadro azul'>Login</Link>
                          </li> 

                      </>
                    ):(<></>)
                    }

                    
{
                      (namePath === '/login')?(
                        <>
                          <li>
                            <Link to="/sobre" className='App-nav-item quadro vermelho'><TiArrowBack className='voltar'/></Link>
                          </li> 
                          <li>
                            <Link to="/cadastro" className='App-nav-item quadro azul'>Cadastro</Link>
                          </li> 

                      </>
                    ):(<></>)
                    }

                    {
                      (namePath.startsWith('/principal'))?(
                      <div>
                        <form onSubmit={handleSubmit} className='Menu-busca'>
                          <input type='text' placeholder="Busca ..."></input>
                          <button type="submit" className="busca">
                            <FaSearch />
                          </button>
                        </form>
                      </div>
                      ):(<></>)
                    }
                    

                    {

                      (namePath.startsWith('/principal') && namePath!='/principal' )?(
                        <div>
                          <li>
                            <Link to="/principal" className='App-nav-item quadro vermelho'><TiArrowBack className='voltar'/></Link>
                          </li> 
                        </div>
                        ):(<></>)

                    }
                    
                  </ul>
                </nav>
              </div>

              

              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Routes>
                <Route path="/" element={<Sobre novoPath = {autualizaPath} />}/>
                <Route path="/sobre" element={<Sobre novoPath = {autualizaPath} />} />
                <Route path="/cadastro" element={<Cadastro novoPath = {autualizaPath} />} />
                <Route path="/login" element={<Login novoPath = {autualizaPath} />} />
                <Route path="/principal" element={<Principal novoPath = {autualizaPath} />} />
                <Route path="/principal/:nome" element={<DetalhesAnime novoPath = {autualizaPath} />} />
                <Route path="/todosAnimes" element={<TodosAnimes novoPath = {autualizaPath} />} />


                <Route path="*" element={<h1>404: Página não encontrada</h1>}/>
              </Routes>
            </div>
      </Router>
      
    </div>
  );
}

export default App;