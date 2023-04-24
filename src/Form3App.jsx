import { useForm3Efect } from "./funciones/useForm3Efect";
export const Form3App=()=>{

    const initialForm={
        usrNombre:'',
        email:'',
        password:''
    };


    const{formState, onInputChange,onHandleReset,usrNombre,email,password}=useForm3Efect(initialForm);

    return(
        <>
        <div>
         <h1>Ejemplo de Formulario</h1>
         <h5>Tres input serán reseteados, utilizando un js para su procesamiento</h5>
         <hr></hr>
         <input 
         className="form-control col-md-6" 
         placeholder="Nombre..."         
         name="usrNombre"
         type="text"      
         value={usrNombre}   
         onChange={onInputChange}
         >            
         </input>
         
         <input 
         className="form-control mt-2 col-md-6"
         placeholder="Email..."
         type="email"         
         name="email"    
         value={email}     
         onChange={onInputChange}
         >
         </input>
         <input 
         className="form-control mt-2 col-md-6"
         placeholder="Contraseña"    
         name="password"
         type="password"
         value={password}     
         onChange={onInputChange}
         >

         </input>
         <hr></hr>
         <button className="btn btn-primary"
         onClick={(e)=>OnHandlerPrimaryBtn(e)}
         >Click Me</button>

        <button className="btn btn-warning"
        onClick={onHandleReset}
        >Reset</button>

        </div>

        

        <hr></hr>
        </>
    )
}