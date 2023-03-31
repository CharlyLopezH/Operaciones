import { useEffect, useState } from "react"

export const SimpleForm=()=>{

    const [formState, setFormState]=useState({
            username:'Legolas',
            email:'email@email.com'
        })

    const onInputChange = ({target}) => {
          console.log(`OnInputChange${'target.name: '+target.name+' '+target.value}`);
          const {name,value} = target;
          setFormState({
            ...formState,
            [name]:value
          });
     }

    const onHadlePrimaryBtn =() =>{
        console.log(`Click pressed: username:${username}, email: ${email}`);

    }
    const {username,email} = formState;

    useEffect(()=>{
        console.log('useEffect called!!! sin el segundo parámetro ');
    },[]);

    useEffect(()=>{
        console.log('useEffect del [formState]');
    },[formState]);

    useEffect(()=>{
        console.log('[userName] en el useEfect');
    },[username]);

    //Cuando cambién el email, vamos a disparar el siguiente useEfeect
    useEffect(()=>{
        console.log('userName en el [email]');
    },[email]);


    return(
        <>
        <h1>Formulario Simple</h1>
        <hr></hr>
        <input 
            type="text"
            className="form-control"
            placeholder="Nombre usuario"
            name="username"
            value={username}
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
        <hr></hr>
        <button className="btn btn-primary" onClick={onHadlePrimaryBtn}>Botón</button>
        <button className="btn" onClick={onHadlePrimaryBtn}>Reset</button>
        </>
    )
}