import { useState } from "react"


export default  function Bell() {
   let [bell , setbell] = useState(false);

    function fillBell(){
        setbell(!bell);
    }

    return (
        <>
        <div>
        <p onClick={fillBell}> 
        {!bell ? (<i class="fa-regular fa-bell"></i>) : ( <i class="fa-solid fa-bell"></i>)}

        </p>

        </div>
        </>
    )
};