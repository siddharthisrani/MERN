import React from 'react'

const Features = () => {
  return (
    <>
    <section id="services" className="bg-white py-16 px-4 text-center">
  <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
  <div className="grid md:grid-cols-3 gap-8">
    <div className="p-6 border rounded-lg hover:shadow-xl transition">
      <h3 className="font-semibold text-xl mb-2">Trusted Brands</h3>
      <p className="text-gray-600">We only showcase premium verified brands.</p>
    </div>
    <div className="p-6 border rounded-lg hover:shadow-xl transition">
      <h3 className="font-semibold text-xl mb-2">Fast Delivery</h3>
      <p className="text-gray-600">Get your product delivered within 2 days.</p>
    </div>
    <div className="p-6 border rounded-lg hover:shadow-xl transition">
      <h3 className="font-semibold text-xl mb-2">Best EMI Options</h3>
      <p className="text-gray-600">Flexible EMI plans starting from just ₹3,625/month.</p>
    </div>
  </div>
</section>

    </>
  )
}

export default Features