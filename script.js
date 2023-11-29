if(document.getElementById('formLogin')){
  document.getElementById('formLogin').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const usuario = document.getElementById('loginUsuario').value;
    const senha = document.getElementById('loginSenha').value;
  
    if (usuario.trim() !== '' && senha.trim() !== '') {
        localStorage.setItem('usuario', usuario);
        window.location.href = './home.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
  });
}

const usuarioGlobal = localStorage.getItem('usuario');

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
  
    const usuario = document.getElementById('loginUsuario').value;
    const senha = document.getElementById('loginSenha').value;
  
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
  const paragrafos = document.querySelectorAll('#horaAtualizada');
  paragrafos.forEach((paragrafo)=>{
    paragrafo.textContent = `Atualizado ${horas.replace(':', 'h')} ${horaFormatada.split(',')[0]}`;
  });
}

if(document.getElementById('horaAtualizada')){
  atualizarHorario();
}

if(document.querySelector('.campoData')){
  const camposData = document.querySelectorAll('.campoData');

    camposData.forEach(function (campo) {
      campo.addEventListener('input', function (event) {
        const input = event.target;
        let valor = input.value.replace(/\D/g, '');
        if (valor.length > 8) {
          valor = valor.slice(0, 8);
        }
        if (valor.length > 4) {
          valor = valor.replace(/^(\d{2})(\d{2})(\d{4})$/, function (match, dia, mes, ano) {
            
            const data = new Date(`${ano}-${mes}-${dia}T00:00:00`);
            const anoAtual = new Date().getFullYear();
            const anoMinimo = 1900;
            const anoMaximo = 2100;

            if (
              !isNaN(data.getTime()) &&
              ano >= anoMinimo && ano <= anoMaximo &&
              mes >= 1 && mes <= 12 && 
              dia >= 1 && dia <= new Date(ano, mes, 0).getDate() // 
            ) {
              return `${dia}/${mes}/${ano}`;
            } else {
              return match;
            }
          });
        } else if (valor.length > 2) {
          valor = valor.replace(/^(\d{2})(\d{2})$/, '$1/$2');
        }
        input.value = valor;
      });
    });
  
}

if(document.querySelector(".botaoAbrirPesquisa")){
  let botoes = document.querySelectorAll(".botaoAbrirPesquisa");
  let paginaBibliotecaBusca = document.querySelector(".capturaBiblioteca");
  let paginaPesquisa = document.querySelector(".capturaPesquisa");
  let buscaNorma = document.querySelector(".capturaPesquisaBuscaNormativos");
  let conteudo = document.querySelector(".capturaPesquisaConteudo");
  let norma = document.querySelector(".capturaPesquisaNormativo");

  botoes.forEach((botao)=>{
    botao.addEventListener("click", ()=>{
      paginaBibliotecaBusca.classList.replace('showBiblioteca', 'hiddenBiblioteca');
      paginaPesquisa.classList.replace('hiddenPesquisa', 'showPesquisa');
      buscaNorma.classList.replace('hiddenPesquisa', 'showPesquisa');
      conteudo.classList.replace('hiddenPesquisa', 'showPesquisa');
      norma.classList.replace('hiddenPesquisa', 'showPesquisa');
    })
  })
}

if(document.querySelector(".abaBiblioteca")){
  let abaBiblioteca = document.querySelector(".abaBiblioteca");
  let paginaBibliotecaBusca = document.querySelector("#capturaBiblioteca");
  let paginaPesquisa = document.querySelector("#capturaPesquisa");
  let buscaNorma = document.querySelector(".capturaPesquisaBuscaNormativos");
  let conteudo = document.querySelector(".capturaPesquisaConteudo");
  let norma = document.querySelector(".capturaPesquisaNormativo");

  abaBiblioteca.addEventListener("click", ()=>{
    if(paginaBibliotecaBusca.classList.contains("hiddenBiblioteca")){
      paginaBibliotecaBusca.classList.add('showBiblioteca');
      paginaBibliotecaBusca.classList.remove('hiddenBiblioteca');
      paginaPesquisa.classList.add('hiddenPesquisa');
      paginaPesquisa.classList.remove('showPesquisa');

      buscaNorma.classList.replace('showPesquisa', 'hiddenPesquisa');
      conteudo.classList.replace('showPesquisa', 'hiddenPesquisa');
      norma.classList.replace('showPesquisa', 'hiddenPesquisa');
    }
  })
}

if(document.querySelector(".comprimentos")){
  document.querySelector(".comprimentos").textContent = `Olá ${usuarioGlobal}!`;
}





