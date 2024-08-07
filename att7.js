function ArraySomandoArray() {
    const res = document.getElementById("res");
    
    const vl1 = document.getElementById("Array1").value.split(',').map(Number);
    const somaTotal = vl1.reduce((acc, add) => acc + add)


    res.innerHTML = `Resultado: [${somaTotal}]`;
}