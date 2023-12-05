var ctxParecerAtraso = document.getElementById('parecer-atraso').getContext('2d');
var ctxPlanoAcao = document.getElementById('plano-acao-pendente').getContext('2d');


var dataParecerAtraso = {
    labels: ['Auditoria', 'Credito', 'Open Finance'],
    datasets: [{
        label: 'Valores das Barras',
        backgroundColor: createLinearGradientBar(ctxParecerAtraso, 'rgb(9,41,104)', 'rgba(157,195,230,255)'),
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [1, 1, 1],
        barPercentage: 0.5
    }]
};

var dataPlanoAcao = {
    labels: ['Câmbio', 'PIX', 'Sis. Pagamento'],
    datasets: [{
        label: 'Valores das Barras',
        backgroundColor: createLinearGradientBar(ctxPlanoAcao, 'rgb(9,41,104)', 'rgba(157,195,230,255)'),
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [3, 2, 1],
        barPercentage: 0.5
    }]
};

// Configurações do gráfico
var optionsParecerAtraso = {
    scales: {
        y: {
            display: false,
            suggestedMin: 0, // Valor mínimo sugerido
            suggestedMax: 2,
            beginAtZero: true,
            grid: {
                display: false // Remove a grade do eixo Y
            }
        },
        x: {
            beginAtZero: true,
            grid: {
                display: false // Remove a grade do eixo Y
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
                size: 20
            }
        },
        
    },
};

var optionsPlanoAcao = {
    scales: {
        y: {
            display: false,
            suggestedMin: 0, // Valor mínimo sugerido
            suggestedMax: 4,
            beginAtZero: true,
            grid: {
                display: false // Remove a grade do eixo Y
            }
        },
        x: {
            beginAtZero: true,
            grid: {
                display: false // Remove a grade do eixo Y
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
                size: 20
            }
        },
        
    }
};

Chart.register(ChartDataLabels)

// Crie o gráfico de barras
var parecerAtraso = new Chart(ctxParecerAtraso, {
    type: 'bar',
    data: dataParecerAtraso,
    options: optionsParecerAtraso
});

var planoAcao = new Chart(ctxPlanoAcao, {
    type: 'bar',
    data: dataPlanoAcao,
    options: optionsPlanoAcao
});

function createLinearGradientBar(ctx, colorInicio, colorFim) {
    var gradient = ctx.createLinearGradient(0, 0, 0, 130);
    gradient.addColorStop(0, colorInicio); // Cor no início do gradiente
    gradient.addColorStop(1, colorFim); // Cor no final do gradiente
    return gradient;
}

const triagemComplianceConfigurar = document.getElementById("triagem-compliance-engrenagem")
const triagemComplianceConteudoPreAnaliseDetalhe = document.getElementById("conteudo-pre-analise-detalhe")
let triagemComplianceMostrar = false

// triagemComplianceConteudoPreAnaliseDetalhe.classList.add('triagem-compliance-mostrar-pre-analise')
triagemComplianceConfigurar.addEventListener("click", function() {
    triagemComplianceMostrar = !triagemComplianceMostrar
    if(triagemComplianceMostrar) {
        triagemComplianceConteudoPreAnaliseDetalhe.style.display = 'flex'
    } else {
        triagemComplianceConteudoPreAnaliseDetalhe.style.display = 'none'
    }
})

const lerMaisArray = document.getElementsByClassName("ler-mais")
const conteudoNormativoRelacionado = document.getElementsByClassName("card-conteudo-normativo-relacionado")[0]

lerMaisArray[0].addEventListener("click", function() {
    console.log("aquiiiii")
})
lerMaisArray[1].addEventListener("click", function() {
    console.log("aquiiiii")
})

// PAGINA COMPLIANCE BOTÃO ABRIR DA TABELA

const triagemComplianceBtnAbrir = document.getElementById("triagem-compliance-btn-abrir")
const triagemCompliance = document.getElementsByClassName("triagem-compliance")[0]
const triagemComplianceVisualizarDashboard = document.getElementsByClassName("triagem-compliance-visualizar-dashboard")[0]

triagemComplianceBtnAbrir.addEventListener("click", function() {
    triagemCompliance.style.display = "none"
    triagemComplianceVisualizarDashboard.style.display = "flex"
})