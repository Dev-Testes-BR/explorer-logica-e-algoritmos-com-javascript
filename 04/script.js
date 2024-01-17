let student = prompt("Nome do aluno: ")

let note1 = Number(prompt("Primeira nota: "))
let note2 = Number(prompt("Segunda nota: "))
let note3 = Number(prompt("Terceira nota: "))

const average = (note1 + note2 + note3) / 3

let status = average > 6 ? "parabés você foi aprovado" : "você foi reprovado não desanime, estude um pouco mais"

alert(`${student} ${status}, sua média neste bimestre foi: ${average.toFixed(1)}`)
