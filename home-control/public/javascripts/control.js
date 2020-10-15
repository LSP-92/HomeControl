function main() {
  const btnSend = document.querySelector('#btnSend')
  const inTempMx = document.querySelector('#mxTemp')
  const inTempMin = document.querySelector('#mnTemp')

  btnSend.addEventListener('click', sendData)


  const url = 'control/dataTemp?'

  async function sendData() {
    const value = url + `mxTemp=${inTempMx.value}&mnTemp=${inTempMin.value}`
    console.log(value)
    try {
      await fetch(value)
    } catch (error) {
      console.log(error)
      }
    }
}

document.addEventListener('DOMContentLoaded', main)