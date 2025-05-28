 import logo from './assets/logo.png'

 const Navbar = () => {
   return (
    <>
        <header id='navbar'>
              
              <img src={logo} alt="" style={{width:"50px"}} />

              <nav>
                <ul>
                <li><a href="#home">Home</a></li> 
                <li><a href="#card">Cards</a></li> 
                <li><a href="#detail">Service</a></li>
               <li><a href="#foot">Contact Us</a></li>  
                </ul>
              </nav>

              <button>App Download</button>

        </header>

      
</> 
   )
 }
 
 export default Navbar