import React, {usestate, useReducer , useContext } from "react";

const CounterContext=React.createContext();
const CounterContextDispstcher=React.createContext();
const initialState=0;
const Reducer=(state,action)=>{
   switch (action.type){
      case "addOne":
       return state +action.value;
       case "decrement":
            return state -action.value;
          case "Reset":
              return initialState;

   }
}
const CounterProvider = ({children}) => {
   const[count,dispatch]=useReducer(Reducer,initialState)
    return ( 
       <CounterContext.Provider value={count}>
           <CounterContextDispstcher.Provider value={dispatch}>
               {children}
           </CounterContextDispstcher.Provider>
       </CounterContext.Provider>
     );
}
 
export default CounterProvider;

export const useCount=()=>useContext(CounterContext);
export const useCountAction=()=>{
    return useContext(CounterContextDispstcher);
    // const addOne=()=>{
    //     setCount((prevCount)=>prevCount+1);
    // };
    // const decrement=()=>{
    //     setCount((prevCount)=>prevCount-1);
    // };
    // return {addOne,decrement};
};