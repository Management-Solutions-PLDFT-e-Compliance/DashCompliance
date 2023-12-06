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