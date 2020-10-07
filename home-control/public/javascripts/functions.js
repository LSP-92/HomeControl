function callSocketio(arg) {
    socket.emit('relay', arg);
    $("btnOff1").hide()
}
$(document).ready(function(){$("button").click(function(){$("p").hide(); });});