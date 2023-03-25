//1
/*const cursos = ["Matemáticas", "Física", "Química", "Historia", "Lengua"]

alert(cursos.join("\n"))*/

//2
/*const cursos = ["Matemáticas", "Física", "Química", "Historia", "Lengua"]

for (const curso of cursos) {
    alert(`Yo estudio ${curso}`)
}*/

//2.1
/*const cursos = ["Matemáticas", "Física", "Química", "Historia", "Lengua"]

cursos.forEach(curso => alert(`Yo estudio ${curso}`))*/

//3
/*const cursos = ["Matemáticas", "Física", "Química", "Historia", "Lengua"]

for (const curso of cursos) {
    const nota = Number(prompt(`Ingrese la nota de la asignatura ${curso} : `))
    alert(`En la asignatura ${curso} has sacado ${nota}`)
}*/

//4
/*const numerosLoteria = []
for (let i = 0; i < 5; i++){
    const serieNum = Number(prompt(`Ingrese el número ${i+1} de la loteria: `))
    numerosLoteria.push(serieNum)
}
const numOrdenados = numerosLoteria.sort((num1,num2) => num1 - num2)
alert("Números de la loteria\n" + numOrdenados.join("\n"))*/

//5
/*const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const reverseNum = numeros.reverse()
alert(reverseNum.join(", "))*/

//6
/*const cursos = ["Matemáticas", "Física", "Química", "Historia", "Lengua"]
const copiaCursos = Array.from(cursos)

for (const curso of copiaCursos){
    const nota = Number(prompt(`Ingresa la nota del curso ${curso} en una escala del 1 al 5`))

    if (nota >= 3.0){
        cursos.splice(cursos.indexOf(curso),1)
    }
}

alert("Las asignaturas pendientes por aprobar son\n" + cursos.join("\n"))*/

//7
/*const abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const copiaAbecedario = Array.from(abecedario)

for (let i = 1; i <= copiaAbecedario.length; i++){
    if (i % 3 === 0){
        abecedario.splice(abecedario.indexOf(copiaAbecedario[i-1]),1)
    }
}

alert(abecedario.join(", "))*/

//8
/*const letras = []
for (let i = 0; i < 10; i++){
    const letra = prompt("Ingresa la letra " + (i+1) + " : ")
    letras.push(letra)
}

const repeticiones = {}

for (const letra of letras){
    if(letra in repeticiones){
        repeticiones[letra] += 1
    } else {
        repeticiones[letra] = 1
    }
}

for (const letra in repeticiones){
    alert(`La letra ${letra} se repite ${repeticiones[letra]} veces`)
}*/

//9
