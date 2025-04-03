import { content } from "@/lib/content";

import { Link } from "react-router-dom";

export default function Select() {
  return (
    <div className="pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <h1 className="text-4xl font-bold text-center mb-16">Our Hotels & Resorts</h1> */}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.hotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{hotel.name}</h3>
                <p className="text-gray-600 mb-4">{hotel.location}</p>
                <p className="text-gray-700 mb-6">{hotel.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Amenities:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {hotel.amenities.map((amenity, index) => (
                      <li key={index} className="text-gray-600">• {amenity}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <Link to="/booking">
                    {/* <Button className="w-full">Book Now</Button> */}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}