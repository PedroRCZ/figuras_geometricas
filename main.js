
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

// < - - - Ejercicio 2 - - - >

function descuentoF(precio, descuento){
    const valorDescuento = 100 - descuento;
    const precioFinal = (precio * valorDescuento) / 100;
    return precioFinal;
}

function calcularDescuento(){
    const precio = parseInt(document.getElementById("precio").value);
    const descuento = parseInt(document.getElementById("descuento").value);
    const valor = descuentoF(precio, descuento);
    let resultado = document.querySelector(".resultado");
    resultado.textContent = valor
}

function calcularDescuentoCupon(){
    const resulta = parseInt(document.querySelector(".resultado").innerHTML);
    const cuponValue = document.getElementById("cupon").value;
    const user = coupons.find(cupon => cupon.name === cuponValue);
    if(user){
        const valor = descuentoF(resulta, user.discount)
        let resultado = document.querySelector(".resultado-final");
        resultado.textContent = valor
    }else{
        alert(cuponValue + " es cupón inválido")
    }

}

const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

// < - - - Ejercicio 3 - - - >

const lista = [
    1100,2100,300,300,500, 12
];

function calcularPromedio(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, elemento){
            return valorAcumulado + elemento;
        }
    );
    return sumaLista
}

function calcularMedia(lista){
    lista.sort(function(a,b){
        return a - b
    })
    if(esPar(lista.length)){
        let mitad1 = parseInt(lista.length / 2)
        let mitad2 = parseInt(lista.length / 2) + 1
        return calcularPromedio([lista[mitad1], lista[mitad2]])
    }else{
        let mitad = parseInt(lista.length / 2)
        return lista[mitad]
    }
}

function esPar(num){
    return (num % 2 === 0);
}

function calcularModa(lista){
    const lista1Count = {};
    
    lista.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
    );
    
    const lista1Array = Object.entries(lista1Count).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );
    
    const moda = lista1Array[lista1Array.length - 1];
    console.log(moda) 
}
