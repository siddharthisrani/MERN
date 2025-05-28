
const CardbyData = ({product}) => {
  return (
<>
 {/* Card data by props through Js file  */}

    <div className="bg-white shadow-xl rounded-2xl p-4 w-full max-w-xs m-4 text-center">
       <img src={product.image} alt={product.name} className="rounded-xl h-40 object-cover mx-auto" />
        <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
        <p className="text-gray-600 mt-2">{product.description}</p>
    </div>

</>
  )
}

export default CardbyData