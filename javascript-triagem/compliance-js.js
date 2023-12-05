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
const conteudoNormativoRevogado= document.getElementsByClassName("card-conteudo-normativo-revogado")[0]

lerMaisArray[0].addEventListener("click", function() {

    if(lerMaisArray[0].innerHTML == "Ler mais") {
        conteudoNormativoRelacionado.innerHTML = "Resolução CMN 4.817/2020 | 4.818/2020 | 4.966/2021 Resolução BCB 219/2022 <br /> Circular 2.535/1995 | 2.951/1999 | 3.001/2000 | 3.233/2004 | 3.252/2004 | 3.693/2013 | 3.722/2014 | 3.738/2014"
        lerMaisArray[0].innerHTML = "Ler menos"
    } else {
        conteudoNormativoRelacionado.innerHTML = "Resolução CMN (4.817/2020 | 4.818/2020..."
        lerMaisArray[0].innerHTML = "Ler mais"
    }
})
lerMaisArray[1].addEventListener("click", function() {
    if(lerMaisArray[1].innerHTML == "Ler mais") {
        conteudoNormativoRevogado.innerHTML = "Circulares BCB ns. 2.535/1995, 2.951/1999, 3.001/2000, 3.233/2004, 3.252/2004, 3.693/2013, 3.722/2014 e 3.738/2014"
        lerMaisArray[1].innerHTML = "Ler menos"
    } else {
        conteudoNormativoRevogado.innerHTML = "Circulares BCB ns.2.535/1995, 2.951/1999..."
        lerMaisArray[1].innerHTML = "Ler mais"
    }
})

// PAGINA COMPLIANCE BOTÃO ABRIR DA TABELA

const triagemComplianceBtnAbrir = document.getElementById("triagem-compliance-btn-abrir")
const triagemComplianceVisualizarDashboardBtnFechar = document.getElementById("triagem-compliance-visualiza-dashboard-btn-fechar")
const triagemCompliance = document.getElementsByClassName("triagem-compliance")[0]
const triagemComplianceVisualizarDashboard = document.getElementsByClassName("triagem-compliance-visualizar-dashboard")[0]

triagemComplianceBtnAbrir.addEventListener("click", function() {
    triagemCompliance.style.display = "none"
    triagemComplianceVisualizarDashboard.style.display = "flex"
})

triagemComplianceVisualizarDashboardBtnFechar.addEventListener("click", function() {
    triagemCompliance.style.display = "flex"
    triagemComplianceVisualizarDashboard.style.display = "none"
})
// FUNCIONALIDADE NOTIFICACOES

const notificacaoAtraso = document.getElementById("notificacao-atraso")
const notificacaoParecer = document.getElementById("notificacao-parecer")
const notificacaoTitulo = document.getElementById("notificacao-titulo")
const tableComplianceConteudo = document.getElementById("table-compliance-conteudo")
const tableComplianceVencido = document.getElementById("table-compliance-vencido")
const tableComplianceParecer = document.getElementById("table-compliance-parecer")

notificacaoAtraso.addEventListener("click", function() {
    notificacaoTitulo.innerHTML = "Normativos vencidos"
    notificacaoParecer.style.backgroundColor = "#fff"
    notificacaoAtraso.style.backgroundColor = "#e4e4e4"

    tableComplianceConteudo.style.display = 'none'
    tableComplianceVencido.style.display = 'block'
    tableComplianceParecer.style.display = 'none'
})

notificacaoParecer.addEventListener("click", function() {
    notificacaoTitulo.innerHTML = "Normativos respondidos"
    notificacaoAtraso.style.backgroundColor = "#fff"
    notificacaoParecer.style.backgroundColor = "#e4e4e4"

    tableComplianceConteudo.style.display = 'none'
    tableComplianceVencido.style.display = 'none'
    tableComplianceParecer.style.display = 'block'
})

//  ABRIR TELA TRIAGEM COMPLIANCE RESPOSTA 

const triagemComplianceBtnVisualizar = document.getElementById("triagem-compliance-btn-visualizar")
const triagemComplianceRespotaBtnFechar = document.getElementById("triagem-compliance-resposta-fechar")
const triagemComplianceRespondidos = document.getElementsByClassName("triagem-compliance-respondidos")[0]

triagemComplianceBtnVisualizar.addEventListener("click", function() {
    triagemCompliance.style.display = "none"
    triagemComplianceRespondidos.style.display = "flex"
})

triagemComplianceRespotaBtnFechar.addEventListener("click", function() {
    triagemCompliance.style.display = "flex"
    triagemComplianceRespondidos.style.display = "none"
})


const triagemComplianceBtnNotificar = document.getElementById("triagem-compliance-btn-notificar")

triagemComplianceBtnNotificar.addEventListener("click", function() {
    Swal.fire({
        icon: 'success',
        title: 'Notificação enviada com sucesso!'
    })
})

const triagemComplianceVisualizarDashboardBtnDistribuir = document.getElementById("triagem-compliance-visualiza-dashboard-btn-distribuir")

triagemComplianceVisualizarDashboardBtnDistribuir.addEventListener("click", function() {
    Swal.fire({
        icon: 'success',
        title: 'Normativo distribuído com sucesso!'
    })
})
