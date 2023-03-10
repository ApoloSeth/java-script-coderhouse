let numero = 0

do{
    numero = prompt('Ingresar Número: ')
    alert(numero)
} while(parseInt(numero))


//Ejemplo Do...while
let nombreUsuarioDB = "odrojasb"
let nombreUsuarioIngresado = ""
let contador = 0

do {
    nombreUsuarioIngresado = prompt('Ingresar User ')
    contador++
} while (contador < 3 && nombreUsuarioDB != nombreUsuarioIngresado);

if (nombreUsuarioDB==nombreUsuarioIngresado && contador<3){
    alert(`Bienvenido ${nombreUsuarioDB}`);
} else{
    alert('Usuario Incorrecto')
}

//Ejemplo do...while - Calculadora

let num1 = Number(prompt('Ingrese número 1: '))
let num2 = Number(prompt('Ingrese número 2: '))
let opcion = 0

do {
    let menu = '1 - Sumar\n2 - Restar\n3 - Multiplicar\n4 - Ingresar Valores\n0 - Salir'
    alert(menu)
    opcion = Number(prompt('Ingrese una opción: '))
    while (isNaN(opcion)){
        opcion = Number(prompt('Ingrese una opción correcta: '))
    }
    if (opcion === 1){
        alert(num1 + num2)
    } else if (opcion === 2) {
        alert(num1 - num2)
    } else if (opcion === 3){
        alert(num1*num2)
    } else if(opcion === 4){
        while (isNaN(num1) && isNaN(num2)){
            num1 = Number(prompt('Ingrese número 1: '))
            num2 = Number(prompt('Ingrese número 2: ')) 
        }
    } else if (opcion === 0){
        alert('Has salido de la aplicación')
    } else {
        alert('Ingresa una opción correcta')
    }
} while (opcion !=0);