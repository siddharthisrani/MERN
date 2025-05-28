 import React from 'react'

import homevid from './assets/home.mp4'
 import img1 from './assets/cardimg1.png'
 import img2 from './assets/cardimg2.png'
 import img3 from './assets/cardimg3.png'
import Card from "./Card"

 
 const Hero = () => {
   return (
    <>
      
      <div className='homevideo'>
      <video src={homevid} muted autoPlay loop ></video>
      </div>

  <div className="cards">
     <Card img={img1} model="16" price="119900.00" emi="9825.00" month="12" /> 
     <Card img={img2} model="15" price="129900.00" emi="4625.00" month="24" /> 
     <Card img={img3} model="14" price="99900.00" emi="3625.00" month="16" /> 
</div>  
       
</>
   )
 }
 
 export default Hero