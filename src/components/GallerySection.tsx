import React, { useState } from 'react';
import { XIcon } from 'lucide-react';
export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const galleryImages = [{
    id: 1,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/480740094_648176067728747_2425819528170988352_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=714c7a&_nc_ohc=N9v-6_KdteEQ7kNvwHRsmjH&_nc_oc=AdmIAee2eV35X1dFYcLPULP2iCfVc56MZ57YTUGvcB2tBT8d1JB7NNaazKL_zydgzoI&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=Chez7Mlty-c_Sps8_DOylw&oh=00_AfgtzAhhheLdIpAVqlOs4tjAKq0u4RSYippKBfUNC9PClA&oe=691B3CBB',
    alt: 'Kottu Roti'
  }, {
    id: 2,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/481161009_648179557728398_5591645000030409464_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=104&ccb=1-7&_nc_sid=714c7a&_nc_ohc=dKfv3esbNfcQ7kNvwFPfimc&_nc_oc=AdmqZbsjU8VNr93iP_vl2BvL2mx5kEx08W5PdmjKWLcx8F4XIPYDSyoOyxHLDMO1Kdc&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=DtSqs6pWs94IELIMSGLxDg&oh=00_AfjQEuzCEk25JpBzTptm6dlwNkMO6b9kp_E0GWfyIQXViA&oe=691B3829',
    alt: 'Sri Lankan Curry'
  }, {
    id: 3,
    url: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    alt: 'Rice and Curry'
  }, {
    id: 4,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/481223065_648179554395065_2341833042975743821_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=109&ccb=1-7&_nc_sid=714c7a&_nc_ohc=EqCyLd8SNTIQ7kNvwEkyom0&_nc_oc=AdkyuO_QhdrfJPuP6c9sl4VTXiu6NEVVHpVRpvIcVizISx3VDZ1o1iFDePPVp1dRQIc&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=lBw2jeUlnRd8h-b-tRG8oQ&oh=00_AfhTqtx5LiKXCja0adocioVPJZeJ-7MSrJ_c8zuALcG9gw&oe=691B4362',
    alt: 'String Hoppers'
  }, {
    id: 5,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/481176634_651338770745810_4071879701951201322_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JXA_G51HoZkQ7kNvwFyxcE3&_nc_oc=AdmoRGWLut_EZ65ZHCuZvL6AbmBZGzYtKwVTz1D7wOrAMGoSOxt7X9xGNG8fgrvgTAA&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=bCmlvCeLDdLWQeiAwwnGyQ&oh=00_Afh5FeRjgCtn3q_AHnXbmPgEyjRA8TUYVxy1tSifpU1V5A&oe=691B257B',
    alt: 'Restaurant Interior'
  }, {
    id: 6,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/480610116_649174584295562_2921476875885189567_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=100&ccb=1-7&_nc_sid=50ad20&_nc_ohc=Sq-s0Z_e2yAQ7kNvwGAePBr&_nc_oc=Adm1HvOmg0uRVlxzBTGQ1dkxjX_MSMWNxUzs81dzP3XE7BqlUd-Sdzmck90V2Urca6A&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=3rKz-kO9Sp8GuE9phNHdaw&oh=00_AfhulDW3qQN2Fq7mpvhJ6--8m_hhqXLjYzNGtNXUc7XqXw&oe=691B240C',
    alt: 'Dining Area'
  }, {
    id: 7,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/481140630_648807654332255_4032539140425813709_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=104&ccb=1-7&_nc_sid=714c7a&_nc_ohc=BfxMDpd9ezgQ7kNvwHYyB1E&_nc_oc=Adm8I84Dw_iStWbx7EZT4NPhV_5c-7zR3L7LO8aVPBq_TzQa2C72U216zF1rxQShgJA&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=9tpG9AJce2ChS3wsdL9pCw&oh=00_AfikVRPZDnG1yC4OBFRYHLV7sVKQSbWuFlwQD5WgU6rQCA&oe=691B3DF9',
    alt: 'King Coconut'
  }, {
    id: 8,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/481013815_648807650998922_1498676199903675758_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=714c7a&_nc_ohc=-ayuDhcjWhsQ7kNvwHntF52&_nc_oc=AdnsYTYa2liJWeUxwDHT0jUwIUXvpZK3iyyBP09om8q12UTs-vZbk7IrRyLcf7QuHZE&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=9tpG9AJce2ChS3wsdL9pCw&oh=00_AfjmeKL1u9CVOTKyi460wCQcrrUp04Nk-zrvHnlzc3r7jQ&oe=691B4479',
    alt: 'Watalappan Dessert'
  }];
  return <section id="gallery" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-red-600">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Take a visual journey through our delicious dishes and restaurant
            ambiance.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map(image => <div key={image.id} className="aspect-square overflow-hidden rounded-lg cursor-pointer relative group" onClick={() => setSelectedImage(image.url)}>
              <img src={image.url} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>)}
        </div>
      </div>
      {/* Lightbox */}
      {selectedImage && <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh]">
            <button className="absolute -top-12 right-0 text-white hover:text-red-500 focus:outline-none" onClick={() => setSelectedImage(null)}>
              <XIcon size={32} />
            </button>
            <img src={selectedImage} alt="Enlarged view" className="max-w-full max-h-[80vh] object-contain" />
          </div>
        </div>}
    </section>;
};