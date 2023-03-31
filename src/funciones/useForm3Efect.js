//Función para trabajar la parte programática del formulario
//Se implementa un hook personalizado basado en un useState para procesar el formulario

import { useState } from "react";

//Regresará las funciones necesarias que solictan los elementos HTML del componente padre
export const useForm3Efect=(initialDataForm)=>{
    //console.log('Entrando a la función con los parámetros recibidos '+initialDataForm);
    const [formState, setFormState]=useState(initialDataForm);

    const onInputChange=({target})=>{
        const {name,value} = target;
        //setFormState(); //Esto actualiza sólo una varliable de estado; necesitamos todo el formState        
        //Solución para formularios complejos:
          setFormState({
              ...formState,
              [name]: value
            });
        console.log('Aquí voy...')
    }

    const onHandleReset=()=>{
        console.log('Hola');
        setFormState(initialDataForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onHandleReset

    }
        
}