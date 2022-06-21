
import React, { useReducer } from "react";

const initialState={
    firstCounter:0,
    secondCounter:0,
};

const reducer=(state,action)=>{
    console.log(state,action)
    switch (action.type){
        case "addOne":
          return {...state,firstCounter:state.firstCounter +action.value};
          case "decrement":
            return {...state,firstCounter:state.firstCounter -action.value};
          case "Reset":
              return initialState;
              case "addOne2":
              return {...state,secondCounter:state.secondCounter +action.value};
              case "decrement2":
                return {...state,secondCounter:state.secondCounter -action.value};
        default:
            return state;
    };
};
const CountReducer = () => {

const [count,dispatch]=useReducer(reducer,initialState);


    return ( 
        <div>
        <h1>count one is:{count.firstCounter}</h1>
        <h1>count two is:{count.secondCounter}</h1>
        <div>
      <button onClick={()=>dispatch({type:"addOne",value:1})}>addOne</button>  
      <button onClick={()=>dispatch({type:"decrement",value:1})}>decrement</button>
      <button onClick={()=>dispatch({type:"decrement",value:5})}>decrement</button>
      </div>
      <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
      <div>
      <button onClick={()=>dispatch({type:"addOne2",value:1})}>addOne</button>  
      <button onClick={()=>dispatch({type:"decrement2",value:1})}>decrement</button>
      <button onClick={()=>dispatch({type:"decrement2",value:5})}>decrement</button>
      </div>
      </div>
     );
}
 
export default CountReducer;