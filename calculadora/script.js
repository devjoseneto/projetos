function insert(num) {
    document.querySelector("#res").innerHTML += num;
}

function clear_() {
    document.querySelector("#res").innerHTML = ''
}

function back() {
    let res = document.querySelector("#res").innerHTML
    document.querySelector("#res").innerHTML = res.substring(0, res.length-1)
}

function calcular() {
    let res = document.querySelector("#res").innerHTML
    if(res) {
        document.querySelector("#res").innerHTML = eval(res)
    } else {
        document.querySelector("#res").innerHTML = 'Nada...'
    }
}