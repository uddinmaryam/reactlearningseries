import React, { useState } from 'react';

function Hide() {
    const [isShow, setisShow] = useState(true);

    return(
        <div>
            <button onClick={
                () => 
                setisShow(!isShow)

                }
            >Show</button>
            {isShow && <p>This is a hidden message</p>}
            
        </div>
    )
}
export default Hide;