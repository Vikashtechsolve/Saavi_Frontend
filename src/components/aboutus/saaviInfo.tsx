import React from "react";
import Image01 from "../../../public/assets/Image_3.jpeg"

const SaaviInfo: React.FC = () => {
  return (
    <div className="p-6 space-y-4">
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center rounded-md text-center">
            <img src={Image01} alt="Saavi Hotel Image" className="rounded-lg" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-[#8B2B06] uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              About <span className="text-[#8B2B06]">Our Company</span>
            </h2>
            <p className="text-gray-700">
              <strong className="text-[#8B2B06]">Saavi Hotels and Resorts Private Limited</strong> is an emerging hospitality
              brand in India, founded by Deepak Dangi, a seasoned professional with over 13 years of
              experience in five-star hospitality. Saavi Hotels is committed to redefining corporate
              hospitality by offering world-class accommodations, personalized services, and modern
              amenities designed to meet the needs of business travelers and professionals.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold text-red-700 mb-2">Key Features of Saavi Hotels</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong className="text-[#8B2B06]">Corporate-Focused Stays:</strong> Tailored solutions for
            business travelers, including high-speed Wi-Fi, fully equipped
            business centers, meeting rooms, and seamless check-in/check-out
            processes.
          </li>
          <li>
            <strong className="text-[#8B2B06]">Uncompromising Comfort:</strong> Each property is designed
            to provide a luxurious yet functional experience, ensuring
            relaxation and productivity for guests.
          </li>
          <li>
            <strong className="text-[#8B2B06]">Strategic Locations:</strong> Saavi Hotels are strategically
            located in business hubs and major cities, making them easily
            accessible for corporate clients.
          </li>
          <li>
            <strong className="text-[#8B2B06]">Sustainability:</strong> Saavi Hotels emphasizes eco-friendly
            practices, ensuring operations contribute to a greener environment.
          </li>
          <li>
            <strong className="text-[#8B2B06]">Exceptional Guest Service:</strong> The team at Saavi Hotels
            is trained to deliver personalized and attentive service, creating
            memorable experiences for every guest.
          </li>
        </ul>
      </div>


      <div>
        <h2 className="text-lg font-bold text-red-700 mb-2">Growth and Expansion</h2>
        <p className="text-gray-700">
          Saavi Hotels is focused on expanding its presence across major cities
          in India, with plans to cater to international markets in the future.
          By combining industry expertise with modern trends, Saavi Hotels aims
          to set a new standard in the hospitality sector.
        </p>
      </div>
    </div>
  );
};

export default SaaviInfo;
