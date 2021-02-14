const form = document.getElementById('form')
const inputTicket = document.getElementById('inputTicket')
const resetBtn = document.getElementById('resetApp')

function changeContainer() {
    const containerActive = document.querySelector('.js-container.is-active')
    const containerInactive = document.querySelector('.js-container:not(.is-active)')

    containerActive.classList.remove('is-active')
    containerInactive.classList.add('is-active')
}

const buttons = Array.from(document.querySelectorAll('button'))

buttons.forEach(btn => {
    btn.onclick = changeContainer
})

function resetApp() {
    inputTicket.value = ''
}

form.onsubmit = (event) => {
    event.preventDefault()
    
    setTimeout(resetApp, 500)
}

resetBtn.onclick = changeContainer