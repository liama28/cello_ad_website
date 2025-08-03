export default function ContactSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">Contact Information</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-800">liama28@gmail.com</span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-800">Omaha, NE</span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <a href="https://www.facebook.com/marketplace/item/1293348512350268/?mibextid=6ojiHh" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                  Facebook Marketplace
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Viewing Available</h3>
            
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-medium text-gray-900 mb-2">In-Person Viewing Welcome</p>
                <p className="text-sm text-gray-600">I encourage interested buyers to check out the cello in person before purchasing. This allows you to test the sound quality and feel of the instrument.</p>
              </div>
              
              <div>
                <p className="font-medium text-gray-900 mb-2">Scheduling</p>
                <p className="text-sm text-gray-600">Available most evenings and weekends. Please email to arrange a convenient time.</p>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Serious inquiries only.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}