const form = document.getElementById('form')
const inputTicket = document.getElementById('inputTicket')
const buttons = document.querySelectorAll('.button')

function changeContainer() {
    const containers = document.querySelectorAll('.js-container')
    containers.forEach(container => {
        changeClass(container, 'is-active')
    })
}

function changeClass(container, className) {
    const classList = container.classList
    classList.contains(className) ? classList.remove(className) : classList.add(className)
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
