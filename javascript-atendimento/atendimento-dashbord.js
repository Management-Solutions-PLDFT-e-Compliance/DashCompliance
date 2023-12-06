var ctxNormOrg = document.getElementById('GrafDashNormOrg').getContext('2d');

var ctxAreaDeman = document.getElementById('GrafDashAreaDeman').getContext('2d');

var ctxDemandasReg = document.getElementById('GrafDashDemandasReg').getContext('2d');

var ctxSLAArea = document.getElementById('GrafDashSLAArea').getContext('2d');

var ctxPendArea = document.getElementById('GrafDashPendArea').getContext('2d');

var ctxSolTema = document.getElementById('GrafDashSolTema').getContext('2d');


var dataNormOrg = {
    labels: ['Resolução', 'Carta Circular', 'Decreto', 'Lei', 'Circular'],
    datasets: [{
        label: 'Publicados',
        backgroundColor: "rgb(000,112,192)",
        borderWidth: 1,
        data: [29, 146, 245, 75, 158],
        barPercentage: 0.5
    },
    {
        label: 'Aplicáveis',
        backgroundColor: "rgb(201,201,201)",
        borderWidth: 1,
        data: [20, 80, 240, 70, 100],
        barPercentage: 0.5
    }]
};

var dataAreaDeman = {
    labels: ['Área 5', 'Área 6', 'Área 2', 'Área 4', 'Área 1', 'Área 3'],
    datasets: [{
        label: 'Quantidade',
        backgroundColor: "rgb(127,127,127)",
        borderWidth: 1,
        data: [60, 49, 43, 32, 20, 18],
        barPercentage: 0.5
    }]
};

var dataDemandasReg = {
    labels: ['Bacen', 'CVM', 'Susep', 'Outros'],
    datasets: [{
        label: 'Demandas',
        backgroundColor: ["rgb(203,150,227)", "rgb(141,062,136)", "rgb(240,111,231)", "rgb(169,081,223)"],
        borderWidth: 1,
        data: [53, 32, 29, 20],
        barPercentage: 0.5
    }]
};

var dataSLAArea = {
    labels: ['Crédito', 'Asset Mng', 'Controles Internos', 'Tesouraria', 'PLDFT'],
    datasets: [{
        label: 'Dias',
        backgroundColor: "rgb(000,032,096)",
        borderWidth: 1,
        data: [41, 30, 90, 30, 45],
        barPercentage: 0.5
    }]
};

var dataPendArea = {
    labels: ['Crédito', 'Asset Management', 'PLDFT', 'Controles Internos', 'Tesouraria'],
    datasets: [{
        label: 'Pendências',
        backgroundColor: ["rgb(049,084,147)", "rgb(059,100,173)", "rgb(068,114,196)", "rgb(143,162,212)", "rgb(186,196,226)"],
        data: [10, 15, 5, 9, 2],
        hoverOffset: 30
    }]
};

var dataSolTema = {
    labels: ['Crédito', 'Capital', 'PLDFT', 'Conduta', 'PIX'],
    datasets: [{
        label: 'Pendências',
        backgroundColor: ["rgb(049,084,147)", "rgb(059,100,173)", "rgb(068,114,196)", "rgb(143,162,212)", "rgb(186,196,226)"],
        data: [123, 147, 48, 109, 9],
        hoverOffset: 30
    }]
};

var optionsNormOrg = {
    scales: {
        y: {
          beginAtZero: true,
    
        }
      },

    plugins: {
        legend: {
            position: 'bottom',
            display: true
        },
        datalabels: {
            anchor: 'end',
            align: 'end',
            color: 'black',
            font: {
                size: 0
            }
        },
        
    }
};

var optionsAreaDeman = {
    scales: {
        y: {
          beginAtZero: true,
          title:{
            display: true,
            text: "Quantidade",
            font: {
                size: 20
            }
          },
        }
      },

    plugins: {
        legend: {
            position: 'bottom',
            display: false
        },
        datalabels: {
            anchor: 'end',
            align: 'end',
            color: 'black',
            font: {
                size: 0
            }
        },
        
    }
};

var optionsDemandasReg = {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
        max: 60
      },
      y: {
        beginAtZero: true,
        ticks: {
            font: {
                size: 18 // Ajuste o tamanho da fonte conforme necessário
            }
        }
      }
    },
    plugins: {
        legend: {
            position: 'bottom',
            display: false
        },
      datalabels: {
        anchor: 'end',
        align: 'end',
        color: 'black',
        font: {
          weight: 'bold',
          size: 20
        }
      }
    }
  };

