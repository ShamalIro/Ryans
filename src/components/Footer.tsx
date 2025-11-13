import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-neutral-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              <span className="text-red-600">RYANS</span> Restaurant
            </h3>
            <p className="mb-4">
              Experience the authentic flavors of Sri Lanka in a modern, elegant
              setting. Our commitment is to quality food and exceptional
              service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['home', 'about', 'menu', 'gallery', 'contact'].map(item => <li key={item}>
                  <button onClick={() => scrollToSection(item)} className="text-gray-300 hover:text-red-500 capitalize transition-colors duration-300">
                    {item}
                  </button>
                </li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Opening Hours
            </h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>10:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>11:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <address className="not-italic">
              <p className="mb-2">
                No.465/4, Athurugiriya Road, Arangala, Malabe
              </p>
              <p className="mb-2">+94 11 123 4567</p>
              <p>info@ryansrestaurant.com</p>
            </address>
          </div>
        </div>
        <div className="border-t border-neutral-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} RYANS Restaurant. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>;
};