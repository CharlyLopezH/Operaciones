import { useForm } from "../hooks/useForm";

export const FormWithCustomHook=()=>{

    //Obtener (por desestructura) lo que devuelve el useForm
    //Se puede leer como traeme todo lo que ofrece la función-hook solicitada
    const {onInputChange, onHandlerResetForm,username,email,password}=useForm({
            username:'',
            email:'',
            password:''
    });

    //Con la desestructuración desde el llamado al useForm (hook personalizado) ya no necesitamos lo de abajo
    //const {username,email,password} = formState;    
    const onHadlePrimaryBtn =() =>{
        //console.log(`Click pressed: username:${username}, email: ${email}, pass: ${password}`);
    }

    return(
        <>
        <h1>Formulario Simple con Custom Hook</h1>
        <hr></hr>
        <input 
            type="text"
            className="form-control"
            placeholder="Nombre usuario"
            name="username"            
            onChange={onInputChange}        
        >
        </input>

        <input 
            type="text"
            className="form-control mt-2"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onInputChange}     
        >
        </input>
        
        <input 
            type="password"
            className="form-control mt-2"
            placeholder="Contraseña"
            name="password"
            value={password}
            onChange={onInputChange}     
        >
        </input>

        <hr></hr>
        <button className="btn btn-primary" onClick={onHadlePrimaryBtn}>Botón</button>
        <button className="btn btn-primary" onClick={onHandlerResetForm}>Reset</button>

        </>
    )
}