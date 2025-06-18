import React, { useState } from 'react'

const FormSubmit = () => {

    const [name,setname]=useState('')
    const [email,setemail]=useState('')

    let handleSubmmit=(e)=>{
       e.preventDefault()  // stops refresh 

       alert("Submitted" + name +" "+ email )
    }

  return (
    <>
        
  <form onSubmit={handleSubmmit}>

     Enter Name:<input type="text" onChange={(e)=>setname(e.target.value)}  /> <br /> <br />

     Enter Email:<input type="text" onChange={(e)=>setemail(e.target.value)} /> <br /> <br />

     <button type="submit">Submit</button>

    </form>

    </>
  )
}

export default FormSubmit