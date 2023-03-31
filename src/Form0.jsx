import { useState } from "react"

export const Form0=()=> {

    const initialFormValues = {firstName: "", lastName: "", email:""};

    const [formData, setFormData] = useState(initialFormValues);

    const handleChange = ({target}) => {        
        setFormData(
            {
            ...formData,
            [target.name]:target.value
            }
        )
    }
    console.log(formData)
    const onHandleReset=()=>{
        console.log('Reset');
        setFormData(initialFormValues);
    }
    return (
        <>
        <div>
        <h1>Formulario Simple</h1>
        <hr/>
            <input
                className="form-control mt-2 col-md-6" 
                name="firstName"                
                value={formData.firstName}
                placeholder="Nombre"
                onChange={handleChange}
            />
            <input className="form-control mt-2 col-md-6" 
            name="lastName"
            value={formData.lastName}
            placeholder="Apellido"
            onChange={handleChange}
            />

<input className="form-control mt-2 col-md-6" 
            name="email"
            value={formData.email}
            placeholder="Correo electrónico"
            onChange={handleChange}
            />

            <hr/>
            <button
            className="btn btn-warning"
            onClick={onHandleReset}
            >Click</button>
            <h2>{formData.firstName}</h2>
            <h3>{formData.lastName}</h3>
            <h3>{formData.email}</h3>
            </div>
        </>
    )
}
