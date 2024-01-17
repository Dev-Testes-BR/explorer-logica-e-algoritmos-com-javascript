let listItems = []
let option

while (option != 3) {
  option = Number(prompt("Olá usuário! Digite o número da opção desejada\n \n1. Cadastrar um item na lista\n2. Mostrar itens cadastrados\n3. Sair do programa"))

  if (option == 1 ) {
    listItems.push(prompt("Digite o nome do item: "))
  }

  if (option == 2 ) {
    if (listItems.length == 0) {
      alert("Não existem itens cadastrados")
    } else {
      alert(listItems)
    }
  }
  console.log(option, listItems);
}
