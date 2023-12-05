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

  if (document.querySelector(".botaoCancelar")) {
    let botaoCancelar = document.querySelector(".botaoCancelar");

    let ParecerArea = document.querySelector(".TriagemParecerArea");
    let ConteudoParecer = document.querySelector(".TriagemParecerAreaConteudo");

    let PreTriagem = document.querySelector(".TriagemParecerAreaConteudoPreTriagem");
    let Parecer = document.querySelector(".TriagemParecerAreaConteudoParecer");
    let Plano = document.querySelector(".TriagemParecerAreaConteudoPlano");
    let Resumo = document.querySelector(".TriagemParecerAreaConteudoResumo");
    let Resposta = document.querySelector(".TriagemParecerAreaConteudoResposta");
    let Botoes = document.querySelector(".TriagemParecerAreaConteudoBotoes");

    botaoCancelar.addEventListener("click", () => {
        ParecerArea.classList.replace('hiddenParecer', 'showParecer');
        ConteudoParecer.classList.replace('showParecer', 'hiddenParecer');

        PreTriagem.classList.replace('showParecer', 'hiddenParecer');
        Parecer.classList.replace('showParecer', 'hiddenParecer');
        Plano.classList.replace('showParecer', 'hiddenParecer');
        Resumo.classList.replace('showParecer', 'hiddenParecer');
        Resposta.classList.replace('showParecer', 'hiddenParecer');
        Botoes.classList.replace('showParecer', 'hiddenParecer');
    });
}


  
  var aderenteSelect = document.querySelector('.pesquisaTriagemInput8');
  var dataRespostaInput = document.querySelector('.pesquisaTriagemInput9');
  
  // Obtém os elementos relacionados ao Plano de Ação e à Resposta da Área
  var planoAcaoInput = document.querySelector('.pesquisaTriagemInput10');
  var dataInicioInput = document.querySelector('.pesquisaTriagemInput11');
  var dataFimInput = document.querySelector('.pesquisaTriagemInput12');
  var respostaAreaTextarea = document.querySelector('.pesquisaTriagemInput14');
  
  // Adiciona um ouvinte de evento para o evento 'change' no select 'Aderente'
  aderenteSelect.addEventListener('change', function() {
    // Verifica se a opção selecionada é "Sim"
    if (aderenteSelect.value === 'Sim') {
      // Realiza as alterações desejadas
      dataRespostaInput.value = '26/04/2023';
      planoAcaoInput.value = 'n/a';
      respostaAreaTextarea.value = 'Conforme a resolução nº 309 de 28 de março de 2023 do Banco Central do Brasil (BCB), que estabelece procedimentos contábeis. Declaramos que a área exerce suas atividades conforme norma e encontra-se aderente à regulação.';
      
      // Define o valor dos campos de data de início e data de fim como "-"
      dataInicioInput.value = '-';
      dataFimInput.value = '-';
    } else {
      // Limpa os campos caso a opção seja diferente de "Sim"
      dataRespostaInput.value = '';
      planoAcaoInput.value = '';
      respostaAreaTextarea.value = '';
      
      // Limpa os campos de data de início e data de fim
      dataInicioInput.value = '';
      dataFimInput.value = '';
    }
  });

  if (document.querySelector(".botaoUploadEvidencia")) {
    let botaoUploadEvidencia = document.querySelector(".botaoUploadEvidencia");
    let inputArquivo = document.querySelector(".pesquisaTriagemInput15");

    botaoUploadEvidencia.addEventListener("click", () => {
        // Verifica se o campo de input tipo arquivo contém algum arquivo
        if (inputArquivo.files.length > 0) {
            Swal.fire({
                icon: 'success',
                title: 'Arquivo adicionado com sucesso!',
                allowOutsideClick: false,
                showConfirmButton: true,
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Habilita o botão "Salvar/Enviar" após o OK do usuário
                    document.querySelector(".botaoSalvarEnviar").disabled = false;
                }
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Por favor, selecione um arquivo antes de clicar em 'Upload de Evidência'."
            });
        }
    });
}

if (document.querySelector(".botaoSalvarEnviar")) {
  let botaoSalvarEnviar = document.querySelector(".botaoSalvarEnviar");

  botaoSalvarEnviar.addEventListener("click", () => {
      // Aqui você pode adicionar a lógica para salvar/enviar o parecer
      Swal.fire({
          icon: 'success',
          title: 'Parecer salvo e enviado com sucesso!'
      }).then(() => {
          // Reverte a visibilidade dos elementos
          let ParecerArea = document.querySelector(".TriagemParecerArea");
          let ConteudoParecer = document.querySelector(".TriagemParecerAreaConteudo");

          let PreTriagem = document.querySelector(".TriagemParecerAreaConteudoPreTriagem");
          let Parecer = document.querySelector(".TriagemParecerAreaConteudoParecer");
          let Plano = document.querySelector(".TriagemParecerAreaConteudoPlano");
          let Resumo = document.querySelector(".TriagemParecerAreaConteudoResumo");
          let Resposta = document.querySelector(".TriagemParecerAreaConteudoResposta");
          let Botoes = document.querySelector(".TriagemParecerAreaConteudoBotoes");

          ParecerArea.classList.replace('hiddenParecer', 'showParecer');
          ConteudoParecer.classList.replace('showParecer', 'hiddenParecer');

          PreTriagem.classList.replace('showParecer', 'hiddenParecer');
          Parecer.classList.replace('showParecer', 'hiddenParecer');
          Plano.classList.replace('showParecer', 'hiddenParecer');
          Resumo.classList.replace('showParecer', 'hiddenParecer');
          Resposta.classList.replace('showParecer', 'hiddenParecer');
          Botoes.classList.replace('showParecer', 'hiddenParecer');
      });
  });
}






