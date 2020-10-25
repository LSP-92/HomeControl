function main() {
  
    const back = document.querySelector('.back')
    back.addEventListener('click', backIndex)


  function backIndex(ev) {
    window.location = '/'
  }
}

document.addEventListener('DOMContentLoaded', main)