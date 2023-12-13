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
    var botao = document.querySelector('.botaoAbrirVisualizacao2');
    var elementosValidacaoAtendimento = document.querySelectorAll('.AtendimentoValidacaoArea .showParecer');
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
  var botao = document.getElementById("cancelarParecer");
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
  var botao = document.getElementById("cancelarParecer2");
  var elementosValidacaoAtendimento = document.querySelectorAll('.AtendimentoValidacaoArea .showParecer');
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


if (document.querySelector(".botaoSalvar")) {
  let botaoSalvarEnviar = document.querySelector(".botaoSalvar");
  var elementosValidacaoAtendimento = document.querySelectorAll('.AtendimentoParecerArea .showParecer');
  var elementosValidacaoParecer = document.querySelectorAll('.AtendimentoParecerAreaConteudo .hiddenParecer');

  botaoSalvarEnviar.addEventListener('click', function () {
      elementosValidacaoAtendimento.forEach(function (elemento) {
          elemento.classList.toggle('showParecer');
          elemento.classList.toggle('hiddenParecer');
      });

      elementosValidacaoParecer.forEach(function (elemento) {
          elemento.classList.toggle('showParecer');
          elemento.classList.toggle('hiddenParecer');
      });
      Swal.fire({
        icon: 'success',
        title: 'Parecer salvo e enviado com sucesso!'
    });
  });
};
if (document.getElementById("salvarParecer2")) {
  let botaoSalvarEnviar = document.getElementById("salvarParecer2");
  var elementosValidacaoAtendimento = document.querySelectorAll('.AtendimentoValidacaoArea .showParecer');
  var elementosValidacaoParecer = document.querySelectorAll('.AtendimentoParecerAreaConteudo .hiddenParecer');

  botaoSalvarEnviar.addEventListener('click', function () {
      elementosValidacaoAtendimento.forEach(function (elemento) {
          elemento.classList.toggle('showParecer');
          elemento.classList.toggle('hiddenParecer');
      });

      elementosValidacaoParecer.forEach(function (elemento) {
          elemento.classList.toggle('showParecer');
          elemento.classList.toggle('hiddenParecer');
      });
      Swal.fire({
        icon: 'success',
        title: 'Parecer salvo e enviado com sucesso!'
    });
  });
};

  

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


function preencherComLabelDesc(){
  var descricaoInput = document.getElementById('Descrição');
  var fonteInput = document.getElementById('Fonte');
  var armazenarInput = document.getElementById('Armazenar');

  descricaoInput.value = 'Susep';
  fonteInput.value = 'https://www2.susep.gov.br/safe/scripts/bnweb/bnmapi.exe?router=upload/27890';
  armazenarInput.value = 'https://soluçõescompliance...';
}

function preencherInfosParecer(){ 
  var id  = document.getElementById("inputIDParecer");
  var textParecer = document.getElementById("textAreaParecer-Parecer");
  var dataInicio = document.getElementById("dataInicioParecer");
  var dataFim = document.getElementById("dataFimParecer");
  var textplano = document.getElementById("textAreaPlanoParecer");

  var divArquivo = document.getElementById("divParaAddArquivo"); 


  id.value = "001";
  textParecer.textContent = "O Banco tem evoluído no processo de controle e prevenção ao risco de LDFT mediante a implementação de novos controles nas áreas de tesouraria e varejo, inovando tanto nos processos de on-boarding quanto nos processos de controles internos.";

  divArquivo.innerHTML = `<div class="blocoArquivo">
  <img src="./assets/icons/pdf-file.png" alt="">
  <div class="infosDoArquivo">
    <div>
      <p>Relatorio_AIR.pdf</p>
      <p>706 KB</p>
    </div>
    <img src="./assets/icons/seta-para-baixo.png" alt="">
  </div>
</div>`

}

