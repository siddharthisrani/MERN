
const App = () => {

  let Intcss= {
       color:"blue",
       backgroundColor:"orange"
  }

  return (
    <>
    
      <h1 style={{color:"green", backgroundColor:"gainsboro"}}>This is by Inline Css</h1> 

      <h1 style={Intcss}>This is by Internal Css</h1>

      <h1 className="text">This is by External Css</h1>

    </>
  )
}

export default App