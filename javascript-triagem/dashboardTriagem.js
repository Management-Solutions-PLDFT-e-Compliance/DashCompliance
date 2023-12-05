var ctxSLAArea = document.getElementById('graficoSLAArea').getContext('2d');
var ctxPendenciasArea = document.getElementById('graficoPendenciasArea').getContext('2d');
var ctxAderNorm = document.getElementById('graficoAderenciaNorm').getContext('2d');

var dataSLAArea = {
    labels: ['Área 1', 'Área 2', 'Área 3', 'Área 4', 'Área 5'],
    datasets: [{
        label: 'Valores das Barras',
        backgroundColor: "rgb(091,155,213)",
        borderWidth: 1,
        data: [41, 30, 90, 30, 45],
        barPercentage: 0.5
    }]
};

var dataPendenciasArea = {
    labels: ['Tesouraria', 'Controles Internos', 'PLDFT', 'Asset Managment', 'Crédito'],
    datasets: [{
        data: [2, 9, 5, 15, 10],
        backgroundColor: ['rgb(183,193,223)', 'rgb(141,159,209)', 'rgb(219,221,225)', 'rgb(066,112,193)', 'rgb(048,082,145)'],
    }]
};

var dataAderNorm = {
    labels: ['Bacen', 'CVM', 'Susep', 'Outros'],
    datasets: [{
        label: 'Valores das Barras',
        backgroundColor: ['rgb(209,152,230)', 'rgb(145,061,136)', 'rgb(247,111,234)', 'rgb(169,081,223)'],
        borderWidth: 1,
        data: [34, 30, 75, 89],
        barPercentage: 0.7,
        categoryPercentage: 0.7
    }]
}

// Configurações do gráfico
var optionsSLAArea = {
    scales: {
        y: {
          beginAtZero: true,
          title:{
            display: true,
            text: "Dias"
          }
          
        }
      },

    plugins: {
        legend: {
            position: 'right', // Coloca a legenda à direita do gráfico
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

var optionsPendenciasArea = {
    plugins: {

        legend: {
            position: 'right', // Coloca a legenda à direita do gráfico
            display: true,
            labels: {
                padding: 40  // Ajuste este valor conforme necessário para definir o espaço entre a legenda e o gráfico
            }
        },
        datalabels: {
            formatter: (value, context) => {
                return value; // Pode personalizar o formato conforme necessário
            },
            color: 'black',
            anchor: 'center',
            align: 'center',
            font: {
                size: 20
            },
        }
    }
};

var optionsAderNorm = {
    scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      },

    plugins: {
        legend: {
            position: 'right', // Coloca a legenda à direita do gráfico
            display: false,
        },
        datalabels: {
            formatter: (value, context) => {
                return value + "%"; // Pode personalizar o formato conforme necessário
            },
            anchor: 'end',
            align: 'end',
            color: 'black',
            font: {
                size: 20
            }
        },
        
    }
};

Chart.register(ChartDataLabels)

// Crie o gráfico de barras
var SLAArea = new Chart(ctxSLAArea, {
    type: 'bar',
    data: dataSLAArea,
    options: optionsSLAArea
});

var setoresChart = new Chart(ctxPendenciasArea, {
    type: 'pie',
    data: dataPendenciasArea,
    options: optionsPendenciasArea
});

var aderNorm = new Chart(ctxAderNorm, {
    type: 'bar',
    data: dataAderNorm,
    options: optionsAderNorm
})