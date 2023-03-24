import { useState } from "react"
//console.log('Entrando a la función del counter personalizado');

export const useCounter=(valorIni=0)=>{

    const [contador, setContador]=useState(valorIni);

    const incrementarCuenta =()=>{
        setContador(contador+1);
        console.log('Contador: '+contador);
    }

    const decrementarCuenta =()=>{
        setContador(contador-1);
        console.log('Contador: '+contador);
    }

    const resetearCuenta =()=>{
        setContador(valorIni);
        console.log('Contador: '+contador);
    }

    
    return {
        contador,
        incrementarCuenta,
        decrementarCuenta,
        resetearCuenta
    }
}