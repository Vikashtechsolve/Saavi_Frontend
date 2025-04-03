import React from "react";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-8">
        <h1 className="text-3xl font-bold text-[#8B2B06] mb-8">Privacy Policy</h1>

        {/* Privacy Policy Section */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] mb-4">1. Information We Collect</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Personal Data:</strong> We collect personal information such as your name, email, phone number, and address.</li>
              <li><strong>Usage Data:</strong> We may collect data about your interactions with our website, such as IP addresses, browser types, and pages visited.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] mb-4">2. How We Use Your Information</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Service Improvement:</strong> We use your information to enhance your experience and improve our services.</li>
              <li><strong>Communication:</strong> We may use your contact details to send you booking confirmations, updates, or promotional offers.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] mb-4">3. Data Protection</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Security Measures:</strong> We implement industry-standard security practices to protect your personal information.</li>
              <li><strong>Data Retention:</strong> Your data will be retained as long as necessary for the purposes outlined in this policy.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] mb-4">4. Your Rights</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Access:</strong> You have the right to access the personal data we hold about you.</li>
              <li><strong>Correction:</strong> You may request to correct any inaccuracies in your data.</li>
              <li><strong>Deletion:</strong> You can request the deletion of your personal data, subject to certain legal exceptions.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] mb-4">5. Third-Party Services</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Third-Party Partners:</strong> We may share your data with third-party service providers to facilitate our services, such as payment processors.</li>
              <li><strong>External Links:</strong> Our website may contain links to third-party websites, but we are not responsible for their privacy practices.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#8B2B06] mb-4">6. Updates to Privacy Policy</h3>
            <ul className="text-gray-700 space-y-4">
              <li><strong>Policy Changes:</strong> We reserve the right to update our privacy policy, and changes will be posted on this page.</li>
              <li><strong>Effective Date:</strong> The date of the most recent update will be noted at the top of this policy.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
