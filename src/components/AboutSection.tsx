import React from 'react';
export const AboutSection = () => {
  return <section id="about" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/481041383_651493714063649_5325906218798010275_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-N4prJYdDekQ7kNvwE4n6Y_&_nc_oc=AdmTk3KU1W4BWKthsJ1yFvy7SakUgLEanxOxfNbD05pc5fiMuwERuAisaXqvJRoxyUA&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=o9XJRkRMhu4HhO2X4ukq9Q&oh=00_AfiOllMTAvu79MDY_W5abLNpQw6Mlu6vja7bObAJQGd8Fg&oe=691B48E3" alt="RYANS Restaurant Interior" className="rounded-lg shadow-2xl w-full h-[400px] object-cover" />
              
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-red-600">Story</span>
            </h2>
            <div className="w-20 h-1 bg-red-600 mb-6"></div>
            <p className="text-gray-300 mb-6">
              Welcome to RYANS Restaurant, where tradition meets innovation in
              the heart of Malabe. Established with a passion for authentic Sri
              Lankan cuisine, we have been serving delicious meals made from
              locally-sourced, fresh ingredients since our founding.
            </p>
            <p className="text-gray-300 mb-8">
              Our mission is simple: to provide an exceptional dining experience
              that celebrates the rich culinary heritage of Sri Lanka. Every
              dish we serve is crafted with care, combining time-honored recipes
              with contemporary techniques to create flavors that delight and
              comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-red-600 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white">Quality Ingredients</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-red-600 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white">Authentic Recipes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-red-600 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white">Warm Hospitality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};