function main (){
  let contador = 0
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
    addData(chart, time.toUTCString(), dataRam())
    console.log('click')
    console.log(chart.data.datasets[0].data)
    setTimeout(log, 10000)
  }

  function addData(chart, label, data) {    
    chart.data.labels.push(label)
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data)
        contador ++
    })

    if (contador === 3){
      chart.data.datasets[0].data.shift()
      chart.data.labels.shift()
      contador = 0
    }
    
    chart.update();
  }



  function dataRam() { // Genera numero aleatorios para pruebas 
    const aleatorio = Math.round(Math.random()*10)
    return aleatorio
  }  
}

document.addEventListener('DOMContentLoaded', main)