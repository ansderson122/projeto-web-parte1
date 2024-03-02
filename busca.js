const axios = require('axios');
const cheerio = require('cheerio');

async function obterInformacoesDoSite() {
  try {
    const url = 'URL_DO_SITE_AQUI';
    const response = await axios.get(url);
    
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);

      // Use seletores do Cheerio para extrair informações do HTML
      const nomeDoAnime = document.getElementsByClassName('content content-single')[0].querySelector('h2')
      const anoLancamento = $('.ano-lancamento').text();
      const descricao = $('.descricao').text();
      const imagem = $('img');
      const srcDaImagem = imagem.src;

      console.log({
        nomeDoAnime,
        anoLancamento,
        descricao,
        srcDaImagem,
      });
    } else {
      console.error('Erro ao obter a página:', response.status);
    }
  } catch (error) {
    console.error('Erro na solicitação:', error.message);
  }
}

obterInformacoesDoSite();
