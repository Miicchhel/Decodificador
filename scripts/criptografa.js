function criptografa(){

    var textFinal = '';

    var stringTextoPrincipal = textPrincipal.value;
    var inconsistencia = procuraInconsistencia(stringTextoPrincipal);

    if(!inconsistencia){
        for(var i = 0; i < stringTextoPrincipal.length; i++){
            var letra = stringTextoPrincipal[i].toLowerCase();
            if( letra === 'a'){
                textFinal += chave[0];
            }else if(letra === 'e'){
                textFinal += chave[1];
            }else if(letra === 'i'){
                textFinal += chave[2];
            }else if(letra === 'o'){
                textFinal += chave[3];
            }else if(letra === 'u'){
                textFinal += chave[4];
            }else{
                textFinal += stringTextoPrincipal[i].toLowerCase();
            }
        }
    
        textSecundario.textContent = textFinal;
        textPrincipal.value = "";
    }else{
        textPrincipal.value = "";
    }

}