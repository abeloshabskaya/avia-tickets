const form = document.getElementById('form')
const inputTicket = document.getElementById('inputTicket')
const buttons = document.querySelectorAll('.button')
const containers = document.querySelectorAll('.js-container')

function changeContainer(containers) {
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
    btn.onclick = function() {
        changeContainer(containers)
    }
})

form.onsubmit = event => {
    event.preventDefault()

    setTimeout(resetInputTicket, 500)
}
