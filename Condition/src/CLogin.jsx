import React,{useState} from 'react'

const App = () => {

const [islogin,setislogin]=useState(false)

let logout=()=>{
    setislogin(false)
}

let login=()=>{
    setislogin(true)
}

  return (
    <>
    
    { islogin ?  <>
     <p>Welcome Sid</p>
       <button onClick={logout}>Logout</button>
     
       </> 
    :
    <>
   <p>Please Login</p>
       <button onClick={login}>Login</button>
       </>
    }
       
       

      

    </>
  )
}

export default App