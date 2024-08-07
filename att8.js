function ArrayInvertido() {
    const res = document.getElementById("res");
    
    const vl1 = document.getElementById("Array1").value.split(',').map(Number);
    vl1.reverse()
    res.innerHTML = `Resultado: [${vl1}]`;
}