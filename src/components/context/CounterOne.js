import { useCount, useCountAction } from "./CounterProvider";

const CounterOne = () => {
    const count=useCount();
    const dispatch=useCountAction();
   
    return ( 
        <div>
          <h1>count:{count}</h1>
        <button onClick={()=>dispatch({type:"addOne" ,value:5})}>addOne</button>
        <button onClick={()=>dispatch({type:"decrement",value:3})}>decrement</button>
        <button onClick={()=>dispatch({type:"Reset"})}>reset</button>
        </div>
     );
}
 
export default CounterOne;