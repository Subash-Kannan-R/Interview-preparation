import { useState } from "react";

const Task2 = () =>{
   const [count, setCount] =useState(0);
   const handleincreament = () =>{
    setCount(prev => prev + 1);
   }
   const handledecreament = () =>{
    setCount (prev => prev - 1);
   }    
    const handlereset = () =>{ 
        setCount (0);
    }     
  

       return (
        <div>
        <h2>Counter: {count}</h2>
        <button onClick = {handleincreament}>Increament</button>
        <button onClick = {handledecreament}>Decreament</button>
        <button onClick = {handlereset}>Reset</button>
        </div>
    )


}
export default Task2;