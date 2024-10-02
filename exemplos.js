
// EXEMPLO DOS ANDRÉS
btAndres.addEventListener('click', ()=>{
    const vetAndres = [
        {
            label: '1930', 
            y: 1146
        },
        {
            label: 1940,
            y: 2750
        },
        {
            label: 1950,
            y: 4417
        },
        {
            label: 1960,
            y: 8716
        },
        {
            label: 1970,
            y: 30063
        },
        {
            label: 1980,
            y: 123951
        },
        {
            label: 1990,
            y: 190123
        },
        {
            label: 2000,
            y: 128736
        },
        {
            label: 2010,
            y: 89073
        },
    ];

    grafico = new Grafico('Quantidade de Andrés nascidos no Brasil ao longo das décadas', 'Ano', vetAndres, 'line')
    renderChart(grafico);
})