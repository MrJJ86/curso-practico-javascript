// Código del cuadrado

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado (lado){
    return lado * lado;
}

console.groupEnd();

// Código del Triángulos

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
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
    
    const perimetro = perimetroTriangulo(a, b, base);

    const result = document.getElementById("resultTriangulo");
    result.innerHTML = `El perímetro del triángulo es: ${perimetro}`
}

function calcularAreaTriangulo() {
    const base = Number(document.getElementById("InputTrianguloBase").value);
    const altura = Number(document.getElementById("InputTrianguloAltura").value);
    
    const area = areaTriangulo(base, altura);
    const result = document.getElementById("resultTriangulo");
    result.innerHTML = `El área del triángulo es: ${area}`
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