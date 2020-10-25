function main() {
  const btnSend = document.querySelector('#btnSend')
  const inTempMx = document.querySelector('#mxTemp')
  const inTempMin = document.querySelector('#mnTemp')

  btnSend.addEventListener('click', sendData)


  const url = 'control/dataTemp?'

  async function sendData() {
    if (!inTempMin.value || !inTempMx.value ) {
      alert('Introduce los datos')
      return
    }

    if (inTempMin.value >= inTempMx.value ) {
      alert('La temperatura minima no puede ser mayor o igual que la maxima')
      return
    }

    const value = url + `mxTemp=${inTempMx.value}&mnTemp=${inTempMin.value}`
    try {
      const res = await fetch(value, { method:'POST' } )
      if (res.status !== 200) {
        alert('Error de conexón con el servidor...')
      }
      
    } catch (error) {
      alert('Error de conexión... ')
      }
    }
}

document.addEventListener('DOMContentLoaded', main)