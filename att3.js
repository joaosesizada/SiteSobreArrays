function arrayMais7() {
    const res = document.getElementById("res")

    const vetor1 = [ 1, 2, 3, 4, 5 ]

    const Multiplicado = vetor1.map(num => num + 7)
    res.innerHTML = `Resultado: [${Multiplicado}]`
}
arrayMais7()