function ArrayMultiplicadoPor3() {
    const res = document.getElementById("res")
    const vetor1 = [ 1, 2, 3, 4, 5 ]

    const Multiplicado = vetor1.map(num => num * 3)
    res.innerHTML = `Resultado: [${Multiplicado}]`
}
ArrayMultiplicadoPor3()