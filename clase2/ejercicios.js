//1
const edad = Number(prompt("Ingrese su edad: "))
if (edad > 0 && edad < 18){
    alert("Persona menor de edad")
} else if (edad >= 8 && edad < 100) {
    alert("Persona mayor de edad")
} else {
    alert("Ingrese una edad correcta")
}
//2
const contrasena = "odrojasb8524"
const contrasenaUsuario = prompt("Ingrese la contraseña: ").toLowerCase()
if (contrasena == contrasenaUsuario){
    alert("Contraseña correcta.\nBienvenido!!!")
} else {
    alert("Contraseña Incorrecta.\nVuelve a intentarlo")
}
//3
const num1 = Number(prompt("Ingrese el primer número: "))
const num2 = Number(prompt("Ingrese el segundo número: "))
if (!isNaN(num1) && !isNaN(num2) && num2!==0){
    alert(num1/num2)
} else if (!isNaN(num1) && !isNaN(num2) && num2===0){
    alert("Error: No es posible la división por cero")
} else {
    alert("Ingrese un número correcto")
}
//4
const num = parseInt(prompt("Ingrese un número entero: "))
if (!isNaN(num) && num % 2 === 0 ){
    alert("El número " + num + " es par")
} else if (!isNaN(num) && num % 2 !== 0){
    alert("El número " + num + " es impar")
} else {
    alert("Ingrese un número valido")
}
//5
const edadUsuario = Number(prompt("Ingrese su edad: "))
const ingresos = Number(prompt("Cuales son sus ingresos mensuales: $"))
if (!isNaN(edadUsuario) && !isNaN(ingresos) && edadUsuario > 16 && ingresos >= 1000){
    alert("Usted está obligado a tributar")
} else if (!isNaN(edadUsuario) && !isNaN(ingresos) && (edadUsuario <= 16 || ingresos < 1000)){
    alert("No está obligado a tributar")
} else {
    alert("Edad y/o ingresos incorrectos")
}
//6
const nombreAlumno = prompt("Ingrese su nombre").toUpperCase()
const sexo = prompt("Ingrese M - Para Masculino\nIngrese F - Para Femenino").toUpperCase()
const inicial = nombreAlumno[0]

if ((sexo == "F" && (inicial == "A" ||inicial == "B" ||inicial == "C" ||inicial == "D" ||inicial == "E" ||inicial == "F" ||inicial == "G" ||inicial == "H" ||inicial == "I" ||inicial == "J" ||inicial == "K" ||inicial == "L" )) || (sexo == "M" && (inicial == "O" ||inicial == "P" ||inicial == "Q" ||inicial == "R" ||inicial == "S" ||inicial == "T" ||inicial == "U" ||inicial == "V" ||inicial == "W" ||inicial == "X" ||inicial == "Y" ||inicial == "Z" ))){
    alert("Usted pertenece al grupo A")
} else{
    alert("Usted pertenece al grupo B")
}
//7
const rentaAnual = Number(prompt("Para saber su TIPO IMPOSITIVO ingrese su renta anual: $"))
if (rentaAnual > 0 && rentaAnual < 1000){
    alert("Tipo impositivo ---> 5%")
} else if (rentaAnual >= 1000 && rentaAnual < 2000){
    alert("Tipo impositivo ---> 15%")
} else if (rentaAnual >= 2000 && rentaAnual < 3500){
    alert("Tipo impositivo ---> 20%")
} else if (rentaAnual >= 3500 && rentaAnual < 6000){
    alert("Tipo impositivo ---> 30%")
} else if (rentaAnual >= 6000){
    alert("Tipo impositivo ---> 45%")
} else {
    alert("El monto ingresado es incorrecto")
}
//8
const edadJugador = parseInt(prompt("Ingrese su edad: "))
if (edadJugador <= 4){
    alert("El jugador puede entrar gratis a nuestras salas")
} else if (edadJugador > 4 && edadJugador <= 12){
    alert("El jugador debe paga $5 para ingresas a nuestras salas")
} else if (edadJugador >= 13 && edadJugador <= 17){
    alert("El jugador debe paga $8 para ingresas a nuestras salas")
} else if (edadJugador >= 18 && edadJugador <=64){
    alert("El jugador debe paga $10 para ingresas a nuestras salas")
} else {
    alert("Ingrese una edad correcta")
}