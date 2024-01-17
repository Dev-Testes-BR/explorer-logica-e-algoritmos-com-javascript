let number = Number(prompt("Advinhe o número que estou pensando? Está entre 0 e 10"))

let randonNumber = Math.round(Math.random() * 10)

let attempts = 1

while(number != randonNumber) {
  number = prompt("Erro, tente novamente: ")
  attempts ++
}

alert(`Parabéns! Você advinhou o número em ${attempts} tentativas`)
