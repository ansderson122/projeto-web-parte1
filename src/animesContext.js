import React, { createContext, useState, useContext, useEffect } from 'react';
const AnimesContext = createContext();

export const useAnimes = () => useContext(AnimesContext);

export const AnimesProvider = ({ children }) => {
  const [animes, setAnimes] = useState([]);
  const [erro, setErro] = useState(null);
  const [destaques,setDestaques] = useState([])
  const [assistidos,setAssistidos] = useState([])
  const [assistatambem,setAssistatambem] = useState([])


  useEffect(() => { 
    if (animes.length === 0){
      fetch('http://localhost:3001/animes')
        .then(response => response.json())
        .then(dados => {
          setAnimes(dados[0])
          setDestaques(dados[1])
          setAssistidos(dados[2])
          setAssistatambem(dados[3])
      })
      .catch(error =>{ 
        setErro(error.message);
        console.error('Erro ao obter a lista de animes:', error)});

        
      }
   
  }, []);

  return (
    <AnimesContext.Provider value={{animes,erro,destaques,assistidos,assistatambem}}>
      {children}
    </AnimesContext.Provider>
  );
};
