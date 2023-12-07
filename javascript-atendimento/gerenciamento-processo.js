const atendimentoGestaoProcessoBtnDistribuir = document.getElementById("atendimento-gestao-processo-btn-distribuir")

atendimentoGestaoProcessoBtnDistribuir.addEventListener("click", function() {
    Swal.fire({
        icon: 'success',
        title: 'Solicitação distribuído com sucesso!'
    })
})

const lupa = document.getElementById("atedimento-gestao-processo-abrir-lupa")
const atendimentoGestaoFehcarPopUp = document.getElementById("fechar-pop-up")
const atendimentoGerenciamnetoPopUp = document.getElementsByClassName("atendimendimento-gestao-processo-pop-up")[0]

lupa.addEventListener("click", function() {
    atendimentoGerenciamnetoPopUp.style.display = "flex"
})

atendimentoGestaoFehcarPopUp.addEventListener("click", function() {
    atendimentoGerenciamnetoPopUp.style.display = "none"
})

const atendimendimentoGerenciamentoAbrirBtn = document.getElementById("atendimento-gestao-abrir-btn")
const telaGestao = document.getElementById("centralizador-lista")
const telaGestaoAbrir = document.getElementsByClassName("atendimendimento-gestao-processo-abrir")[0]
const atendimentoGestaoAbrirFechar = document.getElementById("atendimento-gestao-processo-btn-fechar")

atendimendimentoGerenciamentoAbrirBtn.addEventListener("click", function() {
    console.log("aqui")
    telaGestao.style.display = "none"
    telaGestaoAbrir.style.display= "flex"
})

atendimentoGestaoAbrirFechar.addEventListener("click", function() {
    telaGestao.style.display = "grid"
    telaGestaoAbrir.style.display= "none"
})