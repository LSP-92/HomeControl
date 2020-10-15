import { renderChart } from './graphics.js'

const socket = io ("http://localhost:3000")
socket.emit('connection')


function main() {
  renderChart()

  const buttons = document.querySelector('.buttons')
  const innputBtn = [...buttons.querySelectorAll('.btn')]

  innputBtn.filter(item => {
    item.addEventListener('click', sendData)
  })

  function sendData(ev) {
    socket.emit('relay', ev.target.id)
    socket.on('request', (value) => {
      changeState(value)
    })
  }

  function changeState(value) {
    console.log(value)
    const flash = buttons.querySelector(`#channel${value[1]}`)
    if (value[0]===1) {      
      flash.src='../images/lightOn.png'
    } else {
      flash.src='../images/icons8-ceiling-light-64.png'
    }
    console.log(flash)
  }
}

document.addEventListener('DOMContentLoaded', main)