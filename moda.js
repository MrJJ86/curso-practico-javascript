const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1]

function calcularModa(lista) {
    const listaCount = {};

    lista.map(
        function(elem){
            if(listaCount[elem]){
                listaCount[elem] += 1;
            } else {
                listaCount[elem] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1]
        }
    );

    const moda = listaArray[listaArray.length - 1];
    return moda;
}
