import React,{useEffect , useState} from 'react'

const App = () => {

  const [count,setcount]=useState(0)

  useEffect(()=>{

    console.log("Running");
    
  },[])  // runs only one time (dependency array)


  //========= count useeffect with state update============

  let Addcount=()=>{
    setcount(count+1)
  }

  useEffect(()=>{
    console.log("count updated");
    
  },[count]) // it will update only when count changes

  return (
   <>
       <h1>Hello</h1>

       <h1>{count}</h1>
       <button onClick={Addcount}>Click me</button>
   </>
  )
}

export default App