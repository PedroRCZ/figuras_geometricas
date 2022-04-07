
function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

function perimetroTriangulo(lado1, lado2 , base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

function diametroCirculo(radio){
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI
}

function areaCirculo(radio){
    return (radio * radio) * PI
}
// <-    -    - Cuadrado -     -   ->
function calcularPerimetroCuadrado(){  // button
    const value = valorCuadrado()
    const perimetro = perimetroCuadrado(value);
    imprimirValorCuadrado(perimetro);
}

function calcularAreaCuadrado(){
    const value = valorCuadrado()
    const area = areaCuadrado(value);
    imprimirValorCuadrado(area);
}

function valorCuadrado(){
    const input = document.getElementById("cuadrado").value;
    return input;
}

function imprimirValorCuadrado(valor){
    let resultado = document.querySelector(".resultado-cuadrado");
    resultado.textContent = valor
}

// <-    -    - Circulo -     -   ->

function calcularAreaCirculo(){
    const value= valorCirculo();
    const area = areaCirculo(value)
    imprimirValorCirculo(area)
}

function calcularPerimetroCirculo(){
    const value = valorCirculo();
    const perimetro = perimetroCirculo(value);
    imprimirValorCirculo(perimetro);
}

function valorCirculo(){
    const input = document.getElementById("circulo").value;
    return input;
}

function imprimirValorCirculo(valor){
    let resultado = document.querySelector(".resultado-circulo");
    resultado.textContent = valor
}

// <-    -    - Triangulo -     -   ->

function calcularPerimetro(){
    const lado_a = parseInt(document.getElementById("lado_a").value);
    const lado_b = parseInt(document.getElementById("lado_b").value);
    const base = parseInt(document.getElementById("base").value);
    const perimetro = perimetroTriangulo(lado_a, lado_b , base);
    imprimirValorTriangulo(perimetro)
}

function calcularArea(){
    const base = document.getElementById("base").value;
    const alto = document.getElementById("alto").value;
    const area = areaTriangulo(base, alto);
    imprimirValorTriangulo(area)
}

function imprimirValorTriangulo(valor){
    let resultado = document.querySelector(".resultado-triangulo");
    resultado.textContent = valor
}