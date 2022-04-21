function descriptografa(){
    
    var [j,k] = [0,0];
    var textFinal = '';
    var stringTextoPrincipal = textPrincipal.value
    var inconsistencia = procuraInconsistencia(stringTextoPrincipal);

    if(!inconsistencia){
        while(j < stringTextoPrincipal.length){
            if(stringTextoPrincipal[k] === 'a'){
                textFinal += 'a';
                k += 2
                j = k

            }else if(stringTextoPrincipal[k] === 'e'){
                textFinal += 'e';
                k += 5
                j = k

            }else if(stringTextoPrincipal[k] === 'i'){
                textFinal += 'i';
                k += 4
                j = k

            }else if(stringTextoPrincipal[k] === 'o'){
                textFinal += 'o';
                k += 4
                j = k

            }else if(stringTextoPrincipal[k] === 'u'){
                textFinal += 'u';
                k += 4
                j = k

            }else{
                textFinal += stringTextoPrincipal[k];
                k++
                j++
            }
        }

        textSecundario.textContent = textFinal;
        textPrincipal.value = '';
    }else{
        textPrincipal.value = "";
    }
}