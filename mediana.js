function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function esPar(numerito) {
    if (numerito%2 === 0 && numerito != 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediana(lista) {
    let mediana;
    
    const listaOrdenada = lista.sort((a, b) => a - b);

    const mitadLista = parseInt(listaOrdenada.length / 2);

    if(esPar(listaOrdenada.length)) {
        const elem1 = listaOrdenada[mitadLista - 1];
        const elem2 = listaOrdenada[mitadLista];
    
        const promedioElemento1y2 = calcularMediaAritmetica([elem1, elem2]);
    
    return mediana = promedioElemento1y2;
    
    } else {
    return mediana = listaOrdenada[mitadLista];
    }
}