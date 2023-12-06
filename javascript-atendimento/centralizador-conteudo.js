function toggleVisibility() {
    // var lista = document.getElementById("centralizador-lista");
    // var conteudo = document.getElementById("centralizador-conteudo");
    // lista.style.display = (lista.style.display === "none") ? "block" : "none";
    // conteudo.style.display = (conteudo.style.display === "none") ? "block" : "none";

    var lista= document.getElementById('centralizador-lista');
    var conteudo = document.getElementById('centralizador-conteudo');

    if (lista.style.display !== 'none') {
    lista.style.display = 'none';
    conteudo.style.display = 'grid';
    } else {
    lista.style.display = 'grid';
    conteudo.style.display = 'none';
    }
}

function visualizar_pdf(){
    var download_pdf = document.getElementById('pop_up_download');
    download_pdf.style.display = (download_pdf.style.display === "none") ? "flex" : "none";
}

// Click no Sino

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('notificacao').addEventListener('click', function () {
        Swal.fire({
            title: 'Notificação enviada com sucesso!',
            icon: 'success',
            confirmButtonText: 'Ok'
        });
    });
});

// Click na lupa
document.getElementById('lupa_botao').addEventListener('click', function () {
    document.getElementById('Conteudo_Pareceres').style.display = 'block';
});

document.getElementById('botao_reprovado').addEventListener('click', function () {
    if (document.getElementById('v_aprovado').style.display == 'none' && document.getElementById('x_reprovado').style.display == 'none'){

        document.getElementById('x_reprovado').style.display = 'block'

    } else{
        if(document.getElementById('v_aprovado').style.display == 'block'){
        document.getElementById('v_aprovado').style.display = 'none'
        document.getElementById('x_reprovado').style.display = 'block';
        }
    }
});

document.getElementById('botao_aprovado').addEventListener('click', function () {
    if (document.getElementById('v_aprovado').style.display == 'none' && document.getElementById('x_reprovado').style.display == 'none'){

        document.getElementById('v_aprovado').style.display = 'block'

    } else{
        if (document.getElementById('x_reprovado').style.display == 'block'){

            document.getElementById('x_reprovado').style.display = 'none'
            document.getElementById('v_aprovado').style.display = 'block'
        }
    }
    
});

// Botao Salvar

document.getElementById('botao_salvar').addEventListener('click', function () {
    if(document.getElementById('x_reprovado').style.display == 'block'){
        mostrarPopupReprovado();
    }
});

function mostrarPopupReprovado() {
    Swal.fire({
        title: 'Reprovação!',
        text: 'Solicitação enviada para o analista!',
        icon: 'warning',
        confirmButtonText: 'Ok'
    });
}

function fecharPopupReprovado() {
    document.getElementById('popup_reprovacao_salvar').style.display = 'none';
}

// Botao COnsolidar

document.getElementById('botao_consolidar').addEventListener('click', function () {
    if(document.getElementById('v_aprovado').style.display == 'block'){
        mostrarPopupAprovado();
    }
});

function mostrarPopupAprovado() {
    document.getElementById('popup_aprovação_consolidar').style.display = 'block';
}

function fecharPopupAprovado() {
    document.getElementById('popup_aprovação_consolidar').style.display = 'none';
    document.getElementById('pop_up_download').style.display = 'none';
}

function salvar_parecer_final() {
    Swal.fire({
        title: 'Enviado!',
        text: 'Parecer salvo e enviado com sucesso!',
        icon: 'success',
        confirmButtonText: 'Ok'
    });
    document.getElementById('popup_aprovação_consolidar').style.display = 'none';
    document.getElementById('pop_up_download').style.display = 'none';
}