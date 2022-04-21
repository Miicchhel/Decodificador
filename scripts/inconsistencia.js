function procuraInconsistencia(texto){
    achou = false
    for(letra in texto){
        invalidas.forEach(l => {
            if(!achou){
                if (texto[letra].toLowerCase() === l){
                    alert("DIGITE APENAS LETRAS SEM ACENTO!");
                    achou = true;
                }
            }
        })          
    }
    return achou;
}

// function procuraInconsistencia(texto){
//     achou = false
//     for(letra in texto){
//         invalidas.forEach(l => {
            
//             if (texto[letra].toLowerCase() === l){
//                 alert("DIGITE APENAS LETRAS SEM ACENTO!");
//                 achou = true;
//             }
//             return achou
//         })          
//     }
    
// }
