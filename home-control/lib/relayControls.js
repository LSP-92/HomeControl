const Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO


 const ch1 = new Gpio(5, 'out')
 const ch2 = new Gpio(6, 'out')
 const ch3 = new Gpio(13, 'out')
 const ch4 = new Gpio(16, 'out')
 const ch5 = new Gpio(19, 'out')
 const ch6 = new Gpio(20, 'out')
 const ch7 = new Gpio(21, 'out')
 const ch8 = new Gpio(26, 'out')



function getState () {
  const state = {
    channel1: ch1.readSync(),
    channel2: ch2.readSync(),
    channel3: ch3.readSync(),
    channel4: ch4.readSync(),
    channel5: ch5.readSync(),
    channel6: ch6.readSync(),
    channel7: ch7.readSync(),
    channel8: ch8.readSync(),

  }
  return state
}

function setRelayOn(arg) {
  new Gpio(arg, 'out').writeSync(1) //on
}

function setRelayOff(arg) { 
  new Gpio(arg, 'out').writeSync(0)  //off  
}

module.exports = {getState: getState, setRelayOn: setRelayOn, setRelayOff:setRelayOff  }