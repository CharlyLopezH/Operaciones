import { useState } from "react";

export const Form4App=()=>{

    const initialForm={
        NombreUsuario:'',
        email:'',
        password:''
    };

    const[formState,setFormState]=useState(initialForm);
    
    const onInputHandler=({target})=>{
        console.log(`onHandler; value: ${target.value} name:${target.name}`);
        //formState.NombreUsuario=formState.NombreUsuario+target.value; 
        //setFormState(initialForm.value)
    }

    return (
        <>
        <h1>Ejemplos de Formularios</h1>
        <hr></hr>
        <input 
        type = "text"
        className="form-control col-md-6 mt-2"
        name="userName"
        placeholder="Nombre de Usuario"
        onChange={onInputHandler}
        value={initialForm.NombreUsuario}
        >
        </input>

        <input 
        type = "text"
        className="form-control col-md-6 mt-2"
        name="email"
        placeholder="Correo electrónico"
        >
        </input>

        <input 
        type = "password"
        className="form-control col-md-6 mt-2"
        name="password"
        placeholder="Contraseña"
        >
        </input>
        <hr></hr>
        <button className="btn btn-danger"> 
            Reset
        </button>
        </>
    )
}