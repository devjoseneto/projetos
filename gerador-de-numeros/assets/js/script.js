const button = document.querySelector("button#generate")

button.addEventListener('click', function() {
    const min = parseInt(document.querySelector('input#min').value)
    const max = parseInt(document.querySelector('input#max').value)

    let result = Math.floor(Math.random() * (max - min + 1)) + min

    if (isNaN(result)) {
        result = 'Valor inválido'
    }
    document.querySelector('#result > span').textContent = result
})