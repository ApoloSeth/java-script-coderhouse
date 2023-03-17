// Solución ejercicios
//1
alert("Hola Mundo")
//2
var saludo = "Hola, Mundo"
alert(saludo)
//3
var nombre = prompt("Ingrese su nombre: ")
alert('Hola ' + nombre)
//4
var resultado = ((3 + 2) / (2*5)) * ((3 + 2) / (2*5))
alert(resultado)
//5
var horasLaboradas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas: "))
var valorHora = parseFloat(prompt("Cuál es el valor hora: "))
var pago = horasLaboradas * valorHora
alert ("Su pago es: $" + pago)
//6
var peso = Number(prompt("Ingrese su peso: "))
var estatura = Number(prompt("Ingrese su estatura: "))
var imc = (peso / (estatura * estatura)).toFixed(2)
alert("Tu indice de mas corporal es: " + imc)
//7
var num1 = Number(prompt("Ingrese el número 1: "))
var num2 = Number(prompt("Ingrese el número 2: "))
var cociente = num1 / num2
var residuo = num1 % num2
alert(num1 + "entre " + num2 + " da un cociente" + cociente + " y un resto " + residuo)