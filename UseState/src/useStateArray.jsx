import React from 'react'
import { useState } from 'react'

const App = () => {

    // const [variable, setVariable]=useState(initialValue)
    const [fruits,setfruits]=useState([])
    const [input,setinput]=useState('')

    let addTask=()=>{

        setfruits([...fruits,input])
        setinput("")

    }
    

  return (
    <>

    <input type="text" value={input} onChange={(e)=>{setinput(e.target.value)}} />

    <button onClick={addTask}>Add Task</button>
    
<ul>
    { fruits.map((e)=>(
         <li>{e}</li>
      ))}

</ul>  
    </>
  )
}

export default App