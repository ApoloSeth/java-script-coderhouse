//1
/*const palabraUsuario = prompt("Ingrese una palabra: ")
for (let i = 0; i < 10; i++){
    alert(palabraUsuario)
}*/

//2
/*const edad = parseInt(prompt("Ingrese su edad actual: "))
for (let i = 0; i < edad;i++){
    alert(i+1)
}*/

//3
/*const numeroEntero = parseInt(prompt("Ingrese un número entero positivo: "))
for (let i = 0; i < numeroEntero; i++){
    if (i < numeroEntero -1) {
        console.log((i + 1) + ", ")
    } else if (i === numeroEntero -1) {
        console.log(i + 1)
    }
}*/

//4
/*const numeroEntero2 = parseInt(prompt("Ingrese un número entero positivo"))
for (let i = numeroEntero2; i >= 0; i--){
    if(i > 0){
        console.log(i + ",")
    } else if (i === 0){
        console.log(i)
    }
}*/

//5
/*const inversion = Number(prompt("Ingrese la cantidad de dinero a invertir: $"))
const interes = Number(prompt("Ingrese la tasa de interes anual: %"))/100
const plazo = Number(prompt("Ingrese el número de años que planea dejar la inversión: "))
for (let i = 0; i < plazo; i++){
    console.log("Capital obtenido al dejar la inversión " + (i+1) +" años fue de " + (inversion*interes*(i+1)))
}*/

//6
/*for (let i = 0; i < 10; i++){
    console.log("1 X " + (i + 1) + " = " + (1 * (i + 1)))
}*/

//6.1
/*for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
        console.log((i + 1) + " X " + (j + 1) + " = " + ((i + 1) * (j + 1)))
    }
}*/

//6.2
/*const cantidadDeTablas = parseInt(prompt("Ingrese la cantidad de tablas que desea ver: "))
let contador = 0;
while (contador < cantidadDeTablas){
    for (let i = 0; i < 10; i ++){
        console.log((contador + 1) + " X " + (i+1) + " = " + ((contador + 1) * (i + 1))) 
    }
    contador+=1
}*/

//7
/*const contrasena = "odrojasb1234"
let contrasenaUsuario = ""
do {
    contrasenaUsuario = prompt("Ingrese la contraseña para acceder: ")
    if (contrasena == contrasenaUsuario){
        alert("Contraseña correcta.\nBienvenido!!!")
    } else {
        alert("Sigue intentanto")
    }
} while (contrasenaUsuario != contrasena);*/

//8
const numero = parseInt(prompt("Ingrese un número entero y positivo: "))
const raizNumero = Math.round(numero ** 0.5)
let contador = 0

if (numero === 1){
    console.log(raizNumero + " es número primo")
} else if (numero > 1){
    for( let i = 0; i < raizNumero; i++){
        if (numero % (i + 1) === 0){
            contador+=1
        } else {
            continue
        }
    }
    if (contador === 1){
        console.log(numero + " es número primo")
    } else {
        console.log(numero + " No es primo")
    }
} else {
    console.log("Inrese un número entero y positivo")
}





