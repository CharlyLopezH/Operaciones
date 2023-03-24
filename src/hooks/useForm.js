import { useState } from "react";

export const useForm=(initialForm={})=>{
    console.log(`Entrando al useForm`);
    const [formState, setFormState]=useState(initialForm);

    const onInputChange = ({target}) => {
      const {name,value} = target;      
      console.log('formState'+ {...formState});
      setFormState({        
        ...formState,
        [name]:value
      });
 }

 const onHandlerResetForm = () => {
  console.log('en el Handler del UseForm Limpiar el formulario');
  setFormState(initialForm);
  ({initialForm}='');
 }

 //Expone lo que el componenente padre va a poder soliciar
    return {                
        ...formState,
        formState,
        onInputChange,
        onHandlerResetForm
    }
}