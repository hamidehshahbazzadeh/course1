import React,{ useEffect, useState } from "react"

const FunctionalTimer = () => {
    const [count,setCount]=useState(0);

    useEffect(()=>{
    const interval=  setInterval(()=>{
          console.log("hi hamid");
          setCount(count+1)
      },1000);
      return()=>{
       clearInterval(interval);
      };
    },[]);
    return ( 
        <div>class intervall</div>
     );
}
 
export default FunctionalTimer;
