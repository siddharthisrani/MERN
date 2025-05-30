import React, { useState } from 'react'

const App = () => {

    // const [variable, setVariable]=useState(initialValue)

    const [count,setcount]=useState(0) // initilsed with 0

    let inc=()=>{
        setcount(count+1)
    }
     let dec=()=>{
        setcount(count-1)
    }

    return (
    <>
        <h1 className='text-5xl mb-4'>Count App</h1>  

        <h2 className='text-green-400 text-4xl'>{count}</h2>   {/* value to show  */}

        <button onClick={inc} className='p-3 border border-black rounded'>Increase</button>
        <button onClick={dec} className='p-3 border border-black rounded'>Decrease</button>
    </>
  )
}

export default App