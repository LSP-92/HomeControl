function main() {
    const btnQuit = document.querySelector('#btn-salir')
    const btnControl = document.querySelector('#btn-control')
    const btnBack = document.querySelector('#btn-back')


    btnControl.addEventListener('click', goControl)
    if (btnBack) {
        btnBack.addEventListener('click', goBack)

    }
    btnQuit.addEventListener('click', goQuit)

    function goBack (ev) {
        window.location = '/'
    }

    function goQuit(ev) {
        window.location = '/quit'
    }

    function goControl(ev) {
        switch (window.location.pathname ) {
            case '/':
                window.location = '/control'
                break;
        
            case '/control':
                window.location = '/singin'
                break;
        }
    }
}

document.addEventListener('DOMContentLoaded', main)