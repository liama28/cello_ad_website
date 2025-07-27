export default function DescriptionSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">About This Cello</h2>
        
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="text-xl mb-6">
            This beautiful cello has been well maintained and is ready for its next home. 
            Perfect for intermediate to advanced players, it offers rich, warm tones and excellent projection.
          </p>
          
          <p className="text-xl mb-6">
            The cello was originally purchased in 2015 from A Cavallo Violins in Omaha for $3,200. It was then used for 3 years, and then sat in storage. It was recently taken to a repair shop where they fixed the bridge and put on a new set of Helicore strings.
          </p>
          
          <p className="text-xl mb-6">
            The body contains light scratches and dents. Some areas around the edge have very small chips. Included is a hard case, a stand, and two bows. The stand and bows are free and are not factored into the price.
          </p>

          <p className="text-xl mb-6">
            Inside the F-hole, the lable reads: &ldquo;Made in China for USAICA Imports. Academia 2014&rdquo;
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Specifications</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Intermediate full size 4/4 cello</li>
                <li>• Carved from solid wood</li>
                <li>• Professional Helicore strings</li>
                <li>• Comes with hard case, bow, and stand</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Condition</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Excellent playing condition</li>
                <li>• Recently serviced</li>
                <li>• Minor cosmetic wear (see photos)</li>
                <li>• Used hard case</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}