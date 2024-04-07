import React, { createContext, useState, useContext, useEffect } from 'react';
const AnimesContext = createContext();

export const useAnimes = () => useContext(AnimesContext);

export const AnimesProvider = ({ children }) => {
  const [animes, setAnimes] = useState([]);
  const [erro, setErro] = useState(null);


  useEffect(() => { 
    const dados = [];
    fetch('http://localhost:3001/animes')
      .then(response => response.json())
      .then(novosAnimes => {
        novosAnimes.forEach(novoAnime => {
          if (!dados.some(anime => anime._id === novoAnime._id)) {
            dados.push(novoAnime);
            //console.log(novoAnime)
          }
        });
      }).then(()=>setAnimes(dados))
      .catch(error =>{ 
        setErro(error.message);
        console.error('Erro ao obter a lista de animes:', error)});
  }, []);

  return (
    <AnimesContext.Provider value={{animes,erro}}>
      {children}
    </AnimesContext.Provider>
  );
};
