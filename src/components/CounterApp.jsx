import { useState } from "react";

export const CounterApp = () => {
  const [{val1, val2, val3}, setCounter] = useState({val1:10, val2:20, val3:30});

  return (
    <>
      <hr></hr>
      <h3>Componente Counter App</h3>
      <h4>Val1: {val1} </h4>
      <h4>Val2: {val2} </h4>
      <h4>Val3: {val3} </h4>
      <hr></hr>
      <button
        onClick={() => {
          setCounter({val1:val1 + 1, val2, val3});
        }}
        className="btn btn-success"
      >        
        Add 1
      </button>
      
      {/* <button  onClick={() => {
          setCounter({val1} - 1);
        }}
        className="btn btn-danger"
      >  rest 1 </button> */}
    </>
  );
};
