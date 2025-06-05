  import React,{useState} from 'react'
  
  const App = () => {

const [visible,setvisible]=useState(true)

let toggle=()=>{

    setvisible(!visible)

}

    return (
      <>
        {visible && <p>Hello World i am Siddharth Israni</p> }
    
        <button onClick={toggle}> {visible?"Hide":"Show"} </button>

      </>
    )
  }
  
  export default App