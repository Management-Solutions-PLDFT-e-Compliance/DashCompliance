if(document.querySelector(".botaoAbrirVisualizacao.botaoMain")){
    let botao = document.querySelector(".botaoAbrirVisualizacao.botaoMain");

    let ParecerArea = document.querySelector(".TriagemParecerArea");
    let ConteudoParecer = document.querySelector(".TriagemParecerAreaConteudo");
    
    let PreTriagem = document.querySelector(".TriagemParecerAreaConteudoPreTriagem");
    let Parecer = document.querySelector(".TriagemParecerAreaConteudoParecer");
    let Plano = document.querySelector(".TriagemParecerAreaConteudoPlano");
    let Resumo = document.querySelector(".TriagemParecerAreaConteudoResumo");
    let Resposta = document.querySelector(".TriagemParecerAreaConteudoResposta");
    let Botoes =document.querySelector(".TriagemParecerAreaConteudoBotoes")




    botao.addEventListener("click", ()=>{
      ParecerArea.classList.replace('showParecer', 'hiddenParecer');

      ConteudoParecer.classList.replace('hiddenParecer', 'showParecer');
      
      PreTriagem.classList.replace('hiddenParecer', 'showParecer');
      Parecer.classList.replace('hiddenParecer', 'showParecer');
      Plano.classList.replace('hiddenParecer', 'showParecer');
      Resumo.classList.replace('hiddenParecer', 'showParecer');
      Resposta.classList.replace('hiddenParecer', 'showParecer');
      Botoes.classList.replace('hiddenParecer', 'showParecer');


    });
  }