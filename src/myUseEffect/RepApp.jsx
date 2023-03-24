import { useState } from "react"
import { operaciones } from "../funciones/operaciones";

export const RepApp =()=>{

    //const {funcionX}=operaciones(contador);
    const [contador, setContador]=useState(0);
    
    const onHandlerReset=()=>{
        //setContador(0);
    }

    const onHandlerRestar=()=>{
        //setContador(contador -1);
    }

    const onHandlerOperaciones=({target})=>{        
        const res = operaciones(target,contador);
        console.log(res);
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

    <button 
    className="btn btn-warning"
    value="Funciones x"
    onClick={onHandlerOperaciones}>        
        Funciones
    </button>

    </>
    )
}
