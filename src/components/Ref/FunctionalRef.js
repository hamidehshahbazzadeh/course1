import {useEffect, useState,useRef } from "react";



const FunctionalREf = () => {
    const[inputValue,setInputValue]=useState('');
    const inputRef=useRef();
    const previousValue=useRef();
    const[count,setCount]=useState(0);
    const previousCount=useRef()
    const ChangeHandler=(e)=>{
       setInputValue(e.target.value)
    }
    const ResetHandler=()=>{
        setInputValue("");
         inputRef.current.focus();
    }
    useEffect(()=>{
     previousValue.current=inputValue;
    },[inputValue])
    useEffect(()=>{
     previousCount.current=count
    },[count])
    return ( 
        <div><input type="text" ref={inputRef} value={inputValue} onChange={ChangeHandler}/>
           <button onClick={ResetHandler}>Reset</button>
           <p>my name is  {inputValue}  and it used  {previousValue.current}</p>
           <div><button onClick={()=>setCount(Math.ceil(Math.random()*100))}>generate random</button>
           <div>count is:{count}</div>
           <div>previos is count {previousCount.current}</div>
           </div>
    
        </div>
         
  

     );
}
 
export default FunctionalREf;