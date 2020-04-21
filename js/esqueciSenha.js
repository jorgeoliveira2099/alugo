$("#celular").mask("(00) 00000-0000")

function mostrarMensagem() {
    var celular = document.getElementById("celular").value
    var mensagemSucesso = document.getElementById("mensagemSucesso")
    var mensagemAlerta = document.getElementById("mensagemAlerta")
    if (celular.length < 15) {
        mensagemAlerta.style.display = "block"
        mensagemSucesso.style.display = "none"
    } else {
        mensagemSucesso.style.display = "block"
        mensagemAlerta.style.display = "none"
    }
    return false;
}