import React,{useState,useEffect} from 'react'

const App = () => {
  let delay=4000

  const [load,setload]=useState(true) // default true
  const[count,setcount]=useState(delay)

  setInterval(()=>{
if(delay>0){
     setcount(count-1000)
  }
},1000)
  

  useEffect(()=>{

   
       setTimeout(()=>{
        console.log("Loading completed");
        setload(false)
        
       },delay) // 4 sec delay

  },[])



  return (
    <>
         
       {load?`Loadind Data.....${count/1000}`: "Showing Data" }

    </>
  )
}

export default App