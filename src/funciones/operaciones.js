import { useState } from "react";

export const operaciones=(target,valorCont)=>{
//console.log(`operaciones.js ${valorCont} ${target.value}`);

switch (target.value) {
    case 'Suma' : 
    console.log('Aplicar Suma');
    return(valorCont+1);    
    //break;
    
    case "Resta" : 
    console.log('Restaré');
    return(valorCont-1);
    
    default : {
        console.log('Reiniciar');
        return(0);
    }
} //case



}