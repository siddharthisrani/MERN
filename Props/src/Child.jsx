import React from 'react'

const Child = ({name,age}) => { // destructuring
  return (
    <>
       <h1>Child Component</h1>
       
       <h2>Heya i am {name}</h2>
       <h2>And i am {age} </h2>
      
    </>
  )
}

export default Child