function copia(){
    navigator.clipboard.writeText(textSecundario.value);
    textSecundario.innerHTML = "";

    console.log(textPrincipal.value);
    console.log(textSecundario.value);
}
