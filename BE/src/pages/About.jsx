import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Mission, Vision &amp; Core Values
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            At Bellevated Enterprises, we operate with excellence, integrity, and Kingdom-driven purpose
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-500 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              To deliver courier excellence and next-level consulting while empowering individuals to
              build strong financial foundations, operate compliant businesses, and rise into leadership
              within their communities—with integrity, stewardship, and elite customer service.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-indigo-500 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              To see individuals, families, and businesses elevated into stability, ownership, and influence,
              creating a network of entrepreneurs and service providers who operate with excellence,
              integrity, and Kingdom-driven purpose.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center border-2 border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Integrity</h3>
              <p className="text-gray-700 leading-relaxed">We operate honestly, ethically, and transparently in every service we provide, believing integrity is the foundation of lasting success.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center border-2 border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Excellence</h3>
              <p className="text-gray-700 leading-relaxed">We deliver high standards in courier services, consulting, and financial solutions, treating excellence as both a professional responsibility and a form of stewardship.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center border-2 border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Stewardship</h3>
              <p className="text-gray-700 leading-relaxed">We responsibly manage resources, opportunities, and relationships to create lasting value and impact.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center border-2 border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">4</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Empowerment</h3>
              <p className="text-gray-700 leading-relaxed">We equip individuals with knowledge, tools, and strategies to move from limitation to leadership and from dependence to ownership.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center border-2 border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">5</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Service</h3>
              <p className="text-gray-700 leading-relaxed">We serve clients, partners, and communities with humility and purpose, understanding that true leadership begins with serving others well.</p>
            </div>
          </div>
        </div>
        
        <div className="text-center py-12">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-1">
            <div className="bg-white rounded-2xl px-12 py-8">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                </svg>
                <h3 className="text-xl font-bold text-gray-900">Our Foundation</h3>
              </div>
              <p className="text-gray-700 font-medium text-lg italic">
                "In everything, do to others what you would have them do to you..." - Matthew 7:12
              </p>
              <p className="text-gray-600 mt-2">
                This is the standard we are restoring in every client we serve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
