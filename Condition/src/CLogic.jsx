
import React from 'react'

const App = () => {

  let hour= new Date().getHours()  // current time in hour

  
  return (
    <>
   {/* ternary operator =>  condition ? on true : on false  */}
      <h1> {hour>12? hour>18?"Good Evening":"Good Afternoon" :"Good Morning"}  </h1>  
       
    </>
  )
}

export default App