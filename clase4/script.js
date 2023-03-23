//1
/*function saludo (){
    alert("Hola amiga")
}

saludo()*/

//2
/*function saludo2 (nombre){
    alert(`Hola ${nombre}`)
}

saludo2("Oscar")*/

//3
/*function factorial (numero){
    let acumulado = 1
    for (let i = 0; i < numero; i++){
        acumulado *= (i+1)
    }
    alert(acumulado)
}

const numero = parseInt(prompt("Ingrese un número entero positivo: "))
factorial(numero)*/

//4
/*function valorTotal (valorSinIva, iva){
    if (!iva) {
        alert("Valor final: " + valorSinIva*(1 + 21/100))
    } else {
        alert("Valor final: " + valorSinIva*(1 + iva/100))
    }
}

const valorProducto = Number(prompt("Ingrese el valor del producto: "))
const iva = Number(prompt("Ingrese el porcentaje de iva: "))

valorTotal(valorProducto, iva)*/

//5
/*const areaCirculo = function (r){
    return 3.1416 * (r)**2
}

function volumenCilindro (h, r){
    alert(`El volumen del cilindro es ${h * areaCirculo(r)}`)
}
const altura = Number(prompt("Ingrese la altura del cilindro: "))
const radio = Number(prompt("Ingrese el radio del cilindro: "))
volumenCilindro(altura, radio)*/

//6
/*const cantidadElementos = Number(prompt("Ingrese la cantidad de elementos de la lista: "))
const listaElementos = []

for (let i = 0; i < cantidadElementos; i++){
    const elemento = Number(prompt("Ingrese el número " + (i + 1) + " :"))
    listaElementos.push(elemento)
}

function media (lista){
    let acumulado = 0
    for (let i = 0; i < lista.length; i++){
        acumulado += lista[i]
    }
    const mediaListaElementos = acumulado / lista.length
    alert(`La media de los datos ingresados es ${mediaListaElementos}`)
}

media(listaElementos)*/

//7

