// Código del cuadrado

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado (lado){
    return lado * lado;
}

// Código del Triángulo

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

function isTrianguloIsoceles(lado1, lado2, base) {
    if (lado1 == lado2 && lado1 != base) {
        const altura = Math.sqrt((lado1**2) - ((base/2)**2));
        return {0: true, 1: altura}
    } else {
        return {0: false, 1: 0}
    }
}

// Código del círculo

// Diámetro
function diametroCirculo(radio){
    return radio * 2;
} 

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo(radio){
    return (radio * radio) * PI;
} 


// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    
    const result = document.getElementById("resultCuadrado");
    result.innerHTML = `El perímetro del cuadrado es: ${perimetro}`
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);

    const result = document.getElementById("resultCuadrado");
    result.innerHTML = `El área del cuadrado es: ${area}`
}

function calcularPerimetroTriangulo() {
    const a = Number(document.getElementById("InputTriangulo1").value);
    const b = Number(document.getElementById("InputTriangulo2").value);
    const base = Number(document.getElementById("InputTrianguloBase").value);

    const result = document.getElementById("resultTriangulo");

    let isoceles = isTrianguloIsoceles(a, b, base);

    if (isoceles[0]) {
        const perimetro = perimetroTriangulo(a, b, base);
        result.innerHTML = `El perímetro del triángulo es: ${perimetro}`;
    } else {
        result.innerHTML = `Medidas incorrectas, por favor ingrese las medidas para un triángulo isoceles`;
    }
}

function calcularAreaTriangulo() {
    const a = Number(document.getElementById("InputTriangulo1").value);
    const b = Number(document.getElementById("InputTriangulo2").value);
    const base = Number(document.getElementById("InputTrianguloBase").value);
    
    const result = document.getElementById("resultTriangulo");

    let isoceles = isTrianguloIsoceles(a, b, base);
    if (isoceles[0]) {
        const area = areaTriangulo(base, isoceles[1]);
        result.innerHTML = `El área del triángulo es: ${area}`
    } else {
        result.innerHTML = `Medidas incorrectas, por favor ingrese las medidas para un triángulo isoceles`
    }

}

function calcularPerimetroCirculo() {
    const radio = Number(document.getElementById("InputCirculo").value);

    const circunferencia = perimetroCirculo(radio);
    
    const result = document.getElementById("resultCirculo");
    result.innerHTML = `El perímetro del círculo es: ${circunferencia}`
}

function calcularAreaCirculo() {
    const radio = Number(document.getElementById("InputCirculo").value);

    const area = areaCirculo(radio);
    
    const result = document.getElementById("resultCirculo");
    result.innerHTML = `El área del círculo es: ${area}`
}