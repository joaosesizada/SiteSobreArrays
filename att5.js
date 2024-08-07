function ArrayMaisNumUser() {
    const res = document.getElementById("res");
    
    const vl1 = document.getElementById("Array1").value.split(',').map(Number);
    const vl2 = document.getElementById("Array2").value.split(',').map(Number);

    if (vl1.length !== vl2.length) {
        alert("Erro: arrays de tamanhos diferentes");
        return;
    }

    const soma = [];
    for (let i = 0; i < vl1.length; i++) {
        soma.push(vl1[i] + vl2[i]);
    }

    res.innerHTML = `Resultado: [${soma}]`;
}