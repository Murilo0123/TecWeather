let soma = 0

function resposta(clique) {
  soma = soma + clique
  alert(soma)
}

function mostrar() {
  document.querySelector(".placar").innerHTML = `<p>${soma}</p>`
}