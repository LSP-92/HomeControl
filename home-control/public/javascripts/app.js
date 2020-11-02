import { renderChart } from './graphics.js'

const socket = io ("http://192.168.43.199:3000")
socket.emit('connection')


function main() {
  renderChart()

  const buttons = document.querySelector('.buttons')
  const innputBtn = [...buttons.querySelectorAll('.btn')]


  innputBtn.filter(item => {
    item.addEventListener('click', function(){sendData(item)})
  })

  function sendData(ev) {
    const img = ev.previousElementSibling
    if(ev.value === 'On') {
      img.previousElementSibling.setAttribute("src", "./images/lightOn.png");
    }
    if(ev.value === 'Off') {
      img.previousElementSibling.previousElementSibling.setAttribute("src", "./images/icons8-ceiling-light-64.png");
    }
    
    try {
      socket.emit('relay', ev.id)      
    } catch (err){
      console.dir(err)
      alert('Error socket, vuelva a intentarlo más tarde')
    }
 
  }
}

document.addEventListener('DOMContentLoaded', main)