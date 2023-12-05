function toggleVisibility() {
    // var lista = document.getElementById("centralizador-lista");
    // var conteudo = document.getElementById("centralizador-conteudo");
    // lista.style.display = (lista.style.display === "none") ? "block" : "none";
    // conteudo.style.display = (conteudo.style.display === "none") ? "block" : "none";

    var lista= document.getElementById('centralizador-lista');
    var conteudo = document.getElementById('centralizador-conteudo');

    if (lista.style.display !== 'none') {
    lista.style.display = 'none';
    conteudo.style.display = 'block';
    } else {
    lista.style.display = 'block';
    conteudo.style.display = 'none';
    }
}