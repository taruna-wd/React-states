import { useState } from "react"

 export default function State(){
  let [count ,setCount]  = useState(0);


    function increaseCount (){
         setCount((crrCount)=>{
            return crrCount + 2

         })
    }
   
    return (
        
        <>
        <div>
            <h2>Count = {count}</h2>
            <button onClick={increaseCount}> increase Count</button>
        </div>
        </>
    )
 };