import React from "react";

const WhyChooseSaavi: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-8">
        <h1 className="text-3xl font-bold text-[#8B2B06] mb-8">Why Choose Saavi Hotels?</h1>

        {/* Why Choose Saavi Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] text-center mb-4">Tailored for Corporate Stays</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Designed specifically for business travelers:</strong> Ensuring comfort and convenience.</li>
              <li><strong>Features:</strong> High-speed Wi-Fi, business lounges, meeting rooms, and express check-in/check-out.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] text-center mb-4">Strategic Locations</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Prime business hubs:</strong> Conveniently located properties in key urban centers.</li>
              <li><strong>Connectivity:</strong> Easy access to transportation, making it ideal for business travelers.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] text-center mb-4">Exceptional Guest Experience</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Personalized Service:</strong> Anticipating and fulfilling the unique needs of every guest.</li>
              <li><strong>Efficient service:</strong> A dedicated team providing seamless and efficient service.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] text-center mb-4">Modern Amenities</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Elegant Rooms:</strong> Comfortable rooms equipped with state-of-the-art facilities.</li>
              <li><strong>Work & Leisure:</strong> Fitness centers, fine dining, and designed workspaces for balance.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] text-center mb-4">Commitment to Quality</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>High Standards:</strong> Focus on cleanliness, safety, and luxury.</li>
              <li><strong>Continuous Innovation:</strong> Regular updates to improve guest experiences.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] text-center mb-4">Sustainability</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Eco-Friendly Practices:</strong> Operations that minimize environmental impact.</li>
              <li><strong>Global Standards:</strong> Practices aligned with sustainability for a guilt-free stay.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] text-center mb-4">Value for Money</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Competitive Pricing:</strong> Affordable luxury without compromising comfort or service.</li>
              <li><strong>Corporate Packages:</strong> Special deals and loyalty programs for business travelers.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] text-center mb-4">Trusted Leadership</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Experienced Founder:</strong> Led by Deepak Dangi with 13+ years of expertise in hospitality.</li>
              <li><strong>Innovative Vision:</strong> Aiming to redefine corporate hospitality with excellence.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] text-center mb-4">Safety and Security</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Safety Protocols:</strong> Stringent measures for a secure stay.</li>
              <li><strong>24/7 Support:</strong> Always available for guest peace of mind.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] text-center mb-4">A Brand That Cares</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Meaningful Connections:</strong> Focusing on building relationships with guests.</li>
              <li><strong>Community Engagement:</strong> Contributing to local communities and creating a welcoming environment.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSaavi;
