//const nunca pode mudar o valor (ex: true para false)
//let pode mudar o valor

//meio que selecionando os habits
const form = document.querySelector("#form-habits")
//variável do form
const nlwSetup = new NLWSetup(form)
//variável do botão
const button = document.querySelector("header button")

//adicionando um evento no botão
button.addEventListener("click", add);

//adicionando um evento no form
form.addEventListener("change", save);

//função do botão
function add() {
  //variável do dia de hoje, e "recortando" o final dela (o ano)
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  //colocando em uma variável para ver se a data de hoje existe
  const dayExists = nlwSetup.dayExists(today)

  //se ela existe (retornará true)
  if (dayExists) {

    //terá um aviso informando que a data já foi incluida
    alert("Dia já incluso 🔴")
    //e retornará
    return
  }

  //caso ela não exista, será adicionado 
  alert("Adicionado com sucesso ✅")
  //adicionando
  nlwSetup.addDay(today)
}

//função save do form
function save() {
  //quando ocorrer uma atualização no form, tudo será salvo no browser
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}


const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)

//carregando
nlwSetup.load()
