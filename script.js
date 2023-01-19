//const nunca pode mudar o valor (ex: true para false)
//let pode mudar o valor

const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-18", "01-19", "01-20"],
  water: ["01-18", "01-19"],
  study: ["01-18", "01-20"],
}
nlwSetup.setData(data)
nlwSetup.load()
