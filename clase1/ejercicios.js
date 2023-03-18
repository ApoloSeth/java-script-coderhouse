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
alert(num1 + " entre " + num2 + " da un cociente " + cociente + " y un resto " + residuo)
//8
var cantidadDinero = Number(prompt("Ingrese la cantidad de dinero a invertir: $")) 
var interesAnual = Number(prompt("Ingrese la tasa de interes anual: ")) / 100
var plazo = Number(prompt("Ingrese el plazo o tiempo de tu inversion (en años): ")) 
var rendimiento = cantidadDinero * ( 1 + interesAnual * plazo)
alert("El capital obtenido de tu inverisón " + cantidadDinero + " con una tasa de " + interesAnual + " y un plazo de " + plazo + " años es de " + rendimiento)
//9
var numeroPayasos = Number(prompt("ingrese el número de payasos en el paquete: "))
var numeroMuniecas = Number(prompt("Ingrese el número de muñecas el paquete: "))
var pesoTotalPaquete = numeroPayasos * 112 + numeroMuniecas * 75
alert("El peso total del paquete es de: " + pesoTotalPaquete + " gramos")
//10
var numeroPanes = Number(prompt("Ingrese la cantidad de panes a vender que no son del dia de hoy"))
var precioFinal = (numeroPanes * 3.49 * (1 - 0.6)).toFixed(2)
alert("La cantidad de panes es de: " + numeroPanes + "\nEl precio de cada pan es de: $3.49\nEl descuento por no ser un pan fresco es de : 60%\nEl precio final de tu compra es de: $" + precioFinal)