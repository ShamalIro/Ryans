import React, { useState } from 'react';
type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'mains' | 'appetizers' | 'desserts' | 'drinks';
};
export const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<'mains' | 'appetizers' | 'desserts' | 'drinks'>('mains');
  const menuItems: MenuItem[] = [{
    id: 1,
    name: 'Rice and Curry',
    description: 'Traditional Sri Lankan rice served with 4 vegetable curries and your choice of chicken, fish or beef curry',
    price: 'Rs. 850',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'mains'
  }, {
    id: 2,
    name: 'Kottu Roti',
    description: 'Chopped godamba roti stir-fried with spices, vegetables and your choice of chicken, beef, or cheese',
    price: 'Rs. 750',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'mains'
  }, {
    id: 3,
    name: 'String Hoppers',
    description: 'Steamed rice flour noodles served with coconut sambol, dhal curry and fish curry',
    price: 'Rs. 650',
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'mains'
  }, {
    id: 4,
    name: 'Hoppers',
    description: 'Bowl-shaped pancakes with crispy edges and soft center, served with seeni sambol and curry',
    price: 'Rs. 600',
    image: 'https://images.unsplash.com/photo-1632789395770-20e6f63be806?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'mains'
  }, {
    id: 5,
    name: 'Cutlets',
    description: 'Deep-fried balls of fish or vegetables mixed with potatoes and spices',
    price: 'Rs. 450',
    image: 'https://images.unsplash.com/photo-1630698467933-60129917a2c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'appetizers'
  }, {
    id: 6,
    name: 'Isso Wade',
    description: 'Spicy lentil fritters topped with prawns',
    price: 'Rs. 500',
    image: 'https://images.unsplash.com/photo-1633383718081-22ac93e3db65?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'appetizers'
  }, {
    id: 7,
    name: 'Watalappan',
    description: 'Traditional Sri Lankan coconut custard dessert with jaggery and cashew nuts',
    price: 'Rs. 350',
    image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'desserts'
  }, {
    id: 8,
    name: 'King Coconut',
    description: 'Fresh king coconut water served in its natural container',
    price: 'Rs. 250',
    image: 'https://images.unsplash.com/photo-1551376347-075b0121a65b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'drinks'
  }];
  const filteredItems = menuItems.filter(item => item.category === activeCategory);
  return <section id="menu" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-red-600">Menu</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover the rich flavors of Sri Lankan cuisine with our carefully
            crafted menu. Each dish is prepared with authentic spices and fresh
            ingredients.
          </p>
        </div>
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm bg-neutral-800 p-1">
            {(['mains', 'appetizers', 'desserts', 'drinks'] as const).map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-5 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${activeCategory === category ? 'bg-red-600 text-white' : 'text-gray-300 hover:text-white'}`}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>)}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map(item => <div key={item.id} className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {item.name}
                  </h3>
                  <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
            View Full Menu
          </button>
        </div>
      </div>
    </section>;
};