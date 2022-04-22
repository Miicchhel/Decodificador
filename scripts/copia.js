function copia(){
    navigator.clipboard.writeText(textSecundario.value);
    textSecundario.innerHTML = "";
    setTimeout(msgOn,1*200);
    setTimeout(msgOff,8*200)
}