var imported = document.createElement('script');
imported.src = "https://cdn.canvasjs.com/ga/canvasjs.stock.min.js";
document.head.appendChild(imported);

const inTitulo = document.getElementById('inTitulo');
const btMostrar = document.getElementById('btMostrar');

class Grafico{
    constructor(titulo, tituloX, dados, tipo){
        this.titulo = titulo;
        this.tituloX = tituloX;
        this.dados = dados;
        this.tipo = tipo;
    }
}

let grafico = ''; 

// RETORNA OS DADOS NA FORMA DE TABELA
const showData = () => {
    let vetInfos = [];
    let vetQtds = [];
    let vetDatas = [];
    
    const tdInfos = document.querySelectorAll('.tdInfo');
    tdInfos.forEach(info => {
        vetInfos.push(info.value);
    });
    
    const tdQtds = document.querySelectorAll('.tdQtd');
    tdQtds.forEach(qtd => {
        vetQtds.push(qtd.value);
    });
    
    for(i in vetInfos){
        if(vetInfos[i] != "" && vetQtds[i] != ""){
            vetDatas.push({
                label: vetInfos[i],
                y: Number(vetQtds[i])
            });
        }
    }
    
    return vetDatas;
}

// RENDERIZA O GRÁFICO USANDO A BIBLIOTECA
const renderChart = (grafico) =>{
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: grafico.titulo
        },
        axisY: {
            title: "",
            suffix: ""
        },
        axisX: {
            title: grafico.tituloX
        },
        data: [{
            type: grafico.tipo,
            yValueFormatString: "#,##0.0#"%"",
            dataPoints: grafico.dados
        }]
    });
    
    chart.render();
}

// ALTERA O TIPO DO GRÁFICO EXIBIDO NA TELA
const btChartType = document.querySelectorAll('.chartType');
btChartType.forEach(button => {
    button.addEventListener('click', ()=>{
        grafico.tipo = button.classList[1];
        renderChart(grafico)
    })
})

// EVENTOS QUE ACONTECEM AO CLICAR PARA MOSTRAR
btMostrar.addEventListener('click', ()=>{
    // CRIAÇÃO DO NOVO GRÁFICO
    grafico = new Grafico(inTitulo.value, inDadoColetado.value, showData(), 'column')
    renderChart(grafico);

    // HABILITAÇÃO/DESABILITAÇÃO DO TIPO DE GRÁFICO DE ACORDO COM O TIPO DE VARIÁVEL
    const tipoGrafico = document.getElementById('inTipoVariavel');
    if(tipoGrafico.value == 'qualitativa'){
        document.querySelector('.line').disabled = true;
        document.querySelector('.area').disabled = true;

        let maiorQtd = grafico.dados[0].y;
        let maior;
        grafico.dados.forEach(dado => {
            console.log(dado.y);
            
            if(dado.y > maiorQtd){
                maiorQtd = dado.y;
                maior = dado;
            }
        })
        console.log(maior);
        
    }
})
