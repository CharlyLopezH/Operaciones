import { useCounter } from "./hooks/useCounter";

export const CustomHookApp=()=>{

    const {contador, incrementarCuenta,decrementarCuenta,resetearCuenta} = useCounter();

    return(
        <>
        <h1> Custom Hooks example, contador: {contador}</h1>
        <hr></hr>
        <button onClick={incrementarCuenta} className="btn btn-primary">+1</button>
        <button onClick={resetearCuenta} className="btn btn-warning">Reset</button>
        <button onClick={decrementarCuenta} className="btn btn-secondary">-1</button>
        </>
    )
}