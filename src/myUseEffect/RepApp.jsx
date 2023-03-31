//Este Ejercicio consiste en ilustrar de la mejor manera posible
//la sepración de la parte visual y de la parte programática.
//El app principal tiene 3 botones que modificarán el estado de una 
//Variable {contador}, en función de la operación solicitada e ilustrada
//mediante el mismo botón. 
//La función se procesa en el archivo .js (no tiene parte visual), ejecuta la lógica
//y regresa el resultado para restablecer el estado de dicha variable.
//Cada botón llama a la misma operación, pero envía como parámetro su propio
//value para que en la operación se defina cuál se debe ejecutar (+,R,-) 

import { useState } from "react"
import { operaciones } from "../funciones/operaciones";

export const RepApp =()=>{

    const [contador, setContador]=useState(0);
    
    const onHandlerOperaciones=({target})=>{        
        const res = operaciones(target,contador);
        setContador(res);
    }

    return(        
    <>
    <h1>Repaso</h1>
    <h2>{contador}</h2>
    <hr/>
    <button 
        className="btn btn-danger"    
        value="Suma"       
        onClick={onHandlerOperaciones}
    >Sumar +
    </button>

        <button 
        className="btn btn-secondary"            
        value="Reset"
        onClick={onHandlerOperaciones}
    >Reset</button>

    <button className="btn btn-success"            
    onClick={onHandlerOperaciones}
    value="Resta"
    >Restar-</button>
    <p></p>

    </>
    )
}
