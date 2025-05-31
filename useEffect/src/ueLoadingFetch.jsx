import React,{useState,useEffect} from 'react'
import axios from 'axios'
const App = () => {
   
    const [data,setdata]=useState([])
    const [loading,setloading]=useState(true) // default value true

   let api="https://jsonplaceholder.typicode.com/users"
     
   useEffect(()=>{
     
    axios.get(api).then((e)=>{
        
        setdata(e.data)
        setloading(false)  // when data comes true

    })
      
    
   },[])  // dependancy runs onlt one time



  return (
    <>
       
{/* loading shown by ternary operator  */}
{loading?"Loading data":  
    
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

    }
    
    </>
  )
}

export default App