var optionsSLAArea = {
    scales: {
        y: {
          beginAtZero: true,
          title:{
            display: true,
            text: "Dias",
            font: {
                size: 20
            }
          },
        }
      },

    plugins: {
        legend: {
            position: 'bottom',
            display: false
        },
        datalabels: {
            anchor: 'end',
            align: 'end',
            color: 'black',
            font: {
                size: 0
            }
        },
        
    }
};

var optionsPendArea = {
    plugins: {
      legend: {
        position: 'right',
        align: 'center',
        labels: {
            padding: 20,// Ajuste a margem conforme necessário
          },
          
      },
      datalabels: {
        color: 'white',
        font: {
          weight: 'bold',
          size: 20
        },
        // formatter: function(value, context) {
        //   return context.dataset.data[context.dataIndex] + '%';
        // }
      }
    }
  }

var optionsSolTema = {
    plugins: {
        legend: {
        position: 'right',
        align: 'center',
        labels: {
            padding: 20,// Ajuste a margem conforme necessário
            },
            
        },
        datalabels: {
        color: 'white',
        font: {
            weight: 'bold',
            size: 20
        },
        // formatter: function(value, context) {
        //   return context.dataset.data[context.dataIndex] + '%';
        // }
        }
    }
}

Chart.register(ChartDataLabels);

var NormOrg = new Chart(ctxNormOrg, {
    type: 'bar',
    data: dataNormOrg,
    options: optionsNormOrg
});

var AreaDeman = new Chart(ctxAreaDeman, {
    type: 'bar',
    data: dataAreaDeman,
    options: optionsAreaDeman
});

var DemandasReg = new Chart(ctxDemandasReg, {
    type: 'bar',
    data: dataDemandasReg,
    options: optionsDemandasReg
});

var SLAArea = new Chart(ctxSLAArea, {
    type: 'bar',
    data: dataSLAArea,
    options: optionsSLAArea
});

var PendArea = new Chart(ctxPendArea, {
    type: 'doughnut',
    data: dataPendArea,
    options: optionsPendArea
});

var SolTema = new Chart(ctxSolTema, {
    type: 'doughnut',
    data: dataSolTema,
    options: optionsSolTema
});

//--------------------------------------------//


function atualizaGrafNormaApp(){
    const selectedOption = document.getElementById('selecionaMesNormaApp').value;

    // Atualizar os dados do gráfico com base na opção selecionada
    switch (selectedOption) {
        case 'nov':
            NormOrg.data.datasets[0].data = [29, 146, 245, 75, 158];
            NormOrg.data.datasets[1].data = [20, 80, 240, 70, 100];
            break;
        case 'set':
            NormOrg.data.datasets[0].data = generateRandomArray(245, 20, 5);
            NormOrg.data.datasets[1].data = generateRandomArray(245, 20, 5);
            break;
        case 'out':
            NormOrg.data.datasets[0].data = generateRandomArray(245, 20, 5);
            NormOrg.data.datasets[1].data = generateRandomArray(245, 20, 5);
            break;
        default:
            break;
    }

    NormOrg.update();
  }

  function atualizaGrafAreaDeman(){
    const selectedOption = document.getElementById('selecionaMesAreaDeman').value;

    // Atualizar os dados do gráfico com base na opção selecionada
    switch (selectedOption) {
        case 'nov':
            AreaDeman.data.datasets[0].data = [60, 49, 43, 32, 20, 18];
            break;
        case 'set':
            AreaDeman.data.datasets[0].data = generateRandomArray(60, 18, 6);
            break;
        case 'out':
            AreaDeman.data.datasets[0].data = generateRandomArray(60, 18, 6);
            break;
        default:
            break;
    }

    AreaDeman.update();
  }

  function atualizaGrafDemandasReg(){
    const selectedOption = document.getElementById('selecionaMesDemandasReg').value;

    // Atualizar os dados do gráfico com base na opção selecionada
    switch (selectedOption) {
        case 'nov':
            DemandasReg.data.datasets[0].data = [53, 32, 29, 20];
            break;
        case 'set':
            DemandasReg.data.datasets[0].data = generateRandomArray(53, 20, 4);
            break;
        case 'out':
            DemandasReg.data.datasets[0].data = generateRandomArray(53, 20, 4);
            break;
        default:
            break;
    }

    DemandasReg.update();
  }

//Gerar array Aleatório
function generateRandomArray(min, max, length) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArray.push(randomNumber);
    }
    return randomArray;
  }

//-------------------------------//


