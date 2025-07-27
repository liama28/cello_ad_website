export default function PriceLocationSection() {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Price</h2>
            <p className="text-4xl font-light text-blue-600 mb-2">$1,900</p>
            <p className="text-gray-600">Or best offer</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Location</h2>
            <p className="text-xl text-gray-800 mb-2">Omaha, Nebraska</p>
            <p className="text-gray-600">Available for local pickup</p>
          </div>
        </div>
      </div>
    </section>
  );
}