import React from "react";

const LoyaltyProgramPage: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-8">
        <h1 className="text-3xl font-bold text-[#8B2B06] mb-8">Loyalty Program</h1>

        {/* Loyalty Program Section */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] mb-4">1. How It Works</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Earn Points:</strong> Members earn points with every booking and eligible purchase.</li>
              <li><strong>Redeem Points:</strong> Points can be redeemed for discounts, free nights, and exclusive perks.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] mb-4">2. Membership Tiers</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Bronze:</strong> Entry-level members receive basic rewards for every stay.</li>
              <li><strong>Silver:</strong> Silver members unlock higher discounts and priority check-ins.</li>
              <li><strong>Gold:</strong> Gold members enjoy premium perks, including free upgrades and special events.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] mb-4">3. Exclusive Offers</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Seasonal Promotions:</strong> Get access to limited-time offers and exclusive promotions.</li>
              <li><strong>Birthday Rewards:</strong> Celebrate your birthday with special rewards and discounts.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] mb-4">4. Earning and Redeeming Points</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Booking Rewards:</strong> Earn points with every booking made through the official website.</li>
              <li><strong>Partner Benefits:</strong> Earn points by using our partner services, including dining and spa services.</li>
              <li><strong>Redemption:</strong> Points can be redeemed directly on our website or at check-out for discounts.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] mb-4">5. Terms and Conditions</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Program Availability:</strong> The loyalty program is available to all registered members of Saavi Hotel.</li>
              <li><strong>Expiry:</strong> Points may expire if not used within a certain time period, as outlined in the program rules.</li>
              <li><strong>Program Changes:</strong> We reserve the right to modify the program at any time, including changes to rewards and earning rates.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyProgramPage;
