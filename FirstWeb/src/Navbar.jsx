 import logo from './assets/logo.png'

 const Navbar = () => {
   return (
    <>
        <header id='navbar'>
              
              <img src={logo} alt="" style={{width:"50px"}} />

              <nav>
                <ul>
                <li><a href="">Home</a></li> 
                <li><a href="">Cards</a></li> 
                <li><a href="">Service</a></li>
               <li><a href="">Contact Us</a></li>  
                </ul>
              </nav>

              <button>Download</button>

        </header>

      
</> 
   )
 }
 
 export default Navbar