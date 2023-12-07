document.addEventListener("DOMContentLoaded", function () {
    var botao = document.querySelector('.botaoAbrirVisualizacao');
    var elementosValidacaoAtendimento = document.querySelectorAll('.AtendimentoParecerArea .showParecer');
    var elementosValidacaoParecer = document.querySelectorAll('.AtendimentoParecerAreaConteudo .hiddenParecer');

    botao.addEventListener('click', function () {
        elementosValidacaoAtendimento.forEach(function (elemento) {
            elemento.classList.toggle('showParecer');
            elemento.classList.toggle('hiddenParecer');
        });

        elementosValidacaoParecer.forEach(function (elemento) {
            elemento.classList.toggle('showParecer');
            elemento.classList.toggle('hiddenParecer');
        });
    });
});

  document.addEventListener("DOMContentLoaded", function () {
    var botao = document.querySelector('.botaoAbrirVisualizacao2');
    var elementosValidacaoAtendimento = document.querySelectorAll('.AtendimentoValidacaoArea .showValidacao');
    var elementosValidacaoParecer = document.querySelectorAll('.AtendimentoParecerAreaConteudo .hiddenValidacao');

    botao.addEventListener('click', function () {
        elementosValidacaoAtendimento.forEach(function (elemento) {
            elemento.classList.toggle('showValidacao');
            elemento.classList.toggle('hiddenValidacao');
        });

        elementosValidacaoParecer.forEach(function (elemento) {
            elemento.classList.toggle('showValidacao');
            elemento.classList.toggle('hiddenValidacao');
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
  var botao = document.querySelector('.botaoCancelar');
  var elementosValidacaoAtendimento = document.querySelectorAll('.AtendimentoParecerArea .showParecer');
  var elementosValidacaoParecer = document.querySelectorAll('.AtendimentoParecerAreaConteudo .hiddenParecer');

  botao.addEventListener('click', function () {
      elementosValidacaoAtendimento.forEach(function (elemento) {
          elemento.classList.toggle('showParecer');
          elemento.classList.toggle('hiddenParecer');
      });

      elementosValidacaoParecer.forEach(function (elemento) {
          elemento.classList.toggle('showParecer');
          elemento.classList.toggle('hiddenParecer');
      });
  });
});
  
  var aderenteSelect = document.querySelector('.pesquisaAtendimentoInput8');
  var dataRespostaInput = document.querySelector('.pesquisaAtendimentoInput9');
  
  // Obtém os elementos relacionados ao Plano de Ação e à Resposta da Área
  var planoAcaoInput = document.querySelector('.pesquisaAtendimentoInput10');
  var dataInicioInput = document.querySelector('.pesquisaAtendimentoInput11');
  var dataFimInput = document.querySelector('.pesquisaAtendimentoInput12');
  var respostaAreaTextarea = document.querySelector('.pesquisaAtendimentoInput14');
  
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

  function getFile() {
    document.getElementById("upfile").click();
  }
  
  function sub(obj) {
    var file = obj.value;
    var fileName = file.split("\\");
    document.getElementById("yourBtn").innerHTML = fileName[fileName.length - 1];
  }

  if (document.querySelector(".botaoUploadEvidencia")) {
    let botaoUploadEvidencia = document.querySelector(".botaoUploadEvidencia");
    let inputArquivo = document.getElementById("upfile");

    botaoUploadEvidencia.addEventListener("click", () => {
        if (inputArquivo.files.length > 0) {
            Swal.fire({
                icon: 'success',
                title: 'Arquivo adicionado com sucesso!',
                allowOutsideClick: false,
                showConfirmButton: true,
                confirmButtonText: 'OK'
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

  var elementosParecerAtendimento = document.querySelectorAll('.AtendimentoParecerArea .showParecer');
  var elementosParecerAtendimento = document.querySelectorAll('.AtendimentoParecerAreaConteudo .hiddenParecer');

  botaoSalvarEnviar.addEventListener("click", () => {
      elementosParecerAtendimento.forEach(function (elemento) {
      elemento.classList.toggle('showParecer');
      elemento.classList.toggle('hiddenParecer');
      });

      elementosParecerAtendimento.forEach(function (elemento) {
      elemento.classList.toggle('showParecer');
      elemento.classList.toggle('hiddenParecer');
      });
      Swal.fire({
          icon: 'success',
          title: 'Parecer salvo e enviado com sucesso!'
      });
  });
}

if (document.querySelector(".botaoAprovar")) {
  let botaoAprovar = document.querySelector(".botaoAprovar");

  var elementosValidacaoAtendimento = document.querySelectorAll('.AtendimentoValidacaoArea .showValidacao');
  var elementosValidacaoParecer = document.querySelectorAll('.AtendimentoParecerAreaConteudo .hiddenValidacao');


  botaoAprovar.addEventListener("click", () => {
    elementosValidacaoAtendimento.forEach(function (elemento) {
      elemento.classList.toggle('showValidacao');
      elemento.classList.toggle('hiddenValidacao');
    });

    elementosValidacaoParecer.forEach(function (elemento) {
      elemento.classList.toggle('showValidacao');
      elemento.classList.toggle('hiddenValidacao');
    });
    Swal.fire({
      icon: 'success',
      title: 'Parecer submetido para área de compliance!'  
    });
  });
}

if (document.querySelector(".botaoReprovar")) {
  let botaoReprovar = document.querySelector(".botaoReprovar");

  var elementosValidacaoAtendimento = document.querySelectorAll('.AtendimentoValidacaoArea .showValidacao');
  var elementosValidacaoParecer = document.querySelectorAll('.AtendimentoParecerAreaConteudo .hiddenValidacao');

  botaoReprovar.addEventListener("click", () => {
    
    
    Swal.fire({
      title: 'Justificativa da reprovação:',
      input: 'textarea',
      inputLabel: 'Digite sua justificativa',
      inputPlaceholder: 'Escreva aqui...',
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
      preConfirm: (justificativa) => {
        // Aqui você pode adicionar a lógica para lidar com a justificativa
        // e realizar as ações necessárias, como enviar para o servidor, etc.
        return new Promise((resolve) => {
          elementosValidacaoAtendimento.forEach(function (elemento) {
            elemento.classList.toggle('showValidacao');
            elemento.classList.toggle('hiddenValidacao');
          });
      
          elementosValidacaoParecer.forEach(function (elemento) {
            elemento.classList.toggle('showValidacao');
            elemento.classList.toggle('hiddenValidacao');
          });
          // Simulando uma requisição assíncrona (substitua por sua lógica real)
          setTimeout(() => {
            resolve();
          }, 1000);
        });
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
    
        Swal.fire({
          icon: 'success',
          title: 'Reprovação enviada com sucesso!'
        });
      }
    });
  });
}
