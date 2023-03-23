//Objetos
/*const persona = {
    nombre: "Oscar",
    apellido: "Rojas",
    edad: 32,
    profesion : "Ingeniero Civil",
    soltero: true,
    tieneMoto: true,
    tieneCarro: false,
    propiedades: {
        moto: "Pulsar 200NS",
        computador: "Gamer",
        laptop: "Asus",
        raiz: "Lote Sopetran"
    }
}

console.log(persona)
console.log(persona.profesion)
console.log(persona.nombre + " " + persona.apellido)
console.log(persona.propiedades.moto)
persona.propiedades.laptop = "Dell"
console.log(persona.propiedades.laptop)
persona.tieneTrabajo = false
console.log(persona)
persona["tieneNovia"] = true
console.log(persona)*/

//Función constructora
/*function Persona(nombre, apellido, edad, profesion, tieneCarro, tieneMoto, propiedades){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.profesion = profesion
    this.tieneCarro = tieneCarro
    this.tieneMoto = tieneMoto
    this.propiedades = propiedades
}

const persona1 = new Persona("Oscar", "Rojas", 32, "Ingeniero", false, true, {moto: "Pulsar 200NS", computador: "Gamer", laptop: "Dell"})
console.log(persona1)

function Persona2(objeto){
    this.nombre = objeto.nombre
    this.apellido = objeto.apellido
    this.edad = objeto.edad
    this.profesion = objeto.profesion
    this.tieneCarro = objeto.tieneCarro
    this.tieneMoto = objeto.tieneMoto
    this.propiedades = objeto.propiedades

    this.nombreCompleto = function(){
        console.log(this.nombre + " " + this.apellido)
    }
    this.saludo = function(){
        console.log("Hola, soy " + this.nombre)
    }
}

const persona = {
    nombre: "Juan",
    apellido: "Rojas",
    edad: 35,
    profesion : "Coordinador de logistica",
    soltero: true,
    tieneMoto: false,
    tieneCarro: false,
    propiedades: {
        moto: "No",
        computador: "No",
        laptop: "No",
        raiz: "Apartamento"
    }
}

const persona2 = new Persona2(persona)
console.log(persona2)
persona2.nombreCompleto()
persona2.saludo()

console.log("tieneMoto" in persona2)

for (const propiedad in persona2){
    console.log(persona[propiedad])
}*/

//Clases
/*class Moto {
    constructor(marca, modelo, color, cilindraje, esElectrica, numeroCilindros, dimensiones){
        this.marca = marca
        this.modelo = modelo
        this.color = color
        this.cilindraje = cilindraje
        this.esElectrica = esElectrica
        this.numeroCilindros = numeroCilindros
        this.dimensiones = dimensiones
    }
    presentacion(){
        console.log(`Que esperas para hacer el test drive de la ${this.marca} ${this.cilindraje} cm3`)
    }
}

const moto1 = new Moto("Bajaj", 2016, "Azul", 199, false, 1, {largo: 2.55, ancho: 90, alto: 1.22})
console.log(moto1)
console.log(moto1.presentacion())*/

//Ejercicios
//1
class Tienda {
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre
        this.direccion = direccion
        this.propietario = propietario
        this.rubro = rubro
    }
    estaAbierto(hora){
        if ((hora >= 8 && hora <= 12) || (hora >= 15 && hora <= 18)){
            return true
        } else {
            return false
        }
    }

    esPropietario(nombre){
        if (this.propietario == nombre){
            return true
        } else{
            return false
        }
    }
}

/*const tienda1 = new Tienda("Ahinco S.A", "Cra 32 N° 1B sur - 51", {nombre: "Juan", apellido: "Gomez"}, "Construccion")
const tienda2 = new Tienda("Conceniza S.A.S", "Cra 32 # 1b sur -51", "JuanEsteban Gomez", "Construcción")
console.log(tienda1, tienda2)*/

//2
/*const tiendas = [];
for (let i = 0; i < 2; i++){
    const nombre = prompt("Nombre de la empresa: ")
    const direccion = prompt("Ingrese la dirección: ")
    const propietario = prompt("Ingrese le nombre completo del propietario: ")
    const rubro = prompt("Ingrese el rubro de la empresa: ")
    const tienda = new Tienda(nombre, direccion, propietario, rubro)
    tiendas.push(tienda)
    alert(`Tienda: ${tienda.nombre}\nDirección: ${tienda.direccion}\nPropietario: ${tienda.propietario}\nRubro: ${tienda.rubro}`)
}*/

//3
/*const nombre = prompt("Nombre de la empresa: ")
const direccion = prompt("Ingrese la dirección: ")
const propietario = prompt("Ingrese le nombre completo del propietario: ")
const rubro = prompt("Ingrese el rubro de la empresa: ")
const tienda = new Tienda(nombre, direccion, propietario, rubro)

for (let i = 0; i < 3; i++){
    const hora = Number(prompt("Ingresa la hora en horario militar: "))
    const horario = tienda.estaAbierto(hora)
    if (horario){
        alert("Tienda abierta")
    } else {
        alert("Tienda cerrada")
    }
}*/

//4

/*const tiendas = [];
for (let i = 0; i < 3; i++){
    const nombre = prompt("Nombre de la empresa: ")
    const direccion = prompt("Ingrese la dirección: ")
    const propietario = prompt("Ingrese le nombre completo del propietario: ")
    const rubro = prompt("Ingrese el rubro de la empresa: ")
    const tienda = new Tienda(nombre, direccion, propietario, rubro)
    tiendas.push(tienda)
    alert(`Tienda: ${tienda.nombre}\nDirección: ${tienda.direccion}\nPropietario: ${tienda.propietario}\nRubro: ${tienda.rubro}`)
}

for (let i = 0; i < 5; i++){
    const nombrePropietario = prompt("Ingrese el nombre del propietario: ")
    for (let j = 0; j < tiendas.length; j++){
        if (tiendas[j].propietario == nombrePropietario){
            alert(`El nombre ingresado pertenece al propietario de la empresa ${tiendas[j].nombre}`)
            break
        }
    }
}*/

//5

class Cliente{
    constructor(nombre, presupuesto, tieneDescuento, telefono){
        this.nombre = nombre
        this.presupuesto = presupuesto
        this.tieneDescuento = tieneDescuento
        this.telefono = telefono
    }
    transferirDinero(valor){
        if (valor < this.presupuesto && valor > 0){
            this.presupuesto -= valor
            alert(`Presupuesto actual: ${this.presupuesto}`)
        } else{
            alert("No cuenta con fondos suficientes")
        }
    }
}

const clientes = []
for (let i = 0; i < 3; i++){
    const nombre = prompt("Ingrese su nombre ")
    const presupuesto = Number(prompt("Ingrese su presupuesto actual: "))
    const tieneDescuento = Boolean(prompt("Tiene descuento:\nSi - true\nNo - false"))
    const telefono = prompt("Ingrese su número telefónico: ")
    const cliente = new Cliente(nombre, presupuesto, tieneDescuento, telefono)
    console.log(cliente)
    clientes.push(cliente)
}

for (let j = 0; j < 5; j++){
    const valor = Number(prompt("Ingrese el valor de la transacción: "))
    clientes[j].transferirDinero(valor)
}
