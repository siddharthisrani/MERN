   import React from "react"
import Child from "./Child"
     
     const App=()=>{ 
        
     let name="Siddharth"
     let age=25

        return(
            <>
                {/* <Child name="Siddharth" age={25}/> Parent to child  */}

                <Child name={name} age={age}/>  {/* Parent to child */}
            </>
        )

     }

     export default App