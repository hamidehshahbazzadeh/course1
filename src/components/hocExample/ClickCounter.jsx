import React, { useState } from "react";
import withCounter from "../hoc/withCounter";


const ClickCounter = ({count,incrementCount,name}) => {
  console.log(name)
     
    return ( 
        <div>
            <h2 onClick={incrementCount}>Click{count}times</h2>
        </div>
     );
}
 
export default withCounter(ClickCounter ,5);