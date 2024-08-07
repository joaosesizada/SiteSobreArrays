function ArrayMultiplicadoNumUser() {
    const res = document.getElementById("res")
    const NumUser = document.getElementById("NumUser").value
    const vetor1 = [ 1, 2, 3, 4, 5 ]

    const Multiplicado = vetor1.map(num => num * NumUser)
    res.innerHTML = `Resultado: [${Multiplicado}]`
}
