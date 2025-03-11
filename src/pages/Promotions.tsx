import Chill from '../../public/assets/chill.jpeg';
import bonfireImage from "../../public/assets/bonfire.png";



export default function Promotions() {
  return (
    <div className="pt-24 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-16 text-[#8B2B06]">Special Offers & Promotions</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Summer Escape",
              description: "Experience the ultimate getaway at Saavi Hotels, where cozy accommodations, serene surroundings, and refreshing amenities come together to help you beat the summer heat. Unwind in style, enjoy delicious cuisine, and create cherished memories in a tranquil setting.",
              validUntil: "Feburary 14, 2025",
              image: Chill
            },
            {
              title: "Weekend Getaway",
              description: "Escape the hustle and bustle with Saavi Hotels, the perfect destination for a relaxing weekend. Enjoy cozy stays, scenic views, and memorable experiences that rejuvenate your mind and soul.",
              validUntil: "Feburary 14, 2025",
              image: bonfireImage
            },
            {
              title: "Special Offer",
              description: "Take advantage of exclusive discounts and packages at Saavi Hotels, offering exceptional value for a luxurious stay. Don’t miss the chance to experience comfort, relaxation, and memorable moments at an unbeatable price.",
              validUntil: "Feburary 14, 2025",
              image: "https://media.istockphoto.com/id/940891760/vector/discount-20-background-with-brush-strokes.jpg?s=612x612&w=0&k=20&c=9u0ar0h2zbCB9KM1OCPCZC96GRHjm1ME3bS-fn7Y43U="
            }
          ].map((promo, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{promo.title}</h3>
                <p className="text-gray-600 mb-4">{promo.description}</p>
                <p className="text-sm text-gray-500">Valid until: {promo.validUntil}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}