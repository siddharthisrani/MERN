import React from 'react'

const FormLayout = () => {
  return (
    <>
      
      <form >

     <label htmlFor="name">Enter Name: </label> <input type="text" placeholder='Enter Name' id='name'/> <br /> <br />

     <label htmlFor="email">Enter Email: </label>  <input type="text" placeholder='Enter Email' id='email' /> <br /> <br />

     <button type="submit">Submit</button>

      </form>

    </>
  )
}

export default FormLayout