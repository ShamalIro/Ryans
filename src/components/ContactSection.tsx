import React from 'react';
import { MapPin, Phone, Mail, Facebook, ExternalLink } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
// Fix for default marker icon issue in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
});
export const ContactSection = () => {
  // Malabe coordinates
  const position: [number, number] = [6.9064, 79.9683];
  return <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact <span className="text-red-600">Us</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We'd love to hear from you. Visit us, call us, or send us a message.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <div className="bg-neutral-800 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 rounded-full p-3 mt-1">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Address</h4>
                    <p className="text-gray-300">
                      No.465/4, Athurugiriya Road, Arangala, Malabe
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 rounded-full p-3 mt-1">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <p className="text-gray-300">+94 11 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 rounded-full p-3 mt-1">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-gray-300">info@ryansrestaurant.com</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a href="#" className="bg-neutral-700 hover:bg-red-600 transition-colors duration-300 p-3 rounded-full">
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="bg-neutral-700 hover:bg-red-600 transition-colors duration-300 p-3 rounded-full">
                  <ExternalLink className="h-5 w-5 text-white" />
                  <span className="sr-only">Uber Eats</span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-neutral-800 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Send a Message
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Name
                    </label>
                    <input type="text" id="name" className="w-full bg-neutral-700 border border-neutral-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Email
                    </label>
                    <input type="email" id="email" className="w-full bg-neutral-700 border border-neutral-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="Your email" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">
                    Subject
                  </label>
                  <input type="text" id="subject" className="w-full bg-neutral-700 border border-neutral-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="Subject" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea id="message" rows={4} className="w-full bg-neutral-700 border border-neutral-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 rounded-lg overflow-hidden h-[400px]">
          <MapContainer center={position} zoom={15} style={{
          height: '100%',
          width: '100%'
        }} scrollWheelZoom={false}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
              <Popup>
                RYANS Restaurant <br /> No.465/4, Athurugiriya Road, Arangala,
                Malabe
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>;
};