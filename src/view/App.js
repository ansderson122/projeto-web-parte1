import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";


import Sobre from './sobre/Sobre'
import Cadastro from './cadastro/Cadastro';
import Login from './login/Login';



function App() {

  const [namePath,setnamePath] = useState(null)

  const autualizaPath = (novoPath)=>{
    setnamePath(novoPath)
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
                            <Link to="/sobre" className='App-nav-item quadro vermelho'>Sobre</Link>
                          </li> 
                          <li>
                            <Link to="/login" className='App-nav-item quadro azul'>Login</Link>
                          </li> 

                      </>
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

                <Route render={() => <h1>404: page not found</h1>} />
              </Routes>
            </div>
      </Router>
      
    </div>
  );
}

export default App;