import React from "react";

const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-8">
        <h1 className="text-3xl font-bold text-[#8B2B06] mb-8">Terms and Conditions</h1>

        {/* Terms and Conditions Section */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] mb-4">1. Reservation Policy</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Booking:</strong> Reservations can be made via our official website or authorized third-party platforms.</li>
              <li><strong>Secure Booking:</strong> A valid credit card is required to confirm your reservation.</li>
              <li><strong>Cancellation:</strong> Cancellation policies may vary. Please check your reservation details for specific rules.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] mb-4">2. Check-in/Check-out Policy</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Check-in:</strong> Check-in time begins at 2:00 PM. Early check-ins may incur additional charges.</li>
              <li><strong>Check-out:</strong> Check-out time is by 12:00 PM. Late check-outs may incur additional charges.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] mb-4">3. Payment Terms</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Payment Methods:</strong> Accepted payment methods include credit/debit cards and cash.</li>
              <li><strong>Final Bill:</strong> Applicable taxes and service charges will be added to the final bill.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] mb-4">4. Guest Responsibilities</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Conduct:</strong> Guests are expected to maintain respectful behavior at all times.</li>
              <li><strong>Damage:</strong> Guests are responsible for any damage to hotel property during their stay.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] mb-4">5. Privacy and Data Protection</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Data Usage:</strong> Personal data collected will be stored and processed per applicable privacy laws.</li>
              <li><strong>Data Security:</strong> We ensure strict security measures for guest data.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] mb-4">6. Liability</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Hotel Responsibility:</strong> The hotel is not liable for loss or damage to personal property unless caused by negligence.</li>
              <li><strong>Guest Responsibility:</strong> Guests are responsible for securing their valuables during their stay.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] mb-4">7. Amendments to Terms and Conditions</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Updates:</strong> Saavi Hotel reserves the right to modify these terms at any time.</li>
              <li><strong>Notification:</strong> Changes will be published on our website and will apply to new bookings made thereafter.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
