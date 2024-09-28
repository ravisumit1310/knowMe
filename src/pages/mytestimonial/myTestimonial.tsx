import React from 'react';

// Define the service type
interface Service {
  name: string;
  image: string;
  say: string;
  rating: number;
}

// Testimonial array (ensure it's defined above or imported)
const Testimonial = [
  {
    image: "https://placehold.co/100x100?text=Person1",
    name: "John Doe",
    say: "This is an amazing service!",
  },
  {
    image: "https://placehold.co/100x100?text=Person2",
    name: "Jane Smith",
    say: "I had a great experience with this company!",
  },
  {
    image: "https://placehold.co/100x100?text=Person3",
    name: "Bob Roberts",
    say: "Highly recommend to everyone!",
  },
];

const Services: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
          {/* Add some margin or padding to prevent content from hiding */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-16">
            {Testimonial.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <img src={service.image} alt={service.name} className="mx-auto mb-4" />
                <h2 className="text-xl font-bold mb-2">{service.name}</h2>
                <p className="text-gray-600 mb-4">{service.say}</p>
                <a href="#" className="text-blue-600 font-semibold">MORE...</a>
              </div>
            ))}
          </div>
        </div>
      );
    
};

export default Services;

