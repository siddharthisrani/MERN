const Card = ({ model, price, emi, month, img }) => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={img} alt={`iPhone ${model}`} />
        <h2>iPhone {model} Pro</h2>
        <p>The ultimate iPhone.</p>
        <p>From ₹{price}*</p>
        <p>or ₹{emi}/mo. for {month} mo.‡</p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default Card;
