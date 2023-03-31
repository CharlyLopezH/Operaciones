import { useForm3Efect } from "./funciones/useForm3Efect";
export const Form3App=()=>{

    const initialForm={
        usrNombre:'',
        email:'',
        password:''
    };


    const[formState,onInputChange,setFormState]=useForm3Efect(initialForm);

    // const onInputChange=({target})=>{
    //     const {name,value} = target;
    //     //setFormState(usrNombre); //Esto actualiza sólo una varliable de estado; necesitamos todo el formState        
    //     //Solución para formularios complejos:
    //     setFormState({
    //         ...formState,
    //         [name]: value
    //       });
    // }
    
    // const onHandleReset=()=>{       
    //     console.log('Resetear');
    //     console.log(initialForm); 
    //     setFormState(initialForm);                
    // }

    // const OnHandlerPrimaryBtn=(e)=>{
    //     console.log(`Eventos del btn ${e}`)
    //     console.log(`formState:${formState.usrNombre}, ${formState.email}, ${formState.password}`);
    // }

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
         //value={formState.usrNombre}   
         onChange={onInputChange}
         >            
         </input>
         
         <input 
         className="form-control mt-2 col-md-6"
         placeholder="Email..."
         type="email"         
         name="email"    
         //value={formState.email}     
         onChange={onInputChange}
         >
         </input>
         <input 
         className="form-control mt-2 col-md-6"
         placeholder="Contraseña"    
         name="password"
         type="password"
         //value={formState.password}     
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
        {/* formState:
        <h1>{formState.usrNombre}</h1>        
        <h1>{formState.email}</h1>        
        <h1>{formState.password}</h1>         */}
        </>
    )
}