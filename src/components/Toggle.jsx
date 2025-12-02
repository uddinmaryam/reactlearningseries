import React, {useState} from "react";


function Toggle() {
    const [isHello, setIsHello] = useState(true);
   return(
        <div>
            <button onClick={() => setIsHello(!isHello)}>Toggle</button>
            <p>{isHello ? "Hello" : "Goodbye"}</p>
        </div>

    )
}
export default Toggle;