import React,{useState,useEffect} from 'react'
import axios from 'axios'

const App = () => {

  const [data,setdata]=useState([])

  let api="https://jsonplaceholder.typicode.com/users"
  
  useEffect(()=>{

  axios.get(api).then((e)=>{
    console.log(e.data);
    setdata(e.data)

  })
  },[])





  return (
    <>
       
       <table border="1">
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>

  
       {data.map((e)=>(
      <tr>
           <td>{e.name}</td>
           <td>{e.email}</td>
       </tr>
       ))}
  

        </table> 
    
    </>
  )
}

export default App