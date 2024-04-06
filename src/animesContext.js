import React, { createContext, useState, useContext, useEffect } from 'react';

const AnimesContext = createContext();

export const useAnimes = () => useContext(AnimesContext);

export const AnimesProvider = ({ children }) => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => { 
    const dados = [];
    fetch('http://localhost:3000/animes')
      .then(response => response.json())
      .then(novosAnimes => {
        novosAnimes.forEach(novoAnime => {
          if (!dados.some(anime => anime._id === novoAnime._id)) {
            dados.push(novoAnime);
            //console.log(novoAnime)
          }
        });
      }).then(()=>setAnimes(dados))
      .catch(error => console.error('Erro ao obter a lista de animes:', error));
  }, []);

  return (
    <AnimesContext.Provider value={animes}>
      {children}
    </AnimesContext.Provider>
  );
};
