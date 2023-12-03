if(document.getElementById('formLogin')){
  document.getElementById('formLogin').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const usuario = document.getElementById('loginUsuario').value;
    const senha = document.getElementById('loginSenha').value;
  
    if (usuario.trim() !== '' && senha.trim() !== '') {
        localStorage.setItem('usuario', usuario);
        window.location.href = './home.html';
    } else {
      Swal.fire({
        icon: "error",
        title: "Por favor, preencha todos os campos."
      });
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

function redirecionarParaLogin() {
  window.location.href = 'index.html';
}
function redirecionarParaHome() {
  window.location.href = 'home.html';
}


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
    paragrafo.textContent = `Última atualização em: ${horas.replace(':', 'h')} ${horaFormatada.split(',')[0]}`;
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

if(document.querySelector(".botaoAbrirPesquisa.botaoMain")){
  let botao = document.querySelector(".botaoAbrirPesquisa.botaoMain");
  let paginaBibliotecaBusca = document.querySelector(".capturaBiblioteca");
  let paginaPesquisa = document.querySelector(".capturaPesquisa");
  let buscaNorma = document.querySelector(".capturaPesquisaBuscaNormativos");
  let conteudo = document.querySelector(".capturaPesquisaConteudo");
  let norma = document.querySelector(".capturaPesquisaNormativo");



  botao.addEventListener("click", ()=>{
    paginaBibliotecaBusca.classList.replace('showBiblioteca', 'hiddenBiblioteca');
    paginaPesquisa.classList.replace('hiddenPesquisa', 'showPesquisa');
    buscaNorma.classList.replace('hiddenPesquisa', 'showPesquisa');
    conteudo.classList.replace('hiddenPesquisaFlex', 'showPesquisaFlex');
    norma.classList.replace('hiddenPesquisaFlex', 'showPesquisaFlex');
  });
}

if(document.querySelector("#botaoVoltarBiblioteca")){
  let botaoVoltar = document.querySelector("#botaoVoltarBiblioteca");
  let paginaBibliotecaBusca = document.querySelector("#capturaBiblioteca");
  let paginaPesquisa = document.querySelector("#capturaPesquisa");
  let buscaNorma = document.querySelector(".capturaPesquisaBuscaNormativos");
  let conteudo = document.querySelector(".capturaPesquisaConteudo");
  let norma = document.querySelector(".capturaPesquisaNormativo");

  botaoVoltar.addEventListener("click", ()=>{
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

function ReguladorOutros(checkboxId) {
  const reguladorCheckbox = document.getElementById('Regulador');
  const outroCheckbox = document.getElementById('Outro');

  if (checkboxId === 'Regulador' && reguladorCheckbox.checked) {
    outroCheckbox.checked = false;
  } else if (checkboxId === 'Outro' && outroCheckbox.checked) {
    reguladorCheckbox.checked = false;
  }
}

function CapcturaManualOpcoes(checkboxId) {
  const atuaTodosCheckbox = document.getElementById('AtuaTodos');
  const atuaEspeCheckbox = document.getElementById('AtuaEspe');
  const fonteEspecificaSelect = document.getElementById('FonteEspecifica');

  if (checkboxId === 'AtuaTodos' && atuaTodosCheckbox.checked) {
    atuaEspeCheckbox.checked = false;
    fonteEspecificaSelect.disabled = true; // Se AtuaTodos é marcado, desativa o select
  } else if (checkboxId === 'AtuaEspe' && atuaEspeCheckbox.checked) {
    atuaTodosCheckbox.checked = false;
    fonteEspecificaSelect.disabled = false; // Se AtuaEspe é marcado, ativa o select
  }
}


var incluirBotao = document.querySelector('.separadorCapAutoIncluir');

function preencheRegulador() {
  var descricaoInput = document.getElementById('Descrição');
  var fonteInput = document.getElementById('Fonte');
  var armazenarInput = document.getElementById('Armazenar');

  if (document.getElementById('Regulador').checked) {
    descricaoInput.value = 'Bacen';
    fonteInput.value = 'https://www.bcb.gov.br/resultadobusca?termo=3978&source=';
    armazenarInput.value = 'https://soluçõescompliance...';
  } else {
    descricaoInput.value = '';
    fonteInput.value = '';
    armazenarInput.value = '';
  }
}

function preencheOutros() {
  var descricaoInput = document.getElementById('Descrição');
  var fonteInput = document.getElementById('Fonte');
  var armazenarInput = document.getElementById('Armazenar');

  if (document.getElementById('Regulador').checked) {
    descricaoInput.value = '';
    fonteInput.value = '';
    armazenarInput.value = '';
  } else {
    descricaoInput.value = '';
    fonteInput.value = '';
    armazenarInput.value = '';
  }
}

incluirBotao.addEventListener('click', function () {
  var regulador = document.getElementById('Regulador').checked;
  var descricao = document.getElementById('Descrição').value;
  var fonte = document.getElementById('Fonte').value;
  var periodicidade = document.getElementById('Periodicidade').value;

  let valorRegulador = regulador ? 'Regulador' : 'Outro';

  var tabela = document.querySelector('.tableVariaves tbody');

  tabela.innerHTML = tabela.innerHTML + 
  `<tr>
  <td>0006</td>
  <td>${valorRegulador}</td>
  <td>${descricao}</td>
  <td>${fonte}</td>
  <td>html</td>
  <td>${periodicidade}</td>
  <td class="tableButton"><button class="botaoEngrenagemLixeira"><img src="./assets/icons/Engrenagem.png" alt="Descrição da Imagem" height="30px" width="30px"></button></td>
  <td class="tableButton"><button class="botaoEngrenagemLixeira"><img src="./assets/icons/Lixeira.png" alt="Descrição da Imagem" height="25px" width="25px"></button></td>
  </tr>`;

  document.getElementById('Regulador').checked = false;
  document.getElementById('Descrição').value = '';
  document.getElementById('Fonte').value = '';
  document.getElementById('Periodicidade').value = '';
  
  document.getElementById('Outro').checked = false;
  document.getElementById('Armazenar').value = '';
  document.getElementById('Horário').value ='';

  Swal.fire({
    icon: 'success',
    title: 'Parâmetro incluído na captura automática!'})
});

var executarBotao = document.querySelector('.separadorCapManExecutar');
executarBotao.addEventListener('click', function () {

  document.getElementById('AtuaTodos').checked = false;
  document.getElementById('AtuaEspe').checked = false;

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

    
    const description = document.querySelector(".tooltip");

		document.querySelectorAll('path').forEach((el) =>
			el.addEventListener('mouseover', (event) => {
				event.target.className = ("enabled");
				description.classList.add("active");
				description.innerHTML = event.target.id;
			})

		);

		document.querySelectorAll('path').forEach((el) =>
			el.addEventListener("mouseout", () => {
				description.classList.remove("active");
			})
		);

		document.onmousemove = function (e) {
			description.style.left = e.pageX + "px";
			description.style.top = (e.pageY - 70) + "px";
		}

    if(document.querySelector("#graficoNormaAplicaveis")){
      const ctx = document.getElementById('graficoNormaAplicaveis');
        const chartData = {
            labels: ['Resolução', 'Carta Circular', 'Decreto', 'Lei', 'Circular'],
            datasets: [
                {
                    label: 'Publicados',
                    data: [29, 146, 245, 75, 158],
                    backgroundColor: ['rgb(0,112,192)'],
                    borderWidth: 1
                },
                {
                    label: 'Vigentes',
                    data: [20, 80, 240, 70, 100],
                    backgroundColor: ['rgb(201,201,201)'],
                    borderWidth: 1
                }
            ]
        };

        const chartOptions = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        const myChart = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: chartOptions
        });

      function atualizaGrafNormaApp(){
        const selectedOption = document.getElementById('selecionaMesNormaApp').value;

        // Atualizar os dados do gráfico com base na opção selecionada
        switch (selectedOption) {
            case 'nov':
                myChart.data.datasets[0].data = [29, 146, 245, 75, 158];
                myChart.data.datasets[1].data = [20, 80, 240, 70, 100];
                break;
            case 'set':
                myChart.data.datasets[0].data = generateRandomArray(245, 20, 5);
                myChart.data.datasets[1].data = generateRandomArray(245, 20, 5);
                break;
            case 'out':
                myChart.data.datasets[0].data = generateRandomArray(245, 20, 5);
                myChart.data.datasets[1].data = generateRandomArray(245, 20, 5);
                break;
            default:
                break;
        }

        myChart.update();
      }
    }

    function generateRandomArray(min, max, length) {
      const randomArray = [];
      for (let i = 0; i < length; i++) {
          const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
          randomArray.push(randomNumber);
      }
      return randomArray;
    }