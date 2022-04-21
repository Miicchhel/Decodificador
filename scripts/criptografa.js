function criptografa(){

    var textFinal = '';

    var stringTextoPrincipal = textPrincipal.value

    for(var i = 0; i < stringTextoPrincipal.length; i++){
        if(stringTextoPrincipal[i] === 'a'){
            textFinal += chave[0];
        }else if(stringTextoPrincipal[i] === 'e'){
            textFinal += chave[1];
        }else if(stringTextoPrincipal[i] === 'i'){
            textFinal += chave[2];
        }else if(stringTextoPrincipal[i] === 'o'){
            textFinal += chave[3];
        }else if(stringTextoPrincipal[i] === 'u'){
            textFinal += chave[4];
        }else{
            textFinal += stringTextoPrincipal[i];
        }
    }

    textSecundario.textContent = textFinal;
    textPrincipal.value = "";
}