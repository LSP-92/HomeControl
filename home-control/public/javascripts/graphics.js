
export function renderChart (){
  Chart.platform.disableCSSInjection = true;
  const ctx = document.querySelector('#myChart').getContext('2d')
  const bton = document.querySelector('#reload')

  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Temperatura',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)'
        ],  
        borderWidth: 5,
      }]},
    options: {
      scales: {
        yAxes: [{
          ticks: {
            max: 50,
            min: -10,
            stepSize: 5,
          }
        }]
      }
    }
  })

  bton.addEventListener('click', log)
  function log() {
    const time = new Date
    addData(chart, time.toUTCString(), 35)
      /*setTimeout(log, 10000)*/
  }

  function addData(chart, label, data) {    
    chart.data.labels.push(label)
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data)
    })
    console.log(chart.data.labels.length)

    if (chart.data.labels.length === 7){
      chart.data.datasets[0].data.splice(0, 1)
      chart.data.labels.splice(0, 5)
    }
    
    chart.update();
  }

}

/* async function readTemp() {
  try {
    const temperatura = await fetch(url api)
  } catch (error) {
    alert('Error en la conexión')
  }
} */