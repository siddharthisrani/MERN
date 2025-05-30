 import React from 'react'
 
 const App = () => {

let giveAlert=()=>{
    alert("Hello World")
}

let Show=(e)=>{

    console.log(e.target.value); 

}

let hoverMe=()=>{

    document.querySelector("#btn1").style.backgroundColor="red"

}

let outMe=()=>{

    document.querySelector("#btn1").style.backgroundColor="white"

}

   return (
    
    <>
    
<div className='bg-gray-500 w-100 h-screen flex justify-center items-center gap-10'>

 {/* onClick event  */}
    <button onClick={giveAlert}>Click Me</button>  <br /> <br />

{/* onInput event  */}

   <input type="text" onChange={Show} className='w-100 h-10'/>    <br /> <br />

{/* onMouseenter  onMouseLeave event  */}

   <button onMouseEnter={hoverMe} onMouseLeave={outMe} id='btn1'>Hover Me</button>

 </div>   

    </>

   )
 }
 
 export default App