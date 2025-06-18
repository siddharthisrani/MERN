import React, { useState } from 'react'

const FormMultiple = () => {

      const [inputs,setinputs]=useState({name:"",email:""})
      
      let handleChange=(e)=>{
        
        // let name=e.target.name
        // let value=e.target.value
        const {name,value}=e.target // destructuring

        setinputs({...inputs, [name]:value })


      }

      let handleSubmmit=(e)=>{

        e.preventDefault()
        alert("Submitted" + inputs.name + inputs.email)
    
      }

  return (
    <>
        <form onSubmit={handleSubmmit}>

     Enter Name:<input type="text" name='name' value={inputs.name} onChange={handleChange} /> <br /> <br />

     Enter Email:<input type="text" name='email' value={inputs.email} onChange={handleChange} /> <br /> <br />

     <button type="submit">Submit</button>

    </form>
    </>
  )
}

export default FormMultiple