document.addEventListener("DOMContentLoaded", function () {
    tabelaCalorArea();
    tabelaCalorImpacto();
  });

  function tabelaCalorArea(){
    const table = document.getElementById("heatmapArea");
    const colorSwapping = document.getElementById("colorSwappingArea");
  
    const colors = [
        "#00FF00", // Verde
        "#33FF00",
        "#66FF00",
        "#99FF00",
        "#CCFF00",
        "#FFFF00", // Amarelo
        "#FFCC00",
        "#FF9900",
        "#FF6600",
        "#FF3300",
        "#FF0000"  // Vermelho
      ];
  
    const steps = colors.length;
    colorSwapping.setAttribute("max", steps - 1); // Configurar o máximo do controle deslizante

    colorSwapping.value = 0;
  
    // Função para criar a tabela inicial
    function createHeatmap() {
      for (let i = 0; i < 5; i++) {
        const row = table.insertRow();
        for (let j = 0; j < 5; j++) {
          const cell = row.insertCell();
          const value = Math.floor(Math.random() * 100); // Valor aleatório de 0 a 100
          cell.textContent = value;
          cell.style.backgroundColor = getColor(value, 0); // Iniciar com a cor completa
        }
      }
    }
  
    // Função para obter a cor com base no valor
    function getColor(value, stepValue) {
      if (stepValue === 0) {
        // Na posição zero, mostrar todas as cores
        return colors[0];
      }
      
      const interval = (100 - 0) / (steps - 1);
      const index = Math.ceil((value) / interval);
      return colors[index];
    }
  
    // Função para atualizar as cores da tabela conforme o intervalo selecionado
    function updateColors() {
      const cells = document.querySelectorAll("#heatmapArea td");
      const swappingValue = colorSwapping.value;
  
      cells.forEach((cell) => {
        const value = parseInt(cell.textContent, 10);
        const cellColor = getColor(value, swappingValue);
  
        const stepValue = Math.round(swappingValue);
        if (stepValue === 0) {
          cell.style.backgroundColor = cellColor;
          cell.classList.remove("highlighted");
        } else if (value / 100 > (stepValue - 1) / (steps - 1) && value / 100 <= stepValue / (steps - 1)) {
          cell.style.backgroundColor = cellColor;
          cell.classList.remove("highlighted");
        } else {
          cell.style.backgroundColor = "#ddd"; // Cinza claro para valores não correspondentes
          cell.classList.add("highlighted");
        }
      });
    }
  
    // Event listener para o input de troca de cor
    colorSwapping.addEventListener("input", updateColors);
  
    // Inicializar a tabela
    createHeatmap();
    updateColors();
  }

  function tabelaCalorImpacto(){
    const table = document.getElementById("heatmapImpacto");
    const colorSwapping = document.getElementById("colorSwappingImpacto");
  
    const colors = [
        "#00FF00", // Verde
        "#33FF00",
        "#66FF00",
        "#99FF00",
        "#CCFF00",
        "#FFFF00", // Amarelo
        "#FFCC00",
        "#FF9900",
        "#FF6600",
        "#FF3300",
        "#FF0000"  // Vermelho
      ];
  
    const steps = colors.length;
    colorSwapping.setAttribute("max", steps - 1); // Configurar o máximo do controle deslizante

    colorSwapping.value = 0;
  
    // Função para criar a tabela inicial
    function createHeatmap() {
      for (let i = 0; i < 5; i++) {
        const row = table.insertRow();
        for (let j = 0; j < 5; j++) {
          const cell = row.insertCell();
          const value = Math.floor(Math.random() * 100); // Valor aleatório de 0 a 100
          cell.textContent = value;
          cell.style.backgroundColor = getColor(value, 0); // Iniciar com a cor completa
        }
      }
    }
  
    // Função para obter a cor com base no valor
    function getColor(value, stepValue) {
      if (stepValue === 0) {
        // Na posição zero, mostrar todas as cores
        return colors[0];
      }
      
      const interval = (100 - 0) / (steps - 1);
      const index = Math.ceil((value) / interval);
      return colors[index];
    }
  
    // Função para atualizar as cores da tabela conforme o intervalo selecionado
    function updateColors() {
      const cells = document.querySelectorAll("#heatmapImpacto td");
      const swappingValue = colorSwapping.value;
  
      cells.forEach((cell) => {
        const value = parseInt(cell.textContent, 10);
        const cellColor = getColor(value, swappingValue);
  
        const stepValue = Math.round(swappingValue);
        if (stepValue === 0) {
          cell.style.backgroundColor = cellColor;
          cell.classList.remove("highlighted");
        } else if (value / 100 > (stepValue - 1) / (steps - 1) && value / 100 <= stepValue / (steps - 1)) {
          cell.style.backgroundColor = cellColor;
          cell.classList.remove("highlighted");
        } else {
          cell.style.backgroundColor = "#ddd"; // Cinza claro para valores não correspondentes
          cell.classList.add("highlighted");
        }
      });
    }
  
    // Event listener para o input de troca de cor
    colorSwapping.addEventListener("input", updateColors);
  
    // Inicializar a tabela
    createHeatmap();
    updateColors();
  }