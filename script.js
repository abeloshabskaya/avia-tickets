const form = document.getElementById('form')
const inputTicket = document.getElementById('inputTicket')
const buttons = Array.from(document.querySelectorAll('.button'))

function changeContainer() {
    const containers = document.querySelectorAll('.js-container')
    containers.forEach(container => {
        const classList = container.classList
        if (classList.contains('is-active')) {
            classList.remove('is-active')
        } else {
            classList.add('is-active')
        }
    })
}

function resetInputTicket() {
    inputTicket.value = ''
}

buttons.forEach(btn => {
    btn.onclick = changeContainer
})

form.onsubmit = event => {
    event.preventDefault()

    setTimeout(resetInputTicket, 500)
}
