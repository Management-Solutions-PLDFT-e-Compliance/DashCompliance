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

//Mapa de calor

let dadosMapaCalor = [
    {
      "id" : "BR-AC",
      "value" : Math.floor(Math.random()*100)
    },
    {
      "id" : "BR-AL",
      "value" : Math.floor(Math.random()*100)
    },
    {
      "id" : "BR-AP",
      "value" : Math.floor(Math.random()*100)
    },
    {
      "id" : "BR-AM",
      "value" : Math.floor(Math.random()*100)
    },
    {
      "id" : "BR-BA",
      "value" : Math.floor(Math.random()*100)
    },
    {
      "id" : "BR-CE",
      "value" : Math.floor(Math.random()*100)
    },
    {
      "id" : "BR-DF",
      "value" : Math.floor(Math.random()*100)
    },
    {
      "id" : "BR-ES",
      "value" : Math.floor(Math.random()*100)
    },
    {
      "id" : "BR-GO",
      "value" : Math.floor(Math.random()*100)
    },
    {
      "id" : "BR-MA",
      "value" : Math.floor(Math.random()*100)
    },
    {
      "id" : "BR-MT",
      "value" : Math.floor(Math.random()*100)
    },
    {
      "id" : "BR-MS",
      "value" : Math.floor(Math.random()*100)
    },
    {
      "id" : "BR-MG",
      "value" : Math.floor(Math.random()*100)
    },
    {
      "id" : "BR-PA",
      "value" : Math.floor(Math.random()*100)
    },
    {
      "id" : "BR-PB",
      "value" : Math.floor(Math.random()*100)
    },
    {
      "id" : "BR-PR",
      "value" : Math.floor(Math.random()*100)
    },
    {
      "id" : "BR-PE",
      "value" : Math.floor(Math.random()*100)
    },
    {
      "id" : "BR-PI",
      "value" : Math.floor(Math.random()*100)
    },
    {
      "id" : "BR-RJ",
      "value" : Math.floor(Math.random()*100)
    },
    {
      "id" : "BR-RN",
      "value" : Math.floor(Math.random()*100)
    },
    {
      "id" : "BR-RS",
      "value" : Math.floor(Math.random()*100)
    },
    {
      "id" : "BR-RO",
      "value" : Math.floor(Math.random()*100)
    },
    {
      "id" : "BR-RR",
      "value" : Math.floor(Math.random()*100)
    },
    {
      "id" : "BR-SC",
      "value" : Math.floor(Math.random()*100)
    },
    {
      "id" : "BR-SP",
      "value" : Math.floor(Math.random()*100)
    },
    {
      "id" : "BR-SE",
      "value" : Math.floor(Math.random()*100)
    },
    {
      "id" : "BR-TO",
      "value" : Math.floor(Math.random()*100)
    }
  ];

  // Define o local e tipo de gráfico
let chartMapaCalor = am4core.create("graficoMapaCalor", am4maps.MapChart);


// Atribui o 'brazilLow' como o mapa
// Você pode optar pelo 'brazilHigh', basta alterar aqui e src do script no html
// Também define que as partes que montam o mapa serão com base no MapPolygonSeries
chartMapaCalor.geodata = am4geodata_brazilLow;
let polygonSeriesMapaCalor = chartMapaCalor.series.push(new am4maps.MapPolygonSeries());
polygonSeriesMapaCalor.data = dadosMapaCalor;
polygonSeriesMapaCalor.useGeodata = true;


// Preenche os dados para fazer o mapa de calor
// Faremos com que os menores valores sejam verdes e maiores sejam vermelhos
polygonSeriesMapaCalor.heatRules.push({
  property: "fill",
  target: polygonSeriesMapaCalor.mapPolygons.template,
  min: am4core.color("#FFFF00"),
  max: am4core.color("#FF0000")
});


