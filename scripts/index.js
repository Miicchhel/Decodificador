var chave = ["ai","enter","imes","ober","ufat"];
var invalidas = ["á","é","í","ó","ú"
                ,"à","è","ì","ò","ù"
                ,"ã","ẽ","ĩ","õ","ũ"];
var inconsistencia=false;


var textPrincipal = document.querySelector("#text-principal");
var textSecundario = document.querySelector("#text-secundario");

var btnCriptografar = document.querySelector("#btn-cript");
var btnDescriptografar = document.querySelector("#btn-descript");
var btnCopiar = document.querySelector("#btn-copiar")

btnCriptografar.addEventListener('click', criptografa);
btnDescriptografar.addEventListener('click', descriptografa);
btnCopiar.addEventListener('click', copia);