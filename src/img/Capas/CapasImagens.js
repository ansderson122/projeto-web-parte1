

// Para carrega as imgems  
const importImages = require.context('./', false, /\.(png|jpe?g|svg)$/);

const imagens = {};

importImages.keys().forEach((filename) => {
    const nomeDaImagem = filename.replace('./', '');
    imagens[nomeDaImagem] = importImages(filename);
});

export default imagens