// Define as legendas, posição e cores.
let heatLegend = chartMapaCalor.createChild(am4maps.HeatLegend);
heatLegend.series = polygonSeriesMapaCalor;
heatLegend.align = "right";
heatLegend.width = am4core.percent(25);
heatLegend.marginRight = am4core.percent(4);
heatLegend.minValue = 0;
heatLegend.maxValue = 100;
heatLegend.valign = "bottom";


// Configuras os tooltips (texto ao passar o mouse)
let polygonTemplate = polygonSeriesMapaCalor.mapPolygons.template;
polygonTemplate.tooltipText = "{name}: {value}%";
polygonTemplate.nonScalingStroke = true;
polygonTemplate.strokeWidth = 0.5;


// Muda a cor do estado ao passar o mouse
let hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("grey").brighten(-0.5);

// Tabela de Calor

document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("heatmap");
    const colorSwapping = document.getElementById("colorSwapping");
  
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
      const cells = document.querySelectorAll("#heatmap td");
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
  });

  // Grafico Gauge do Plano Acao

  am5.ready(function() {
    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("graficoPlanoAcao");
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/radar-chart/
    var chart = root.container.children.push(am5radar.RadarChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      innerRadius: am5.percent(20),
      startAngle: -90,
      endAngle: 200
    }));

    chart.get("colors").set("colors", [
      am5.color(0xFD0102),
      am5.color(0xEFC320),
      am5.color(0x93D151),
    ]);
    
    
    // Data
    var data = [{
      category: "Finalizados",
      value: 23,
      full: 100,
      columnSettings: {
        fill: chart.get("colors").getIndex(2)
      }
    }, {
      category: "Pendentes",
      value: 46,
      full: 100,
      columnSettings: {
        fill: chart.get("colors").getIndex(0)
      }
    }, {
      category: "Em Andamento",
      value: 90,
      full: 100,
      columnSettings: {
        fill: chart.get("colors").getIndex(1)
      }
    }
    ];
    
    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Cursor
    var cursor = chart.set("cursor", am5radar.RadarCursor.new(root, {
      behavior: "zoomX"
    }));
    
    cursor.lineY.set("visible", false);
    
    // Create axes and their renderers
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
    var xRenderer = am5radar.AxisRendererCircular.new(root, {
      //minGridDistance: 50
    });
    
    xRenderer.labels.template.setAll({
      radius: 10
    });
    
    xRenderer.grid.template.setAll({
      forceHidden: true
    });
    
    var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
      renderer: xRenderer,
      min: 0,
      max: 100,
      strictMinMax: true,
      numberFormat: "#'%'",
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    
    var yRenderer = am5radar.AxisRendererRadial.new(root, {
      minGridDistance: 20
    });
    
    yRenderer.labels.template.setAll({
      centerX: am5.p100,
      fontWeight: "500",
      fontSize: 18,
      templateField: "columnSettings"
    });
    
    yRenderer.grid.template.setAll({
      forceHidden: true
    });
    
    var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "category",
      renderer: yRenderer
    }));
    
    yAxis.data.setAll(data);
    
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
    var series1 = chart.series.push(am5radar.RadarColumnSeries.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      clustered: false,
      valueXField: "full",
      categoryYField: "category",
      fill: root.interfaceColors.get("alternativeBackground")
    }));
    
    series1.columns.template.setAll({
      width: am5.p100,
      fillOpacity: 0.08,
      strokeOpacity: 0,
      cornerRadius: 20
    });
    
    series1.data.setAll(data);
    
    
    var series2 = chart.series.push(am5radar.RadarColumnSeries.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      clustered: false,
      valueXField: "value",
      categoryYField: "category"
    }));
    
    series2.columns.template.setAll({
      width: am5.p100,
      strokeOpacity: 0,
      tooltipText: "{category}: {valueX}%",
      cornerRadius: 20,
      templateField: "columnSettings"
    });
    
    series2.data.setAll(data);
    
    // Animate chart and series in
    // https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
    series1.appear(1000);
    series2.appear(1000);
    chart.appear(1000, 100);
    
    }); // end am5.ready()
