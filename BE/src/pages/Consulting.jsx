import React from "react";

export default function Consulting() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Consulting & <span className="text-blue-600">Development</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We help entrepreneurs break limiting cycles and build scalable, sustainable businesses rooted in ownership, strategy, and discipline.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Consulting Approach</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Strategic Planning</h3>
                  <p className="text-gray-600 mt-2">Developing comprehensive business strategies tailored to your unique goals and market opportunities.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Financial Guidance</h3>
                  <p className="text-gray-600 mt-2">Expert advice on financial positioning, credit restoration, and sustainable growth strategies.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3 mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Risk Management</h3>
                  <p className="text-gray-600 mt-2">Identifying and mitigating potential risks to ensure long-term business stability and success.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Our Consulting?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm mr-3 mt-1">1</div>
                <span>Proven strategies that have helped hundreds of businesses achieve sustainable growth</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm mr-3 mt-1">2</div>
                <span>Personalized guidance tailored to your unique business needs and goals</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm mr-3 mt-1">3</div>
                <span>Focus on building systems that create lasting value and ownership</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm mr-3 mt-1">4</div>
                <span>Commitment to excellence and stewardship in every recommendation</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Consulting Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">We evaluate your current situation and identify key opportunities for growth.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600 text-sm">Developing a customized roadmap aligned with your business objectives.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm">Guiding you through execution with ongoing support and adjustments.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mx-auto mb-4">4</div>
              <h3 className="font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600 text-sm">Continuous refinement to ensure long-term success and growth.</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-1">
            <div className="bg-white rounded-2xl px-12 py-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Schedule a consultation with our experts to discover how we can help you achieve your business goals.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-8 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}