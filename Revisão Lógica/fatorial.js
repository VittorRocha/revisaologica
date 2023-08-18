//2- 
function calcular_fatorial(numero) {
    if (numero <= 0) {
        return 1;
    } else {
        return numero * calcular_fatorial(numero - 1);
    }
}
console.log(calcular_fatorial(5));
