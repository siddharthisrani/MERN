
const Card = ({model,price,emi,month,img}) => {
   return (
    <>
      {/* Card Data by Props directly */}
       <div id='card'>
           
           <img src={img} alt="" />
           <h2>iPhone {model} Pro</h2>
           <p>The ultimate iPhone.</p>
           <p>From ₹{price}* </p> 
           <p> or ₹{emi}/mo. for {month} mo.‡</p>
           <button>Learn More</button>

       </div>

      
    
    
    </>
   )
 }
 
 export default Card