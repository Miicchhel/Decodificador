var chave = ["ai","enter","imes","ober","ufat"];
var textPrincipal = document.querySelector("#text-principal");
var textSecundario = document.querySelector("#text-secundario");

var btnCriptografar = document.querySelector("#btn-cript");
var btnDescriptografar = document.querySelector("#btn-descript");
var btnCopiar = document.querySelector("#btn-copiar")

btnCriptografar.addEventListener('click', criptografa);
btnDescriptografar.addEventListener('click', descriptografa);
btnCopiar.addEventListener('click', copia);