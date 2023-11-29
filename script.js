let tabsAtendimento = document.querySelectorAll(".tabsAtendimento h3");
let tabContents = document.querySelectorAll(".tab-content .content");

tabsAtendimento.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabsAtendimento.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents[index].classList.add("active");
    tabsAtendimento[index].classList.add("active");
  });
});

let tabsTriagem = document.querySelectorAll(".tabsTriagem h3");

tabsTriagem.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabsTriagem.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents[index].classList.add("active");
    tabsTriagem[index].classList.add("active");
  });
});
let tabsCaptura = document.querySelectorAll(".tabsCaptura h3");

tabsCaptura.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabsCaptura.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents[index].classList.add("active");
    tabsCaptura[index].classList.add("active");
  });
});

if(document.getElementById('formLogin')){
  document.getElementById('formLogin').addEventListener('submit', function (event) {
    event.preventDefault();
  
    var usuario = document.getElementById('loginUsuario').value;
    var senha = document.getElementById('loginSenha').value;
  
    if (usuario.trim() !== '' && senha.trim() !== '') {
        window.location.href = './home.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
  });
}

function atualizarHorario() {
  const fusoHorario = 'America/Sao_Paulo';
  const dataAtual = new Date();
  const opcoes = { 
    hour: '2-digit', 
    minute: '2-digit', 
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric',
    timeZone: fusoHorario 
  };

  const formatadorDataHora = new Intl.DateTimeFormat('pt-BR', opcoes);
  const horaFormatada = formatadorDataHora.format(dataAtual);

  const horas = horaFormatada.split(',')[1].trim();
  const paragrafo = document.getElementById('horaAtualizada');
  paragrafo.textContent = `Atualizado ${horas.replace(':', 'h')} ${horaFormatada.split(',')[0]}`;
}

if(document.getElementById('horaAtualizada')){
  atualizarHorario();
}



