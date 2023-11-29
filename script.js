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
      conteudo.classList.replace('hiddenPesquisaFlex', 'showPesquisaFlex');
      norma.classList.replace('hiddenPesquisaFlex', 'showPesquisaFlex');
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
      conteudo.classList.replace('showPesquisaFlex', 'hiddenPesquisaFlex');
      norma.classList.replace('showPesquisaFlex', 'hiddenPesquisaFlex');
    }
  })
}

if(document.querySelector(".comprimentos")){
  document.querySelector(".comprimentos").textContent = `Olá ${usuarioGlobal}!`;
}

var incluirBotao = document.querySelector('.separadorCapAutoIncluir');

incluirBotao.addEventListener('click', function () {
  var regulador = document.getElementById('Regulador').checked;
  var descricao = document.getElementById('Descrição').value;
  var fonte = document.getElementById('Fonte').value;
  var formato = document.getElementById('Formato').value; 
  var periodicidade = document.getElementById('Periodicidade').value;

  let valorRegulador = regulador ? 'Regulador' : 'Outro';

  console.log(valorRegulador, descricao, fonte, formato, periodicidade);

  var tabela = document.querySelector('.tableVariaves tbody');

  tabela.innerHTML = tabela.innerHTML + 
  `<tr>
  <td>0006</td>
  <td>${valorRegulador}</td>
  <td>${descricao}</td>
  <td>${fonte}</td>
  <td>${formato}</td>
  <td>${periodicidade}</td>
  <td class="tableButton"><button class="botaoEngrenagemLixeira"><img src="/assets/icons/Engrenagem.png" alt="Descrição da Imagem" height="20px" width="20px"></button></td>
  <td class="tableButton"><button class="botaoEngrenagemLixeira"><img src="/assets/icons/Lixeira.png" alt="Descrição da Imagem" height="20px" width="20px"></button></td>
  </tr>`;

  Swal.fire({
    icon: 'success',
    title: 'Parâmetro incluído na captura automática!'})
});

var executarBotao = document.querySelector('.separadorCapManExecutar');
executarBotao.addEventListener('click', function () {

  Swal.fire({
    icon: 'success',
    title: 'Captura executada!'})
});

var NormativosPublicados = document.getElementById('NormativosPublicados').getContext('2d');

    const data = {
      labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
      datasets: [
        {
          label: "Bacen",
          data: [50, 11, 78, 57, 49, 99],
          fill: true,
          backgroundColor: "#cc94e4",
        },
        {
          label: "CVM",
          data: [106, 22, 44, 81, 64, 11],
          fill: true,
          backgroundColor: "#8c3c8c",
        },
        {
          label: "Susep",
          data: [0, 0, 0, 4, 19, 30],
          fill: true,
          backgroundColor: "#f46ce4",
        },
        {
          label: "Outros",
          data: [4, 10, 0, 6, 8, 14],
          fill: true,
          backgroundColor: "#ac54dc",
        },
      ],
    };

    var barCountSelector = document.getElementById('barCount');

    function updateChart() {
      const selectedBarCount = parseInt(barCountSelector.value, 10);
      const updatedData = {
        labels: data.labels.slice(0, selectedBarCount),
        datasets: data.datasets.map(dataset => ({
          ...dataset,
          data: dataset.data.slice(0, selectedBarCount),
        })),
      };

      myChart.data = updatedData;
      myChart.update();
    }

    const myChart = new Chart(NormativosPublicados, {
      type: "bar",
      data: data,
      options: {
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false,
            },
          },
          y: {
            stacked: true,
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        },
      },
    });



